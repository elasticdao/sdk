import { buildError } from '../../utils';
import IPFSJsonBase from '../../IPFSJsonBase';
import Reward from './Reward';

const localPrefix = '@elastic-dao/sdk - modules/ElasticRewards/Block.js';

/*
Version 1.0.0:

{
  ens: String,
  for: {
    action: String,
    item: {
      type: String,
      uuid: String,
    },
    message: String,
  },
  hash: String
  hashes: [String,...],
  previousBlock: String,
  version: '1.0.0',
}
*/
export default class Block extends IPFSJsonBase {
  get action() {
    return this._value('for.action');
  }

  get ens() {
    return this._value('ens');
  }

  get hashes() {
    return this._value('hashes', []);
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

  get message() {
    return this._value('for.message');
  }

  get previousBlock() {
    if (!this.loaded) {
      const { name } = this.constructor;
      const message = `${name} not yet loaded`;
      throw new Error(buildError({ localPrefix, message }));
    }

    if (this._previousBlock) {
      return this._previousBlock;
    }

    this._previousBlock = this.constructor.load(
      this.sdk,
      this.cache.previousBlock,
    );

    return this._previousBlock;
  }

  get rewards() {
    if (!this.loaded) {
      return [];
    }

    if (this._rewards) {
      return this._rewards;
    }

    this._rewards = this.hashes.map((hash) => Reward.load(this.sdk, hash));

    return this._rewards;
  }

  get version() {
    return this._value('version', '1.0.0');
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
        ens: this.ens,
        for: {
          action: this.action,
          item: this.cache.for.item,
          message: this.message,
        },
        hash: this.id,
        hashes: this.hashes,
        previousBlock: this.cache.previousBlock,
        version: '1.0.0',
      };
    }

    const message = `Reward version (${version}) unknown`;
    throw new Error(buildError({ localPrefix, message }));
  }
}
