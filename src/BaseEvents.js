import Cache from './Cache';
import { subject } from './observables';
import { toKey } from './utils';

export default class BaseEvents {
  constructor(target) {
    this.target = target;

    this._cache = new Cache(this.target.sdk, 'BaseEvents.js', {
      persist: false,
    });
  }

  get cache() {
    return this._cache;
  }

  async observeEvent({ eventName, filterArgs, keyBase, subjectBase }) {
    const key = toKey(keyBase, eventName, 'Event');
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    this.cache.set(key, subject(toKey(subjectBase, eventName, 'Event')));
    const contract = await this.target.readonlyContract;
    const trackedEvent = contract.filters[eventName](...(filterArgs || []));
    contract.on(trackedEvent, (...args) => {
      this.cache.get(key).next(...args);
    });
    return this.cache.get(key);
  }
}
