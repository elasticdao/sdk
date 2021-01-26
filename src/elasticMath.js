// import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
// import Base from './Base';

// const bigNumber = new BigNumber();
// const base = new Base();

export const capitalDelta = (totalEthValue, totalSupplyOfTokens) => {
  const capitalDeltaValue = BigNumber(totalEthValue.toString())
    .dividedBy(totalSupplyOfTokens.toString())
    .dp(18);
  return capitalDeltaValue;
};

export const deltaE = (
  deltaLambda,
  capitalDeltaValue,
  k,
  elasticity,
  lambda,
  m,
) => {
  // mDash = ( lambdaDash / lambda ) * m
  // deltaE =  ( capitalDelta * k ( ( lambdaDash * mDash * ( 1 + elasticity ) ) - lambda * m )
  //     a - capitalDelta*k
  //     b - 1 + elasticity
  //     c - lambda * m
  //     d - lambdaDash * mDash
  // deltaE = ( a * ( ( d * b ) - c ) ) )

  const a = BigNumber(capitalDeltaValue.toString()).times(k.toString()).dp(18);
  const b = BigNumber('1').plus(elasticity.toString());
  const c = BigNumber(lambda.toString()).times(m.toString()).dp(18);
  const lambdaDash = BigNumber(lambda.toString()).plus(deltaLambda.toString());
  const mDash = BigNumber(lambdaDash.div(lambda.toString()))
    .dp(18)
    .times(m.toString())
    .dp(18);
  const d = lambdaDash.times(mDash.toString()).dp(18);

  return a.times(d.times(b).minus(c)).dp(18);
};

export const lambdaFromT = (t, k, m) => {
  // lambda = t / ( m * k)
  // a = m * k
  // lambda = t / a

  const a = BigNumber(m.toString()).times(k.toString()).dp(18);
  return BigNumber(t.toString()).div(a).dp(18);
};

export const mDash = (lambdaDash, lambda, m) => {
  // mDash = ( lambdaDash / lambda ) * m
  // a = lambdaDash / lambda
  // mDash = a * m

  const a = BigNumber(lambdaDash.toString()).div(lambda.toString()).dp(18);
  return a.times(m.toString()).dp(18);
};

export const revamp = (elasticity) =>
  BigNumber('1').plus(elasticity.toString());

export const t = (lambda, m, k) => {
  // t = lambda * m * k
  // a = lambda * m
  // t = a * k

  const a = BigNumber(lambda.toString()).times(m.toString()).dp(18);
  return a.times(k.toString()).dp(18);
};

export default { capitalDelta, deltaE, lambdaFromT, mDash, revamp, t };
