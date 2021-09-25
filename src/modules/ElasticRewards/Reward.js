import { ethers } from 'ethers';
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

  constructor(sdk, api, raw) {
    super(sdk);

    this._api = api;
    this._raw = raw;
  }

  get action() {
    return this._raw.for.action;
  }

  get item() {
    if (this._raw.for.item) {
      const itemUUID = this._raw.for.item.uuid;

      if (itemUUID && this._raw.for.item.type === 'SnapshotProposal') {
        return this.sdk.modules
          .elasticVote(this.api.space)
          .proposals.find(({ id }) => id === itemUUID);
      }
      return this._raw.for.item;
    }
    return undefined;
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
    const toAddress = await (async () => {
      if (
        this.sdk.isValidETHAddress(this.to) &&
        !ethers.utils.isAddress(this.to)
      ) {
        return this.sdk.provider.resolveName(this.to);
      }
      if (
        this.sdk.isValidETHAddress(this.to) &&
        ethers.utils.isAddress(this.to)
      ) {
        return this.to;
      }
      return undefined;
    })();
    const action = 'transfer';
    const validNonce = await this.sdk.getNonceForAddress(address);
    const wadAmount = this.toEthersBigNumber(this.amount, 18);

    const value = {
      action,
      amount: wadAmount.toString(),
      fromAddress: this.from,
      toAddress,
      nonce: validNonce,
    };

    const signature = await this.sdk.signMessage(value);

    console.log('signature', signature);

    return { value, signature };
  }

  async patchTransfer({ value, signature }) {
    const response = await this.fetch(this.nodeUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: value.action,
        toAddress: value.toAddress,
        fromAddress: this.sdk.account,
        amount: this.amount,
        signature,
        nonce: value.nonce,
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
