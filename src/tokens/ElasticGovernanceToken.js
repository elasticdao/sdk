import { validateIsAddress, validateIsBigNumber } from '@pie-dao/utils';
import Base from '../Base';
import ElasticGovernanceTokenContract from '../../artifacts/ElasticGovernanceToken.json';

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
    return elasticGovernanceToken.approve(
      spender,
      this.toEthersBigNumber(amount, 18),
    );
  }

  async balanceof(account) {
    validateIsAddress(account, { prefix });

    const elasticGovernanceToken = await this.contract;
    const balance = elasticGovernanceToken.balanceOf(account);
    return this.toBigNumber(balance, 18);
  }

  async balanceOfAt(account, blockNumber) {
    validateIsAddress(account, { prefix });

    const elasticGovernanceToken = await this.contract;
    const balance = elasticGovernanceToken.balanceOfAt(account, blockNumber);
    return this.toBigNumber(balance, 18);
  }

  async balanceOfInShares(account) {
    validateIsAddress(account, { prefix });

    const elasticGovernanceToken = await this.contract;
    const balanceInShares = elasticGovernanceToken.balanceInShares(account);
    return this.toBigNumber(balanceInShares, 18);
  }

  async balanceOfInSharesAt(account, blockNumber) {
    validateIsAddress(account, { prefix });

    const elasticGovernanceToken = await this.contract;
    const balanceOfInSharesAt = elasticGovernanceToken.balanceOfInSharesAt(
      account,
      blockNumber,
    );
    return this.toBigNumber(balanceOfInSharesAt, 18);
  }

  async burn(account, amount) {
    validateIsAddress(account);
    validateIsBigNumber(amount);

    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.burn(
      account,
      this.toEthersBigNumber(amount, 18),
    );
  }

  async burnShares(account, amount) {
    validateIsAddress(account);
    validateIsBigNumber(amount);

    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.burnShares(
      account,
      this.toEthersBigNumber(amount, 18),
    );
  }

  async daoAddress() {
    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.daoAddress();
  }

  async decimals() {
    const elasticGovernanceToken = await this.contract;
    const decimals = elasticGovernanceToken.decimals();
    return this.toBigNumber(decimals, 18);
  }

  async decreaseAllowance(spender, subtractedValue) {
    validateIsAddress(spender, { prefix });
    validateIsBigNumber(subtractedValue, { prefix });

    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.decreaseAllowance(
      spender,
      this.toEthersBigNumber(subtractedValue, 18),
    );
  }

  async ecosystemModelAddress() {
    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.ecosystemModelAddress();
  }

  async increaseAllowance(spender, addedValue) {
    validateIsAddress(spender, { prefix });
    validateIsBigNumber(addedValue, { prefix });

    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.increaseAllowance(
      spender,
      this.toEthersBigNumber(addedValue, 18),
    );
  }

  async mint(account, amount) {
    validateIsAddress(account);
    validateIsBigNumber(amount);

    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.mint(
      account,
      this.toEthersBigNumber(amount, 18),
    );
  }

  async mintShares(account, amount) {
    validateIsAddress(account);
    validateIsBigNumber(amount);

    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.mintShares(
      account,
      this.toEthersBigNumber(amount, 18),
    );
  }

  async name() {
    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.name();
  }

  async numberOfTokenHolders() {
    const elasticGovernanceToken = await this.contract;
    const numberOfTokenHolders = elasticGovernanceToken.numberOfTokenHolders();
    return this.toBigNumber(numberOfTokenHolders, 18);
  }

  async symbol() {
    const elasticGovernanceToken = await this.contract;
    return elasticGovernanceToken.symbol();
  }

  async totalSupply() {
    const elasticGovernanceToken = await this.contract;
    const t = elasticGovernanceToken.totalSupply();
    return this.toBigNumber(t, 18);
  }

  async totalSupplyInShares() {
    const elasticGovernanceToken = await this.contract;
    const lambda = elasticGovernanceToken.totalSupplyInShares();
    return this.toBigNumber(lambda, 18);
  }

  async transfer(to, amount) {
    validateIsAddress(to);
    validateIsBigNumber(amount);

    const elasticGovernanceToken = this.contract;
    return elasticGovernanceToken.transfer(
      to,
      this.toEthersBigNumber(amount, 18),
    );
  }

  async transferFrom(from, to, amount) {
    validateIsAddress(from);
    validateIsAddress(to);
    validateIsBigNumber(amount);

    const elasticGovernanceToken = this.contract;
    return elasticGovernanceToken.transferFrom(
      to,
      this.toEthersBigNumber(amount, 18),
    );
  }
}
