import { validateIsAddress } from '@pie-dao/utils';
import Base from '../../Base';
import InformationalVoteFactoryContract from '../../../artifacts/InformationalVoteFactory.json';
import InformationalVoteManager from './InformationalVoteManager';

const prefix = '@elastic-dao/sdk - InformationalVoteFactory';

export default class InformationalVoteFactory extends Base {
  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: InformationalVoteFactoryContract.abi, address });
  }

  get address() {
    return this.sdk.env.elasticDAO.modules.informationalVote.factoryAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  async deployManager(
    ballotModelAddress,
    elasticDAOAddress,
    settingsModelAddress,
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
    validateIsAddress(voteModelAddress, { prefix });
    validateIsAddress(votingTokenAddress, { prefix });

    const payload = [
      ballotModelAddress,
      elasticDAOAddress,
      settingsModelAddress,
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

    return new InformationalVoteManager(await managerDeployedFilterPromise);
  }
}
