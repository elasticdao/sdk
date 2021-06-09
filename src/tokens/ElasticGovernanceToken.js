import { ethers } from 'ethers';
import { sanitizeOverrides, toKey } from '../utils';
import BaseEvents from '../BaseEvents';
import Cache from '../Cache';
import ElasticGovernanceTokenContract from '../../artifacts/ElasticGovernanceToken.json';
import QueryFilterable from '../QueryFilterable';

const cache = new Cache('ElasticGovernanceToken.js', { persist: false });

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

export default class ElasticGovernanceToken extends QueryFilterable {
  constructor(dao) {
    super(dao.sdk);
    this.dao = dao;
  }

  static contract(sdk, address, readonly = false) {
    return sdk.contract({
      abi: ElasticGovernanceTokenContract.abi,
      address,
      readonly,
    });
  }

  get address() {
    return this.dao.ecosystem.governanceTokenAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get events() {
    const key = toKey(this.address, 'Events');
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, new Events(this));
    return cache.get(key);
  }

  get readonlyContract() {
    return this.constructor.contract(this.sdk, this.address, true);
  }

  async getEcosystem() {
    return this.dao.ecosystem.refresh();
  }

  async allowance(ownerAddress, spenderAddress, overrides = {}) {
    const elasticGovernanceToken = await this.readonlyContract;
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
    const elasticGovernanceToken = await this.readonlyContract;
    const balance = await elasticGovernanceToken.balanceOf(
      accountAddress,
      sanitizeOverrides(overrides, true),
    );

    return this.toBigNumber(balance.toString(), 18);
  }

  async balanceOfInShares(accountAddress, overrides = {}) {
    const elasticGovernanceToken = await this.readonlyContract;
    const balanceOfInShares = await elasticGovernanceToken.balanceOfInShares(
      accountAddress,
      sanitizeOverrides(overrides, true),
    );
    return this.toBigNumber(balanceOfInShares.toString(), 18);
  }

  async balanceOfVoting(accountAddress, overrides = {}) {
    const elasticGovernanceToken = await this.readonlyContract;
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
    const elasticGovernanceToken = await this.readonlyContract;
    const decimals = await elasticGovernanceToken.decimals();
    return decimals;
  }

  async holders(overrides = {}) {
    let endingBlock = overrides.blockTag;
    if (!endingBlock) {
      endingBlock = await this.sdk.provider.getBlockNumber();
    }
    const tokenHolderModelContract = await this.sdk.models.TokenHolder.readonlyContract(
      this.dao.ecosystem.tokenHolderModelAddress,
    );
    const holders = new Set();
    const results = await tokenHolderModelContract.queryFilter(
      'Serialized',
      12056930, // 4 blocks before the first DAO was created
      endingBlock,
    );
    results.forEach(({ topics }) =>
      holders.add(
        ethers.utils
          .getAddress(`${topics[1].substr(26, topics[1].length - 1)}`)
          .toLowerCase(),
      ),
    );
    return Array.from(holders);
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
    const elasticGovernanceToken = await this.readonlyContract;
    const name = await elasticGovernanceToken.name(
      sanitizeOverrides(overrides, true),
    );
    return name;
  }

  async numberOfTokenHolders(overrides = {}) {
    const elasticGovernanceToken = await this.readonlyContract;
    const number = await elasticGovernanceToken.numberOfTokenHolders(
      sanitizeOverrides(overrides, true),
    );

    return this.toBigNumber(number.toString());
  }

  async symbol(overrides = {}) {
    const elasticGovernanceToken = await this.readonlyContract;
    const symbol = await elasticGovernanceToken.symbol(
      sanitizeOverrides(overrides, true),
    );

    return symbol;
  }

  async totalSupply(overrides = {}) {
    const elasticGovernanceToken = await this.readonlyContract;
    const totalSupply = await elasticGovernanceToken.totalSupply(
      sanitizeOverrides(overrides, true),
    );
    return this.toBigNumber(totalSupply.toString(), 18);
  }

  async totalSupplyInShares(overrides = {}) {
    const elasticGovernanceToken = await this.readonlyContract;
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
