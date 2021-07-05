import BigNumber from 'bignumber.js';

export default class SnapshotVote {
  constructor(api, proposal, raw) {
    this._api = api;
    this._proposal = proposal;
    this._raw = raw;
    this._weight = 0;
  }

  get author() {
    return this._raw.authorIpfsHash;
  }

  get choice() {
    return this.proposal.choices[this._raw.msg.payload.choice - 1];
  }

  get date() {
    return new Date(this._raw.msg.timestamp * 1000);
  }

  get id() {
    return this._raw.authorIpfsHash;
  }

  get proposal() {
    return this._proposal;
  }

  get voter() {
    return this._raw.address.toLowerCase();
  }

  get weight() {
    return BigNumber(this._weight);
  }

  load(balance) {
    try {
      this._weight = balance.balanceOfVoting;
    } catch (e) {
      this._weight = 0;
    }
    return this;
  }

  toJSON() {
    const { author, choice, date, id, voter, weight } = this;

    return { author, choice, date, id, voter, weight: weight.toFixed(18) };
  }
}
