import { validateIsAddress } from '@pie-dao/utils';
import { validate } from '../utils';
import BaseEvents from '../BaseEvents';
import DAOContract from '../../artifacts/DAO.json';
import Ecosystem from './Ecosystem';
import ElasticDAO from '../ElasticDAO';
import ElasticModel from './ElasticModel';
import Token from './Token';
import ElasticGovernanceToken from '../tokens/ElasticGovernanceToken';

const cache = {};
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
  const key = `${dao.id}SerializedListener`;
  if (cache[key]) {
    return;
  }
  const listenerSubject = await dao.events.Serialized();
  listenerSubject.subscribe(dao.refresh.bind(dao));
  cache[key] = true;
};

export default class DAO extends ElasticModel {
  constructor(
    sdk,
    { ecosystem, maxVotingLambda, name, numberOfSummoners, summoned, uuid },
  ) {
    super(sdk);
    this.id = uuid.toLowerCase();
    cache[this.id] = {
      ecosystem,
      maxVotingLambda,
      name,
      numberOfSummoners,
      summoned,
      uuid,
    };
    this.subject.next(this);
    if (sdk.live) {
      listen(this);
    }
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: DAOContract.abi, address });
  }

  static async deserialize(sdk, uuid) {
    validateIsAddress(uuid, { prefix });

    const ecosystem = await Ecosystem.deserialize(sdk, uuid);
    const daoModel = await this.contract(sdk, ecosystem.daoModelAddress);

    const {
      maxVotingLambda,
      name,
      numberOfSummoners,
      summoned,
    } = await daoModel.deserialize(uuid, ecosystem.toObject(false));

    return new DAO(sdk, {
      ecosystem,
      maxVotingLambda,
      name,
      numberOfSummoners,
      summoned,
      uuid,
    });
  }

  static async exists(sdk, uuid) {
    validateIsAddress(uuid, { prefix });

    const ecosystem = await Ecosystem.deserialize(sdk, uuid);
    const daoModel = await this.contract(sdk, ecosystem.daoModelAddress);
    return daoModel.exists(uuid);
  }

  // Getters

  get address() {
    return this.ecosystem.daoModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get ecosystem() {
    return cache[this.id].ecosystem;
  }

  get elasticDAO() {
    return new ElasticDAO(this);
  }

  get elasticGovernanceToken() {
    return new ElasticGovernanceToken(this);
  }

  get events() {
    const key = `${this.id}Events`;
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = new Events(this);
    return cache[key];
  }

  get maxVotingLambda() {
    return this.toBigNumber(cache[this.id].maxVotingLambda, 18);
  }

  get name() {
    return cache[this.id].name;
  }

  get numberOfSummoners() {
    return this.toNumber(cache[this.id].numberOfSummoners);
  }

  get summoned() {
    return cache[this.id].summoned;
  }

  get uuid() {
    return cache[this.id].uuid;
  }

  // Instance functions

  async ethBalance() {
    return this.toBigNumber(await this.sdk.provider.getBalance(this.uuid), 18);
  }

  async refresh() {
    await this.token();
    return this.constructor.deserialize(this.sdk, this.uuid);
  }

  async summoners() {
    return this.elasticDAO.summoners();
  }

  async token() {
    return Token.deserialize(
      this.sdk,
      this.ecosystem.governanceTokenAddress,
      this.ecosystem,
    );
  }

  toObject(includeNested = true) {
    const { ecosystem, id } = this;

    const obj = {
      ...cache[id],
      id,
      ecosystem: ecosystem.toObject(false),
      summoners: [],
    };

    if (includeNested === false) {
      delete obj.ecosystem;
    }

    return this.sanitize(obj);
  }
}
