import { validateIsAddress } from '@pie-dao/utils';
import { sanitizeOverrides, toKey, validate } from '../utils';
import BaseEvents from '../BaseEvents';
import Ecosystem, { validateIsEcosystem } from './Ecosystem';
import ElasticModel from './ElasticModel';
import Token, { validateIsToken } from './Token';
import TokenHolderContract from '../../artifacts/TokenHolder.json';

const prefix = '@elastic-dao/sdk - TokenHolder';

export const isTokenHolder = (thing) =>
  thing && typeof thing === 'object' && thing instanceof TokenHolder;
export const validateIsTokenHolder = (thing) => {
  const message = 'not a TokenHolder';
  validate(isTokenHolder(thing), { message, prefix });
};

class Events extends BaseEvents {
  async Serialized() {
    return this.observeEvent({
      eventName: 'Serialized',
      filterArgs: [this.target.account, this.target.token.uuid],
      keyBase: this.target.id,
      subjectBase: this.target.key,
    });
  }
}

export default class TokenHolder extends ElasticModel {
  constructor(sdk, attributes, keyAddition = '') {
    super(sdk);

    const { account, token } = attributes;
    this._id = toKey(token.uuid, account, keyAddition);

    let cached = this.cache.get(this.id);

    if (Object.keys(attributes).length > 2) {
      const { ecosystem, lambda, ttl } = attributes;

      cached = {
        ttl: ttl || this.sdk.blockNumber + 120, // expire the cache in 120 blocks
        account,
        ecosystem,
        lambda,
        token,
      };

      this.cache.set(this.id, cached);
    }

    if (cached) {
      this._loaded = true;
    }

    if (this.loaded) {
      if (cached.ecosystem.constructor !== Ecosystem) {
        cached.ecosystem = Ecosystem.fromCache(this.sdk, cached.ecosystem);
        this.cache.set(this.id, cached);
      }

      if (cached.token.constructor !== Token) {
        cached.token = Token.fromCache(this.sdk, cached.token);
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
    return sdk.contract({ abi: TokenHolderContract.abi, address, readonly });
  }

  static async deserialize(sdk, uuid, ecosystem, token, overrides = {}) {
    validateIsAddress(uuid, { prefix });
    validateIsEcosystem(ecosystem);
    validateIsToken(token);

    const tokenHolderModel = await this.contract(
      sdk,
      ecosystem.tokenHolderModelAddress,
      true,
    );

    const ecosystemObject = ecosystem.toObject(false);

    const { account, lambda } = await tokenHolderModel.deserialize(
      uuid,
      ecosystemObject,
      {
        ...token.toObject(false),
        ecosystem: ecosystemObject,
      },
      sanitizeOverrides(overrides, true),
    );

    return new TokenHolder(
      sdk,
      {
        account,
        ecosystem,
        lambda,
        token,
      },
      overrides.blockTag,
    );
  }

  static async exists(sdk, account, token, overrides = {}) {
    validateIsAddress(account, { prefix });
    validateIsToken(token);

    const tokenHolderModel = await this.contract(
      sdk,
      token.ecosystem.tokenHolderModelAddress,
      true,
    );

    return tokenHolderModel.exists(
      account,
      token.toObject(),
      sanitizeOverrides(overrides, true),
    );
  }

  // Getters

  get account() {
    return this.cache.get(this.id).account;
  }

  get address() {
    return this.ecosystem.tokenHolderModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get ecosystem() {
    return this.cache.get(this.id).ecosystem;
  }

  get events() {
    const key = toKey(this.id, 'Events');
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    this.cache.set(key, new Events(this), { persist: false });
    return this.cache.get(key);
  }

  get lambda() {
    return this.toBigNumber(this.cache.get(this.id).lambda, 18);
  }

  get readonlyContract() {
    return this.constructor.contract(this.sdk, this.address, true);
  }

  get token() {
    return this.cache.get(this.id).token;
  }

  // Instance functions

  async refresh() {
    await Promise.all([this.ecosystem.refresh(), this.token.refresh()]);

    return this.constructor.deserialize(
      this.sdk,
      this.account,
      this.ecosystem,
      this.token,
    );
  }

  toObject(includeNested = true) {
    const { ecosystem, id, token } = this;

    const obj = {
      ...this.cache.get(id),
      id,
      ecosystem: ecosystem.toObject(false),
      token: token.toObject(false),
    };

    if (includeNested === false) {
      delete obj.ecosystem;
      delete obj.token;
    }

    return this.sanitize(obj);
  }
}
