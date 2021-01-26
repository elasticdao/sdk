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
  const lambdaDash = BigNumber(lambda.toString()).plus(deltaLambda.toString());
  console.log('sdk: lambdadash: ', lambdaDash.toFixed());

  const a = BigNumber(capitalDeltaValue.toString()).times(k.toString()).dp(18);
  console.log('sdk: a:', a.toFixed());

  const b = revamp(elasticity);
  console.log('sdk: b:', b.toFixed());

  const c = BigNumber(lambda.toString()).times(m.toString()).dp(18);
  console.log('sdk: c:', c.toFixed());

  const d = mDash(lambdaDash, lambda, m);
  console.log('sdk: d: ', d.toFixed());

  const e = d.times(b);
  console.log('sdk: e: ', e.toFixed());

  const f = lambdaDash.times(e);
  console.log('sdk: f: ', f.toFixed());

  const g = f.minus(c);
  console.log('sdk: g: ', g.toFixed());

  const deltaValue = a.times(g);
  console.log('sdk: deltaValue: ', deltaValue.toFixed());

  return deltaValue;
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
