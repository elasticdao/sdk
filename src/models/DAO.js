import { validateIsAddress } from '@pie-dao/utils';
import { sanitizeOverrides, toKey, validate } from '../utils';
import BaseEvents from '../BaseEvents';
import DAOContract from '../../artifacts/DAO.json';
import Ecosystem from './Ecosystem';
import ElasticDAO from '../core/ElasticDAO';
import ElasticModel from './ElasticModel';
import Token from './Token';
import ElasticGovernanceToken from '../tokens/ElasticGovernanceToken';

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

export default class DAO extends ElasticModel {
  constructor(sdk, attributes, keyAddition = '') {
    super(sdk);

    const { uuid } = attributes;
    this._id = toKey(uuid, keyAddition);

    let cached = this.cache.get(this.id);
    console.log('cached', cached);
    console.log('this.id', this.id);

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

      this.cache.set(this.id, cached);
    }

    if (cached) {
      this._loaded = true;
    }

    if (this.loaded) {
      if (cached.ecosystem.constructor !== Ecosystem) {
        cached.ecosystem = Ecosystem.fromCache(this.sdk, cached.ecosystem);
        this.cache.set(this.id, cached);
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
        const key = toKey(this.id, 'SerializedListener');

        if (this.cache.get(key)) {
          return;
        }

        this.cache.set(key, true, { persist: false });

        this.events.Serialized().then(
          (listenerSubject) => {
            listenerSubject.subscribe(this.refresh.bind(this));
          },
          () => {
            this.cache.set(key, false, { persist: false });
          },
        );
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

    const { maxVotingLambda, name, numberOfSummoners, summoned } =
      await daoModel.deserialize(
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
    return this.cache.get(this.id).ecosystem;
  }

  get elasticDAO() {
    return new ElasticDAO(this);
  }

  get elasticGovernanceToken() {
    return new ElasticGovernanceToken(this);
  }

  get events() {
    const key = toKey(this.id, 'Events');
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    this.cache.set(key, new Events(this), { persist: false });
    return this.cache.get(key);
  }

  get maxVotingLambda() {
    return this.toBigNumber(this.cache.get(this.id).maxVotingLambda, 18);
  }

  get name() {
    return this.cache.get(this.id).name;
  }

  get numberOfSummoners() {
    return this.toNumber(this.cache.get(this.id).numberOfSummoners || 0);
  }

  get readonlyContract() {
    return this.constructor.contract(this.sdk, this.address, true);
  }

  get summoned() {
    return this.cache.get(this.id).summoned;
  }

  get uuid() {
    return this.cache.get(this.id).uuid;
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
      this.cache.get(this.id).summoners &&
      this.cache.get(this.id).summoners.length === this.numberOfSummoners
    ) {
      return this.cache.get(this.id).summoners;
    }
    const summoners = await this.elasticDAO.summoners(overrides);
    this.cache.get(this.id).summoners = summoners;
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
      ...this.cache.get(id),
      id,
      ecosystem: ecosystem.toObject(false),
    };

    if (includeNested === false) {
      delete obj.ecosystem;
    }

    return this.sanitize(obj);
  }
}
