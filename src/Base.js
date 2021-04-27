/* eslint class-methods-use-this: 0 */

import {
  sanitizeOverrides,
  toBigNumber,
  toEthersBigNumber,
  toNumber,
} from './utils';

export default class Base {
  constructor(sdk) {
    this._sdk = sdk;
    this._subscribers = [];
  }

  get sdk() {
    return this._sdk;
  }

  async cachedValue(key, lookup) {
    const promiseKey = `${key}Promise`;
    const deletePromise = () => {
      delete this[promiseKey];
    };

    if (this[promiseKey]) {
      await this[promiseKey].catch(deletePromise);
    }

    if (this[key]) {
      return this[key];
    }

    this[promiseKey] = lookup();
    await this[promiseKey].then(deletePromise, deletePromise);

    return this[key];
  }

  sanitizeOverrides(requested = {}) {
    return sanitizeOverrides(requested);
  }

  subscribe(callback) {
    callback(this);

    const subscriber = (obj) => {
      callback(obj);
    };

    this._subscribers.push(subscriber);

    return () => {
      this._subscribers = this._subscribers.filter((sub) => sub !== subscriber);
    };
  }

  toBigNumber(value, decimalShift = 0) {
    return toBigNumber(value, decimalShift);
  }

  toEthersBigNumber(value, decimalShift = 0) {
    return toEthersBigNumber(value, decimalShift);
  }

  toNumber(value, decimalShift = 0) {
    return toNumber(value, decimalShift);
  }

  touch() {
    this._subscribers.forEach((subscriber) => subscriber(this));
  }
}
