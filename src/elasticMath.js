// import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
// import Base from './Base';

// const bigNumber = new BigNumber();
// const base = new Base();

export const capitalDelta = (totalEthValue, totalSupplyOfTokens) => {
  if (!totalEthValue || !totalSupplyOfTokens) {
    return BigNumber(0);
  }

  return BigNumber(totalEthValue.toString())
    .dividedBy(totalSupplyOfTokens.toString())
    .dp(18);
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
  // console.log('localSDK check: ');
  // console.log('test: deltaLambda: ', deltaLambda.toFixed());
  // console.log('test: capitalDeltaValue: ', capitalDeltaValue.toFixed());
  // console.log('test: k: ', k.toFixed());
  // console.log('test: elasticity: ', elasticity.toFixed());
  // console.log('test: lambda: ', lambda.toFixed());
  // console.log('test: m: ', m.toFixed());

  const lambdaDash = BigNumber(lambda.toString())
    .plus(deltaLambda.toString())
    .dp(18);
  // console.log('sdk: lambdadash: ', lambdaDash.toFixed());

  const a = BigNumber(capitalDeltaValue.toString()).times(k.toString()).dp(18);
  // console.log('sdk: a:', a.toFixed());

  const b = revamp(elasticity);
  // console.log('sdk: b:', b.toFixed());

  const c = BigNumber(lambda.toString()).times(m.toString()).dp(18);
  // console.log('sdk: c:', c.toFixed());

  const d = mDash(lambdaDash, lambda, m).dp(18);
  // console.log('sdk: d: ', d.toFixed());

  const e = d.times(b).dp(18);
  // console.log('sdk: e: ', e.toFixed());

  const f = lambdaDash.times(e).dp(18);
  // console.log('sdk: f: ', f.toFixed());

  const g = f.minus(c).dp(18);
  // console.log('sdk: g: ', g.toFixed());

  const deltaValue = a.times(g).dp(18);
  // console.log('sdk: deltaValue: ', deltaValue.toFixed());

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
