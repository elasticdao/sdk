/* eslint no-unused-expressions: 0 */

import Base from '../../Base';
import SnapshotProposal from './SnapshotProposal';
import SnapshotVote from './SnapshotVote';

const ApiUrl = 'https://hub.snapshot.page/api';

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
    const response = await fetch(url);
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
    const url = `${this.url}/${this.space}/proposal/${proposal.id}`;
    const response = await fetch(url);
    const json = await response.json();
    return Object.values(json).map(
      (vote) => new SnapshotVote(this, proposal, vote),
    );
  }
}
