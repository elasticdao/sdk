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

  async getENSRecord() {
    if (!this.loaded) {
      const { name } = this.constructor;
      const message = `${name} not yet loaded`;
      throw new Error(buildError({ localPrefix, message }));
    }

    return this.sdk.provider.getResolver(this.ens);
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
    } else if (version === '1.1.0') {
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
