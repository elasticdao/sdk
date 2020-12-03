import { validateIsAddress } from '@pie-dao/utils';
import { validate } from '../utils';
import { validateIsDAO } from './DAO';
import ElasticModel from './ElasticModel';
import ElasticModuleContract from '../../artifacts/ElasticModule.json';

const cache = {};
const prefix = '@elastic-dao/sdk - ElasticModule';

export const isElasticModule = (thing) =>
  thing && typeof thing === 'object' && thing instanceof ElasticModule;
export const validateIsElasticModule = (thing) => {
  const message = 'not an ElasticModule';
  validate(isElasticModule(thing), { message, prefix });
};

export default class ElasticModule extends ElasticModel {
  constructor(sdk, { dao, ecosystem, name, uuid }) {
    super(sdk);
    this.id = `${dao.uuid}|${uuid}`.toLowerCase();
    cache[this.id] = {
      dao,
      ecosystem,
      name,
      uuid,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: ElasticModuleContract.abi, address });
  }

  static async deserialize(sdk, uuid, dao) {
    validateIsAddress(uuid, { prefix });
    validateIsDAO(dao);
    const { ecosystem } = dao;

    const elasticModuleModel = await this.contract(
      sdk,
      ecosystem.elasticModuleModelAddress,
    );

    const { name } = await elasticModuleModel.deserialize(
      uuid,
      ecosystem.toObject(false),
    );

    return new ElasticModule(sdk, {
      dao,
      ecosystem,
      name,
      uuid,
    });
  }

  static async deserializeByName(sdk, name, dao) {
    validateIsDAO(dao);
    const { ecosystem } = dao;

    const elasticModuleModel = await this.contract(
      sdk,
      ecosystem.elasticModuleModelAddress,
    );

    const { uuid } = await elasticModuleModel.deserializeByName(name, {
      ...dao.toObject(false),
      ecosystem: ecosystem.toObject(false),
    });

    return new ElasticModule(sdk, {
      dao,
      ecosystem,
      name,
      uuid,
    });
  }

  // Getters

  get address() {
    return this.ecosystem.elasticModuleModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get dao() {
    return cache[this.id].summoned;
  }

  get ecosystem() {
    return cache[this.id].ecosystem;
  }

  get name() {
    return cache[this.id].name;
  }

  get uuid() {
    return cache[this.id].uuid;
  }

  // Instance functions

  async refresh() {
    return this.constructor.deserialize(this.sdk, this.uuid, this.dao);
  }

  toObject(includeNested = true) {
    const { dao, ecosystem, id } = this;

    const obj = {
      ...cache[id],
      id,
      dao: dao.toObject(false),
      ecosystem: ecosystem.toObject(false),
    };

    if (!includeNested) {
      delete obj.dao;
      delete obj.ecosystem;
    }

    return this.sanitize(obj);
  }
}
