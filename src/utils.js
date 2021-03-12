import { validateIsNumber } from '@pie-dao/utils';
import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';

import Base from './Base';

const base = new Base();

export const buildError = ({
  message,
  prefix = '@elastic-dao/sdk - validations',
}) => `${prefix}: ${message}`;

export const swapBigNumber = (obj) => {
  const swappedObj = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (ethers.BigNumber.isBigNumber(obj[key])) {
      swappedObj[key] = base.toBigNumber(obj[key], 18);
    } else if (BigNumber.isBigNumber(obj[key])) {
      swappedObj[key] = base.toEthersBigNumber(obj[key], 18);
    } else {
      swappedObj[key] = obj[key];
    }
  }
  return swappedObj;
};

export const toKey = (...args) =>
  args.map((arg) => `${arg}`.toLowerCase()).join('|');

export const upTo = (n) => {
  validateIsNumber(n);
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(i);
  }
  return arr;
};

export const validate = (result, options) => {
  const { level = 'error', message, prefix, throwError = true } = options;

  if (result) {
    return true;
  }

  const error = buildError({ message, prefix });

  if (throwError) {
    throw new TypeError(error);
  }

  console[level](error);
  return false;
};

export default {
  buildError,
  upTo,
  validate,
};
