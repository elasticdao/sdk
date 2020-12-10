import Base from './Base';
import ElasticGovernanceTokenContract from '../../artifacts/ElasticGovernanceToken.json';
import { validateIsAddress, validateIsBigNumber } from '@pie-dao/utils/src/utils/validations';

const prefix = '@elastic-dao/sdk - ElasticGovernanceToken';

export default class ElasticGovernanceToken extends Base {
  constructor(token) {
    super(token.sdk);
    this.token = token;
  }

  static contract(sdk, address) {
    return sdk.contract({ abi: ElasticGovernanceTokenContract.abi, address });
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.token.uuid);
  }

  async allowance(owner, spender) {
    validateIsAddress(owner, { prefix });
    validateIsAddress(spender, { prefix });

    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.allowance(owner, spender);
  }

  async approve(spender, amount) {
    validateIsAddress(spender, { prefix });
    validateIsBigNumber(amount, { prefix });

    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.approve(spender, this.toEthersBigNumber(amount, 18));
  }

  async balanceof(account) {
    validateIsAddress(account, { prefix });

    const elasticGovernanceToken = await this.contract;
    const balance = elasticGovernanceToken.balanceOf(account);
    return this.toBigNumber(balance, 18);
  }

  async daoAddress() {
    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.daoAddress();
  }

  async ecosystemModelAddress() {
    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.ecosystemModelAddress();
  }
}