/* eslint class-methods-use-this: 0 */

import {
  sanitizeOverrides,
  toBigNumber,
  toEthersBigNumber,
  toNumber,
} from './utils';
import Subscribable from './Subscribable';

export default class Base extends Subscribable {
  constructor(sdk) {
    super();
    this._sdk = sdk;
  }

  get fetch() {
    return this.sdk.fetch;
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

  toBigNumber(value, decimalShift = 0) {
    return toBigNumber(value, decimalShift);
  }

  toEthersBigNumber(value, decimalShift = 0) {
    return toEthersBigNumber(value, decimalShift);
  }

  toNumber(value, decimalShift = 0) {
    return toNumber(value, decimalShift);
  }
}
