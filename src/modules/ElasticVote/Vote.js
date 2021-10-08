import BigNumber from 'bignumber.js';
import Base from '../../Base';

/* RAW
  author
  choice
  date
  voter
  proposal
  signature
  nonce
*/

// 1. Update RAW to include version and signature.
// 2. Create queue of votes that are to be processed, when queue is empty
// we right to IPFS (reactor pattern  - https://gist.github.com/dmvt/ebe3236784a7adda11886b962971eb86)
// 3. back up intermediate state to redis to avoid node crash and loss of unprocessed voots.
// Add to redis when we add to queue, remove when we write to IPFS
// 4. Need serialization for the queue (array format / JSON)

export default class Vote extends Base {
  constructor(sdk, api, proposal, raw) {
    super(sdk);
    this._api = api;
    this._proposal = proposal;
    this._raw = raw;
  }

  static types() {
    return {
      Vote: [
        { name: 'choice', type: 'string' },
        { name: 'voter', type: 'address' },
        { name: 'proposal', type: 'string' },
        { name: 'nonce', type: 'uint256' },
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
    return this._raw.date;
  }

  get id() {
    return this._raw.id;
  }

  get nonce() {
    return this._raw.nonce;
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
    return `${this._api.sdk.elasticNodeURL}/elasticvote/${this._api.space}/proposals/${this.proposal.id}/votes`;
  }

  async submitVote() {
    if (!this._api.sdk.signer) {
      return false;
    }

    const address = this._api.sdk.account;
    const action = 'submit';

    this._raw.nonce = await this._api.sdk.getNonceForAddress(address);

    const value = {
      choice: this.choice,
      voter: address.toLowerCase(),
      proposal: this.proposal.id,
      nonce: this.nonce,
    };

    const signature = await this._api.sdk.signMessage(value);
    return { action, value, signature };
  }

  async patchVote({ action, value, signature }) {
    const response = await this.fetch(this.nodeUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        choice: value.choice,
        voter: value.voter,
        proposal: value.proposal,
        signature,
        nonce: value.nonce,
      }),
    });

    return response.json();
  }

  toJSON() {
    const { author, choice, date, id, nonce, proposal, signature, voter } =
      this;

    return {
      author,
      choice,
      date,
      id,
      nonce,
      proposal: proposal.id,
      signature,
      voter,
    };
  }
}
