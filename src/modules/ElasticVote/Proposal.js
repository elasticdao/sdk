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
  snapshot
  start
  status
  voteCount
  voted
  yes
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

  get id() {
    return this._raw.id;
  }

  get isValid() {
    return true;
  }

  get name() {
    return this._raw.name;
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
      return `http://localhost:5001/elasticvote/${this.api.space}/proposals/${this.id}`;
    }

    return `http://localhost:5001/elasticvote/${this.api.space}/proposals`;
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
    const domain = {
      name: 'ElasticDAO',
      chainId: 1,
    };

    if (action === 'create') {
      const types = {
        Proposal: [
          { name: 'action', type: 'string' },
          { name: 'name', type: 'string' },
          { name: 'body', type: 'string' },
          { name: 'start', type: 'uint256' },
          { name: 'end', type: 'uint256' },
          { name: 'snapshot', type: 'uint256' },
        ],
      };

      const value = {
        action,
        name: this.name,
        body: this.body,
        start: this.start,
        end: this.end,
        snapshot: this.snapshot,
      };

      return { domain, types, value };
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

    return { domain, types, value };
  }

  async create() {
    if (!this.sdk.signer) {
      return false;
    }

    const address = this.sdk.account;
    const signTypedData = (
      this.sdk.signer._signTypedData || this.sdk.signer.signTypedData
    ).bind(this.sdk.signer);

    const action = 'create';
    const { domain, types, value } = this.action(action);

    let signature;
    await signTypedData(domain, types, value)
      .then((sig) => {
        signature = sig;
      })
      .catch(async (error) => {
        // we need to try again if this was due to a HW signing issue.
        // check that the user didn't just reject the tx.
        console.log('EIP 712 Signature Failed', error);
        if (error.message.includes('User denied message signature')) {
          return;
        }
        console.log('EIP 191 Signature Request');
        console.log('proposal', JSON.stringify(value));
        signature = await this.sdk.signer.signMessage(JSON.stringify(value));
      });
    console.log('signature', signature);
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
