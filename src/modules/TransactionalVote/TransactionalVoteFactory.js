import { validateIsAddress } from '@pie-dao/utils';
import Base from '../../Base';
import TransactionalVoteFactoryContract from '../../../artifacts/TransactionalVoteFactory.json';
import TransactionalVoteManager from './TransactionalVoteManager';

const prefix = '@elastic-dao/sdk - TransactionalVoteFactory';

export default class TransactionalVoteFactory extends Base {
  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: TransactionalVoteFactoryContract.abi, address });
  }

  get address() {
    return this.sdk.env.elasticDAO.modules.transactionalVote.factoryAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  async deployManager(
    ballotModelAddress,
    elasticDAOAddress,
    settingsModelAddress,
    vaultAddress,
    voteModelAddress,
    votingTokenAddress,
    hasPenalty,
    [
      approval,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minDurationInBlocks,
      minPenaltyInShares,
      minRewardInShares,
      minSharesToCreate,
      penalty,
      quorum,
      reward,
    ],
    overrides = {},
  ) {
    validateIsAddress(ballotModelAddress, { prefix });
    validateIsAddress(elasticDAOAddress, { prefix });
    validateIsAddress(settingsModelAddress, { prefix });
    validateIsAddress(vaultAddress, { prefix });
    validateIsAddress(voteModelAddress, { prefix });
    validateIsAddress(votingTokenAddress, { prefix });

    const payload = [
      ballotModelAddress,
      elasticDAOAddress,
      settingsModelAddress,
      vaultAddress,
      voteModelAddress,
      votingTokenAddress,
      hasPenalty,
      [
        this.toEthersBigNumber(approval, 18),
        this.toEthersBigNumber(maxSharesPerTokenHolder, 18),
        this.toEthersBigNumber(minBlocksForPenalty),
        this.toEthersBigNumber(minDurationInBlocks),
        this.toEthersBigNumber(minPenaltyInShares, 18),
        this.toEthersBigNumber(minRewardInShares, 18),
        this.toEthersBigNumber(minSharesToCreate, 18),
        this.toEthersBigNumber(penalty, 18),
        this.toEthersBigNumber(quorum, 18),
        this.toEthersBigNumber(reward, 18),
      ],
    ];

    const factory = await this.contract;

    const managerDeployedFilter = factory.filters.ManagerDeployed();
    const managerDeployedFilterPromise = new Promise(
      async (resolve, reject) => {
        let tx = {};

        const handler = ({ transactionHash, topics }) => {
          if (transactionHash === tx.hash) {
            this.sdk.provider.off(managerDeployedFilter, handler);
            resolve(`0x${topics[1].substring(26)}`);
          }
        };

        this.sdk.provider.on(managerDeployedFilter, handler);

        tx = await factory.deployManager(
          ...payload,
          this.sanitizeOverrides(overrides),
        );

        await tx.wait(2);
        reject();
      },
    );

    return new TransactionalVoteManager(await managerDeployedFilterPromise);
  }
}
