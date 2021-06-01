import { subject } from './observables';
import { toKey } from './utils';

const cache = {};

export default class BaseEvents {
  constructor(target) {
    this.target = target;
  }

  async observeEvent({ eventName, filterArgs, keyBase, subjectBase }) {
    const key = toKey(keyBase, eventName, 'Event');
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = subject(toKey(subjectBase, eventName, 'Event'));
    const contract = await this.target.readonlyContract;
    const trackedEvent = contract.filters[eventName](...(filterArgs || []));
    contract.on(trackedEvent, (...args) => {
      cache[key].next(...args);
    });
    return cache[key];
  }
}
