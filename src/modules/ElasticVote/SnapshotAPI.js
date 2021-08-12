/* eslint no-unused-expressions: 0 */

import Cachable from '../../Cachable';
import SnapshotProposal from './SnapshotProposal';
import SnapshotVote from './SnapshotVote';

const ApiUrl = 'https://hub.snapshot.page/graphql';

const queries = {
  proposals:
    'query Proposals { ' +
    'proposals(where: { space: "[SPACE]" }, orderBy: "created", orderDirection: desc) ' +
    '{ id title body choices start end snapshot state author } }',
  votes:
    'query Votes { ' +
    'votes(where: { proposal: "[PROPOSAL_ID]" }) ' +
    '{ id voter created choice } }',
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
      mode: 'no-cors',
      cache: 'no-cache',
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
    let votes;
    const key = `${proposal.id}/votes`;

    if (proposal.closed && this.cache.has(key)) {
      votes = this.cache.get(key);
    }

    if (!votes) {
      const response = await this.fetch(this.url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operationName: 'Votes',
          query: queries.proposals.replace('[PROPOSAL_ID]', proposal.id),
          variables: null,
        }),
      });
      votes = await response.json();
      votes = votes.data.votes;
      this.cache.set(key, votes);
    }

    const voteObjects = Object.values(votes).map(
      (vote) => new SnapshotVote(this, proposal, vote),
    );

    return voteObjects;
  }
}
