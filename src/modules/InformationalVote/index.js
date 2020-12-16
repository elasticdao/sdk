import Base from '../../Base';
import InformationalVoteBallotClass from './models/InformationalVoteBallot';
import InformationalVoteClass from './models/InformationalVote';
import InformationalVoteFactoryClass from './InformationalVoteFactory';
import InformationalVoteManagerClass from './InformationalVoteManager';
import InformationalVoteSettingsClass from './models/InformationalVoteSettings';

export {
  isInformationalVote,
  validateIsInformationalVote,
} from './models/InformationalVote';
export {
  isInformationalVoteBallot,
  validateIsInformationalVoteBallot,
} from './models/InformationalVoteBallot';
export {
  isInformationalVoteSettings,
  validateIsInformationalVoteSettings,
} from './models/InformationalVoteSettings';

export const InformationalVote = InformationalVoteClass;
export const InformationalVoteBallot = InformationalVoteBallotClass;
export const InformationalVoteFactory = InformationalVoteFactoryClass;
export const InformationalVoteManager = InformationalVoteManagerClass;
export const InformationalVoteSettings = InformationalVoteSettingsClass;

export class Models extends Base {
  get InformationalVote() {
    const { sdk } = this;

    return {
      contract: (...args) => InformationalVote.contract(sdk, ...args),
      deserialize: (...args) => {
        return InformationalVote.deserialize(sdk, ...args);
      },
    };
  }

  get InformationalVoteBallot() {
    const { sdk } = this;

    return {
      contract: (...args) => InformationalVoteBallot.contract(sdk, ...args),
      deserialize: (...args) =>
        InformationalVoteBallot.deserialize(sdk, ...args),
    };
  }

  get InformationalVoteSettings() {
    const { sdk } = this;

    return {
      contract: (...args) => InformationalVoteSettings.contract(sdk, ...args),
      deserialize: (...args) =>
        InformationalVoteSettings.deserialize(sdk, ...args),
      managerContract: (...args) =>
        InformationalVoteSettings.managerContract(sdk, ...args),
    };
  }
}

export default class extends Base {
  get informationalVoteFactory() {
    return new InformationalVoteFactory(
      this.sdk,
      this.sdk.env.elasticDAO.modules.informationalVote.factoryAddress,
    );
  }

  get models() {
    return new Models(this.sdk);
  }

  informationalVoteManager(address) {
    return new InformationalVoteManager(this.sdk, address);
  }
}
