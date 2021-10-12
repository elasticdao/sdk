import { ethers } from 'ethers';
import {
  isAddress,
  isFunction,
  isNumber,
  isPOJO,
  validateIsBigNumber,
  validateIsNumber,
} from '@pie-dao/utils';
import BigNumber from 'bignumber.js';

const prefix = '@elastic-dao/sdk';

export const amountFormatter = ({
  amount,
  approximatePrefix = '~',
  decimalPlaces = 3,
  decimalShift = 0,
  fromEthers = false,
  lessThanPrefix = '< ',
  maxDigits,
  rounding = BigNumber.ROUND_DOWN,
}) => {
  if (!amount) {
    return '';
  }

  let decimals = decimalPlaces;
  let value = BigNumber(amount.toString());

  if (fromEthers) {
    value = value.dividedBy(10 ** 18);
  }

  if (decimalShift) {
    value = value.multipliedBy(10 ** decimalShift);
  }

  validateIsBigNumber(value, { prefix: `${prefix} - amountFormatter` });

  if (isNumber(maxDigits)) {
    let left = 0;
    while (BigNumber(10 ** left).isLessThan(value)) {
      left += 1;
    }
    const maxDecimals = maxDigits - left;
    if (maxDecimals < 0) {
      decimals = 0;
    } else if (maxDecimals < decimals) {
      decimals = maxDecimals;
    }
  }

  if (value.isZero()) {
    return value.toFixed(decimals);
  }

  const smallest = BigNumber(1)
    .dividedBy(10 ** decimals)
    .toString();

  if (value.isGreaterThan(0) && value.isLessThan(smallest)) {
    return `${lessThanPrefix}${smallest}`;
  }

  const base = value.toFormat(decimals, rounding);

  if (value.isGreaterThan(base)) {
    return `${approximatePrefix}${base}`;
  }

  return base;
};

export const buildError = ({ message, localPrefix }) =>
  `${localPrefix || prefix}: ${message}`;

export const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

/**
 * Used for EIP 721 signatures
 */
export const domain = { name: 'ElasticDAO', chainId: 1 };

/**
 * Validates that the provided signature was created by the signerAddress passed in.
 * First attempt tries to use EIP 712 and if it fails will then attempt to use EIP191
 * on the hashed JSON of the value object passed in.
 * @param {*} types
 * @param {*} value
 * @param {*} signature
 * @param {*} signerAddress address that created the signature
 * @returns true if the signerAddress matches the address that created the signature
 */
export const isValidTypedDataOrMessageSignature = (
  types,
  value,
  signature,
  signerAddress,
) => {
  let verifiedAddress = ethers.utils.verifyTypedData(
    domain,
    types,
    value,
    signature,
  );

  if (signerAddress === verifiedAddress) {
    return true;
  }

  // attempt to validate with EIP 191
  verifiedAddress = ethers.utils.verifyMessage(
    JSON.stringify(value),
    signature,
  );

  return signerAddress === verifiedAddress;
};

export const sanitizeOverrides = (requested = {}, readonlyMethod = false) => {
  const overrides = {};
  let validKeys = [];

  if (readonlyMethod) {
    validKeys = ['blockTag', 'synchronous'];

    if (requested.blockTag) {
      try {
        overrides.blockTag = BigNumber(requested.blockTag).toNumber();
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
        overrides.gasLimit = toEthersBigNumber(requested.gasLimit);
      } catch (e) {
        console.warn(
          `${prefix}: Requested override 'gasLimit' (${requested.gasLimit}) is invalid and was excluded (${e.message})`,
        );
      }
    }

    if (requested.gasPrice) {
      try {
        overrides.gasPrice = toEthersBigNumber(requested.gasPrice);
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
        overrides.value = toEthersBigNumber(requested.value, 18);
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

export const toBigNumber = (value, decimalShift = 0) => {
  let normalizedValue = value;

  if (isPOJO(normalizedValue) && normalizedValue.type === 'BigNumber') {
    normalizedValue = ethers.BigNumber.from(normalizedValue);
  }

  if (isFunction(normalizedValue.toString)) {
    normalizedValue = normalizedValue.toString();
  }

  return BigNumber(normalizedValue).dividedBy(10 ** decimalShift);
};

export const toEthersBigNumber = (value, decimalShift = 0) =>
  ethers.BigNumber.from(
    BigNumber(value.toString())
      .multipliedBy(10 ** decimalShift)
      .dp(0)
      .toFixed(),
  );

export const toKey = (...args) =>
  args
    .map((arg) => `${arg}`.toLowerCase())
    .filter((arg) => arg.length > 0)
    .join('|');

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

export const truncate = (str, opts = {}) => {
  if (!str) {
    return '';
  }

  const ending = opts.ending || '...';
  const length = opts.length || 40;
  const truncateNumber = opts.truncateNumber || false;
  const decimalPlaces = opts.decimalPlaces || 0;

  if (truncateNumber) {
    // When trucating a number, it must be passed as a string
    const re = new RegExp(`^-?\\d+(?:.\\d{0,${decimalPlaces || -1}})?`);
    return str.match(re)[0];
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }

  return str;
};

/*
Rounding Types:
  ROUND_UP: 0 - Rounds away from zero
  ROUND_DOWN: 1 - Rounds towards zero
  ROUND_CEIL: 2 - Rounds towards Infinity
  ROUND_FLOOR: 3 - Rounds towards -Infinity
  ROUND_HALF_UP: 4 - Rounds towards nearest neighbour.
  If equidistant, rounds away from zero
  ROUND_HALF_DOWN: 5 - Rounds towards nearest neighbour.
  If equidistant, rounds towards zero
  ROUND_HALF_EVEN: 6 - Rounds towards nearest neighbour.
  If equidistant, rounds towards even neighbour
  ROUND_HALF_CEIL: 7 - Rounds towards nearest neighbour.
  If equidistant, rounds towards Infinity
  ROUND_HALF_FLOOR: 8 - Rounds towards nearest neighbour.
  If equidistant, rounds towards -Infinity
*/

export const round = (value, type = 1, decimalPlaces) => {
  const config = {
    DECIMAL_PLACES: decimalPlaces,
    ROUDING_MODE: type,
  };

  const BN = BigNumber.clone(config);

  const roundedNumber = new BN(value, 10);
  return roundedNumber;
};

export default {
  amountFormatter,
  buildError,
  domain,
  isValidTypedDataOrMessageSignature,
  swapBigNumber,
  toBigNumber,
  toEthersBigNumber,
  toKey,
  toNumber,
  truncate,
  upTo,
  validate,
  round,
};
