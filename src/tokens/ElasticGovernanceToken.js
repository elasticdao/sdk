// import { subject } from '../observables';
import { sanitizeOverrides, toKey } from '../utils';
import Base from '../Base';
import BaseEvents from '../BaseEvents';
import ElasticGovernanceTokenContract from '../../artifacts/ElasticGovernanceToken.json';

const cache = {};

class Events extends BaseEvents {
  async Approval() {
    return this.observeEvent({
      eventName: 'ApprovalEvent',
      keyBase: this.target.address,
      subjectBase: toKey('ElasticGovernanceToken', this.target.address),
    });
  }

  async Transfer() {
    return this.observeEvent({
      eventName: 'TransferEvent',
      keyBase: this.target.address,
      subjectBase: toKey('ElasticGovernanceToken', this.target.address),
    });
  }
}

export default class ElasticGovernanceToken extends Base {
  constructor(dao) {
    super(dao.sdk);
    this.dao = dao;
  }

  static contract(sdk, address) {
    return sdk.contract({ abi: ElasticGovernanceTokenContract.abi, address });
  }

  get address() {
    return this.dao.ecosystem.governanceTokenAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get events() {
    const key = toKey(this.address, 'Events');
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = new Events(this);
    return cache[key];
  }

  async getEcosystem() {
    return this.dao.ecosystem.refresh();
  }

  async allowance(ownerAddress, spenderAddress, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const allowance = await elasticGovernanceToken.allowance(
      ownerAddress,
      spenderAddress,
      sanitizeOverrides(overrides, true),
    );
    return this.toBigNumber(allowance.toString(), 18);
  }

  async approve(spenderAddress, amount, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const approveStatus = await elasticGovernanceToken.approve(
      spenderAddress,
      this.toEthersBigNumber(amount, 18),
      this.sanitizeOverrides(overrides),
    );
    return approveStatus;
  }

  async balanceOf(accountAddress, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const balance = await elasticGovernanceToken.balanceOf(
      accountAddress,
      sanitizeOverrides(overrides, true),
    );

    return this.toBigNumber(balance.toString(), 18);
  }

  async balanceOfInShares(accountAddress, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const balanceOfInShares = await elasticGovernanceToken.balanceOfInShares(
      accountAddress,
      sanitizeOverrides(overrides, true),
    );
    return this.toBigNumber(balanceOfInShares.toString(), 18);
  }

  async balanceOfVoting(accountAddress, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const balanceOfVoting = await elasticGovernanceToken.balanceOfVoting(
      accountAddress,
      sanitizeOverrides(overrides, true),
    );

    return this.toBigNumber(balanceOfVoting.toString(), 18);
  }

  async burn(address, amount, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const burnStatus = await elasticGovernanceToken.burn(
      address,
      this.toEthersBigNumber(amount, 18),
      this.sanitizeOverrides(overrides),
    );
    return burnStatus;
  }

  async burnShares(address, amount, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const burnSharesStatus = await elasticGovernanceToken.burnShares(
      address,
      this.toEthersBigNumber(amount, 18),
      this.sanitizeOverrides(overrides),
    );
    return burnSharesStatus;
  }

  async decreaseAllowance(spenderAddress, subtractedValue, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const decreaseAllowanceStatus = await elasticGovernanceToken.decreaseAllowance(
      spenderAddress,
      this.toEthersBigNumber(subtractedValue, 18),
      this.sanitizeOverrides(overrides),
    );
    return decreaseAllowanceStatus;
  }

  async decimals() {
    const elasticGovernanceToken = await this.contract;
    const decimals = await elasticGovernanceToken.decimals();
    return decimals;
  }

  async increaseAllowance(spenderAddress, addedValue, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const increaseAllowanceStatus = await elasticGovernanceToken.increaseAllowance(
      spenderAddress,
      this.toEthersBigNumber(addedValue, 18),
      this.sanitizeOverrides(overrides),
    );
    return increaseAllowanceStatus;
  }

  async mint(address, amount, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const mintStatus = await elasticGovernanceToken.mint(
      address,
      this.toEthersBigNumber(amount, 18),
      this.sanitizeOverrides(overrides),
    );
    return mintStatus;
  }

  async mintShares(address, amount, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const mintSharesStatus = await elasticGovernanceToken.mint(
      address,
      this.toEthersBigNumber(amount),
      this.sanitizeOverrides(overrides),
    );
    return mintSharesStatus;
  }

  async name(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const name = await elasticGovernanceToken.name(
      sanitizeOverrides(overrides, true),
    );
    return name;
  }

  async numberOfTokenHolders(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const number = await elasticGovernanceToken.numberOfTokenHolders(
      sanitizeOverrides(overrides, true),
    );

    return this.toBigNumber(number.toString());
  }

  async symbol(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const symbol = await elasticGovernanceToken.symbol(
      sanitizeOverrides(overrides, true),
    );

    return symbol;
  }

  async totalSupply(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const totalSupply = await elasticGovernanceToken.totalSupply(
      sanitizeOverrides(overrides, true),
    );
    return this.toBigNumber(totalSupply.toString(), 18);
  }

  async totalSupplyInShares(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const totalSupplyInShares = await elasticGovernanceToken.totalSupplyInShares(
      sanitizeOverrides(overrides, true),
    );
    return this.toBigNumber(totalSupplyInShares.toString(), 18);
  }

  async transfer(address, amount, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const transferStatus = await elasticGovernanceToken.transfer(
      address,
      this.toEthersBigNumber(amount, 18),
      this.sanitizeOverrides(overrides),
    );

    return transferStatus;
  }

  async transferFrom(fromAddress, toAddress, amount, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const transferStatus = await elasticGovernanceToken.transferFrom(
      fromAddress,
      toAddress,
      this.toEthersBigNumber(amount, 18),
      this.sanitizeOverrides(overrides),
    );

    return transferStatus;
  }
}
