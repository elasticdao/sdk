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

  get active() {
    return this.status === 'active';
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

  get closed() {
    return this.status === 'closed';
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

  get pending() {
    return this.status === 'pending';
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

  get voted() {
    return this.votes.reduce(
      (acc, vote) => acc.plus(vote.weight),
      BigNumber(0),
    );
  }

  get votes() {
    return Object.values(this._votes).filter(({ weight }) =>
      BigNumber(weight).isGreaterThan(0),
    );
  }

  get yes() {
    return this.votes.reduce((acc, vote) => {
      if (vote.choice === this.choices[0]) {
        return acc.plus(vote.weight);
      }

      return acc;
    }, BigNumber(0));
  }

  didVote(address) {
    return !!this.myVote(address);
  }

  getScore(address) {
    return BigNumber(this._votes[address].score);
  }

  async load(args) {
    this._eligibleVoteCreators = args.stats.eligibleVoteCreators;
    this._fullQuorum = args.stats.quorum;

    const votes = {};

    if (this.isValid) {
      const voteObjects = await this._api.getVotes(this);
      for (let i = 0; i < voteObjects.length; i += 1) {
        const vote = voteObjects[i];
        votes[vote.voter] = vote.load(args.balances[vote.voter]);
      }
    }

    this._votes = votes;
    return this;
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
