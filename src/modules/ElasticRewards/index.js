import APIClass from './API';
import BlockClass from './Block';
import Cachable from '../../Cachable';
import RewardClass from './Reward';
import IPFSRewardClass from './IPFSReward';

class ElasticRewards extends Cachable {
  constructor(sdk, ens) {
    super(sdk);

    this._api = new APIClass(this.sdk, ens);
    this._ens = ens;
    this._rewards = {};
  }

  get api() {
    return this._api;
  }

  get ens() {
    return this._ens;
  }

  get rewards() {
    return this._rewards;
  }

  async load(address, reload = false) {
    const account = address.toLowerCase();

    try {
      if (
        this._rewards[account] &&
        this._rewards[account].length > 0 &&
        !reload
      ) {
        this.load(account, true);
        return this;
      }

      this._rewards[account] = await this.api.getRewards(account);
    } catch (e) {
      this._rewards[account] = [];
      console.warn('ElasticRewards unavailable', e);
    }
    return this;
  }
}

ElasticRewards.API = APIClass;
ElasticRewards.Block = BlockClass;
ElasticRewards.Reward = RewardClass;
ElasticRewards.IPFSReward = IPFSRewardClass;

export default ElasticRewards;
