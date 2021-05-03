import { ethers } from 'ethers';
import { validateIsAddress } from '@pie-dao/utils';
import { sanitizeOverrides, toKey, validate } from '../utils';
import EcosystemContract from '../../artifacts/Ecosystem.json';
import ElasticDAO from '../core/ElasticDAO';
import ElasticModel from './ElasticModel';
import BaseEvents from '../BaseEvents';

const cache = {};
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
  if (cache[key]) {
    return;
  }
  const listenerSubject = await ecosystem.events.Serialized();
  listenerSubject.subscribe(ecosystem.refresh.bind(ecosystem));
  cache[key] = true;
};

export default class Ecosystem extends ElasticModel {
  constructor(
    sdk,
    {
      daoAddress,
      daoModelAddress,
      ecosystemModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    },
    keyAddition = '',
  ) {
    super(sdk);
    this.id = toKey(daoAddress || ethers.constants.AddressZero, keyAddition);
    cache[this.id] = {
      daoAddress,
      daoModelAddress,
      ecosystemModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    };
    this.touch();
    if (sdk.live && `${keyAddition}`.length === 0) {
      listen(this);
    }
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: EcosystemContract.abi, address });
  }

  static async deserialize(sdk, daoAddress, overrides = {}) {
    validateIsAddress(daoAddress, { prefix });

    const ecosystemModelAddress = await (
      await ElasticDAO.contract(sdk, daoAddress)
    ).ecosystemModelAddress();
    const ecosystemModel = await this.contract(sdk, ecosystemModelAddress);

    const {
      daoModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    } = await ecosystemModel.deserialize(
      daoAddress,
      sanitizeOverrides(overrides, true),
    );

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
    );

    return ecosystemModel.exists(
      daoAddress,
      sanitizeOverrides(overrides, true),
    );
  }

  // Getters

  get address() {
    return cache[this.id].ecosystemModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get daoAddress() {
    return cache[this.id].daoAddress;
  }

  get daoModelAddress() {
    return cache[this.id].daoModelAddress;
  }

  get ecosystemModelAddress() {
    return cache[this.id].ecosystemModelAddress;
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
    return cache[this.id].governanceTokenAddress;
  }

  get tokenHolderModelAddress() {
    return cache[this.id].tokenHolderModelAddress;
  }

  get tokenModelAddress() {
    return cache[this.id].tokenModelAddress;
  }

  // Instance functions

  async refresh() {
    return this.constructor.deserialize(this.sdk, this.daoAddress);
  }

  toObject() {
    const { id } = this;

    return this.sanitize({
      ...cache[id],
      id,
    });
  }
}
