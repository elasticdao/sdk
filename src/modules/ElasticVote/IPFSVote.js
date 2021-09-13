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
    return this._value('proposal');
  }

  get signature() {
    return this._value('signature');
  }

  get voter() {
    return this._value('voter');
  }

  toJSON() {
    const { author, choice, date, nonce, proposal, signature, voter } = this;

    return {
      author,
      choice,
      date,
      nonce,
      proposal,
      signature,
      voter,
    };
  }
}
