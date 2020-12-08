import Base from '../../Base';
import TransactionalVoteBallotClass from './models/TransactionalVoteBallot';
import TransactionalVoteClass from './models/TransactionalVote';
import TransactionalVoteFactoryClass from './TransactionalVoteFactory';
import TransactionalVoteManagerClass from './TransactionalVoteManager';
import TransactionalVoteSettingsClass from './models/TransactionalVoteSettings';

export {
  isTransactionalVote,
  validateIsTransactionalVote,
} from './models/TransactionalVote';
export {
  isTransactionalVoteBallot,
  validateIsTransactionalVoteBallot,
} from './models/TransactionalVoteBallot';
export {
  isTransactionalVoteSettings,
  validateIsTransactionalVoteSettings,
} from './models/TransactionalVoteSettings';

export const TransactionalVote = TransactionalVoteClass;
export const TransactionalVoteBallot = TransactionalVoteBallotClass;
export const TransactionalVoteFactory = TransactionalVoteFactoryClass;
export const TransactionalVoteManager = TransactionalVoteManagerClass;
export const TransactionalVoteSettings = TransactionalVoteSettingsClass;

export class Models extends Base {
  get TransactionalVote() {
    return {
      contract: (...args) => TransactionalVote.contract(this.sdk, ...args),
      deserialize: (...args) =>
        TransactionalVote.deserialize(this.sdk, ...args),
    };
  }

  get TransactionalVoteBallot() {
    return {
      contract: (...args) =>
        TransactionalVoteBallot.contract(this.sdk, ...args),
      deserialize: (...args) =>
        TransactionalVoteBallot.deserialize(this.sdk, ...args),
    };
  }

  get TransactionalVoteSettings() {
    return {
      contract: (...args) =>
        TransactionalVoteSettings.contract(this.sdk, ...args),
      deserialize: (...args) =>
        TransactionalVoteSettings.deserialize(this.sdk, ...args),
      managerContract: (...args) =>
        TransactionalVoteSettings.managerContract(this.sdk, ...args),
    };
  }
}

export default class extends Base {
  get models() {
    return new Models(this.sdk);
  }

  get transactionalVoteFactory() {
    return new TransactionalVoteFactory(
      this.sdk,
      this.sdk.env.elasticDAO.modules.transactionalVote.factoryAddress,
    );
  }

  transactionalVoteManager(address) {
    return new TransactionalVoteManager(this.sdk, address);
  }
}
