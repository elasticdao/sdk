/* eslint consistent-return: 0 */

import { ethers } from 'ethers';
import { validateIsAddress } from '@pie-dao/utils';
import Notify from 'bnc-notify';
import Base from './Base';
import DAOClass from './models/DAO';
import EcosystemClass from './models/Ecosystem';
import ElasticDAOClass from './ElasticDAO';
import ElasticDAOFactoryClass from './ElasticDAOFactory';
import ElasticGovernanceTokenClass from './tokens/ElasticGovernanceToken';
import TokenClass from './models/Token';
import TokenHolderClass from './models/TokenHolder';

import {
  buildError,
  swapBigNumber,
  toBigNumber,
  toEthersBigNumber,
  toKey,
  toNumber,
  upTo,
  validate,
} from './utils';

const prefix = '@elastic-dao/sdk';

export { abi as DAOABI } from '../artifacts/DAO.json';
export { abi as EcosystemABI } from '../artifacts/Ecosystem.json';
export { abi as ElasticDAOABI } from '../artifacts/ElasticDAO.json';
export { abi as ElasticDAOFactoryABI } from '../artifacts/ElasticDAOFactory.json';
export { abi as ElasticGovernanceTokenABI } from '../artifacts/ElasticGovernanceToken.json';
export { abi as TokenABI } from '../artifacts/Token.json';
export { abi as TokenHolderABI } from '../artifacts/TokenHolder.json';
export { default as PieProxyABI } from './abis/PieProxy.json';

export {
  capitalDelta,
  deltaE,
  lambdaFromT,
  mDash,
  revamp,
  t,
} from './elasticMath';

export { isDAO, validateIsDAO } from './models/DAO';
export { isEcosystem, validateIsEcosystem } from './models/Ecosystem';
export { isToken, validateIsToken } from './models/Token';
export { isTokenHolder, validateIsTokenHolder } from './models/TokenHolder';

export const DAO = DAOClass;
export const Ecosystem = EcosystemClass;
export const ElasticDAO = ElasticDAOClass;
export const ElasticDAOFactory = ElasticDAOFactoryClass;
export const ElasticGovernanceToken = ElasticGovernanceTokenClass;
export const Token = TokenClass;
export const TokenHolder = TokenHolderClass;

export const utils = {
  buildError,
  swapBigNumber,
  toBigNumber,
  toEthersBigNumber,
  toKey,
  toNumber,
  upTo,
  validate,
};

export class Models extends Base {
  get DAO() {
    return {
      contract: (...args) => DAO.contract(this.sdk, ...args),
      deserialize: (...args) => DAO.deserialize(this.sdk, ...args),
      exists: (...args) => DAO.exists(this.sdk, ...args),
    };
  }

  get Ecosystem() {
    return {
      contract: (...args) => Ecosystem.contract(this.sdk, ...args),
      deserialize: (...args) => Ecosystem.deserialize(this.sdk, ...args),
      exists: (...args) => Ecosystem.exists(this.sdk, ...args),
    };
  }

  get Token() {
    return {
      contract: (...args) => Token.contract(this.sdk, ...args),
      deserialize: (...args) => Token.deserialize(this.sdk, ...args),
      exists: (...args) => Token.exists(this.sdk, ...args),
    };
  }

  get TokenHolder() {
    return {
      contract: (...args) => TokenHolder.contract(this.sdk, ...args),
      deserialize: (...args) => TokenHolder.deserialize(this.sdk, ...args),
      exists: (...args) => TokenHolder.exists(this.sdk, ...args),
    };
  }
}

export class SDK {
  constructor({ account, contract, env, live, provider, signer }) {
    this.provider = provider || ethers.getDefaultProvider();
    this.contract =
      contract ||
      (({ address, abi }) => new ethers.Contract(address, abi, this.provider));
    this.env = env;
    this.live = !!live;
    this.signer = signer;
    this.account = account;

    if (this.env.blocknative) {
      this._notify = Notify(this.env.blocknative);
      this._notify.config({
        darkMode: true,
      });
    }
  }

  get elasticDAOFactory() {
    validateIsAddress(this.env.factoryAddress, { prefix });
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

  notify({ hash, obj }) {
    if (!this._notify) {
      return;
    }

    if (hash) {
      this._notify.hash(hash);
    }

    if (obj) {
      return this._notify.notification(obj);
    }
  }
}
