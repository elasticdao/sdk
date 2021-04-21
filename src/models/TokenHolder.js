import { validateIsAddress } from '@pie-dao/utils';
import { sanitizeOverrides, toKey, validate } from '../utils';
import { validateIsEcosystem } from './Ecosystem';
import { validateIsToken } from './Token';
import BaseEvents from '../BaseEvents';
import ElasticModel from './ElasticModel';
import TokenHolderContract from '../../artifacts/TokenHolder.json';

const cache = {};
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

const listen = async (tokenHolder) => {
  const key = toKey(tokenHolder.id, 'SerializedListener');
  if (cache[key]) {
    return;
  }
  const listenerSubject = await tokenHolder.events.Serialized();
  listenerSubject.subscribe(tokenHolder.refresh.bind(tokenHolder));
  cache[key] = true;
};

export default class TokenHolder extends ElasticModel {
  constructor(sdk, { account, ecosystem, lambda, token }) {
    super(sdk);
    this.id = toKey(token.uuid, account);
    cache[this.id] = {
      account,
      ecosystem,
      lambda,
      token,
    };
    this.subject.next(this);
    if (sdk.live) {
      listen(this);
    }
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: TokenHolderContract.abi, address });
  }

  static async deserialize(sdk, uuid, ecosystem, token, overrides = {}) {
    validateIsAddress(uuid, { prefix });
    validateIsEcosystem(ecosystem);
    validateIsToken(token);

    const tokenHolderModel = await this.contract(
      sdk,
      ecosystem.tokenHolderModelAddress,
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

    return new TokenHolder(sdk, {
      account,
      ecosystem,
      lambda,
      token,
    });
  }

  static async exists(sdk, account, token, overrides = {}) {
    validateIsAddress(account, { prefix });
    validateIsToken(token);

    const tokenHolderModel = await this.contract(
      sdk,
      token.ecosystem.tokenHolderModelAddress,
    );

    return tokenHolderModel.exists(
      account,
      token.toObject(),
      sanitizeOverrides(overrides, true),
    );
  }

  // Getters

  get account() {
    return cache[this.id].account;
  }

  get address() {
    return this.ecosystem.tokenHolderModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get ecosystem() {
    return cache[this.id].ecosystem;
  }

  get events() {
    const key = toKey(this.id, 'Events');
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = new Events(this);
    return cache[key];
  }

  get lambda() {
    return this.toBigNumber(cache[this.id].lambda, 18);
  }

  get token() {
    return cache[this.id].token;
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
      ...cache[id],
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
