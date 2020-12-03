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
    return {
      contract: (...args) => InformationalVote.contract(this.sdk, ...args),
      deserialize: (...args) =>
        InformationalVote.deserialize(this.sdk, ...args),
    };
  }

  get InformationalVoteBallot() {
    return {
      contract: (...args) =>
        InformationalVoteBallot.contract(this.sdk, ...args),
      deserialize: (...args) =>
        InformationalVoteBallot.deserialize(this.sdk, ...args),
    };
  }

  get InformationalVoteSettings() {
    return {
      contract: (...args) =>
        InformationalVoteSettings.contract(this.sdk, ...args),
      deserialize: (...args) =>
        InformationalVoteSettings.deserialize(this.sdk, ...args),
      managerContract: (...args) =>
        InformationalVoteSettings.managerContract(this.sdk, ...args),
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

  get informationalVoteManager() {
    return new InformationalVoteManager(
      this.sdk,
      this.sdk.env.elasticDAO.modules.informationalVote.managerAddress,
    );
  }

  get models() {
    return new Models(this.sdk);
  }
}
