import Base from '../../Base';

export default class ElasticRewards extends Base {
  constructor(sdk, ens) {
    super(sdk);

    this._ens = ens;
  }

  get ens() {
    return this._ens;
  }

  async getElasticVoteENSRecord() {
    const ensRecord = await this.getENSRecord();
    const elasticRewardsENS = await ensRecord.getText('elasticrewards');
    return this.sdk.provider.getResolver(elasticRewardsENS);
  }

  async index() {
    return this.cachedValue('_index', async () => {
      const hash = await this.indexHash();
      const raw = this.sdk.integrations.ipfs(hash);
      this._index = JSON.parse(raw);
      setTimeout(() => delete this._index, 3600000); // expire after 60 minutes
    });
  }

  async indexHash() {
    return this.cachedValue('_indexHash', async () => {
      const record = await this.getElasticVoteENSRecord();
      const contentHash = record.getContentHash();
      this._indexHash = contentHash.replace('ipfs://', '');
      setTimeout(() => delete this._indexHash, 300000); // expire after 5 minutes
    });
  }
}
