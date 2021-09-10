/* eslint class-methods-use-this: 0 */

import BigNumber from 'bignumber.js';
import IPFSJsonBase from '../../IPFSJsonBase';
import { toBigNumber } from '../../utils';

/*
  Version 1.0.0:

  {
    author
    body
    choices
    end
    name
    snapshot
    start
  }
*/
export default class IPFSProposal extends IPFSJsonBase {
  get abstain() {
    return Object.keys(this.index.votes).reduce((total, voter) => {
      if (this.index.votes[voter].choice === 'Abstain') {
        return total.plus(this.blockData.balances[voter.toLowerCase()] || 0);
      }
      return total;
    }, toBigNumber(0));
  }

  get active() {
    return this.status === 'active';
  }

  get author() {
    return this._value('author');
  }

  get block() {
    return this._block;
  }

  set block(_block) {
    this._block = _block;
  }

  get blockData() {
    return this.block.blocks[`${this.snapshot}`];
  }

  get body() {
    return this._value('body');
  }

  get choices() {
    return this._value('choices');
  }

  get closed() {
    return this.status === 'closed';
  }

  get end() {
    return this._value('end');
  }

  get endDate() {
    return new Date(this.end * 1000);
  }

  get hash() {
    return this.id;
  }

  get index() {
    return this._index;
  }

  set index(_index) {
    this._index = _index;
  }

  get isValid() {
    return true;
  }

  get name() {
    return this._value('name');
  }

  get no() {
    return Object.keys(this.index.votes).reduce((total, voter) => {
      if (this.index.votes[voter].choice === 'No') {
        return total.plus(this.blockData.balances[voter.toLowerCase()] || 0);
      }
      return total;
    }, toBigNumber(0));
  }

  get pending() {
    return this.status === 'pending';
  }

  get quorum() {
    return this.voted.dividedBy(this.blockData.maximumEligibleVotingTokens);
  }

  get nodeUrl() {
    return `${this.sdk.elasticNodeURL}/elasticvote/${this.api.space}/proposals/${this.id}`;
  }

  get snapshot() {
    return this._value('snapshot');
  }

  get start() {
    return this._value('start');
  }

  get startDate() {
    return new Date(this.start * 1000);
  }

  get status() {
    if (this.startDate > new Date()) {
      return 'pending';
    }

    if (this.endDate < new Date()) {
      return 'closed';
    }

    return 'active';
  }

  get voted() {
    return Object.keys(this.index.votes).reduce(
      (total, voter) =>
        total.plus(this.blockData.balances[voter.toLowerCase()] || 0),
      toBigNumber(0),
    );
  }

  get votes() {
    return Object.values(this.index.votes);
  }

  get yes() {
    return Object.keys(this.index.votes).reduce((total, voter) => {
      if (this.index.votes[voter].choice === 'Yes') {
        return total.plus(this.blockData.balances[voter.toLowerCase()] || 0);
      }
      return total;
    }, toBigNumber(0));
  }

  didVote(address) {
    return !!this.vote(address);
  }

  getScore(address) {
    const vote = this.vote(address);
    return BigNumber(vote ? vote.weight : 0);
  }

  toJSON() {
    const voteCount = this.votes.length;
    const {
      abstain,
      active,
      author,
      body,
      choices,
      closed,
      end,
      id,
      name,
      no,
      pending,
      quorum,
      snapshot,
      start,
      status,
      voted,
      yes,
    } = this;

    return {
      abstain,
      active,
      author,
      body,
      choices,
      closed,
      end,
      id,
      name,
      no,
      pending,
      quorum,
      snapshot,
      start,
      status,
      voteCount,
      voted,
      yes,
    };
  }

  vote(address) {
    return this._votes[`${address}`.toLowerCase()];
  }
}
