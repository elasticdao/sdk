/* eslint class-methods-use-this: 0 */

import { ethers } from 'ethers';
import { isAddress, isNumber } from '@pie-dao/utils';
import BigNumber from 'bignumber.js';

const prefix = '@elastic-dao/sdk';
const validKeys = ['from', 'gasLimit', 'gasPrice', 'nonce', 'value'];

export default class Base {
  constructor(sdk) {
    this._sdk = sdk;
  }

  get sdk() {
    return this._sdk;
  }

  sanitizeOverrides(requested = {}) {
    const overrides = {};

    if (requested.from && isAddress(requested.from)) {
      overrides.from = requested.from;
    } else if (requested.from) {
      console.warn(
        `${prefix}: Requested override 'from' (${requested.from}) is not a valid address and was excluded`,
      );
    }

    if (requested.gasLimit) {
      try {
        overrides.gasLimit = this.toEthersBigNumber(requested.gasLimit);
      } catch (e) {
        console.warn(
          `${prefix}: Requested override 'gasLimit' (${requested.gasLimit}) is invalid and was excluded (${e.message})`,
        );
      }
    }

    if (requested.gasPrice) {
      try {
        overrides.gasPrice = this.toEthersBigNumber(requested.gasPrice);
      } catch (e) {
        console.warn(
          `${prefix}: Requested override 'gasPrice' (${requested.gasPrice}) is invalid and was excluded (${e.message})`,
        );
      }
    }

    if (requested.nonce && isNumber(requested.nonce)) {
      overrides.nonce = requested.nonce;
    } else if (requested.nonce) {
      console.warn(
        `${prefix}: Requested override 'nonce' (${requested.nonce}) is not a valid number and was excluded`,
      );
    }

    if (requested.value) {
      try {
        overrides.value = this.toEthersBigNumber(requested.value, 18);
      } catch (e) {
        console.warn(
          `${prefix}: Requested override 'value' (${requested.value}) is invalid and was excluded (${e.message})`,
        );
      }
    }

    Object.keys(requested).forEach((key) => {
      if (!validKeys.includes(key)) {
        console.warn(
          `${prefix}: Requested override '${key}' is not supported and was excluded`,
        );
      }
    });

    return overrides;
  }

  toBigNumber(value, decimalShift = 0) {
    return BigNumber(value.toString()).dividedBy(10 ** decimalShift);
  }

  toEthersBigNumber(value, decimalShift = 0) {
    return ethers.BigNumber.from(
      BigNumber(value.toString())
        .multipliedBy(10 ** decimalShift)
        .dp(0)
        .toFixed(),
    );
  }

  toNumber(value, decimalShift = 0) {
    return this.toBigNumber(value, decimalShift).toNumber();
  }
}
