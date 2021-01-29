import { validateIsAddress, validateIsNumber } from '@pie-dao/utils';
import { validate } from '../utils';
import { validateIsEcosystem } from './Ecosystem';
import { validateIsToken } from './Token';
import BalanceMultipliersContract from '../../artifacts/BalanceMultipliers.json';
import ElasticModel from './ElasticModel';

const cache = {};
const prefix = '@elastic-dao/sdk - BalanceMultipliers';

export const isBalanceMultipliers = (thing) =>
  thing && typeof thing === 'object' && thing instanceof BalanceMultipliers;
export const validateIsBalanceMultipliers = (thing) => {
  const message = 'not a BalanceMultipliers';
  validate(isBalanceMultipliers(thing), { message, prefix });
};

export default class BalanceMultipliers extends ElasticModel {
  constructor(sdk, { blockNumber, index, k, m, ecosystem, token }) {
    super(sdk);
    this.id = `${token.uuid}|${blockNumber}`.toLowerCase();
    cache[this.id] = {
      blockNumber,
      index,
      k,
      m,
      ecosystem,
      token,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: BalanceMultipliersContract.abi, address });
  }

  static async deserialize(sdk, blockNumber, ecosystem, token) {
    validateIsNumber(blockNumber, { prefix });
    validateIsEcosystem(ecosystem);
    validateIsToken(token);

    const balanceMultipliersModel = await this.contract(
      sdk,
      ecosystem.balanceMultipliersModelAddress,
    );

    const { index, k, m } = await balanceMultipliersModel.deserialize(
      blockNumber,
      ecosystem.toObject(false),
      token.toObject(false),
    );

    return new BalanceMultipliers(sdk, {
      blockNumber,
      index,
      k,
      m,
      ecosystem,
      token,
    });
  }

  // Getters

  get address() {
    return this.ecosystem.balanceMultipliersModelAddress;
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

  get m() {
    return this.toBigNumber(cache[this.id].m, 18);
  }

  get ecosystem() {
    return cache[this.id].ecosystem;
  }

  get token() {
    return cache[this.id].token;
  }

  // Instance functions

  async refresh() {
    await Promise.all([this.ecosystem.refresh(), this.token.refresh()]);

    return this.constructor.deserialize(
      this.sdk,
      this.blockNumber,
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
