import { buildError } from '../../utils';
import IPFSJsonBase from '../../IPFSJsonBase';
import IPFSReward from './IPFSReward';

const localPrefix = '@elastic-dao/sdk - modules/ElasticRewards/Block.js';

/*
Version 1.0.0:

{
  ens: String,
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

  get previousBlock() {
    if (!this.loaded) {
      const { name } = this.constructor;
      const message = `${name} not yet loaded`;
      throw new Error(buildError({ localPrefix, message }));
    }

    if (this._previousBlock) {
      return this._previousBlock;
    }

    if (!this.cached.previousBlock) {
      return undefined;
    }

    this._previousBlock = new this.constructor(
      this.sdk,
      this.cached.previousBlock,
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

    this._rewards = this.hashes.map((hash) => new IPFSReward(this.sdk, hash));

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
        hash: this.id,
        hashes: this.hashes,
        previousBlock: this.cached.previousBlock,
        version: '1.0.0',
      };
    }

    const message = `Block version (${version}) unknown`;
    throw new Error(buildError({ localPrefix, message }));
  }
}
