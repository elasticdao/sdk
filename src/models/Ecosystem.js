import { ethers } from 'ethers';
import { validateIsAddress } from '@pie-dao/utils';
import { sanitizeOverrides, toKey, validate } from '../utils';
import Cache from '../Cache';
import EcosystemContract from '../../artifacts/Ecosystem.json';
import ElasticDAO from '../core/ElasticDAO';
import ElasticModel from './ElasticModel';
import BaseEvents from '../BaseEvents';

const cache = new Cache('Ecosystem.js');
const prefix = '@elastic-dao/sdk - Ecosystem';

export const isEcosystem = (thing) =>
  thing && typeof thing === 'object' && thing instanceof Ecosystem;
export const validateIsEcosystem = (thing) => {
  const message = 'not an Ecosystem';
  validate(isEcosystem(thing), { message, prefix });
};

class Events extends BaseEvents {
  async Serialized() {
    return this.observeEvent({
      eventName: 'Serialized',
      filterArgs: [this.target.uuid],
      keyBase: this.target.id,
      subjectBase: this.target.key,
    });
  }
}

const listen = async (ecosystem) => {
  const key = toKey(ecosystem.id, 'SerializedListener');

  if (cache.get(key)) {
    return;
  }

  try {
    cache.set(key, true, { persist: false });
    const listenerSubject = await ecosystem.events.Serialized();
    listenerSubject.subscribe(ecosystem.refresh.bind(ecosystem));
  } catch (e) {
    cache.set(key, false, { persist: false });
  }
};

export default class Ecosystem extends ElasticModel {
  constructor(sdk, attributes, keyAddition = '') {
    super(sdk);

    const { daoAddress } = attributes;

    this._id = toKey(daoAddress || ethers.constants.AddressZero, keyAddition);

    let cached = cache.get(this.id);

    if (Object.keys(attributes).length > 1) {
      const {
        daoModelAddress,
        ecosystemModelAddress,
        governanceTokenAddress,
        tokenHolderModelAddress,
        tokenModelAddress,
        ttl,
      } = attributes;

      cached = {
        ttl: ttl || this.sdk.blockNumber + 120, // expire the cache in 120 blocks
        daoAddress,
        daoModelAddress,
        ecosystemModelAddress,
        governanceTokenAddress,
        tokenHolderModelAddress,
        tokenModelAddress,
      };

      cache.set(this.id, cached);
    }

    if (cached) {
      this._loaded = true;
    }

    if (this.loaded) {
      this.sdk.integrations.coinGecko.addContractAddress(
        this.governanceTokenAddress,
      );

      if (keyAddition === '' && cached.ttl < this.sdk.blockNumber) {
        this.refresh();
      }

      this.touch();

      if (this.sdk.live && `${keyAddition}`.length === 0) {
        listen(this);
      }
    }
  }

  // Class functions

  static contract(sdk, address, readonly = false) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: EcosystemContract.abi, address, readonly });
  }

  static async deserialize(sdk, daoAddress, overrides = {}) {
    validateIsAddress(daoAddress, { prefix });

    const saneOverrides = sanitizeOverrides(overrides, true);

    const ecosystemModelAddress = await (
      await ElasticDAO.contract(sdk, daoAddress, true)
    ).ecosystemModelAddress(saneOverrides);
    const ecosystemModel = await this.contract(
      sdk,
      ecosystemModelAddress,
      true,
    );

    const {
      daoModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    } = await ecosystemModel.deserialize(daoAddress, saneOverrides);

    return new Ecosystem(
      sdk,
      {
        daoAddress,
        daoModelAddress,
        ecosystemModelAddress,
        governanceTokenAddress,
        tokenHolderModelAddress,
        tokenModelAddress,
      },
      overrides.blockTag,
    );
  }

  static async exists(sdk, daoAddress, overrides = {}) {
    validateIsAddress(daoAddress, { prefix });

    const ecosystemModel = await this.contract(
      sdk,
      sdk.env.elasticDAO.ecosystemModelAddress,
      true,
    );

    return ecosystemModel.exists(
      daoAddress,
      sanitizeOverrides(overrides, true),
    );
  }

  static fromCache(sdk, cached) {
    const idParts = cached.id.split('|');
    return new Ecosystem(sdk, cached, idParts[1]);
  }

  // Getters

  get address() {
    return cache.get(this.id).ecosystemModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get daoAddress() {
    return cache.get(this.id).daoAddress;
  }

  get daoModelAddress() {
    return cache.get(this.id).daoModelAddress;
  }

  get ecosystemModelAddress() {
    return cache.get(this.id).ecosystemModelAddress;
  }

  get events() {
    const key = toKey(this.id, 'Events');
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = new Events(this);
    return cache[key];
  }

  get governanceTokenAddress() {
    return cache.get(this.id).governanceTokenAddress;
  }

  get readonlyContract() {
    return this.constructor.contract(this.sdk, this.address, true);
  }

  get tokenHolderModelAddress() {
    return cache.get(this.id).tokenHolderModelAddress;
  }

  get tokenModelAddress() {
    return cache.get(this.id).tokenModelAddress;
  }

  // Instance functions

  async refresh() {
    return this.constructor.deserialize(this.sdk, this.daoAddress);
  }

  toObject() {
    const { id } = this;

    return this.sanitize({
      ...cache.get(id),
      id,
    });
  }
}
