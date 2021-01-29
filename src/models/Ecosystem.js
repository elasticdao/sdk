import { ethers } from 'ethers';
import { validateIsAddress } from '@pie-dao/utils';

import { subject } from '../observables';
import { validate } from '../utils';
import EcosystemContract from '../../artifacts/Ecosystem.json';
import ElasticModel from './ElasticModel';

const cache = {};
const prefix = '@elastic-dao/sdk - Ecosystem';

export const isEcosystem = (thing) =>
  thing && typeof thing === 'object' && thing instanceof Ecosystem;
export const validateIsEcosystem = (thing) => {
  const message = 'not an Ecosystem';
  validate(isEcosystem(thing), { message, prefix });
};

export default class Ecosystem extends ElasticModel {
  constructor(
    sdk,
    {
      balanceModelAddress,
      balanceMultipliersModelAddress,
      configuratorAddress,
      daoAddress,
      daoModelAddress,
      ecosystemModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    },
  ) {
    super(sdk);
    this.id = (daoAddress || ethers.constants.AddressZero).toLowerCase();
    cache[this.id] = {
      balanceModelAddress,
      balanceMultipliersModelAddress,
      configuratorAddress,
      daoAddress,
      daoModelAddress,
      ecosystemModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    };
    this.subject.next(this);
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: EcosystemContract.abi, address });
  }

  static async deserialize(sdk, daoAddress) {
    validateIsAddress(daoAddress, { prefix });

    const ecosystemModel = await this.contract(
      sdk,
      sdk.env.elasticDAO.ecosystemModelAddress,
    );

    const {
      balanceModelAddress,
      balanceMultipliersModelAddress,
      configuratorAddress,
      daoModelAddress,
      ecosystemModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    } = await ecosystemModel.deserialize(daoAddress);

    return new Ecosystem(sdk, {
      balanceModelAddress,
      balanceMultipliersModelAddress,
      configuratorAddress,
      daoAddress,
      daoModelAddress,
      ecosystemModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    });
  }

  // Getters

  get address() {
    return this.sdk.env.elasticDAO.ecosystemModelAddress;
  }

  get balanceModelAddress() {
    return cache[this.id].balanceModelAddress;
  }

  get balanceMultipliersModelAddress() {
    return cache[this.id].balanceMultipliersModelAddress;
  }

  get configuratorAddress() {
    return cache[this.id].configuratorAddress;
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

  get governanceTokenAddress() {
    return cache[this.id].governanceTokenAddress;
  }

  get subject() {
    return subject(`Ecosystem|${this.id}`);
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
