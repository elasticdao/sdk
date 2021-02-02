import Base from '../Base';
import ElasticGovernanceTokenContract from '../../artifacts/ElasticGovernanceToken.json';

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

  async getEcosystem() {
    return this.dao.ecosystem.refresh();
  }

  async allowance(ownerAddress, spenderAddress, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const allowance = await elasticGovernanceToken.allowance(
      ownerAddress,
      spenderAddress,
      this.sanitizeOverrides(overrides),
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
      this.sanitizeOverrides(overrides),
    );

    return this.toBigNumber(balance.toString(), 18);
  }

  async balanceOfInShares(accountAddress, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const balanceOfInShares = await elasticGovernanceToken.balanceOfInShares(
      accountAddress,
      this.sanitizeOverrides(overrides),
    );
    return this.toBigNumber(balanceOfInShares.toString(), 18);
  }

  async balanceOfAt(accountAddress, blockNumber, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const balanceOfAt = await elasticGovernanceToken.balanceOfAt(
      accountAddress,
      blockNumber,
      this.sanitizeOverrides(overrides),
    );

    return this.toBigNumber(balanceOfAt.toString(), 18);
  }

  async balanceOfInSharesAt(accountAddress, blockNumber, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const balanceOfInSharesAt = await elasticGovernanceToken.balanceOfInSharesAt(
      accountAddress,
      blockNumber,
      this.sanitizeOverrides(overrides),
    );

    return this.toBigNumber(balanceOfInSharesAt.toString(), 18);
  }

  async balanceOfVoting(accountAddress, overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const balanceOfVoting = await elasticGovernanceToken.balanceOfVoting(
      accountAddress,
      this.sanitizeOverrides(overrides),
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
      this.sanitizeOverrides(overrides),
    );
    return name;
  }

  async numberOfTokenHolders(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const number = await elasticGovernanceToken.numberOfTokenHolders(
      this.sanitizeOverrides(overrides),
    );

    // TODO: ASK ABOUT TO BIGNUMBER CAUSE ITS 0.000000000....3 instead of 3?
    return this.toBigNumber(number.toString());
  }

  async symbol(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const symbol = await elasticGovernanceToken.symbol(
      this.sanitizeOverrides(overrides),
    );
    return symbol;
  }

  async totalSupply(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const totalSupply = await elasticGovernanceToken.totalSupply(
      this.sanitizeOverrides(overrides),
    );
    return this.toBigNumber(totalSupply.toString(), 18);
  }

  async totalSupplyInShares(overrides = {}) {
    const elasticGovernanceToken = await this.contract;
    const totalSupplyInShares = await elasticGovernanceToken.totalSupplyInShares(
      this.sanitizeOverrides(overrides),
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
