import Base from '../../Base';
import { t } from '../../elasticMath';

export default class Reward extends Base {
  // static functions to avoid issues with imports (rather than static fields)
  static types() {
    return {
      TransferRewards: [
        { name: 'action', type: 'string' },
        { name: 'amount', type: 'uint256' },
        { name: 'fromAddress', type: 'address' },
        { name: 'toAddress', type: 'address' },
        { name: 'nonce', type: 'uint256' },
      ],
    };
  }

  static domain() {
    return { name: 'ElasticDAO', chainId: 1 };
  }

  constructor(sdk, api, raw) {
    super(sdk);

    this._api = api;
    this._raw = raw;
  }

  get action() {
    return this._raw.for.action;
  }

  get item() {
    return this._raw.for.item;
  }

  get api() {
    return this._api;
  }

  get amount() {
    if (this._raw.amount) {
      return this._raw.amount;
    }
    return t(this.lambda, this.m, this.k);
  }

  get blockNumber() {
    return this._raw.blockNumber;
  }

  get from() {
    return this._raw.from;
  }

  get k() {
    return this._raw.k;
  }

  get lambda() {
    return this._raw.lambda;
  }

  get locked() {
    return this._raw.locked;
  }

  get m() {
    return this._raw.m;
  }

  get message() {
    return this._raw.for.message;
  }

  get hash() {
    return this._raw.hash;
  }

  get id() {
    return this.hash;
  }

  get for() {
    return this._raw.for;
  }

  get to() {
    return this._raw.to;
  }

  get signature() {
    return this._raw.verification.signature;
  }

  get nonce() {
    return this._raw.verification.nonce;
  }

  get verification() {
    return this._raw.verification;
  }

  get nodeUrl() {
    return `${this.sdk.elasticNodeURL}/elasticrewards/${this.api.space}/rewards/${this.sdk.account}`;
  }

  async transfer() {
    if (!this.sdk.signer) {
      return false;
    }

    const address = this.sdk.account;

    const action = 'transfer';
    const validNonce = await this.sdk.getNonceForAddress(address);
    const wadAmount = this.toEthersBigNumber(this.amount, 18);

    const value = {
      action,
      amount: wadAmount.toString(),
      fromAddress: this.from,
      toAddress: this.to,
      nonce: validNonce,
    };

    console.log(
      'Transfer create sig data',
      Reward.domain(),
      Reward.types(),
      value,
    );
    const signature = await this.sdk.signTypedDataOrMessage(
      Reward.domain(),
      Reward.types(),
      value,
    );
    console.log('signature', signature);

    const response = await this.fetch(this.nodeUrl, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        toAddress: this.to,
        fromAddress: address,
        amount: this.amount,
        signature,
        nonce: validNonce,
      }),
    });

    return response.json();
  }

  toJSON() {
    return {
      blockNumber: this.blockNumber,
      ens: this.api.space,
      for: this.for,
      action: this.action,
      item: this.item,
      from: this.from,
      hash: this.hash,
      k: this.k,
      lambda: this.lambda,
      locked: this.locked,
      m: this.m,
      to: this.to,
      verification: this.verification,
    };
  }
}
