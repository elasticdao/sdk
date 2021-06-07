import { validateIsAddress } from '@pie-dao/utils';
import { sanitizeOverrides, toKey, validate } from '../utils';
import BaseEvents from '../BaseEvents';
import Cache from '../Cache';
import Ecosystem, { validateIsEcosystem } from './Ecosystem';
import ElasticModel from './ElasticModel';
import TokenContract from '../../artifacts/Token.json';

const cache = new Cache('Token.js');
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

const listen = async (token) => {
  const key = toKey(token.id, 'SerializedListener');

  if (cache.get(key)) {
    return;
  }

  try {
    cache.set(key, true, { persist: false });
    const listenerSubject = await token.events.Serialized();
    listenerSubject.subscribe(token.refresh.bind(token));
  } catch (e) {
    cache.set(key, false, { persist: false });
  }
};

export default class Token extends ElasticModel {
  constructor(sdk, attributes, keyAddition = '') {
    super(sdk);

    const { uuid } = attributes;
    this._id = toKey(uuid, keyAddition);

    let cached = cache.get(this.id);

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

      cache.set(this.id, cached);
    }

    if (cached) {
      this._loaded = true;
    }

    if (this.loaded) {
      if (cached.ecosystem.constructor !== Ecosystem) {
        cached.ecosystem = Ecosystem.fromCache(this.sdk, cached.ecosystem);
        cache.set(this.id, cached);
      }
    
      if (keyAddition === '' && cached.ttl < this.sdk.blockNumber) {
        this.refresh();
      }

      this.touch();

      if (sdk.live && `${keyAddition}`.length === 0) {
        listen(this);
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

  // Getters

  get address() {
    return this.ecosystem.tokenModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get eByL() {
    return this.toBigNumber(cache.get(this.id).eByL, 18);
  }

  get ecosystem() {
    return cache.get(this.id).ecosystem;
  }

  get elasticity() {
    return this.toBigNumber(cache.get(this.id).elasticity, 18);
  }

  get events() {
    const key = toKey(this.id, 'Events');
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = new Events(this);
    return cache[key];
  }

  get k() {
    return this.toBigNumber(cache.get(this.id).k, 18);
  }

  get lambda() {
    return this.toBigNumber(cache.get(this.id).lambda, 18);
  }

  get m() {
    return this.toBigNumber(cache.get(this.id).m, 18);
  }

  get maxLambdaPurchase() {
    return this.toBigNumber(cache.get(this.id).maxLambdaPurchase, 18);
  }

  get name() {
    return cache.get(this.id).name;
  }

  get numberOfTokenHolders() {
    return this.toNumber(cache.get(this.id).numberOfTokenHolders);
  }

  get readonlyContract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get symbol() {
    return cache.get(this.id).symbol;
  }

  get uuid() {
    return cache.get(this.id).uuid;
  }

  // Instance functions

  static fromCache(sdk, cached) {
    const idParts = cached.id.split('|');
    return new Token(sdk, cached, idParts[1]);
  }

  async refresh() {
    await this.ecosystem.refresh();
    return this.constructor.deserialize(this.sdk, this.uuid, this.ecosystem);
  }

  toObject(includeNested = true) {
    const { ecosystem, id } = this;

    const obj = {
      ...cache.get(id),
      id,
      ecosystem: ecosystem.toObject(false),
    };

    if (includeNested === false) {
      delete obj.ecosystem;
    }

    return this.sanitize(obj);
  }
}
