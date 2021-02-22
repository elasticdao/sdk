import { upTo } from './utils';
import Base from './Base';
import DAO from './models/DAO';
import ElasticDAOFactoryContract from '../artifacts/ElasticDAOFactory.json';

export default class ElasticDAOFactory extends Base {
  static contract(sdk, address) {
    return sdk.contract({ abi: ElasticDAOFactoryContract.abi, address });
  }

  get address() {
    return this.sdk.env.factoryAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  async deployDAOAndToken(
    summoners,
    nameOfDAO,
    nameOfToken,
    symbol,
    eByL,
    elasticity,
    k,
    maxLambdaPurchase,
    maxVotingLambda,
    overrides = {},
  ) {
    const payload = [
      summoners,
      nameOfDAO,
      nameOfToken,
      symbol,
      this.toEthersBigNumber(eByL, 18),
      this.toEthersBigNumber(elasticity, 18),
      this.toEthersBigNumber(k, 18),
      this.toEthersBigNumber(maxLambdaPurchase, 18),
      this.toEthersBigNumber(maxVotingLambda, 18),
    ];

    const factory = await this.contract;
    const daoDeployedFilter = factory.filters.DeployedDAO();
    const daoDeployedFilterPromise = new Promise(async (resolve, reject) => {
      let tx = {};
      const handler = ({ transactionHash, topics }) => {
        if (transactionHash === tx.hash) {
          this.sdk.provider.off(daoDeployedFilter, handler);
          resolve(`0x${topics[1].substring(26)}`);
        }
      };
      this.sdk.provider.on(daoDeployedFilter, handler);
      tx = await factory.deployDAOAndToken(...payload, {
        ...this.sanitizeOverrides({ ...overrides }),
        value: await this.contract.fee(),
      });
      await tx.wait(2);
      reject(tx);
    });

    return DAO.deserialize(this.sdk, await daoDeployedFilterPromise);
  }

  async deployedDAOAddresses() {
    const factory = await this.contract;
    const deployedDAOCount = await factory.deployedDAOCount();

    const promises = upTo(deployedDAOCount.toNumber()).map((i) =>
      factory.deployedDAOAddresses(i),
    );
    return Promise.all(promises);
  }

  async collectFees() {
    const factory = await this.contract;
    const tx = factory.collectFees();

    return tx;
  }
}
