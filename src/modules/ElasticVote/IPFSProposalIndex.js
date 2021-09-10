/* eslint class-methods-use-this: 0 */
import IPFSJsonBase from '../../IPFSJsonBase';
import IPFSProposal from './IPFSProposal';

/*
  Version 1.0.0:

  {
    proposal
    rewardsDenyList
    votes
  }
*/
export default class IPFSProposalIndex extends IPFSJsonBase {
  get proposal() {
    return new IPFSProposal(this.sdk, this._value('proposal'));
  }

  get rewardsDenyList() {
    return this._value('rewardsDenyList');
  }

  get votes() {
    return this._value('votes'); // todo instantiate vote objects once created
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
