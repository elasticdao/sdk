import Cache from './Cache';
import { subject } from './observables';
import { toKey } from './utils';

const cache = new Cache('BaseEvents.js', { persist: false });

export default class BaseEvents {
  constructor(target) {
    this.target = target;
  }

  async observeEvent({ eventName, filterArgs, keyBase, subjectBase }) {
    const key = toKey(keyBase, eventName, 'Event');
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, subject(toKey(subjectBase, eventName, 'Event')));
    const contract = await this.target.readonlyContract;
    const trackedEvent = contract.filters[eventName](...(filterArgs || []));
    contract.on(trackedEvent, (...args) => {
      cache.get(key).next(...args);
    });
    return cache.get(key);
  }
}
