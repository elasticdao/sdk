/* eslint consistent-return: 0 */

import { ethers } from 'ethers';
import { shortenAddress, validateIsAddress } from '@pie-dao/utils';
import Notify from 'bnc-notify';

import Base from './Base';
import CoinGecko from './integrations/CoinGecko';
import DAOClass from './models/DAO';
import EcosystemClass from './models/Ecosystem';
import ElasticDAOClass from './core/ElasticDAO';
import ElasticDAOFactoryClass from './core/ElasticDAOFactory';
import ElasticGovernanceTokenClass from './tokens/ElasticGovernanceToken';
import ElasticVote from './modules/ElasticVote';
import erc20 from './abis/ERC20.json';
import IPFS from './integrations/IPFS';
import MulticallContract from './MulticallContract';
import MulticallQueue from './MulticallQueue';
import Subscribable from './Subscribable';
import TokenClass from './models/Token';
import TokenHolderClass from './models/TokenHolder';

import {
  amountFormatter,
  buildError,
  swapBigNumber,
  toBigNumber,
  toEthersBigNumber,
  toKey,
  toNumber,
  upTo,
  validate,
  truncate,
} from './utils';

const prefix = '@elastic-dao/sdk';

export const erc20ABI = erc20;
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
  amountFormatter,
  buildError,
  swapBigNumber,
  toBigNumber,
  toEthersBigNumber,
  toKey,
  toNumber,
  upTo,
  validate,
  truncate,
};

export class Integrations extends Base {
  constructor(sdk) {
    super(sdk);
    this._coinGecko = new CoinGecko(this.sdk);
    this._ipfs = new IPFS(this.sdk);
  }

  get coinGecko() {
    return this._coinGecko;
  }

  ipfs(...args) {
    return this._ipfs.get(...args);
  }
}

export class Models extends Base {
  get DAO() {
    return {
      contract: (...args) => DAO.contract(this.sdk, ...args),
      deserialize: async (...args) => DAO.deserialize(this.sdk, ...args),
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

export class Modules extends Base {
  constructor(sdk) {
    super(sdk);
    this.elasticVoteModules = {};
  }

  elasticVote(ens) {
    const key = ens.toLowerCase();

    if (this.elasticVoteModules[key]) {
      return this.elasticVoteModules[key];
    }

    this.elasticVoteModules[key] = new ElasticVote(this.sdk, ens);

    return this.elasticVoteModules[key];
  }
}

export class SDK extends Subscribable {
  constructor({
    account,
    contract,
    customFetch,
    env,
    ipfsGateways,
    live,
    multicall,
    provider,
    signer,
  }) {
    // TODO: option var type checking
    super();

    this.provider = provider || ethers.getDefaultProvider();
    this._contract =
      contract || (({ address, abi }) => new ethers.Contract(address, abi));
    this.env = env;
    this.live = !!live;
    this.multicall = !!multicall;
    this.signer = signer;
    this.account = account;
    this.setName();

    this._balances = {};
    this._balancesToTrack = [];
    this._blockNumber = 0;
    this._ipfsGateways = ipfsGateways || [
      'https://gateway.pinata.cloud',
      'https://cloudflare-ipfs.com',
      'https://ipfs.fleek.co',
      'https://ipfs.io',
    ];

    if (this.account) {
      this.balanceOf(this.account);
    }

    this.provider.getBlockNumber().then((blockNumber) => {
      this._blockNumber = blockNumber;
    });

    this.provider.on('block', (blockNumber) => {
      this._blockNumber = blockNumber;
      this.updateBalances();
      this.touch();
    });

    if (customFetch) {
      this._fetch = customFetch;
    } else if (window && window.fetch) {
      this._fetch = window.fetch.bind(window);
    } else {
      throw new Error(
        '@elastic-dao/sdk: SDK constructor unable to find fetch. ' +
          "Please provide a compatible implementation via the 'customFetch' parameter.",
      );
    }

    if (this.multicall) {
      console.warn('@elastic-dao/sdk: multicall functionality is experimental');
      this._queue = new MulticallQueue(this);
    }

    if (this.env.blocknative) {
      this._notify = Notify(this.env.blocknative);
      this._notify.config({
        darkMode: true,
      });
    }

    this._integrations = new Integrations(this);
    this._models = new Models(this);
    this._modules = new Modules(this);
  }

  get balances() {
    return this._balances;
  }

  get blockNumber() {
    return this._blockNumber;
  }

  get elasticDAOFactory() {
    validateIsAddress(this.env.factoryAddress, { prefix });
    return new ElasticDAOFactory(this);
  }

  get fetch() {
    return this._fetch;
  }

  get integrations() {
    return this._integrations;
  }

  get ipfsGateways() {
    return this._ipfsGateways;
  }

  get models() {
    return this._models;
  }

  get modules() {
    return this._modules;
  }

  get queue() {
    return this._queue;
  }

  async balanceOf(address) {
    validateIsAddress(address);
    const key = address.toLowerCase();
    if (this._balances[key]) {
      return this._balances[key];
    }
    this._balances[key] = toBigNumber(await this.provider.getBalance(key), 18);
    this.touch();
    if (!this._balancesToTrack.includes(key)) {
      this._balancesToTrack.push(key);
    }
  }

  async changeSigner(signer) {
    this.account = signer.address;
    if (!this.account && signer.getAddress) {
      this.account = await signer.getAddress();
    }
    this.signer = signer;
    this.balanceOf(this.account);
    await this.setName();
    this.touch();
  }

  contract({ abi, address, readonly = false }) {
    const { provider, signer } = this;

    const connection = readonly ? provider : signer || provider;
    const contract = this._contract({ abi: abi || erc20, address }).connect(
      connection,
    );

    if (!this.multicall) {
      return contract;
    }

    return new MulticallContract(this, contract, abi);
  }

  async disconnectSigner() {
    this.account = undefined;
    this.signer = undefined;
    this.touch();
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

  async setName() {
    if (this.account) {
      try {
        this.name = await this.provider.lookupAddress(this.account);
      } catch (e) {
        console.error('unable to look up ens name', e.message);
      }
      if (!this.name) {
        this.name = shortenAddress(this.account);
      }
    }
  }

  async updateBalances() {
    const balances = await Promise.all(
      this._balancesToTrack.map((address) => this.provider.getBalance(address)),
    );
    for (let i = 0; i < balances.length; i += 1) {
      this._balances[this._balancesToTrack[i]] = toBigNumber(balances[i], 18);
    }
    this.touch();
  }
}
