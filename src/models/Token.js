import { validateIsAddress } from '@pie-dao/utils';
import { subject } from '../observables';
import { validate } from '../utils';
import { validateIsEcosystem } from './Ecosystem';
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

export default class Token extends ElasticModel {
  constructor(
    sdk,
    {
      counter,
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
    this.id = uuid.toLowerCase();
    cache[this.id] = {
      counter,
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
      counter,
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
      counter,
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

  // Getters

  get address() {
    return this.ecosystem.tokenModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get counter() {
    return this.toNumber(cache[this.id].counter);
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

  get subject() {
    return subject(`Token|${this.id}`);
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
