import BigNumber from 'bignumber.js';
import Base from '../../Base';

/*
Version 1.0.0:

{
  amount: String,
  block: Number,
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
  to: Address,
  verification: {
    reason: String,
    required: Boolean,
  },
  version: '1.0.0',
}
*/
export default class Reward extends Base {
  constructor(sdk, raw) {
    super(sdk);

    this._raw = raw;

    if (this.version !== '1.0.0') {
      console.warn(
        '@elastic-dao/sdk - modules/ElasticRewards/Reward.js: Reward version unknown',
        this.version,
      );
    }
  }

  get action() {
    return this._raw.for.action;
  }

  get amount() {
    return new BigNumber(this._raw.amount);
  }

  get block() {
    return this._raw.block;
  }

  get ens() {
    return this._raw.ens;
  }

  get from() {
    return this._raw.from;
  }

  get id() {
    return this._raw.hash;
  }

  get item() {
    if (!this._raw.for.item) {
      return {};
    }

    if (this._raw.for.item.type === 'SnapshotProposal') {
      return this.sdk.modules
        .elasticVote(this.ens)
        .proposals.find(({ id }) => id === this._raw.for.item.uuid);
    }

    return this._raw.for.item.uuid;
  }

  get message() {
    return this._raw.for.message;
  }

  get to() {
    return this._raw.to;
  }

  get verification() {
    return this._raw.verification;
  }

  get version() {
    return this._raw.version;
  }

  async getENSRecord() {
    return this.sdk.provider.getResolver(this.ens);
  }

  toJSON() {
    return this.toVersion(this.version);
  }

  toVersion(version) {
    if (version === '1.0.0') {
      return {
        amount: this.amount.toFixed(18),
        block: this.block,
        ens: this.ens,
        for: {
          action: this.action,
          item: this._raw.for.item,
          message: this.message,
        },
        from: this.from,
        hash: this.id,
        to: this.to,
        verification: this.verification,
        version: '1.0.0',
      };
    }

    throw new Error(
      '@elastic-dao/sdk - modules/ElasticRewards/Reward.js: Reward version unknown',
      version,
    );
  }
}
