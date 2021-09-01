import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';

import { buildError } from '../../utils';
import { t } from '../../elasticMath';
import IPFSJsonBase from '../../IPFSJsonBase';

const localPrefix = '@elastic-dao/sdk - modules/ElasticRewards/Reward.js';

/*
Version 1.0.0:

{
  blockNumber: Number,
  ens: ENSDomain,
  for: {
    action: String,
    item: {
      type: String,
      uuid: String,
    },
    message: String,
  },
  from: Address,
  hash: String,
  k: String,
  lambda: String,
  locked: Boolean,
  m: String,
  to: Address,
  verification: {
    reason: String,
    required: Boolean,
  },
  version: '1.0.0',
}

Version 1.1.0:

{
  blockNumber: Number,
  ens: ENSDomain,
  for: {
    action: String,
    item: {
      type: String,
      uuid: String,
    },
    message: String,
  },
  from: Address,
  hash: String,
  k: String,
  lambda: String,
  locked: Boolean,
  m: String,
  to: Address,
  verification: {
    reason: String,
    required: Boolean,
    signature: String,
  },
  version: '1.0.0',
}
*/
export default class Reward extends IPFSJsonBase {
  static types = {
    TransferRewards: [
      { name: 'action', type: 'string' },
      { name: 'amount', type: 'uint256' },
      { name: 'fromAddress', type: 'address' },
      { name: 'toAddress', type: 'address' },
    ],
  };

  static domain = {
    name: 'ElasticDAO',
    chainId: 1,
  };

  get action() {
    return this._value('for.action');
  }

  get amount() {
    return t(this.lambda, this.m, this.k);
  }

  get blockNumber() {
    return this._value('blockNumber');
  }

  get ens() {
    return this._value('ens');
  }

  get from() {
    return this._value('from', ethers.constants.AddressZero);
  }

  get item() {
    if (!this.loaded || !this._value('for.item', false)) {
      return {};
    }

    const itemUUID = this._value('for.item.uuid');

    if (this._value('for.item.type') === 'SnapshotProposal') {
      return this.sdk.modules
        .elasticVote(this.ens)
        .proposals.find(({ id }) => id === itemUUID);
    }

    return itemUUID;
  }

  get k() {
    return new BigNumber(this._value('k', 0));
  }

  get lambda() {
    return new BigNumber(this._value('lambda', 0));
  }

  get locked() {
    return this._value('locked', true);
  }

  get m() {
    return new BigNumber(this._value('m', 0));
  }

  get message() {
    return this._value('for.message');
  }

  get to() {
    return this._value('to', ethers.constants.AddressZero);
  }

  get verification() {
    return this._value('verification');
  }

  get version() {
    return this._value('version', '1.1.0');
  }

  get nodeUrl() {
    return `${this.sdk.elasticNodeURL}/elasticrewards/${this.api.space}/rewards/${this.sdk.account}`;
  }

  async getENSRecord() {
    if (!this.loaded) {
      const { name } = this.constructor;
      const message = `${name} not yet loaded`;
      throw new Error(buildError({ localPrefix, message }));
    }

    return this.sdk.provider.getResolver(this.ens);
  }

  action(action) {
    const domain = this.domain;
    const types = this.types;
    const amount = this.amount;

    if (action === 'transfer') {
      const value = {
        action,
        amount,
        fromAddress: this.from,
        toAddress: this.to,
      };

      return { domain, types, value };
    }

    return { domain, types, value };
  }

  async transfer() {
    if (!this.sdk.signer) {
      return false;
    }

    const address = this.sdk.account;
    const signTypedData = (
      this.sdk.signer._signTypedData || this.sdk.signer.signTypedData
    ).bind(this.sdk.signer);

    const action = 'transfer';
    const { domain, types, value } = this.action(action);

    console.log('Transfer create sig data', domain, types, value);
    const signature = await signTypedData(domain, types, value);
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
        toAddress: to,
        fromAddress: address,
        amount: this.amount,
        signature,
      }),
    });

    return response.json();
  }

  toJSON() {
    return this.toVersion(this.version);
  }

  toVersion(version) {
    if (!this.loaded) {
      const { name } = this.constructor;
      const message = `${name} not yet loaded`;
      throw new Error(buildError({ localPrefix, message }));
    }

    if (version === '1.0.0') {
      return {
        block: this.block,
        blockNumber: this.blockNumber,
        ens: this.ens,
        for: {
          action: this.action,
          item: this.cached.for.item,
          message: this.message,
        },
        from: this.from,
        hash: this.id,
        k: this.k.toFixed(18),
        lambda: this.lambda.toFixed(18),
        m: this.m.toFixed(18),
        to: this.to,
        verification: this.verification,
        version: '1.0.0',
      };
    }

    if (version === '1.1.0') {
      return {
        block: this.block,
        blockNumber: this.blockNumber,
        ens: this.ens,
        for: {
          action: this.action,
          item: this.cached.for.item,
          message: this.message,
        },
        from: this.from,
        hash: this.id,
        k: this.k.toFixed(18),
        lambda: this.lambda.toFixed(18),
        m: this.m.toFixed(18),
        to: this.to,
        verification: this.verification,
        version: '1.1.0',
      };
    }

    const message = `Reward version (${version}) unknown`;
    throw new Error(buildError({ localPrefix, message }));
  }
}
