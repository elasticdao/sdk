/* eslint no-unused-expressions: 0 */

import Cachable from '../../Cachable';
import SnapshotProposal from './SnapshotProposal';
import SnapshotVote from './SnapshotVote';

const ApiUrl = 'https://hub.snapshot.page/api';

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
    const url = `${this.url}/${this.space}/proposals`;
    const response = await this.fetch(url);
    const json = await response.json();
    const validIds = Object.keys(json).filter(
      (id) => !this._proposalsToFilter.includes(id),
    );
    const proposals = await Promise.all(
      validIds.map(
        async (id) => new SnapshotProposal(this.sdk, this, json[id]),
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
      const url = `${this.url}/${this.space}/proposal/${proposal.id}`;
      const response = await this.fetch(url);
      votes = await response.json();
      this.cache.set(key, votes);
    }

    const voteObjects = Object.values(votes).map(
      (vote) => new SnapshotVote(this, proposal, vote),
    );

    return voteObjects;
  }
}
