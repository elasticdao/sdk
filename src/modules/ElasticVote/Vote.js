import BigNumber from 'bignumber.js';

/* RAW
  author
  choice
  date
  voter
  proposal
  signature
*/

// 1. Update RAW to include version and signature.
// 2. Create queue of votes that are to be processed, when queue is empty
// we right to IPFS (reactor pattern  - https://gist.github.com/dmvt/ebe3236784a7adda11886b962971eb86)
// 3. back up intermediate state to redis to avoid node crash and loss of unprocessed voots.
// Add to redis when we add to queue, remove when we write to IPFS
// 4. Need serialization for the queue (array format / JSON)

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

  get nodeUrl() {
    return `${this.sdk.elasticNodeURL}/elasticvote/${this.api.space}/proposals/${this.proposal.id}/votes/${this.sdk.account}`;
  }

  async submitVote() {
    if (!this.sdk.signer) {
      return false;
    }

    const address = this.sdk.account;
    const action = 'submit';

    const value = {
      action,
      choice: this.choice,
      voter: address,
      proposal: this.proposal.id,
    };

    console.log('Transfer create sig data', Vote.types(), value);

    const signature = await this.sdk.signTypedDataOrMessage(
      Vote.types(),
      value,
    );

    console.log('signature', signature);

    const response = await this.fetch(this.nodeUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        choice: this.choice,
        voter: address,
        proposal: this.proposal.id,
        signature,
      }),
    });

    return response.json();
  }

  toJSON() {
    const { author, choice, date, id, proposal, signature, voter, weight } =
      this;

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
