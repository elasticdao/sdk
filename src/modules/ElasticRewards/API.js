/* eslint no-unused-expressions: 0 */

import { toBigNumber } from '../../utils';
import Cachable from '../../Cachable';
import Reward from './Reward';

const promises = {
  rewards: {},
};

export default class API extends Cachable {
  constructor(sdk, space) {
    super(sdk);

    this._space = space;
  }

  get space() {
    return this._space;
  }

  get url() {
    return `${this.sdk.elasticNodeURL}/elasticrewards/${this.space}`;
  }

  async getRewards(address) {
    const account = address.toLowerCase();

    let rewards = {
      balance: toBigNumber(0),
      data: undefined,
      expires: Date.now() + 60000, // expires after 1 minute
    };

    if (this.cache.has(account)) {
      rewards = this.cache.get(account);
    }

    if (!rewards.data && promises.rewards[account]) {
      rewards = await promises.rewards[account];
    } else if (!rewards.data || rewards.expires < Date.now()) {
      promises.rewards[account] = new Promise((resolve, reject) => {
        this.fetch(`${this.url}/rewards/${account}`, {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("API", json);
            rewards.data = json.rewards;
            rewards.balance = toBigNumber(json.balance);
            this.cache.set(account, rewards);
            resolve(rewards);
          })
          .catch((e) => {
            console.error('error loading rewards', e);
            reject(e);
          });
      });

      promises.rewards[account].finally(() => {
        delete promises.rewards[account];
      });

      rewards = await promises.rewards[account];
    }

    const rewardObjects = Object.values(rewards.data).map(
      (reward) => new Reward(this.sdk, this, reward),
    );

    return rewardObjects;
  }

  async getRewardsBalance(address) {
    const account = address.toLowerCase();
    await this.getRewards(account);
    return this.cache.get(account).balance;
  }
}
