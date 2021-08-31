import BigNumber from 'bignumber.js';

/* RAW
  author
  choice
  date
  id
  voter
  proposal
  weight
*/
export default class Vote {
  constructor(api, proposal, raw) {
    this._api = api;
    this._proposal = proposal;
    this._raw = raw;
  }

  get author() {
    return this._raw.author.toLowerCase();
  }

  get choice() {
    return this._raw.choice;
  }

  get date() {
    return new Date(this._raw.date);
  }

  get id() {
    return this._raw.id;
  }

  get proposal() {
    return this._proposal;
  }

  get voter() {
    return this._raw.voter.toLowerCase();
  }

  get weight() {
    return BigNumber(this._raw.weight);
  }

  toJSON() {
    const { author, choice, date, id, proposal, voter, weight } = this;

    return {
      author,
      choice,
      date,
      id,
      voter,
      proposal: proposal.id,
      weight: weight.toFixed(18),
    };
  }
}
