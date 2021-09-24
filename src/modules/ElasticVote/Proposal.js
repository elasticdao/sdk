/* eslint class-methods-use-this: 0 */

import BigNumber from 'bignumber.js';
import Base from '../../Base';

/* RAW:
  abstain
  active
  author
  body
  choices
  closed
  end
  id
  name
  no
  pending
  quorum
  signature
  snapshot
  start
  status
  voteCount
  voted
  yes
  nonce
*/

export default class Proposal extends Base {
  constructor(sdk, api, raw) {
    super(sdk);

    this._api = api;
    this._raw = raw;
    this._votes = {};
  }

  get abstain() {
    return BigNumber(this._raw.abstain);
  }

  get active() {
    return this._raw.active;
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
    return this._raw.closed;
  }

  get end() {
    return this._raw.end;
  }

  get ens() {
    return this.api.space;
  }

  get finalized() {
    return this._raw.finalized;
  }

  get id() {
    return this._raw.id;
  }

  get isValid() {
    return true;
  }

  get name() {
    return this._raw.name;
  }

  get nonce() {
    return this._raw.nonce;
  }

  get no() {
    return BigNumber(this._raw.no);
  }

  get pending() {
    return this._raw.pending;
  }

  get quorum() {
    return BigNumber(this._raw.quorum);
  }

  get nodeUrl() {
    if (this.id) {
      return `${this.sdk.elasticNodeURL}/elasticvote/${this.api.space}/proposals/${this.id}`;
    }

    return `${this.sdk.elasticNodeURL}/elasticvote/${this.api.space}/proposals`;
  }

  get signature() {
    return this._raw.signature;
  }

  get snapshot() {
    return this._raw.snapshot;
  }

  get start() {
    return this._raw.start;
  }

  get status() {
    return this._raw.status;
  }

  get voted() {
    return this._raw.voted;
  }

  get votes() {
    return Object.values(this._votes).filter(({ weight }) =>
      BigNumber(weight).isGreaterThan(0),
    );
  }

  get yes() {
    return BigNumber(this._raw.yes);
  }

  action(action) {
    if (action === 'create') {
      const types = {
        Proposal: [
          { name: 'action', type: 'string' },
          { name: 'name', type: 'string' },
          { name: 'body', type: 'string' },
          { name: 'start', type: 'uint256' },
          { name: 'end', type: 'uint256' },
          { name: 'snapshot', type: 'uint256' },
          { name: 'nonce', type: 'uint256' },
        ],
      };

      const value = {
        action,
        name: this.name,
        body: this.body,
        start: this.start,
        end: this.end,
        snapshot: this.snapshot,
        nonce: this.nonce,
      };

      return { types, value };
    }

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

    return { types, value };
  }

  async create() {
    if (!this.sdk.signer) {
      return false;
    }

    const address = this.sdk.account;

    const action = 'create';

    this._raw.nonce = await this.sdk.getNonceForAddress(address);
    const { value } = this.action(action);

    const signature = await this.sdk.basicEipSign(value);
    const response = await this.fetch(this.nodeUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        address,
        proposal: value,
        signature,
      }),
    });

    return response.json();
  }

  didVote(address) {
    return !!this.vote(address);
  }

  async finalize() {
    if (!this.sdk.signer) {
      return false;
    }

    const address = this.sdk.account;
    const action = 'finalize';
    const { value } = this.action(action);

    const signature = await this.sdk.basicEipSign(value);

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
        votes[vote.voter] = vote;
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
      nonce,
      pending,
      quorum,
      signature,
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
      nonce,
      pending,
      quorum,
      signature,
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
