import { subject } from './observables';

const cache = {};

export default class BaseEvents {
  constructor(target) {
    this.target = target;
  }

  async observeEvent({ eventName, filterArgs, keyBase, subjectBase }) {
    console.log('observeEvent', this.constructor.name, {
      eventName,
      filterArgs,
      keyBase,
      subjectBase,
    });
    const key = `${keyBase}${eventName}Event`;
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = subject(`${subjectBase}${eventName}Event`);
    const contract = await this.target.contract;
    const trackedEvent = contract.filters[eventName](...(filterArgs || []));
    contract.on(trackedEvent, (...args) => {
      console.log('noticed a tracked event', key, ...args);
      cache[key].next.bind(cache[key]);
    });
    return cache[key];
  }
}
