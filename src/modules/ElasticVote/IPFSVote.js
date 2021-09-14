/* eslint class-methods-use-this: 0 */
import IPFSJsonBase from '../../IPFSJsonBase';

/*
  Version 1.0.0:

  {
    author
    choice
    date
    voter
    proposal
    signature
    nonce
  }
*/
export default class IPFSVote extends IPFSJsonBase {
  get author() {
    return this._value('author');
  }

  get choice() {
    return this._value('choice');
  }

  get date() {
    return new Date(this._value('date', 0) * 1000);
  }

  get nonce() {
    return this._value('nonce');
  }

  get proposal() {
    return this._proposal;
  }

  set proposal(_proposal) {
    this._proposal = _proposal;
  }

  get signature() {
    return this._value('signature');
  }

  get weight() {
    return this.proposal.balanceOfVoter(this.voter);
  }

  get voter() {
    return this._value('voter');
  }

  toJSON() {
    const { author, choice, date, id, nonce, proposal, signature, weight, voter } =
      this;

    return {
      author,
      choice,
      date,
      id,
      nonce,
      proposal: proposal.id,
      signature,
      weight,
      voter,
    };
  }
}
