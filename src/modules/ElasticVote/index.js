/* eslint no-await-in-loop: 0 */
import BigNumber from 'bignumber.js';

import { chunkArray, toBigNumber } from '../../utils';
import { t } from '../../elasticMath';
import APIClass from './API';
import Cachable from '../../Cachable';
import IPFSProposalClass from './IPFSProposal';
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

    // console.log('blocknumber vs closest block', blockNumber, closestBlock);
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

  async generateData(block, options = {}) {
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

    const liquidityPools = await dao.elasticDAO.liquidityPools(overrides);
    liquidityPools.forEach((poolAddress) => {
      blacklist.push(poolAddress);
    });

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
      )
      await new Promise(resolve => setTimeout(resolve, 1000)); // throttle api calls to alchemy
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

  async loadIPFS(indexHash) {
    try {
      const indexJSON = await this.sdk.integrations.ipfs(indexHash);
      const indexData = JSON.parse(indexJSON);

      const proposals = [];
      for (let i = 0; i < indexData.proposals.length; i += 1) {
        const proposal = new IPFSProposalClass(
          this.sdk,
          indexData.proposals[i],
        );
        await proposal.promise;

        // TODO: fetch vote data here and compile

        /*
        const dataHash = indexData[`${proposal.snapshot}`];
        const dataJSON = await this.sdk.integrations.ipfs(dataHash);
        const data = JSON.parse(dataJSON);
        */

        proposals.push(
          new ProposalClass(this.sdk, this.api, {
            ...proposal.toJSON(),
            // votes,
            // voted,
            // yes,
            // no,
            // abstain,
            // quorum: BigNumber(voted).dividedBy(data.stats.quorum),
          }),
        );
      }

      this._ipfsProposals = proposals;
    } catch (e) {
      this._ipfsProposals = [];
      console.warn('ElasticVote IPFS unavailable', e);
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
ElasticVote.IPFSProposal = IPFSProposalClass;
ElasticVote.Proposal = ProposalClass;
ElasticVote.SnapshotAPI = SnapshotAPIClass;
ElasticVote.SnapshotProposal = SnapshotProposalClass;
ElasticVote.SnapshotVote = SnapshotVoteClass;
ElasticVote.Vote = VoteClass;

export default ElasticVote;
