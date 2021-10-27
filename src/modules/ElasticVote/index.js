/* eslint no-await-in-loop: 0 */
import APIClass from './API';
import Cachable from '../../Cachable';
import ProposalClass from './Proposal';
import VoteClass from './Vote';

// proposals we don't want to show because ipfs is immutable.....

class ElasticVote extends Cachable {
  constructor(sdk, ens) {
    super(sdk);

    this._api = new APIClass(this.sdk, ens);
    this._ens = ens;
    this._proposals = [];
  }

  get api() {
    return this._api;
  }

  get ens() {
    return this._ens;
  }

  get block() {
    return this._ipfsBlock;
  }

  get proposals() {
    return [...this._proposals];
  }

  async load(reload = false) {
    try {
      if (this.proposals.length > 0 && !reload) {
        this.load(true);
        return this;
      }

      const proposals = await this.api.getProposals();
      this._proposals = await Promise.all(
        proposals.map(async (proposal) => proposal.load()),
      );
    } catch (e) {
      this._proposals = [];
      console.warn('ElasticVote node unavailable', e);
    }
    return this;
  }
}

ElasticVote.API = APIClass;
ElasticVote.Proposal = ProposalClass;
ElasticVote.Vote = VoteClass;

export default ElasticVote;
