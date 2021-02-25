import { ethers } from 'ethers';
import { validateIsAddress } from '@pie-dao/utils';

import { validate } from '../utils';
import EcosystemContract from '../../artifacts/Ecosystem.json';
import ElasticDAO from '../ElasticDAO';
import ElasticModel from './ElasticModel';

const cache = {};
const prefix = '@elastic-dao/sdk - Ecosystem';

export const isEcosystem = (thing) =>
  thing && typeof thing === 'object' && thing instanceof Ecosystem;
export const validateIsEcosystem = (thing) => {
  const message = 'not an Ecosystem';
  validate(isEcosystem(thing), { message, prefix });
};

const listen = async (ecosystem) => {
  if (cache[`${ecosystem.id}SerializeListener`]) {
    return;
  }
  const contract = await ecosystem.contract;
  const serializeEvent = contract.filters.Serialized(ecosystem.uuid);
  contract.on(serializeEvent, ecosystem.refresh.bind(ecosystem));
  cache[`${ecosystem.id}SerializeListener`] = true;
};

export default class Ecosystem extends ElasticModel {
  constructor(
    sdk,
    {
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
      configuratorAddress,
      daoAddress,
      daoModelAddress,
      ecosystemModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    };
    this.subject.next(this);
    if (sdk.live) {
      listen(this);
    }
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: EcosystemContract.abi, address });
  }

  static async deserialize(sdk, daoAddress) {
    validateIsAddress(daoAddress, { prefix });

    const ecosystemModelAddress = await (
      await ElasticDAO.contract(sdk, daoAddress)
    ).ecosystemModelAddress();
    const ecosystemModel = await this.contract(sdk, ecosystemModelAddress);

    const {
      configuratorAddress,
      daoModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    } = await ecosystemModel.deserialize(daoAddress);

    return new Ecosystem(sdk, {
      configuratorAddress,
      daoAddress,
      daoModelAddress,
      ecosystemModelAddress,
      governanceTokenAddress,
      tokenHolderModelAddress,
      tokenModelAddress,
    });
  }

  static async exists(sdk, daoAddress) {
    validateIsAddress(daoAddress, { prefix });

    const ecosystemModel = await this.contract(
      sdk,
      sdk.env.elasticDAO.ecosystemModelAddress,
    );

    return ecosystemModel.exists(daoAddress);
  }

  // Getters

  get address() {
    return cache[this.id].ecosystemModelAddress;
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
