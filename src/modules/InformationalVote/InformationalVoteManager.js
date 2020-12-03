import {
  validateIsAddress,
  validateIsNumber,
  validateIsString,
} from '@pie-dao/utils';
import Base from '../../Base';
import InformationalVoteManagerContract from '../../../artifacts/InformationalVoteManager.json';
import InformationalVoteSettings from './models/InformationalVoteSettings';

const prefix = '@elastic-dao/sdk - InformationalVoteManager';

export default class InformationalVoteManager extends Base {
  constructor(sdk, address) {
    super(sdk);
    validateIsAddress(address, { prefix });
    this.address = address;
  }

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: InformationalVoteManagerContract.abi, address });
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

  async createVote(proposal, endOnBlock, overrides = {}) {
    validateIsString(proposal, { prefix });
    validateIsNumber(endOnBlock, { prefix });

    const manager = await this.contract;
    await manager.createVote(
      proposal,
      endOnBlock,
      this.sanitizeOverrides(overrides),
    );
    return true; // TODO: Return vote model
  }

  async getSettings() {
    return InformationalVoteSettings.deserialize(this);
  }

  async settingsModelAddress() {
    const manager = await this.contract;
    return manager.settingsModelAddress();
  }

  async voteModelAddress() {
    const manager = await this.contract;
    return manager.voteModelAddress();
  }
}
