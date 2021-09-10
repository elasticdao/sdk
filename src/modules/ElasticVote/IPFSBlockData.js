/* eslint class-methods-use-this: 0 */

import IPFSJsonBase from '../../IPFSJsonBase';
import { toBigNumber } from '../../utils';

/*
  Version 1.0.0:

  {
    block,
    balances,
    stats,
  }
*/
export default class IPFSBlockData extends IPFSJsonBase {
  get balances() {
    if (this._balances) {
      return this._balances;
    }

    const rawBalances = this._value('balances', {});
    const accounts = Object.keys(rawBalances);

    if (accounts.length === 0) {
      return {};
    }

    const balancesToReturn = {};
    // translate all balances to big number
    for (let i = 0; i < accounts.length; i += 1) {
      const account = accounts[i];
      const balanceOf = toBigNumber(rawBalances[account].balanceOf);
      const balanceOfVoting = toBigNumber(rawBalances[account].balanceOfVoting);
      balancesToReturn[account] = { balanceOf, balanceOfVoting };
    }

    this._balances = balancesToReturn;
    return balancesToReturn;
  }

  get blockNumber() {
    return this._value('block');
  }

  get denyList() {
    return this._value('stats.blacklist', []);
  }

  get eligibleVoteCreators() {
    return this._value('stats.eligibleVoteCreators', []);
  }

  get eligibleVoters() {
    return this._value('stats.eligibleVoters', []);
  }

  get maxVotingTokens() {
    return toBigNumber(this._value('stats.maxVotingTokens', 0));
  }

  get numberOfHolders() {
    return this._value('stats.numberOfHolders', 0);
  }

  get numberOfVoters() {
    return this._value('stats.numberOfVoters', 0);
  }

  /**
   * represents the entire balance of tokens that can vote for a
   * particular proposal across all users/accounts (helpful to calculate quorum)
   */
  get maximumEligibleVotingTokens() {
    return toBigNumber(this._value('stats.quorum', 0));
  }

  toJSON() {
    const {
      balances,
      blockNumber,
      denyList,
      eligibleVoteCreators,
      eligibleVoters,
      maxVotingTokens,
      numberOfHolders,
      numberOfVoters,
      maximumEligibleVotingTokens,
    } = this;

    return {
      balances,
      blockNumber,
      denyList,
      eligibleVoteCreators,
      eligibleVoters,
      maxVotingTokens,
      numberOfHolders,
      numberOfVoters,
      maximumEligibleVotingTokens,
    };
  }
}
