import BigNumber from 'bignumber.js';
import Base from '../../Base';

export default class SnapshotProposal extends Base {
  constructor(sdk, api, raw) {
    super(sdk);

    this._api = api;
    this._eligibleVoteCreators = [];
    this._fullQuorum = 0;
    this._raw = raw;
    this._votes = {};
  }

  get abstain() {
    return this.votes.reduce((acc, vote) => {
      if (vote.choice === this.choices[2]) {
        return acc.plus(vote.weight);
      }

      return acc;
    }, BigNumber(0));
  }

  get author() {
    return this._raw.address.toLowerCase();
  }

  get body() {
    return this._raw.msg.payload.body;
  }

  get choices() {
    return this._raw.msg.payload.choices;
  }

  get end() {
    return this._raw.msg.payload.end;
  }

  get id() {
    return this._raw.authorIpfsHash;
  }

  get isValid() {
    return this._eligibleVoteCreators.includes(this.author);
  }

  get name() {
    return this._raw.msg.payload.name;
  }

  get no() {
    return this.votes.reduce((acc, vote) => {
      if (vote.choice === this.choices[1]) {
        return acc.plus(vote.weight);
      }

      return acc;
    }, BigNumber(0));
  }

  get quorum() {
    if (this._fullQuorum === 0) {
      return BigNumber(0);
    }
    return this.voted.dividedBy(this._fullQuorum).multipliedBy(100);
  }

  get snapshot() {
    return this._raw.msg.payload.snapshot;
  }

  get start() {
    return this._raw.msg.payload.start;
  }

  get status() {
    const now = Math.floor(Date.now() / 1000);
    let status = 'active';
    if (this.end < now) {
      status = 'closed';
    } else if (this.start > now) {
      status = 'pending';
    }
    return status;
  }

  get yes() {
    return this.votes.reduce((acc, vote) => {
      if (vote.choice === this.choices[0]) {
        return acc.plus(vote.weight);
      }

      return acc;
    }, BigNumber(0));
  }

  get voted() {
    return this.votes.reduce(
      (acc, vote) => acc.plus(vote.weight),
      BigNumber(0),
    );
  }

  get votes() {
    return Object.values(this._votes);
  }

  getScore(address) {
    return BigNumber(this._votes[address].score);
  }

  async load({ balances, stats }) {
    this._eligibleVoteCreators = stats.eligibleVoteCreators;
    this._fullQuorum = stats.quorum;

    const votes = {};

    if (this.isValid) {
      const voteObjects = await this._api.getVotes(this);
      for (let i = 0; i < voteObjects.length; i += 1) {
        votes[voteObjects[i].voter] = voteObjects[i].load({ balances });
      }
    }

    this._votes = votes;
    return this;
  }

  didVote(address) {
    return !!this.myVote(address);
  }

  vote(address) {
    return this._votes[`${address}`.toLowerCase()];
  }
}
