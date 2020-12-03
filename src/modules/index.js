import Base from '../Base';
import InformationalVoteModule from './InformationalVote';
import TransactionalVoteModule from './TransactionalVote';

export {
  InformationalVote,
  InformationalVoteBallot,
  InformationalVoteFactory,
  InformationalVoteManager,
  InformationalVoteSettings,
  isInformationalVote,
  isInformationalVoteBallot,
  isInformationalVoteSettings,
  validateIsInformationalVote,
  validateIsInformationalVoteBallot,
  validateIsInformationalVoteSettings,
} from './InformationalVote';

export {
  TransactionalVote,
  TransactionalVoteBallot,
  TransactionalVoteFactory,
  TransactionalVoteManager,
  TransactionalVoteSettings,
  isTransactionalVote,
  isTransactionalVoteBallot,
  isTransactionalVoteSettings,
  validateIsTransactionalVote,
  validateIsTransactionalVoteBallot,
  validateIsTransactionalVoteSettings,
} from './TransactionalVote';

export default class extends Base {
  get informationalVote() {
    return new InformationalVoteModule(this.sdk);
  }

  get transactionalVote() {
    return new TransactionalVoteModule(this.sdk);
  }
}
