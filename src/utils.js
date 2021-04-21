import { ethers } from 'ethers';
import { isAddress, isNumber, validateIsNumber } from '@pie-dao/utils';
import BigNumber from 'bignumber.js';

const prefix = '@elastic-dao/sdk';

export const buildError = ({ message, localPrefix }) =>
  `${localPrefix || prefix}: ${message}`;

export const sanitizeOverrides = (requested = {}, readonlyMethod = false) => {
  const overrides = {};
  let validKeys = [];

  if (readonlyMethod) {
    validKeys = ['blockTag', 'synchronous'];

    if (requested.blockTag) {
      try {
        overrides.blockTag = this.toEthersBigNumber(requested.blockTag);
      } catch (e) {
        console.warn(
          `${prefix}: Requested override 'blockTag' (${requested.blockTag}) is invalid and was excluded (${e.message})`,
        );
      }
    }

    if (requested.synchronous) {
      overrides.synchronous = true;
    }
  } else {
    validKeys = ['from', 'gasLimit', 'gasPrice', 'nonce', 'value'];

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
  }

  Object.keys(requested).forEach((key) => {
    if (!validKeys.includes(key)) {
      console.warn(
        `${prefix}: Requested override '${key}' is not supported and was excluded`,
      );
    }
  });

  return overrides;
};

export const swapBigNumber = (obj) => {
  const swappedObj = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (ethers.BigNumber.isBigNumber(obj[key])) {
      swappedObj[key] = toBigNumber(obj[key], 18);
    } else if (BigNumber.isBigNumber(obj[key])) {
      swappedObj[key] = toEthersBigNumber(obj[key], 18);
    } else {
      swappedObj[key] = obj[key];
    }
  }
  return swappedObj;
};

export const toBigNumber = (value, decimalShift = 0) =>
  BigNumber(value.toString()).dividedBy(10 ** decimalShift);

export const toEthersBigNumber = (value, decimalShift = 0) =>
  ethers.BigNumber.from(
    BigNumber(value.toString())
      .multipliedBy(10 ** decimalShift)
      .dp(0)
      .toFixed(),
  );

export const toKey = (...args) =>
  args.map((arg) => `${arg}`.toLowerCase()).join('|');

export const toNumber = (value, decimalShift = 0) =>
  toBigNumber(value, decimalShift).toNumber();

export const upTo = (n) => {
  validateIsNumber(n);
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(i);
  }
  return arr;
};

export const validate = (result, options) => {
  const { level = 'error', message, throwError = true } = options;

  if (result) {
    return true;
  }

  const error = buildError({ message, prefix: options.prefix });

  if (throwError) {
    throw new TypeError(error);
  }

  console[level](error);
  return false;
};

export default {
  buildError,
  swapBigNumber,
  toBigNumber,
  toEthersBigNumber,
  toKey,
  toNumber,
  upTo,
  validate,
};
