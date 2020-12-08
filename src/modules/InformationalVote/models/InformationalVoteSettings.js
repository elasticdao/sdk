import { validateIsAddress } from '@pie-dao/utils';
import { validate } from '../../../utils';
import ElasticModel from '../../../models/ElasticModel';
import InformationalVoteManagerContract from '../../../../artifacts/InformationalVoteManager.json';
import InformationalVoteSettingsContract from '../../../../artifacts/InformationalVoteSettings.json';

const cache = {};
const prefix = '@elastic-dao/sdk - InformationalVoteSettings';

export const isInformationalVoteSettings = (thing) =>
  thing &&
  typeof thing === 'object' &&
  thing instanceof InformationalVoteSettings;
export const validateIsInformationalVoteSettings = (thing) => {
  const message = 'not an InformationalVoteSettings';
  validate(isInformationalVoteSettings(thing), { message, prefix });
};

export default class InformationalVoteSettings extends ElasticModel {
  constructor({
    approval,
    counter,
    hasPenalty,
    managerAddress,
    maxSharesPerTokenHolder,
    minBlocksForPenalty,
    minDurationInBlocks,
    minPenaltyInShares,
    minRewardInShares,
    minSharesToCreate,
    penalty,
    quorum,
    reward,
    settingsModelAddress,
    votingTokenAddress,
  }) {
    super();
    this.id = managerAddress.toLowerCase();
    cache[this.id] = {
      approval,
      counter,
      hasPenalty,
      managerAddress,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minDurationInBlocks,
      minPenaltyInShares,
      minRewardInShares,
      minSharesToCreate,
      penalty,
      quorum,
      reward,
      settingsModelAddress,
      votingTokenAddress,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({
      abi: InformationalVoteSettingsContract.abi,
      address,
    });
  }

  static async deserialize(sdk, managerAddress) {
    validateIsAddress(managerAddress, { prefix });
    const manager = await this.managerContract(sdk, managerAddress);

    const settingsModelAddress = await manager.settingsModelAddress();
    const informationalVoteSettingsModel = await this.contract(
      sdk,
      settingsModelAddress,
    );

    const {
      approval,
      counter,
      hasPenalty,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minDurationInBlocks,
      minPenaltyInShares,
      minRewardInShares,
      minSharesToCreate,
      penalty,
      quorum,
      reward,
      votingTokenAddress,
    } = await informationalVoteSettingsModel.deserialize(managerAddress);

    return new InformationalVoteSettings({
      approval,
      counter,
      hasPenalty,
      managerAddress,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minDurationInBlocks,
      minPenaltyInShares,
      minRewardInShares,
      minSharesToCreate,
      penalty,
      quorum,
      reward,
      settingsModelAddress,
      votingTokenAddress,
    });
  }

  static managerContract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({
      abi: InformationalVoteManagerContract.abi,
      address,
    });
  }

  // Getters

  get address() {
    return cache[this.id].settingsModelAddress;
  }

  get approval() {
    return this.toBigNumber(cache[this.id].approval, 18);
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get counter() {
    return this.toNumber(cache[this.id].counter);
  }

  get hasPenalty() {
    return cache[this.id].hasPenalty;
  }

  get manager() {
    return this.constructor.managerContract(this.sdk, this.managerAddress);
  }

  get managerAddress() {
    return cache[this.id].managerAddress;
  }

  get maxSharesPerTokenHolder() {
    return this.toBigNumber(cache[this.id].maxSharesPerTokenHolder, 18);
  }

  get minBlocksForPenalty() {
    return this.toNumber(cache[this.id].minBlocksForPenalty);
  }

  get minDurationInBlocks() {
    return this.toNumber(cache[this.id].minDurationInBlocks);
  }

  get minPenaltyInShares() {
    return this.toBigNumber(cache[this.id].minPenaltyInShares, 18);
  }

  get minRewardInShares() {
    return this.toBigNumber(cache[this.id].minRewardInShares, 18);
  }

  get minSharesToCreate() {
    return this.toBigNumber(cache[this.id].minSharesToCreate, 18);
  }

  get penalty() {
    return this.toBigNumber(cache[this.id].penalty, 18);
  }

  get quorum() {
    return this.toBigNumber(cache[this.id].quorum, 18);
  }

  get reward() {
    return this.toBigNumber(cache[this.id].reward, 18);
  }

  get votingTokenAddress() {
    return cache[this.id].votingTokenAddress;
  }

  // Instance functions

  async refresh() {
    return this.constructor.deserialize(this.sdk, this.managerAddress);
  }

  toObject() {
    const { id } = this;

    const obj = {
      ...cache[id],
      id,
    };

    delete obj.settingsModelAddress;

    return this.sanitize(obj);
  }
}
