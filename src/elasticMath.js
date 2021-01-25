// import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
// import Base from './Base';

// const bigNumber = new BigNumber();
// const base = new Base();

export const capitalDelta = (totalEthValue, totalSupplyOfTokens) => {
  const capitalDeltaValue = BigNumber(totalEthValue.toString())
    .dividedBy(totalSupplyOfTokens.toString())
    .dp(18, BigNumber.ROUND_DOWN);
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

  const a = BigNumber(capitalDeltaValue.toString()).times(k.toString());
  const b = BigNumber('1').plus(elasticity.toString());
  const c = BigNumber(lambda.toString()).times(m.toString());
  const lambdaDash = BigNumber(lambda.toString()).plus(deltaLambda.toString());
  const mDash = BigNumber(lambdaDash.div(lambda.toString())).times(
    m.toString(),
  );
  const d = lambdaDash.times(mDash.toString());

  const deltaEValue = a.times(d.times(b).minus(c)).dp(18, BigNumber.ROUND_DOWN);
  return deltaEValue;
};

export const lambdaFromT = (t, k, m) => {
  // lambda = t / ( m * k)
  // a = m * k
  // lambda = t / a

  const a = BigNumber(m.toString()).times(k.toString());
  const lambdaValue = BigNumber(t.toString())
    .div(a)
    .dp(18, BigNumber.ROUND_DOWN);
  return lambdaValue;
};

export const mDash = (lambdaDash, lambda, m) => {
  // mDash = ( lambdaDash / lambda ) * m
  // a = lambdaDash / lambda
  // mDash = a * m

  const a = BigNumber(lambdaDash.toString()).div(lambda.toString());
  const mDashValue = a.times(m.toString()).dp(18, BigNumber.ROUND_DOWN);
  return mDashValue;
};

export const revamp = (elasticity) => {
  // revamp = 1 + elasticity
  const revampValue = BigNumber('1')
    .plus(elasticity.toString())
    .dp(18, BigNumber.ROUND_DOWN);

  return revampValue;
};

export const t = (lambda, m, k) => {
  // t = lambda * m * k
  // a = lambda * m
  // t = a * k

  const a = BigNumber(lambda.toString()).times(m.toString());
  const tValue = a.times(k.toString()).dp(18, BigNumber.ROUND_DOWN);
  return tValue;
};

export default { capitalDelta, deltaE, lambdaFromT, mDash, revamp, t };
