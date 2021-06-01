/* eslint no-await-in-loop: 0 */
import BigNumber from 'bignumber.js';
import { get } from '../../integrations/ipfs';
import { t } from '../../elasticMath';
import Base from '../../Base';
import SnapshotAPI from './SnapshotAPI';
import { chunkArray, toBigNumber } from '../../utils';

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

export default class ElasticVote extends Base {
  constructor(sdk, ens) {
    super(sdk);

    this._ens = ens;
    this._proposals = [];
    this._snapshotAPI = new SnapshotAPI(this.sdk, ens, ProposalsToFilter);
  }

  get ens() {
    return this._ens;
  }

  get proposals() {
    return this._proposals;
  }

  get snapshotAPI() {
    return this._snapshotAPI;
  }

  async data(blockNumber, fuzzyMatch = true) {
    const blockKey = `_blockData${blockNumber}${fuzzyMatch ? 'fuzzy' : ''}`;

    return this.cachedValue(blockKey, async () => {
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
        get(block.hash, block.balances),
        get(block.hash, block.stats),
      ]);

      this[blockKey] = {
        block,
        balances: JSON.parse(balancesRaw),
        stats: JSON.parse(statsRaw),
      };

      return this[blockKey];
    });
  }

  async generateData(block, options = {}) {
    console.log('block', block);
    const overrides = { blockTag: block };
    const eligibleVoteCreators = options.eligibleVoteCreators || [];
    const balances = {};
    const blacklist = options.blacklist || [];
    const ensRecord = await this.getElasticVoteENSRecord();
    const daoAddress = await ensRecord.getAddress();
    const dao = await this.sdk.models.DAO.deserialize(daoAddress, overrides);
    const token = await dao.token(overrides);
    const maxVotingTokens = t(dao.maxVotingLambda, token.m, token.k).toFixed(
      18,
    );

    console.log('maxVotingTokens', maxVotingTokens);

    const liquidityPools = await dao.elasticDAO.liquidityPools(overrides);
    liquidityPools.forEach((poolAddress) => {
      blacklist.push(poolAddress);
    });

    console.log('blacklist', blacklist);

    const holders = await dao.elasticGovernanceToken.holders(overrides);
    const chunks = chunkArray(holders, 50);

    for (let i = 0; i < chunks.length; i += 1) {
      await Promise.all(
        chunks[i].map(async (holderAddress) => {
          const balanceOf = toBigNumber(
            await dao.elasticGovernanceToken.contract.balanceOf(
              holderAddress,
              overrides,
            ),
            18,
          );

          if (balanceOf.isNaN() || balanceOf.isZero()) {
            console.log('skipping', balanceOf.isNaN(), balanceOf.isZero());
          } else {
            const balanceOfVoting = toBigNumber(
              await dao.elasticGovernanceToken.contract.balanceOfVoting(
                holderAddress,
                overrides,
              ),
              18,
            );

            if (balanceOfVoting.isEqualTo(maxVotingTokens)) {
              eligibleVoteCreators.push(holderAddress);
            }

            balances[holderAddress] = {
              balanceOf: balanceOf.toFixed(18),
              balanceOfVoting: balanceOfVoting.toFixed(18),
            };

            console.log(balances[holderAddress]);
          }
        }),
      );
    }

    const tokenHolders = Object.keys(balances);
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
    return this.cachedValue('_index', async () => {
      const hash = await this.indexHash();
      const raw = await get(hash);
      this._index = JSON.parse(raw);
      setTimeout(() => delete this._index, 3600000); // expire after 60 minutes
    });
  }

  async indexHash() {
    return this.cachedValue('_indexHash', async () => {
      const record = await this.getElasticVoteENSRecord();
      const contentHash = await record.getContentHash();
      this._indexHash = contentHash.replace('ipfs://', '');
      setTimeout(() => delete this._indexHash, 300000); // expire after 5 minutes
    });
  }

  async load(reload = false) {
    if (this.proposals.length > 0 && !reload) {
      this.load(true);
      return this;
    }

    const proposals = await this.snapshotAPI.getProposals();
    this._proposals = await Promise.all(
      proposals.map(async (proposal) =>
        proposal.load(await this.data(proposal.snapshot)),
      ),
    );

    return this;
  }

  resetCache() {
    delete this._index;
    delete this._indexHash;
  }
}
