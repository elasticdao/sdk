import ethers from 'ethers';
import Base from './Base';

const base = new Base();

export const capitalDelta = (totalEthValue, totalSupplyOfTokens) => {
  // capitalDelta =  eth / lambda
  const capitalDeltaValueEthers = ethers.BigNumber.div(
    base.toEthersBigNumber(totalEthValue, 18),
    base.toEthersBigNumber(totalSupplyOfTokens, 18),
  );

  return base.toBigNumber(capitalDeltaValueEthers, 18);
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

  const lambdaDash = ethers.BigNumber.sum(
    base.toEthersBigNumber(deltaLambda, 18),
    base.toEthersBigNumber(lambda, 18),
  );
  const mDash = ethers.BigNumber.mul(
    ethers.BigNumber.div(lambdaDash, base.toEthersBigNumber(lambda, 18)),
    base.toEthersBigNumber(m, 18),
  );

  const a = ethers.BigNumber.mul(
    base.toEthersBigNumber(capitalDeltaValue, 18),
    base.toEthersBigNumber(k, 18),
  );

  const b = ethers.BigNumber.add(
    base.toEthersBigNumber(1, 18),
    base.toEthersBigNumber(elasticity, 18),
  );

  const c = ethers.BigNumber.mul(
    base.toEthersBigNumber(lambda, 18),
    base.toEthersBigNumber(m, 18),
  );

  const d = ethers.BigNumber.mul(lambdaDash, mDash);
  const dMultipliedByb = ethers.BigNumber.mul(d, b);

  const deltaEValueEthers = ethers.BigNumber.mul(
    a,
    ethers.BigNumber.sub(dMultipliedByb, c),
  );

  return base.toBigNumber(deltaEValueEthers, 18);
};

export const lambdaFromT = (t, k, m) => {
  // lambda = t / ( m * k)
  // a = m * k
  // lambda = t / a
  const a = ethers.BigNumber.mul(
    base.toEthersBigNumber(m, 18),
    base.toEthersBigNumber(k, 18),
  );

  const lambdaFromTEthersValue = ethers.BigNumber.div(
    base.toEthersBigNumber(t, 18),
    a,
  );

  return base.toBigNumber(lambdaFromTEthersValue, 18);
};

export const mDash = (lambdaDash, lambda, m) => {
  // mDash = ( lambdaDash / lambda ) * m
  // a = lambdaDash / lambda
  // mDash = a * m

  const a = ethers.BigNumber.div(
    base.toEthersBigNumber(lambdaDash, 18),
    base.toEthersBigNumber(lambda, 18),
  );

  const mDashValueEthers = ethers.BigNumber.mul(
    a,
    base.toEthersBigNumber(m, 18),
  );

  return base.toBigNumber(mDashValueEthers, 18);
};

export const revamp = (elasticity) => {
  // revamp = 1 + elasticity
  const revampValueEthers = ethers.BigNumber.add(
    base.toEthersBigNumber(1, 18),
    base.toEthersBigNumber(elasticity, 18),
  );

  return base.toBigNumber(revampValueEthers, 18);
};

export const t = (lambda, m, k) => {
  // t = lambda * m * k
  // a = lambda * m
  // t = a * k

  const a = ethers.BigNumber.mul(
    base.toEthersBigNumber(lambda, 18),
    base.toEthersBigNumber(m, 18),
  );
  const tValueEthers = ethers.BigNumbers.mul(a, base.toEthersBigNumber(k, 18));

  return base.toBigNumber(tValueEthers, 18);
};

export default { capitalDelta, deltaE, lambdaFromT, mDash, revamp, t };
