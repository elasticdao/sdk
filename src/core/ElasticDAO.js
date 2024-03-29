/* eslint no-await-in-loop: 0 */
import { isAddress } from '@pie-dao/utils';
import BigNumber from 'bignumber.js';

import { sanitizeOverrides, toKey, upTo } from '../utils';
import BaseEvents from '../BaseEvents';
import QueryFilterable from '../QueryFilterable';
import ElasticDAOContract from '../../artifacts/ElasticDAO.json';

const onlyAfterSummoning = 'DAO must be summoned';
const onlyBeforeSummoning = 'DAO must not be summoned';
const prefix = '@elastic-dao/sdk - ElasticDAO';
const valueGreaterThanZero = 'a value greater than 0 must be provided';

class Events extends BaseEvents {
  get keyBase() {
    return toKey('ElasticDAO', this.target.dao.uuid);
  }

  get subjectBase() {
    return toKey('ElasticDAO', this.target.dao.uuid, 'Subject');
  }

  async ControllerChanged() {
    const { keyBase, subjectBase } = this;
    return this.observeEvent({
      keyBase,
      subjectBase,
      eventName: 'ControllerChanged',
    });
  }

  async ElasticGovernanceTokenDeployed() {
    const { keyBase, subjectBase } = this;
    return this.observeEvent({
      keyBase,
      subjectBase,
      eventName: 'ElasticGovernanceTokenDeployed',
    });
  }

  async ExitDAO() {
    const { keyBase, subjectBase } = this;
    return this.observeEvent({
      keyBase,
      subjectBase,
      eventName: 'ExitDAO',
    });
  }

  async JoinDAO() {
    const { keyBase, subjectBase } = this;
    return this.observeEvent({
      keyBase,
      subjectBase,
      eventName: 'JoinDAO',
    });
  }

  async MaxVotingLambdaChanged() {
    const { keyBase, subjectBase } = this;
    return this.observeEvent({
      keyBase,
      subjectBase,
      eventName: 'MaxVotingLambdaChanged',
    });
  }

  async SeedDAO() {
    const { keyBase, subjectBase } = this;
    return this.observeEvent({
      keyBase,
      subjectBase,
      eventName: 'SeedDAO',
    });
  }

  async SummonedDAO() {
    const { keyBase, subjectBase } = this;
    return this.observeEvent({
      keyBase,
      subjectBase,
      eventName: 'SummonedDAO',
    });
  }
}

export default class ElasticDAO extends QueryFilterable {
  constructor(dao) {
    super(dao.sdk, { persist: false });
    this.dao = dao;
  }

  static contract(sdk, address, readonly = false) {
    return sdk.contract({ abi: ElasticDAOContract.abi, address, readonly });
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.dao.uuid);
  }

  get events() {
    const key = toKey(this.dao.uuid, 'Events');
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    this.cache.set(key, new Events(this), { persist: false });
    return this.cache.get(key);
  }

  get id() {
    return this.dao.uuid;
  }

  get readonlyContract() {
    return this.constructor.contract(this.sdk, this.dao.uuid, true);
  }

  async exit(deltaLambda, overrides = {}) {
    this.onlyAfterSummoning();
    const elasticDAO = await this.contract;

    return this._handleTransaction(
      await elasticDAO.exit(
        this.toEthersBigNumber(deltaLambda, 18),
        this.sanitizeOverrides(overrides),
      ),
    );
  }

  async getController() {
    const elasticDAO = await this.contract;

    return elasticDAO.controller();
  }

  async getDAO() {
    return this.dao.refresh();
  }

  async getEcosystem() {
    return this.dao.ecosystem.refresh();
  }

  async join(overrides = {}) {
    this.onlyAfterSummoning();
    const elasticDAO = await this.contract;

    return this._handleTransaction(
      await elasticDAO.join(this.sanitizeOverrides(overrides)),
    );
  }

  async liquidityPools(overrides = {}) {
    const pools = [];
    const saneOverrides = sanitizeOverrides(overrides, true);
    let i = 0;
    let pool = `${await this.readonlyContract.liquidityPools(
      i,
      saneOverrides,
    )}`.toLowerCase();
    try {
      while (isAddress(pool)) {
        pools.push(pool);
        i += 1;
        pool = `${await this.readonlyContract.liquidityPools(
          i,
          saneOverrides,
        )}`.toLowerCase();
      }
    } catch (e) {
      // nothing to do
    }
    return pools;
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
      return this._handleTransaction(
        await elasticDAO.seedSummoning(this.sanitizeOverrides(overrides)),
      );
    }

    throw new Error(`${prefix}: ${valueGreaterThanZero}`);
  }

  async summon(deltaLambda, overrides = {}) {
    this.onlyBeforeSummoning();
    const elasticDAO = await this.contract;

    return this._handleTransaction(
      await elasticDAO.summon(
        this.toEthersBigNumber(deltaLambda, 18),
        this.sanitizeOverrides(overrides),
      ),
    );
  }

  async summoners(overrides = {}) {
    const elasticDAO = await this.readonlyContract;
    return Promise.all(
      upTo(this.dao.numberOfSummoners).map((i) =>
        elasticDAO.summoners(i, sanitizeOverrides(overrides, true)),
      ),
    );
  }

  async _handleTransaction(tx) {
    this.sdk.notify(tx);
    await tx.wait(1);
    return this.getDAO();
  }
}
