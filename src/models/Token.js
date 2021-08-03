import { validateIsAddress } from '@pie-dao/utils';
import { sanitizeOverrides, toKey, validate } from '../utils';
import BaseEvents from '../BaseEvents';
import Ecosystem, { validateIsEcosystem } from './Ecosystem';
import ElasticModel from './ElasticModel';
import TokenContract from '../../artifacts/Token.json';

const prefix = '@elastic-dao/sdk - Token';

export const isToken = (thing) =>
  thing && typeof thing === 'object' && thing instanceof Token;
export const validateIsToken = (thing) => {
  const message = 'not a Token';
  validate(isToken(thing), { message, prefix });
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

export default class Token extends ElasticModel {
  constructor(sdk, attributes, keyAddition = '') {
    super(sdk);

    const { uuid } = attributes;
    this._id = toKey(uuid, keyAddition);

    let cached = this.cache.get(this.id);

    if (Object.keys(attributes).length > 1) {
      const {
        eByL,
        ecosystem,
        elasticity,
        k,
        lambda,
        m,
        maxLambdaPurchase,
        name,
        numberOfTokenHolders,
        symbol,
        ttl,
      } = attributes;

      cached = {
        ttl: ttl || this.sdk.blockNumber + 120, // expire the cache in 120 blocks
        eByL,
        ecosystem,
        elasticity,
        k,
        lambda,
        m,
        maxLambdaPurchase,
        name,
        numberOfTokenHolders,
        symbol,
        uuid,
      };

      this.cache.set(this.id, cached);
    }

    if (cached) {
      this._loaded = true;
    }

    if (this.loaded) {
      this.sdk.integrations.coinGecko.addContractAddress(this.uuid);

      if (cached.ecosystem.constructor !== Ecosystem) {
        cached.ecosystem = Ecosystem.fromCache(this.sdk, cached.ecosystem);
        this.cache.set(this.id, cached);
      }

      if (keyAddition === '' && cached.ttl < this.sdk.blockNumber) {
        this.refresh();
      }

      this.touch();

      if (sdk.live && `${keyAddition}`.length === 0) {
        const key = toKey(this.id, 'SerializedListener');

        if (this.cache.get(key)) {
          return;
        }

        this.cache.set(key, true, { persist: false });

        this.events.Serialized().then(
          (listenerSubject) => {
            listenerSubject.subscribe(this.refresh.bind(this));
          },
          () => {
            this.cache.set(key, false, { persist: false });
          },
        );
      }
    }
  }

  // Class functions

  static contract(sdk, address, readonly = false) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: TokenContract.abi, address, readonly });
  }

  static async deserialize(sdk, uuid, ecosystem, overrides = {}) {
    validateIsAddress(uuid, { prefix });
    validateIsEcosystem(ecosystem);

    const tokenModel = await this.contract(
      sdk,
      ecosystem.tokenModelAddress,
      true,
    );

    const {
      eByL,
      elasticity,
      k,
      lambda,
      m,
      maxLambdaPurchase,
      name,
      numberOfTokenHolders,
      symbol,
    } = await tokenModel.deserialize(
      uuid,
      ecosystem.toObject(false),
      sanitizeOverrides(overrides, true),
    );

    return new Token(
      sdk,
      {
        eByL,
        ecosystem,
        elasticity,
        k,
        lambda,
        m,
        maxLambdaPurchase,
        name,
        numberOfTokenHolders,
        symbol,
        uuid,
      },
      overrides.blockTag,
    );
  }

  static async exists(sdk, uuid, daoAddress, overrides = {}) {
    validateIsAddress(uuid, { prefix });
    validateIsAddress(daoAddress, { prefix });

    const ecosystem = await Ecosystem.deserialize(sdk, daoAddress, overrides);
    const tokenModel = await this.contract(
      sdk,
      ecosystem.tokenModelAddress,
      true,
    );

    return tokenModel.exists(
      uuid,
      daoAddress,
      sanitizeOverrides(overrides, true),
    );
  }

  static fromCache(sdk, cached) {
    const idParts = cached.id.split('|');
    return new Token(sdk, cached, idParts[1]);
  }

  // Getters

  get address() {
    return this.ecosystem.tokenModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get eByL() {
    return this.toBigNumber(this.cache.get(this.id).eByL, 18);
  }

  get ecosystem() {
    return this.cache.get(this.id).ecosystem;
  }

  get elasticity() {
    return this.toBigNumber(this.cache.get(this.id).elasticity, 18);
  }

  get events() {
    const key = toKey(this.id, 'Events');
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    this.cache.set(key, new Events(this), { persist: false });
    return this.cache.get(key);
  }

  get k() {
    return this.toBigNumber(this.cache.get(this.id).k, 18);
  }

  get lambda() {
    return this.toBigNumber(this.cache.get(this.id).lambda, 18);
  }

  get m() {
    return this.toBigNumber(this.cache.get(this.id).m, 18);
  }

  get maxLambdaPurchase() {
    return this.toBigNumber(this.cache.get(this.id).maxLambdaPurchase, 18);
  }

  get name() {
    return this.cache.get(this.id).name;
  }

  get numberOfTokenHolders() {
    return this.toNumber(this.cache.get(this.id).numberOfTokenHolders);
  }

  get readonlyContract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get symbol() {
    return this.cache.get(this.id).symbol;
  }

  get uuid() {
    return this.cache.get(this.id).uuid;
  }

  // Instance functions

  async refresh() {
    await this.ecosystem.refresh();
    return this.constructor.deserialize(this.sdk, this.uuid, this.ecosystem);
  }

  toObject(includeNested = true) {
    const { ecosystem, id } = this;

    const obj = {
      ...this.cache.get(id),
      id,
      ecosystem: ecosystem.toObject(false),
    };

    if (includeNested === false) {
      delete obj.ecosystem;
    }

    return this.sanitize(obj);
  }
}
