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
import ElasticRewardsClass from './modules/ElasticRewards';
import ElasticVoteClass from './modules/ElasticVote';
import erc20 from './abis/ERC20.json';
import IPFS from './integrations/IPFS';
import LocalStorageAdapter from './adapters/LocalStorageAdapter';
import MulticallContract from './MulticallContract';
import MulticallQueue from './MulticallQueue';
import RedisAdapter from './adapters/RedisAdapter';
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

export const adapters = {
  LocalStorageAdapter,
  RedisAdapter,
};

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
    console.log(21.1);
    super(sdk);
    console.log(21.2);
    this._coinGecko = new CoinGecko(this.sdk);
    console.log(21.3);
    this._ipfs = new IPFS(this.sdk);
    console.log(21.4);
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

    this.elasticVoteModules[key] = new ElasticVoteClass(this.sdk, ens);

    return this.elasticVoteModules[key];
  }
}
Modules.ElasticRewards = ElasticRewardsClass;
Modules.ElasticVote = ElasticVoteClass;

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
    storageAdapter,
  }) {
    console.log('1');
    // TODO: option var type checking
    super();

    console.log('2');
    this.provider = provider || ethers.getDefaultProvider();
    console.log('3');
    this._storageAdapter = storageAdapter || new LocalStorageAdapter();
    console.log('4', this._storageAdapter);
    this._contract =
      contract || (({ address, abi }) => new ethers.Contract(address, abi));
    console.log('5');
    this.env = env;
    console.log('6');
    this.live = !!live;
    console.log('7');
    this.multicall = !!multicall;
    console.log('8');
    this.signer = signer;
    console.log('9');
    this.account = account;
    console.log('10');
    this.setName();
    console.log('11');

    this._balances = {};
    console.log('12');
    this._balancesToTrack = [];
    console.log('13');
    this._blockNumber = 0;
    console.log('14');
    this._ipfsGateways = ipfsGateways || [
      'https://gateway.pinata.cloud',
      'https://cloudflare-ipfs.com',
      'https://ipfs.fleek.co',
      'https://ipfs.io',
    ];
    console.log('15');

    if (this.account) {
      this.balanceOf(this.account);
      console.log('16');
    }

    this.provider.getBlockNumber().then((blockNumber) => {
      this._blockNumber = blockNumber;
    });
    console.log('17');

    this.provider.on('block', (blockNumber) => {
      this._blockNumber = blockNumber;
      this.updateBalances();
      this.touch();
    });
    console.log('18');

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
    console.log('19');

    if (this.multicall) {
      console.warn('@elastic-dao/sdk: multicall functionality is experimental');
      this._queue = new MulticallQueue(this);
    }
    console.log('20');

    if (this.env.blocknative) {
      this._notify = Notify(this.env.blocknative);
      this._notify.config({
        darkMode: true,
      });
    }
    console.log('21');

    this._integrations = new Integrations(this);
    console.log(22);
    this._models = new Models(this);
    console.log(23);
    this._modules = new Modules(this);
    console.log(24);
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

  get storageAdapter() {
    return this._storageAdapter;
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

  async sendETH(recipient, value) {
    let to = recipient;
    if (!ethers.utils.isAddress(to)) {
      // attempt to to resolve address from ENS
      to = await this.provider.resolveName(to);
      if (!to) {
        // resolving address failed.
        console.error('invalid to address / ENS');
        return;
      }
    }

    const tx = this.signer.sendTransaction({
      to,
      value: toEthersBigNumber(value, 18),
    });
    this.notify(tx);
    return tx;
  }

  async setName() {
    if (this.account) {
      this.name = shortenAddress(this.account);
      try {
        this.name = await this.provider.lookupAddress(this.account);
      } catch (e) {
        console.error('unable to look up ens name', e.message);
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
