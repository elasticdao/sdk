/* eslint no-await-in-loop: 0 */
import BigNumber from 'bignumber.js';

import { chunkArray, toBigNumber } from '../../utils';
import { t } from '../../elasticMath';
import APIClass from './API';
import Cachable from '../../Cachable';
import ProposalClass from './Proposal';
import SnapshotAPIClass from './SnapshotAPI';
import SnapshotProposalClass from './SnapshotProposal';
import SnapshotVoteClass from './SnapshotVote';
import VoteClass from './Vote';

// proposals we don't want to show because ipfs is immutable.....
const ProposalsToFilter = [
  'QmeyUPyn41VnqAmFg2nsuKMAfFgr3YEZhXaiKENQYqSxhg',
  'QmVzxVWeE7hQKxW8mvqu5wVUDtS1KeYiLhCkPJUBkkW2tS',
  'QmWX9iLapic4ZR8V9CKFVZYRcGJkjsg2543DA6WpRPoUXa',
  'Qme7qpBPDhDLe1fUS2RmMQxKgaD3AJS6BV8xYiNYeh65ai',
  'QmV3LBzYawDig9nXpCdRKFDa3D8a5B9xyyXrChM8GR1F8M',
  'QmTBvPQickWCjYRFssQmCwKRjUFp1R1geaPZ3auENF7bcj',
  'QmXb6ugsNcpYeRSbSgLGXsqPWLxpW3YS4jzUD8xBzHtSzK',
  'QmUb8nUevErwgkfWHGTJgx3LbG1JQPtBD6GY94tUNqhHEq',
  'QmRVxJz2XvcWrL442t6ci3J7UA3zLYBN4m9Q3oPeBaeNBh',
  'QmX5kpCfKEGgjivrSTdbhdhjxWmj1Xo7ujeQVPv2SkeXJh',
  'QmSxYgaYPqHmuisA7Hgfdb1BcKufjmiPmwJJj5L1hyzS1D',
  'Qmb9BdVjUgtTiACeN8b63MXXRf1sG3FhxcwpWqAAqYog2u',
];

class ElasticVote extends Cachable {
  constructor(sdk, ens) {
    super(sdk);

    this._api = new APIClass(this.sdk, ens);
    this._ens = ens;
    this._proposals = [];
    this._ipfsProposals = [];
    this._snapshotAPI = new SnapshotAPIClass(this.sdk, ens, ProposalsToFilter);
  }

  get api() {
    return this._api;
  }

  get ens() {
    return this._ens;
  }

  get block() {
    return this._ipfsBlock;
  }

  get proposals() {
    return [...this._proposals, ...this._ipfsProposals];
  }

  get snapshotAPI() {
    return this._snapshotAPI;
  }

  async data(blockNumber, fuzzyMatch = true) {
    const index = await this.index();
    let closestBlock = blockNumber;

    if (
      typeof index.blocks.list.find((block) => block === blockNumber) ===
      'undefined'
    ) {
      if (fuzzyMatch) {
        closestBlock =
          index.blocks.list.reverse().find((block) => block <= blockNumber) ||
          index.blocks.list[0];
      }
    }

    const block = index.blocks[`${closestBlock}`];

    if (!block) {
      return undefined;
    }

    const [balancesRaw, statsRaw] = await Promise.all([
      this.sdk.integrations.ipfs(block.hash, block.balances),
      this.sdk.integrations.ipfs(block.hash, block.stats),
    ]);

    const data = {
      block,
      balances: JSON.parse(balancesRaw),
      stats: JSON.parse(statsRaw),
    };

    return data;
  }

  static async _createEligibleVoterBalanceData(
    overrides,
    additionalTokenBalances,
    dao,
    maxVotingTokens,
    holderAddress,
  ) {
    const additionalBalance = additionalTokenBalances[holderAddress] || 0;
    let balanceOf = await dao.elasticGovernanceToken.balanceOf(
      holderAddress,
      overrides,
    );
    balanceOf = balanceOf.plus(additionalBalance);

    if (balanceOf.isNaN() || balanceOf.isZero()) {
      return {
        balanceOf: 0,
        balanceOfVoting: 0,
      };
    }
    let balanceOfVoting = await dao.elasticGovernanceToken.balanceOfVoting(
      holderAddress,
      overrides,
    );
    balanceOfVoting = balanceOfVoting.plus(additionalBalance);

    if (balanceOfVoting.isGreaterThan(maxVotingTokens)) {
      balanceOfVoting = toBigNumber(maxVotingTokens);
    }

    return {
      balanceOf: balanceOf.toFixed(18),
      balanceOfVoting: balanceOfVoting.toFixed(18),
    };
  }

  async _getEligibleVoters(
    addressArray,
    additionalTokenBalances,
    overrides,
    dao,
    maxVotingTokens,
    retryCount,
    maxRetries,
  ) {
    if (retryCount > maxRetries) {
      // avoid infinite loop
      throw new Error(
        `failed to create voter data after ${maxRetries} retries`,
      );
    }
    let balances = {};
    const retryAddresses = [];
    await Promise.all(
      addressArray.map((holderAddress) =>
        ElasticVote._createEligibleVoterBalanceData(
          overrides,
          additionalTokenBalances,
          dao,
          maxVotingTokens,
          holderAddress,
        )
          .then((balance) => {
            if (toBigNumber(balance.balanceOf).isGreaterThan(0)) {
              balances[holderAddress] = balance;
            }
          })
          .catch((error) => {
            console.log('Error with address', holderAddress, error);
            retryAddresses.push(holderAddress);
          }),
      ),
    );
    if (retryAddresses.length > 0) {
      await new Promise((resolve) => setTimeout(resolve, 500)); // throttle api calls to alchemy
      balances = {
        ...balances,
        ...(await this._getEligibleVoters(
          retryAddresses,
          additionalTokenBalances,
          overrides,
          dao,
          maxVotingTokens,
          retryCount + 1,
          maxRetries,
        )),
      };
    }
    return balances;
  }

  async generateData(block, options = {}) {
    const existingBlockData = this.block.blocks[`${block}`];
    if (existingBlockData) {
      // return the raw version of the data to match return when generated
      return existingBlockData.cache.get(existingBlockData.id);
    }

    const overrides = { blockTag: block };
    const eligibleVoteCreators = options.eligibleVoteCreators || [];
    const additionalTokenBalances = options.additionalTokenBalances || {};
    const { minimumVoteCreationBalance } = options;

    if (!minimumVoteCreationBalance) {
      throw new Error(
        'minimumVoteCreationBalance must be defined to calculate voting power',
      );
    }

    let balances = {};
    const blacklist = options.blacklist || [];
    const ensRecord = await this.getElasticVoteENSRecord();
    const daoAddress = await ensRecord.getAddress();
    const dao = await this.sdk.models.DAO.deserialize(daoAddress, overrides);
    const token = await dao.token(overrides);
    const maxVotingTokens = t(dao.maxVotingLambda, token.m, token.k).toFixed(
      18,
    );

    const liquidityPools = await dao.elasticDAO.liquidityPools(overrides);
    liquidityPools.forEach((poolAddress) => {
      blacklist.push(poolAddress);
    });

    let holders = new Set();
    const onChainHolders = await dao.elasticGovernanceToken.holders(overrides);

    for (let i = 0; i < onChainHolders.length; i += 1) {
      holders.add(onChainHolders[i]);
    }

    const offChainHolders = Object.keys(additionalTokenBalances);
    for (let i = 0; i < offChainHolders.length; i += 1) {
      holders.add(offChainHolders[i]);
    }
    holders = Array.from(holders);

    // smaller chunks to make this a bit easier for processing.
    const chunks = chunkArray(holders, 25);

    for (let i = 0; i < chunks.length; i += 1) {
      balances = {
        ...balances,
        ...(await this._getEligibleVoters(
          chunks[i],
          additionalTokenBalances,
          overrides,
          dao,
          maxVotingTokens,
          0, // retry county
          10, // max retries
        )),
      };
      await new Promise((resolve) => setTimeout(resolve, 500)); // throttle api calls to alchemy
    }

    const tokenHolders = Object.keys(balances);
    for (let i = 0; i < tokenHolders.length; i += 1) {
      const balanceOfTokenHolder = toBigNumber(
        balances[tokenHolders[i]].balanceOf,
      );
      if (
        balanceOfTokenHolder.isGreaterThanOrEqualTo(minimumVoteCreationBalance)
      ) {
        eligibleVoteCreators.push(tokenHolders[i]);
      }
    }

    const numberOfHolders = tokenHolders.length;
    const eligibleVoters = tokenHolders.filter(
      (address) => !blacklist.includes(address),
    );
    const numberOfVoters = eligibleVoters.length;
    const quorum = eligibleVoters
      .reduce(
        (acc, address) => acc.plus(balances[address].balanceOfVoting),
        BigNumber(0),
      )
      .toFixed(18);

    const stats = {
      blacklist,
      eligibleVoteCreators,
      eligibleVoters,
      maxVotingTokens,
      numberOfHolders,
      numberOfVoters,
      quorum,
    };

    return {
      block,
      balances,
      stats,
    };
  }

  async getENSRecord() {
    return this.sdk.provider.getResolver(this.ens);
  }

  async getElasticVoteENSRecord() {
    const ensRecord = await this.getENSRecord();
    const elasticVoteENS = await ensRecord.getText('elasticvote');
    return this.sdk.provider.getResolver(elasticVoteENS);
  }

  async index() {
    const hash = await this.indexHash();
    const raw = await this.sdk.integrations.ipfs(hash);
    return JSON.parse(raw);
  }

  async indexHash({ reload = false } = {}) {
    const key = `${this.ens}|indexHash`;
    const cached = this.cache.get(key);

    if (cached && !reload && Date.now() < cached.ttl) {
      this.indexHash({ reload: true });
      return cached.data;
    }

    const record = await this.getElasticVoteENSRecord();
    const contentHash = await record.getContentHash();
    this.cache.set(key, {
      data: contentHash.replace('ipfs://', ''),
      ttl: Date.now() + 5 * 60 * 1000, // 5 minutes
    });

    return this.cache.get(key).data;
  }

  async load(reload = false) {
    try {
      if (this.proposals.length > 0 && !reload) {
        this.load(true);
        return this;
      }

      const proposals = await this.api.getProposals();
      this._proposals = await Promise.all(
        proposals.map(async (proposal) =>
          proposal.load(await this.data(proposal.snapshot)),
        ),
      );
    } catch (e) {
      this._proposals = [];
      console.warn('ElasticVote node unavailable', e);
    }
    return this;
  }

  async loadSnapshot(reload = false) {
    try {
      if (this._proposals.length > 0 && !reload) {
        return this;
      }

      const proposals = await this.snapshotAPI.getProposals();
      this._proposals = await Promise.all(
        proposals.map(async (proposal) =>
          proposal.load(await this.data(proposal.snapshot)),
        ),
      );
    } catch (e) {
      this._proposals = [];
      console.warn('ElasticVote Snapshot unavailable', e);
    }
    return this;
  }

  resetCache() {
    delete this._index;
    delete this._indexHash;
  }
}

ElasticVote.API = APIClass;
ElasticVote.Proposal = ProposalClass;
ElasticVote.SnapshotAPI = SnapshotAPIClass;
ElasticVote.SnapshotProposal = SnapshotProposalClass;
ElasticVote.SnapshotVote = SnapshotVoteClass;
ElasticVote.Vote = VoteClass;

export default ElasticVote;
