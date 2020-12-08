import { validateIsNumber } from '@pie-dao/utils';

export const buildError = ({
  message,
  prefix = 'elasticdao.org/utils - validations',
}) => `${prefix}: ${message}`;

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
