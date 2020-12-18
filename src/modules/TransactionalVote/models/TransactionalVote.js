import { validateIsAddress, validateIsNumber } from '@pie-dao/utils';
import { validate } from '../../../utils';
import { validateIsTransactionalVoteSettings } from './TransactionalVoteSettings';
import ElasticModel from '../../../models/ElasticModel';
import TransactionalVoteContract from '../../../../artifacts/TransactionalVote.json';

const cache = {};
const prefix = '@elastic-dao/sdk - TransactionalVote';

export const isTransactionalVote = (thing) =>
  thing && typeof thing === 'object' && thing instanceof TransactionalVote;
export const validateIsTransactionalVote = (thing) => {
  const message = 'not an TransactionalVote';
  validate(isTransactionalVote(thing), { message, prefix });
};

export default class TransactionalVote extends ElasticModel {
  constructor(
    sdk,
    {
      uuid,
      author,
      to,
      votingToken,
      hasPenalty,
      hasReachedQuorum,
      isActive,
      isApproved,
      isExecuted,
      data,
      proposal,
      abstainLambda,
      approval,
      approvalLambda,
      baseGas,
      endOnBlock,
      index,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minPenaltyInShares,
      minRewardsInShares,
      noLambda,
      penalty,
      quorum,
      quorumLambda,
      reward,
      safeTxGas,
      settings,
      startOnBlock,
      value,
      voteModelAddress,
      yesLambda,
      operation,
    },
  ) {
    super(sdk);
    this.id = `${settings.uuid}|${index}`.toLowerCase();
    cache[this.id] = {
      uuid,
      author,
      to,
      votingToken,
      hasPenalty,
      hasReachedQuorum,
      isActive,
      isApproved,
      isExecuted,
      data,
      proposal,
      abstainLambda,
      approval,
      approvalLambda,
      baseGas,
      endOnBlock,
      index,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minPenaltyInShares,
      minRewardsInShares,
      noLambda,
      penalty,
      quorum,
      quorumLambda,
      reward,
      safeTxGas,
      settings,
      startOnBlock,
      value,
      voteModelAddress,
      yesLambda,
      operation,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: TransactionalVoteContract.abi, address });
  }

  static async deserialize(sdk, index, settings) {
    validateIsNumber(index, { prefix });
    validateIsTransactionalVoteSettings(settings);

    const voteModelAddress = await settings.manager.voteModelAddress();
    const transactionalVoteModel = await this.contract(sdk, voteModelAddress);

    const {
      uuid,
      author,
      to,
      votingToken,
      hasPenalty,
      hasReachedQuorum,
      isActive,
      isApproved,
      isExecuted,
      data,
      proposal,
      abstainLambda,
      approval,
      approvalLambda,
      baseGas,
      endOnBlock,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minPenaltyInShares,
      minRewardsInShares,
      noLambda,
      penalty,
      quorum,
      quorumLambda,
      reward,
      safeTxGas,
      startOnBlock,
      value,
      yesLambda,
      operation,
    } = await transactionalVoteModel.deserialize(
      index,
      settings.toObject(false),
    );

    return new TransactionalVote({
      uuid,
      author,
      to,
      votingToken,
      hasPenalty,
      hasReachedQuorum,
      isActive,
      isApproved,
      isExecuted,
      data,
      proposal,
      abstainLambda,
      approval,
      approvalLambda,
      baseGas,
      endOnBlock,
      index,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minPenaltyInShares,
      minRewardsInShares,
      noLambda,
      penalty,
      quorum,
      quorumLambda,
      reward,
      safeTxGas,
      settings,
      startOnBlock,
      value,
      voteModelAddress,
      yesLambda,
      operation,
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

  get approvalLambda() {
    return this.toBigNumber(cache[this.id].approvalLambda, 18);
  }

  get author() {
    return cache[this.id].author;
  }

  get baseGas() {
    return this.toBigNumber(cache[this.id].baseGas, 18);
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get data() {
    return cache[this.id].data;
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

  get isExecuted() {
    return cache[this.id].isExecuted;
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

  get operation() {
    return cache[this.id].operation;
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

  get safeTxGas() {
    return this.toBigNumber(cache[this.id].safeTransactionGas);
  }

  get settings() {
    return cache[this.id].settings;
  }

  get startOnBlock() {
    return this.toNumber(cache[this.id].startOnBlock);
  }

  get to() {
    return cache[this.id].to;
  }

  get value() {
    return this.toBigNumber(cache[this.id].value, 18);
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

    if (includeNested === false) {
      delete obj.settings;
    }

    return this.sanitize(obj);
  }
}
