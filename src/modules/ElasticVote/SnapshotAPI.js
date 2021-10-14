/* eslint no-unused-expressions: 0 */

import Cachable from '../../Cachable';
import SnapshotProposal from './SnapshotProposal';
import SnapshotVote from './SnapshotVote';

const ApiUrl = 'https://hub.snapshot.org/graphql';

const queries = {
  proposals:
    'query Proposals { ' +
    'proposals(where: { space: "[SPACE]" }, orderBy: "created", orderDirection: desc) ' +
    '{ id title body choices start end snapshot state author } }',
  votes:
    'query Votes { ' +
    'votes(first: 1000, where: { proposal: "[PROPOSAL_ID]" }) ' +
    '{ id voter created choice } }',
};

const promises = {
  proposals: undefined,
  votes: {},
};

export default class SnapshotAPI extends Cachable {
  constructor(sdk, space, proposalsToFilter) {
    super(sdk);

    this._space = space;
    this._url = ApiUrl;
    this._proposalsToFilter = proposalsToFilter;
  }

  get space() {
    return this._space;
  }

  get url() {
    return this._url;
  }

  async getProposals() {
    const response = await this.fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operationName: 'Proposals',
        query: queries.proposals.replace('[SPACE]', this.space),
        variables: null,
      }),
    });
    const json = await response.json();
    const rawProposals = json.data.proposals.filter(
      ({ id }) => !this._proposalsToFilter.includes(id),
    );
    const proposals = await Promise.all(
      rawProposals.map(
        async (rawProposal) =>
          new SnapshotProposal(this.sdk, this, rawProposal),
      ),
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
    } else if (!votes.data) {
      promises.votes[proposal.id] = new Promise((resolve, reject) => {
        this.fetch(this.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            operationName: 'Votes',
            query: queries.votes.replace('[PROPOSAL_ID]', proposal.id),
            variables: null,
          }),
        })
          .then((response) => response.json())
          .then(({ data }) => {
            votes.data = data.votes;
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
      (vote) => new SnapshotVote(this, proposal, vote),
    );

    return voteObjects;
  }
}
