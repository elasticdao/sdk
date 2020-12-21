import { validateIsAddress, validateIsNumber } from '@pie-dao/utils';
import { validate } from '../utils';
import { validateIsEcosystem } from './Ecosystem';
import { validateIsToken } from './Token';
import { validateIsTokenHolder } from './TokenHolder';
import BalanceContract from '../../artifacts/Balance.json';
import ElasticModel from './ElasticModel';

const cache = {};
const prefix = '@elastic-dao/sdk - models/Balance';

export const isBalance = (thing) =>
  thing && typeof thing === 'object' && thing instanceof Balance;
export const validateIsBalance = (thing) => {
  const message = 'not a Balance';
  validate(isBalance(thing), { message, prefix });
};

export default class Balance extends ElasticModel {
  constructor(
    sdk,
    { blockNumber, index, k, lambda, m, ecosystem, token, tokenHolder },
  ) {
    super(sdk);
    this.id = `${token.uuid}|${tokenHolder.account}|${blockNumber}`.toLowerCase();
    cache[this.id] = {
      blockNumber,
      index,
      k,
      lambda,
      m,
      ecosystem,
      token,
      tokenHolder,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: BalanceContract.abi, address });
  }

  static async deserialize(sdk, blockNumber, ecosystem, token, tokenHolder) {
    validateIsNumber(blockNumber, { prefix });
    validateIsEcosystem(ecosystem);
    console.log(token);
    validateIsToken(token);
    validateIsTokenHolder(tokenHolder);

    const balanceModel = await this.contract(
      sdk,
      ecosystem.balanceModelAddress,
    );

    const ecosystemObject = ecosystem.toObject(false);
    const tokenObject = token.toObject(false);
    const tokenHolderObject = tokenHolder.toObject(false);
    const tokenPayload = { ...tokenObject, ecosystem: ecosystemObject };
    const { index, k, lambda, m } = await balanceModel.deserialize(
      blockNumber,
      ecosystemObject,
      tokenPayload,
      { ...tokenHolderObject, ecosystem: ecosystemObject, token: tokenPayload },
    );

    return new Balance(sdk, {
      blockNumber,
      index,
      k,
      lambda,
      m,
      ecosystem,
      token,
      tokenHolder,
    });
  }

  // Getters

  get address() {
    return this.ecosystem.balanceModelAddress;
  }

  get blockNumber() {
    return this.toNumber(cache[this.id].blockNumber);
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get index() {
    return this.toNumber(cache[this.id].index);
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

  get ecosystem() {
    return cache[this.id].ecosystem;
  }

  get token() {
    return cache[this.id].token;
  }

  get tokenHolder() {
    return cache[this.id].tokenHolder;
  }

  // Instance functions

  async refresh() {
    return this.constructor.deserialize(
      this.sdk,
      this.blockNumber,
      this.ecosystem,
      this.token,
      this.tokenHolder,
    );
  }

  toObject(includeNested = true) {
    const { ecosystem, id, token, tokenHolder } = this;

    const obj = {
      ...cache[id],
      id,
      ecosystem: ecosystem.toObject(false),
      token: token.toObject(false),
      tokenHolder: tokenHolder.toObject(false),
    };

    if (includeNested === false) {
      delete obj.ecosystem;
      delete obj.token;
      delete obj.tokenHolder;
    }

    return this.sanitize(obj);
  }
}
