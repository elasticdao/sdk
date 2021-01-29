import { ethers } from 'ethers';
import { validateIsAddress } from '@pie-dao/utils';
import BalanceClass from './models/Balance';
import BalanceMultipliersClass from './models/BalanceMultipliers';
import Base from './Base';
import DAOClass from './models/DAO';
import EcosystemClass from './models/Ecosystem';
import ElasticDAOClass from './ElasticDAO';
import ElasticDAOFactoryClass from './ElasticDAOFactory';
import TokenClass from './models/Token';
import TokenHolderClass from './models/TokenHolder';

import { buildError, upTo, validate } from './utils';

const prefix = '@elastic-dao/sdk';

export {
  capitalDelta,
  deltaE,
  lambdaFromT,
  mDash,
  revamp,
  t,
} from './elasticMath';

export { isBalance, validateIsBalance } from './models/Balance';
export {
  isBalanceMultipliers,
  validateIsBalanceMultipliers,
} from './models/BalanceMultipliers';
export { isDAO, validateIsDAO } from './models/DAO';
export { isEcosystem, validateIsEcosystem } from './models/Ecosystem';
export { isToken, validateIsToken } from './models/Token';
export { isTokenHolder, validateIsTokenHolder } from './models/TokenHolder';

export const Balance = BalanceClass;
export const BalanceMultipliers = BalanceMultipliersClass;
export const DAO = DAOClass;
export const Ecosystem = EcosystemClass;
export const ElasticDAO = ElasticDAOClass;
export const ElasticDAOFactory = ElasticDAOFactoryClass;
export const Token = TokenClass;
export const TokenHolder = TokenHolderClass;

export const utils = {
  buildError,
  upTo,
  validate,
};

export class Models extends Base {
  get Balance() {
    return {
      contract: (...args) => Balance.contract(this.sdk, ...args),
      deserialize: (...args) => Balance.deserialize(this.sdk, ...args),
    };
  }

  get BalanceMultipliers() {
    return {
      contract: (...args) => BalanceMultipliers.contract(this.sdk, ...args),
      deserialize: (...args) =>
        BalanceMultipliers.deserialize(this.sdk, ...args),
    };
  }

  get DAO() {
    return {
      contract: (...args) => DAO.contract(this.sdk, ...args),
      deserialize: (...args) => DAO.deserialize(this.sdk, ...args),
    };
  }

  get Ecosystem() {
    return {
      contract: (...args) => Ecosystem.contract(this.sdk, ...args),
      deserialize: (...args) => Ecosystem.deserialize(this.sdk, ...args),
    };
  }

  get Token() {
    return {
      contract: (...args) => Token.contract(this.sdk, ...args),
      deserialize: (...args) => Token.deserialize(this.sdk, ...args),
    };
  }

  get TokenHolder() {
    return {
      contract: (...args) => TokenHolder.contract(this.sdk, ...args),
      deserialize: (...args) => TokenHolder.deserialize(this.sdk, ...args),
    };
  }
}

export class SDK {
  constructor({ account, contract, env, provider, signer }) {
    if (!env.elasticDAO) {
      const message = "env is missing key 'elasticDAO'";
      throw new TypeError(buildError({ message, prefix }));
    }

    validateIsAddress(env.elasticDAO.balanceModelAddress, { prefix });
    validateIsAddress(env.elasticDAO.balanceMultipliersModelAddress, {
      prefix,
    });
    validateIsAddress(env.elasticDAO.daoModelAddress, { prefix });
    validateIsAddress(env.elasticDAO.ecosystemModelAddress, { prefix });
    validateIsAddress(env.elasticDAO.factoryAddress, { prefix });
    validateIsAddress(env.elasticDAO.tokenModelAddress, { prefix });
    validateIsAddress(env.elasticDAO.tokenHolderModelAddress, { prefix });

    this.account = account;
    this.contract = contract;
    this.env = env;
    this.provider = provider;
    this.signer = signer;
  }

  get elasticDAOFactory() {
    return new ElasticDAOFactory(this);
  }

  get models() {
    return new Models(this);
  }

  changeSigner(signer) {
    this.account = signer.address;
    this.contract = ({ address, abi }) =>
      new ethers.Contract(address, abi, signer);
    this.signer = signer;
  }
}
