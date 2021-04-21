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
  }

  get sdk() {
    return this._sdk;
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
