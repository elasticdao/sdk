import BigNumber from 'bignumber.js';

/* RAW
  author
  choice
  date
  id
  voter
  proposal
  weight
  signature:
*/

// TODO: should this extend IPFSJson base and also ad versioning?
export default class Vote {
  constructor(api, proposal, raw) {
    this._api = api;
    this._proposal = proposal;
    this._raw = raw;
  }

  static types() {
    return {
      TransferRewards: [
        { name: 'choice', type: 'string' },
        { name: 'voter', type: 'address' },
        { name: 'proposal', type: 'string' },
      ],
    };
  }

  static domain() {
    return { name: 'ElasticDAO', chainId: 1 };
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

  get signature() {
    return this._raw.signature;
  }

  get voter() {
    return this._raw.voter.toLowerCase();
  }

  get weight() {
    return BigNumber(this._raw.weight);
  }

  async sign() {
    if (!this.sdk.signer) {
      return false;
    }
  }


  toJSON() {
    const { author, choice, date, id, proposal, signature, voter, weight } = this;

    return {
      author,
      choice,
      date,
      id,
      signature,
      voter,
      proposal: proposal.id,
      weight: weight.toFixed(18),
    };
  }
}
