import BigNumber from 'bignumber.js';

import { upTo } from './utils';
import Base from './Base';
import ElasticDAOContract from '../artifacts/ElasticDAO.json';

const onlyAfterSummoning = 'DAO must be summoned';
const onlyBeforeSummoning = 'DAO must not be summoned';
const prefix = '@elastic-dao/sdk - ElasticDAO';
const valueGreaterThanZero = 'a value greater than 0 must be provided';

export default class ElasticDAO extends Base {
  constructor(dao) {
    super(dao.sdk);
    this.dao = dao;
  }

  static contract(sdk, address) {
    return sdk.contract({ abi: ElasticDAOContract.abi, address });
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.dao.uuid);
  }

  async getDAO() {
    return this.dao.refresh();
  }

  async getEcosystem() {
    return this.dao.ecosystem.refresh();
  }

  async initializeModule(address, name, overrides = {}) {
    this.onlyBeforeSummoning();
    const elasticDAO = await this.contract;
    await elasticDAO.initializeModule(
      address,
      name,
      this.sanitizeOverrides(overrides),
    );
    return true;
  }

  async join(deltaLambda, overrides = {}) {
    this.onlyAfterSummoning();
    const elasticDAO = await this.contract;
    await elasticDAO.join(
      this.toEthersBigNumber(deltaLambda, 18),
      this.sanitizeOverrides(overrides),
    );
    return true;
  }

  onlyAfterSummoning() {
    if (!this.dao.summoned) {
      throw new Error(`${prefix}: ${onlyAfterSummoning}`);
    }
  }

  onlyBeforeSummoning() {
    if (this.dao.summoned) {
      throw new Error(`${prefix}: ${onlyBeforeSummoning}`);
    }
  }

  async seedSummoning(overrides = {}) {
    this.onlyBeforeSummoning();
    const elasticDAO = await this.contract;
    if (overrides.value && BigNumber(overrides.value).isGreaterThan(0)) {
      return elasticDAO.seedSummoning(this.sanitizeOverrides(overrides));
    }
    throw new Error(`${prefix}: ${valueGreaterThanZero}`);
  }

  async summon(deltaLambda, overrides = {}) {
    this.onlyBeforeSummoning();
    const elasticDAO = await this.contract;
    return elasticDAO.summon(
      this.toEthersBigNumber(deltaLambda, 18),
      this.sanitizeOverrides(overrides),
    );
  }

  async summoners() {
    const elasticDAO = await this.contract;

    console.log('summoners', this.dao, this.dao.numberOfSummoners);
    return Promise.all(
      upTo(this.dao.numberOfSummoners).map((i) => elasticDAO.summoners(i)),
    );
  }
}
