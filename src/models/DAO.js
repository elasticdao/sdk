import { validateIsAddress } from '@pie-dao/utils';
import { validate } from '../utils';
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
    return daoModel.exists(uuid, ecosystem.toObject());
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
    await Promise.all([this.ecosystem.refresh(), this.token()]);
    return this.constructor.deserialize(this.sdk, this.uuid, this.ecosystem);
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
