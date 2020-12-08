import { validateIsAddress } from '@pie-dao/utils';
import { validate } from '../../../utils';
import { validateIsTransactionalVote } from './TransactionalVote';
import { validateIsTransactionalVoteSettings } from './TransactionalVoteSettings';
import ElasticModel from '../../../models/ElasticModel';
import TransactionalVoteBallotContract from '../../../../artifacts/TransactionalVoteBallot.json';

const cache = {};
const prefix = '@elastic-dao/sdk - TransactionalVoteBallot';

export const isTransactionalVoteBallot = (thing) =>
  thing &&
  typeof thing === 'object' &&
  thing instanceof TransactionalVoteBallot;
export const validateIsTransactionalVoteBallot = (thing) => {
  const message = 'not an TransactionalVoteBallot';
  validate(isTransactionalVoteBallot(thing), { message, prefix });
};

export default class TransactionalVoteBallot extends ElasticModel {
  constructor(
    sdk,
    { ballotModelAddress, lambda, settings, vote, voter, wasPenalized, yna },
  ) {
    super(sdk);
    this.id = `${settings.uuid}|${vote.index}|${voter}`.toLowerCase();
    cache[this.id] = {
      ballotModelAddress,
      lambda,
      settings,
      vote,
      voter,
      wasPenalized,
      yna,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: TransactionalVoteBallotContract.abi, address });
  }

  static async deserialize(sdk, voter, settings, vote) {
    validateIsAddress(voter, { prefix });
    validateIsTransactionalVoteSettings(settings);
    validateIsTransactionalVote(vote);

    const ballotModelAddress = await settings.manager.ballotModelAddress();
    const transactionalVoteBallotModel = await this.contract(
      sdk,
      ballotModelAddress,
    );

    const {
      lambda,
      wasPenalized,
      yna,
    } = await transactionalVoteBallotModel.deserialize(
      voter,
      settings.toObject(false),
      vote.toObject(false),
    );

    return new TransactionalVoteBallot({
      ballotModelAddress,
      lambda,
      settings,
      vote,
      voter,
      wasPenalized,
      yna,
    });
  }

  // Getters

  get address() {
    return cache[this.id].ballotModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get lambda() {
    return this.toBigNumber(cache[this.id].lambda);
  }

  get settings() {
    return cache[this.id].settings;
  }

  get vote() {
    return cache[this.id].vote;
  }

  get voter() {
    return cache[this.id].voter;
  }

  get wasPenalized() {
    return cache[this.id].wasPenalized;
  }

  get yna() {
    return this.toNumber(cache[this.id].yna);
  }

  // Instance functions

  async refresh() {
    return this.constructor.deserialize(
      this.sdk,
      this.voter,
      this.settings,
      this.vote,
    );
  }

  toObject(includeNested = true) {
    const { id, settings, vote } = this;

    const obj = {
      ...cache[id],
      id,
      settings: settings.toObject(false),
      vote: vote.toObject(false),
    };

    delete obj.ballotModelAddress;

    if (includeNested === false) {
      delete obj.settings;
      delete obj.vote;
    }

    return this.sanitize(obj);
  }
}
