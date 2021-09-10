/* eslint class-methods-use-this: 0 */
import IPFSJsonBase from '../../IPFSJsonBase';
import IPFSProposal from './IPFSProposal';
import IPFSProposalIndex from './IPFSProposalIndex';
import IPFSBlockData from './IPFSBlockData';

/*
  Version 1.0.0:

  {
    ens
    proposals
    blocks
    previousBlock
  }
*/
export default class IPFSBlock extends IPFSJsonBase {
  constructor(sdk, hash, cacheData) {
    super(sdk, hash, cacheData);
    this._proposals = [];
    this._proposalIndices = {};
    this._blocks = {};
  }

  get promise() {
    if (this.loaded) {
      console.log('IPFSBlock - 29');
      return Promise.resolve(this);
    }

    return new Promise((resolve) => {
      const key = `loading|${this.id}`;
      if (this.cache.has(key)) {
        // object has not loaded and we need to load all child objects after we load this.
        this.load()
          .then(() =>
            Promise.all([
              ...this.proposals.map((proposal) => proposal.promise),
              ...Object.values(this.blocks).map(
                (blockData) => blockData.promise,
              ),
            ]),
          )
          .then(() => resolve(this));
      } else {
        // object has loaded, but we need to wait until all child objects are loaded / resolved
        Promise.all([
          ...this.proposals.map((proposal) => proposal.promise),
          ...Object.values(this.blocks).map((blockData) => blockData.promise),
        ]).then(() => resolve(this));
      }
    });
  }

  get loaded() {
    const statuses = new Set();
    statuses.add(this.cache.has(this.id));
    for (let i = 0; i < this.proposals.length; i += 1) {
      statuses.add(this.proposals[i].loaded);
    }

    const blockNumbers = Object.keys(this.blocks);
    for (let i = 0; i < blockNumbers.length; i += 1) {
      statuses.add(this.blocks[blockNumbers[i]].loaded);
    }

    return !statuses.has(false);
  }

  /**
   * represent eth block numbers and their associated data.
   */
  get blocks() {
    return this._blocks || {};
  }

  get ens() {
    return this._value('ens');
  }

  get previousBlock() {
    return new IPFSBlock(this.sdk, this._value('previousBlock'));
  }

  get proposals() {
    return this._proposals || [];
  }

  get proposalIndices() {
    return this._proposalIndices;
  }

  async load(force = false, cacheData) {
    await super.load(force, cacheData);
    const proposalHashes = Object.keys(this._value('proposals'));
    console.log('proposalHashes', proposalHashes);
    for (let i = 0; i < proposalHashes.length; i += 1) {
      const proposalHash = proposalHashes[i];
      const proposal = new IPFSProposal(this.sdk, proposalHash);
      const proposalIndex = new IPFSProposalIndex(
        this.sdk,
        this._value('proposals')[proposalHash],
      );

      proposal.index = proposalIndex;
      proposal.block = this;
      this._proposals.push(proposal);
      this._proposalIndices[proposalHash] = proposalIndex;
    }

    await Promise.all(this.proposals.map((proposal) => proposal.promise));
    const blockNumbers = Object.keys(this._value('blocks'));
    for (let i = 0; i < blockNumbers.length; i += 1) {
      this._blocks[blockNumbers[i]] = new IPFSBlockData(
        this.sdk,
        this._value('blocks')[blockNumbers[i]],
      );
    }

    return this;
  }

  toJSON() {
    return this.cache.get(this.id);
  }
}
