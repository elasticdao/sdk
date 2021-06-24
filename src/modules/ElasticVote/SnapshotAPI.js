/* eslint no-unused-expressions: 0 */

import Base from '../../Base';
import Cache from '../../Cache';
import SnapshotProposal from './SnapshotProposal';
import SnapshotVote from './SnapshotVote';

const ApiUrl = 'https://hub.snapshot.page/api';

const cache = new Cache('SnapshotAPI.js');

export default class SnapshotAPI extends Base {
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

    if (proposal.closed && cache.has(key)) {
      votes = cache.get(key);
    }

    if (!votes) {
      const url = `${this.url}/${this.space}/proposal/${proposal.id}`;
      const response = await this.fetch(url);
      votes = await response.json();
      cache.set(key, votes);
    }

    const voteObjects = Object.values(votes).map(
      (vote) => new SnapshotVote(this, proposal, vote),
    );

    return voteObjects;
  }
}
