import { validateIsAddress } from '@pie-dao/utils';
import { validate } from '../utils';
import DAOContract from '../../artifacts/DAO.json';
import Ecosystem, { isEcosystem } from './Ecosystem';
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
  constructor(sdk, { ecosystem, name, numberOfSummoners, summoned, uuid }) {
    super(sdk);
    this.id = uuid.toLowerCase();
    cache[this.id] = {
      ecosystem,
      name,
      numberOfSummoners,
      summoned,
      uuid,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: DAOContract.abi, address });
  }

  static async deserialize(sdk, uuid, _ecosystem) {
    validateIsAddress(uuid, { prefix });

    let ecosystem = _ecosystem;
    if (!isEcosystem(ecosystem)) {
      ecosystem = await Ecosystem.deserialize(sdk, uuid);
    }

    const daoModel = await this.contract(sdk, ecosystem.daoModelAddress);

    const { name, numberOfSummoners, summoned } = await daoModel.deserialize(
      uuid,
      ecosystem.toObject(false),
    );

    return new DAO(sdk, {
      ecosystem,
      name,
      numberOfSummoners,
      summoned,
      uuid,
    });
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
