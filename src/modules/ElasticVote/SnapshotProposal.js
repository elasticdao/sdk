import BigNumber from 'bignumber.js';
import Base from '../../Base';

/* RAW:
  id
  title
  body
  choices
  start
  end
  snapshot
  state
  author
*/
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

  get api() {
    return this._api;
  }

  get author() {
    return this._raw.author.toLowerCase();
  }

  get body() {
    return this._raw.body;
  }

  get choices() {
    return this._raw.choices;
  }

  get closed() {
    return this.status === 'closed';
  }

  get end() {
    return this._raw.end;
  }

  get ens() {
    return this.api.space;
  }

  get id() {
    return this._raw.id;
  }

  get isValid() {
    return this._eligibleVoteCreators.includes(this.author);
  }

  get name() {
    return this._raw.name;
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

  get nodeUrl() {
    return `http://localhost:5001/elasticvote/${this.api.space}/proposals/${this.id}`;
  }

  get snapshot() {
    return this._raw.snapshot;
  }

  get start() {
    return this._raw.start;
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

  action(action) {
    const domain = {
      name: 'ElasticDAO',
      chainId: 1,
    };

    const types = {
      Proposal: [
        { name: 'action', type: 'string' },
        { name: 'id', type: 'string' },
      ],
    };

    const value = {
      action,
      id: this.id,
    };

    return { domain, types, value };
  }

  didVote(address) {
    return !!this.myVote(address);
  }

  async finalize() {
    if (!this.sdk.signer) {
      return false;
    }

    const address = this.sdk.account;
    const signTypedData = (
      this.sdk.signer._signTypedData || this.sdk.signer.signTypedData
    ).bind(this.sdk.signer);

    const action = 'finalize';
    const { domain, types, value } = this.action(action);

    const signature = await signTypedData(domain, types, value);
    console.log('signature', signature);

    const response = await this.fetch(this.nodeUrl, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        address,
        signature,
      }),
    });

    console.log('response', await response.json());

    return response.json();
  }

  getScore(address) {
    const vote = this.vote(address);
    return BigNumber(vote ? vote.weight : 0);
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
