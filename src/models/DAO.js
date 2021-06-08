import { validateIsAddress } from '@pie-dao/utils';
import { sanitizeOverrides, toKey, validate } from '../utils';
import BaseEvents from '../BaseEvents';
import Cache from '../Cache';
import DAOContract from '../../artifacts/DAO.json';
import Ecosystem from './Ecosystem';
import ElasticDAO from '../core/ElasticDAO';
import ElasticModel from './ElasticModel';
import Token from './Token';
import ElasticGovernanceToken from '../tokens/ElasticGovernanceToken';

const cache = new Cache('DAO.js');
const prefix = '@elastic-dao/sdk - DAO';

export const isDAO = (thing) =>
  thing && typeof thing === 'object' && thing instanceof DAO;
export const validateIsDAO = (thing) => {
  const message = 'not a DAO';
  validate(isDAO(thing), { message, prefix });
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

const listen = async (dao) => {
  const key = toKey(dao.id, 'SerializedListener');

  if (cache.get(key)) {
    return;
  }

  try {
    cache.set(key, true, { persist: false });
    const listenerSubject = await dao.events.Serialized();
    listenerSubject.subscribe(dao.refresh.bind(dao));
  } catch (e) {
    cache.set(key, false, { persist: false });
  }
};

export default class DAO extends ElasticModel {
  constructor(sdk, attributes, keyAddition = '') {
    super(sdk);

    const { uuid } = attributes;
    this._id = toKey(uuid, keyAddition);

    let cached = cache.get(this.id);
    const summoners = (cached || {}).summoners || [];

    if (Object.keys(attributes).length > 1) {
      const {
        ecosystem,
        maxVotingLambda,
        name,
        numberOfSummoners,
        summoned,
        ttl,
      } = attributes;

      cached = {
        ttl: ttl || this.sdk.blockNumber + 120, // expire the cache in 120 blocks
        ecosystem,
        maxVotingLambda,
        name,
        numberOfSummoners,
        summoned,
        summoners,
        uuid,
      };

      cache.set(this.id, cached);
    }

    if (cached) {
      this._loaded = true;
    }

    if (this.loaded) {
      if (cached.ecosystem.constructor !== Ecosystem) {
        cached.ecosystem = Ecosystem.fromCache(this.sdk, cached.ecosystem);
        cache.set(this.id, cached);
      }

      this.sdk.balanceOf(this.uuid);
      this.sdk.integrations.coinGecko.addContractAddress(
        this.ecosystem.governanceTokenAddress,
      );

      if (this.summoners.length === this.numberOfSummoners) {
        this.touch();
      } else {
        this.summoners();
      }

      if (keyAddition === '' && cached.ttl < this.sdk.blockNumber) {
        this.refresh();
      }

      if (this.sdk.live && `${keyAddition}`.length === 0) {
        listen(this);
      }
    }
  }

  // Class functions

  static contract(sdk, address, readonly = false) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: DAOContract.abi, address, readonly });
  }

  static async deserialize(sdk, uuid, overrides = {}) {
    validateIsAddress(uuid, { prefix });

    const ecosystem = await Ecosystem.deserialize(sdk, uuid);
    const daoModel = await this.contract(sdk, ecosystem.daoModelAddress, true);

    const {
      maxVotingLambda,
      name,
      numberOfSummoners,
      summoned,
    } = await daoModel.deserialize(
      uuid,
      ecosystem.toObject(false),
      sanitizeOverrides(overrides, true),
    );

    return new DAO(
      sdk,
      {
        ecosystem,
        maxVotingLambda,
        name,
        numberOfSummoners,
        summoned,
        uuid,
      },
      overrides.blockTag,
    );
  }

  static async exists(sdk, uuid, overrides = {}) {
    validateIsAddress(uuid, { prefix });

    const ecosystem = await Ecosystem.deserialize(sdk, uuid);
    const daoModel = await this.contract(sdk, ecosystem.daoModelAddress, true);
    return daoModel.exists(uuid, sanitizeOverrides(overrides, true));
  }

  // Getters

  get address() {
    return this.ecosystem.daoModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get ecosystem() {
    return cache.get(this.id).ecosystem;
  }

  get elasticDAO() {
    return new ElasticDAO(this);
  }

  get elasticGovernanceToken() {
    return new ElasticGovernanceToken(this);
  }

  get events() {
    const key = toKey(this.id, 'Events');
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = new Events(this);
    return cache[key];
  }

  get maxVotingLambda() {
    return this.toBigNumber(cache.get(this.id).maxVotingLambda, 18);
  }

  get name() {
    return cache.get(this.id).name;
  }

  get numberOfSummoners() {
    return this.toNumber(cache.get(this.id).numberOfSummoners || 0);
  }

  get readonlyContract() {
    return this.constructor.contract(this.sdk, this.address, true);
  }

  get summoned() {
    return cache.get(this.id).summoned;
  }

  get uuid() {
    return cache.get(this.id).uuid;
  }

  // Instance functions

  async ethBalance() {
    return this.toBigNumber(await this.sdk.provider.getBalance(this.uuid), 18);
  }

  async refresh() {
    await this.token();
    return this.constructor.deserialize(this.sdk, this.uuid);
  }

  async summoners(overrides = {}) {
    if (
      cache.get(this.id).summoners &&
      cache.get(this.id).summoners.length === this.numberOfSummoners
    ) {
      return cache.get(this.id).summoners;
    }
    const summoners = await this.elasticDAO.summoners(overrides);
    cache.get(this.id).summoners = summoners;
    this.touch();
    return summoners;
  }

  async token(overrides = {}) {
    return Token.deserialize(
      this.sdk,
      this.ecosystem.governanceTokenAddress,
      this.ecosystem,
      overrides,
    );
  }

  toObject(includeNested = true) {
    const { ecosystem, id } = this;

    const obj = {
      ...cache.get(id),
      id,
      ecosystem: ecosystem.toObject(false),
    };

    if (includeNested === false) {
      delete obj.ecosystem;
    }

    return this.sanitize(obj);
  }
}
