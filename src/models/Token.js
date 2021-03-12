import { validateIsAddress } from '@pie-dao/utils';
import { toKey, validate } from '../utils';
import BaseEvents from '../BaseEvents';
import Ecosystem, { validateIsEcosystem } from './Ecosystem';
import ElasticModel from './ElasticModel';
import TokenContract from '../../artifacts/Token.json';

const cache = {};
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
  if (cache[key]) {
    return;
  }
  const listenerSubject = await token.events.Serialized();
  listenerSubject.subscribe(token.refresh.bind(token));
  cache[key] = true;
};

export default class Token extends ElasticModel {
  constructor(
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
  ) {
    super(sdk);
    this.id = toKey(uuid);
    cache[this.id] = {
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
    this.subject.next(this);
    if (sdk.live) {
      listen(this);
    }
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: TokenContract.abi, address });
  }

  static async deserialize(sdk, uuid, ecosystem) {
    validateIsAddress(uuid, { prefix });
    validateIsEcosystem(ecosystem);

    const tokenModel = await this.contract(sdk, ecosystem.tokenModelAddress);

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
    } = await tokenModel.deserialize(uuid, ecosystem.toObject(false));

    return new Token(sdk, {
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
    });
  }

  static async exists(sdk, uuid) {
    validateIsAddress(uuid, { prefix });

    const ecosystem = await Ecosystem.deserialize(sdk, uuid);
    const tokenModel = await this.contract(sdk, ecosystem.tokenModelAddress);

    return tokenModel.exists(uuid, ecosystem.daoAddress);
  }

  // Getters

  get address() {
    return this.ecosystem.tokenModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get eByL() {
    return this.toBigNumber(cache[this.id].eByL, 18);
  }

  get ecosystem() {
    return cache[this.id].ecosystem;
  }

  get elasticity() {
    return this.toBigNumber(cache[this.id].elasticity, 18);
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
    return this.toBigNumber(cache[this.id].k, 18);
  }

  get lambda() {
    return this.toBigNumber(cache[this.id].lambda, 18);
  }

  get m() {
    return this.toBigNumber(cache[this.id].m, 18);
  }

  get maxLambdaPurchase() {
    return this.toBigNumber(cache[this.id].maxLambdaPurchase, 18);
  }

  get name() {
    return cache[this.id].name;
  }

  get numberOfTokenHolders() {
    return this.toNumber(cache[this.id].numberOfTokenHolders);
  }

  get symbol() {
    return cache[this.id].symbol;
  }

  get uuid() {
    return cache[this.id].uuid;
  }

  // Instance functions

  async refresh() {
    await this.ecosystem.refresh();
    return this.constructor.deserialize(this.sdk, this.uuid, this.ecosystem);
  }

  toObject(includeNested = true) {
    const { ecosystem, id } = this;

    const obj = {
      ...cache[id],
      id,
      ecosystem: ecosystem.toObject(false),
    };

    if (includeNested === false) {
      delete obj.ecosystem;
    }

    return this.sanitize(obj);
  }
}
