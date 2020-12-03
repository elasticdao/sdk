import {
  validateIsAddress,
  validateIsBigNumber,
  validateIsNumber,
  validateIsString,
} from '@pie-dao/utils';
import Base from '../../Base';
import TransactionalVoteManagerContract from '../../../artifacts/TransactionalVoteManager.json';
import TransactionalVoteSettings from './models/TransactionalVoteSettings';

const prefix = '@elastic-dao/sdk - TransactionalVoteManager';

export default class TransactionalVoteManager extends Base {
  constructor(sdk, address) {
    super(sdk);
    validateIsAddress(address, { prefix });
    this.address = address;
  }

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: TransactionalVoteManagerContract.abi, address });
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  async applyPenalty(index, addressesToPenalize, overrides = {}) {
    validateIsNumber(index, { prefix });

    for (let i = 0; i < addressesToPenalize.length; i += 1) {
      validateIsAddress(addressesToPenalize[i], { prefix });
    }

    const manager = await this.contract();
    await manager.applyPenalty(
      index,
      addressesToPenalize,
      this.sanitizeOverrides(overrides),
    );

    return true;
  }

  async ballotModelAddress() {
    const manager = await this.contract;
    return manager.ballotModelAddress();
  }

  async castBallot(index, yna, overrides = {}) {
    validateIsNumber(index, { prefix });
    validateIsNumber(yna, { prefix });

    const manager = await this.contract;
    await manager.castBallot(index, yna, this.sanitizeOverrides(overrides));
    return true; // TODO: Return ballot model
  }

  async createVote(
    to,
    value,
    data,
    operation,
    safeTxGas,
    baseGas,
    endOnBlock,
    overrides = {},
  ) {
    validateIsBigNumber(value, { prefix });
    validateIsNumber(safeTxGas, { prefix });
    validateIsNumber(baseGas, { prefix });
    validateIsNumber(endOnBlock, { prefix });
    validateIsString(operation, { prefix });

    const manager = await this.contract;
    await manager.createVote(
      to,
      this.toEthersBigNumber(value, 18),
      data,
      operation,
      safeTxGas,
      baseGas,
      endOnBlock,
      this.sanitizeOverrides(overrides),
    );
    return true; // TODO: Return vote model
  }

  async domainSeparator() {
    const manager = await this.contract;
    return manager.domainSeparator();
  }

  async execute(gasToken, gasPrice, index, overrides = {}) {
    const manager = await this.contract;

    validateIsAddress(gasToken, { prefix });
    validateIsNumber(gasPrice, { prefix });
    validateIsNumber(index, { prefix });

    return manager.execute(
      gasToken,
      gasPrice,
      index,
      this.sanitizeOverrides(overrides),
    );
  }

  async getSettings() {
    return TransactionalVoteSettings.deserialize(this);
  }

  async initialized() {
    const manager = await this.contract;
    return manager.initialized();
  }

  async nonce() {
    const manager = await this.contract;
    return manager.nonce();
  }

  async settingsModelAddress() {
    const manager = await this.contract;
    return manager.settingsModelAddress();
  }

  async vaultAddress() {
    const manager = await this.contract;
    return manager.vaultAddress();
  }

  async voteModelAddress() {
    const manager = await this.contract;
    return manager.voteModelAddress();
  }
}
