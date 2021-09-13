/* eslint no-unused-expressions: 0 */

import Cachable from '../../Cachable';
import Proposal from './Proposal';
import Vote from './Vote';

const promises = {
  proposals: undefined,
  votes: {},
};

export default class API extends Cachable {
  constructor(sdk, space) {
    super(sdk);

    this._space = space;
  }

  get space() {
    return this._space;
  }

  get url() {
    return `${this.sdk.elasticNodeURL}/elasticvote/${this.space}`;
  }

  async getProposals() {
    const response = await this.fetch(`${this.url}/proposals`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    const rawProposals = json.proposals;
    const proposals = rawProposals.map(
      (rawProposal) => new Proposal(this.sdk, this, rawProposal),
    );
    return proposals;
  }

  async getVotes(proposal) {
    let votes = {
      data: undefined,
      expires: Date.now() + 60000, // expires after 1 minute
    };

    const key = `${proposal.id}/votes`;

    if (this.cache.has(key)) {
      votes = this.cache.get(key);
    }

    if (!votes.data && promises.votes[proposal.id]) {
      votes = await promises.votes[proposal.id];
    } else if (!votes.data || votes.expires < Date.now()) {
      promises.votes[proposal.id] = new Promise((resolve, reject) => {
        this.fetch(`${this.url}/proposals/${proposal.id}/votes`, {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((json) => {
            votes.data = json.votes;
            this.cache.set(key, votes);
            resolve(votes);
          })
          .catch((e) => {
            console.error('error loading votes', e);
            reject(e);
          });
      });

      promises.votes[proposal.id].finally(() => {
        delete promises.votes[proposal.id];
      });

      votes = await promises.votes[proposal.id];
    }

    const voteObjects = Object.values(votes.data).map(
      (vote) => new Vote(this.sdk, this, proposal, vote),
    );

    return voteObjects;
  }
}
