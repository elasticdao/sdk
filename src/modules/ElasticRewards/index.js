import APIClass from './API';
import Cachable from '../../Cachable';
import RewardClass from './Reward';
import { toBigNumber } from '../../utils';

class ElasticRewards extends Cachable {
  constructor(sdk, ens) {
    super(sdk);

    this._api = new APIClass(this.sdk, ens);
    this._ens = ens;
    this._rewards = {};
    this._balances = {};
  }

  get api() {
    return this._api;
  }

  get balances() {
    return this._balances;
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
      this._balances[account] = await this.api.getRewardsBalance(account);
    } catch (e) {
      this._rewards[account] = [];
      this._balances[account] = toBigNumber(0);
      console.warn('ElasticRewards unavailable', e);
    }
    return this;
  }
}

ElasticRewards.API = APIClass;
ElasticRewards.Reward = RewardClass;

export default ElasticRewards;
