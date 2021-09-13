/* eslint class-methods-use-this: 0 */
import IPFSJsonBase from '../../IPFSJsonBase';
import IPFSVote from './IPFSVote';
/*
  Version 1.0.0:

  {
    proposal
    rewardsDenyList
    votes
  }
*/
export default class IPFSProposalIndex extends IPFSJsonBase {
  constructor(sdk, hash, cacheData) {
    super(sdk, hash, cacheData);
    this._votes = {};
  }

  get loaded() {
    const statuses = new Set();
    statuses.add(this.cache.has(this.id));

    const voters = Object.keys(this.votes);
    for (let i = 0; i < voters.length; i += 1) {
      statuses.add(this.votes[voters[i]].loaded);
    }

    return !statuses.has(false);
  }

  get promise() {
    if (this.loaded) {
      return Promise.resolve(this);
    }

    return new Promise((resolve) => {
      const key = `loading|${this.id}`;
      if (this.cache.has(key)) {
        // object has loaded, but we need to wait until all child objects are loaded / resolved
        Promise.all([
          this.proposal.promise(),
          ...Object.values(this.votes).map((vote) => vote.promise),
        ]).then(() => resolve(this));
      } else {
        // object has not loaded and we need to load all child objects after we load this.
        this.load()
          .then(() =>
            Promise.all([
              this.proposal.promise(),
              ...Object.values(this.votes).map((vote) => vote.promise),
            ]),
          )
          .then(() => resolve(this));
      }
    });
  }

  get proposal() {
    return this._proposal;
  }

  set proposal(_proposal) {
    this._proposal = _proposal;
  }

  get rewardsDenyList() {
    return this._value('rewardsDenyList');
  }

  get votes() {
    return this._votes || {};
  }

  async load(force = false, cacheData) {
    await super.load(force, cacheData);
    const voters = Object.keys(this._value('votes'));
    for (let i = 0; i < voters.length; i += 1) {
      const ipfsVote = new IPFSVote(this.sdk, this._value('votes')[voters[i]]);
      this._votes[voters[i]] = ipfsVote;
      ipfsVote.proposal = this.proposal;
    }
    return this;
  }

  toJSON() {
    const { proposal, rewardsDenyList, votes } = this;

    return {
      proposal,
      rewardsDenyList,
      votes,
    };
  }
}
