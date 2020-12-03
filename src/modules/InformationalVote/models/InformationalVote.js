import { validateIsAddress, validateIsNumber } from '@pie-dao/utils';
import { validate } from '../../../utils';
import { validateIsInformationalVoteSettings } from './InformationalVoteSettings';
import ElasticModel from '../../../models/ElasticModel';
import InformationalVoteContract from '../../../../artifacts/InformationalVote.json';

const cache = {};
const prefix = '@elastic-dao/sdk - InformationalVote';

export const isInformationalVote = (thing) =>
  thing && typeof thing === 'object' && thing instanceof InformationalVote;
export const validateIsInformationalVote = (thing) => {
  const message = 'not an InformationalVote';
  validate(isInformationalVote(thing), { message, prefix });
};

export default class InformationalVote extends ElasticModel {
  constructor(
    sdk,
    {
      abstainLambda,
      approval,
      author,
      endOnBlock,
      hasPenalty,
      hasReachedQuorum,
      index,
      isActive,
      isApproved,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minPenaltyInShares,
      minRewardInShares,
      noLambda,
      penalty,
      proposal,
      quorum,
      quorumLambda,
      reward,
      settings,
      startOnBlock,
      voteModelAddress,
      votingToken,
      yesLambda,
    },
  ) {
    super(sdk);
    this.id = `${settings.uuid}|${index}`.toLowerCase();
    cache[this.id] = {
      abstainLambda,
      approval,
      author,
      endOnBlock,
      hasPenalty,
      hasReachedQuorum,
      index,
      isActive,
      isApproved,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minPenaltyInShares,
      minRewardInShares,
      noLambda,
      penalty,
      proposal,
      quorum,
      quorumLambda,
      reward,
      settings,
      startOnBlock,
      voteModelAddress,
      votingToken,
      yesLambda,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: InformationalVoteContract.abi, address });
  }

  static async deserialize(sdk, index, settings) {
    validateIsNumber(index, { prefix });
    validateIsInformationalVoteSettings(settings);

    const voteModelAddress = await settings.manager.voteModelAddress();
    const informationalVoteModel = await this.contract(sdk, voteModelAddress);

    const {
      abstainLambda,
      approval,
      author,
      endOnBlock,
      hasPenalty,
      hasReachedQuorum,
      isActive,
      isApproved,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minPenaltyInShares,
      minRewardInShares,
      noLambda,
      penalty,
      proposal,
      quorum,
      quorumLambda,
      reward,
      startOnBlock,
      votingToken,
      yesLambda,
    } = await informationalVoteModel.deserialize(
      index,
      settings.toObject(false),
    );

    return new InformationalVote(sdk, {
      abstainLambda,
      approval,
      author,
      endOnBlock,
      hasPenalty,
      hasReachedQuorum,
      index,
      isActive,
      isApproved,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minPenaltyInShares,
      minRewardInShares,
      noLambda,
      penalty,
      proposal,
      quorum,
      quorumLambda,
      reward,
      settings,
      startOnBlock,
      voteModelAddress,
      votingToken,
      yesLambda,
    });
  }

  // Getters

  get abstainLambda() {
    return this.toBigNumber(cache[this.id].abstainLambda, 18);
  }

  get address() {
    return cache[this.id].voteModelAddress;
  }

  get approval() {
    return this.toBigNumber(cache[this.id].approval, 18);
  }

  get author() {
    return cache[this.id].author;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get endOnBlock() {
    return this.toNumber(cache[this.id].endOnBlock);
  }

  get hasPenalty() {
    return cache[this.id].hasPenalty;
  }

  get hasReachedQuorum() {
    return cache[this.id].hasReachedQuorum;
  }

  get index() {
    return this.toNumber(cache[this.id].index);
  }

  get isActive() {
    return cache[this.id].isActive;
  }

  get isApproved() {
    return cache[this.id].isApproved;
  }

  get maxSharesPerTokenHolder() {
    return this.toBigNumber(cache[this.id].maxSharesPerTokenHolder, 18);
  }

  get minBlocksForPenalty() {
    return this.toNumber(cache[this.id].minBlocksForPenalty);
  }

  get minPenaltyInShares() {
    return this.toBigNumber(cache[this.id].minPenaltyInShares, 18);
  }

  get minRewardInShares() {
    return this.toBigNumber(cache[this.id].minRewardInShares, 18);
  }

  get noLambda() {
    return this.toBigNumber(cache[this.id].noLambda, 18);
  }

  get penalty() {
    return this.toBigNumber(cache[this.id].penalty, 18);
  }

  get proposal() {
    return cache[this.id].proposal;
  }

  get quorum() {
    return this.toBigNumber(cache[this.id].quorum, 18);
  }

  get quorumLambda() {
    return this.toBigNumber(cache[this.id].quorumLambda, 18);
  }

  get reward() {
    return this.toBigNumber(cache[this.id].reward, 18);
  }

  get settings() {
    return cache[this.id].settings;
  }

  get startOnBlock() {
    return this.toNumber(cache[this.id].startOnBlock);
  }

  get votingToken() {
    return cache[this.id].votingToken;
  }

  get yesLambda() {
    return this.toBigNumber(cache[this.id].yesLambda, 18);
  }

  // Instance functions

  async refresh() {
    return this.constructor.deserialize(this.sdk, this.index, this.settings);
  }

  toObject(includeNested = true) {
    const { id, settings } = this;

    const obj = {
      ...cache[id],
      id,
      settings: settings.toObject(false),
    };

    delete obj.voteModelAddress;

    if (includeNested === false) {
      delete obj.settings;
    }

    return this.sanitize(obj);
  }
}
