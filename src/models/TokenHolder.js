import { validateIsAddress } from '@pie-dao/utils';
import { validate } from '../utils';
import { validateIsEcosystem } from './Ecosystem';
import { validateIsToken } from './Token';
import ElasticModel from './ElasticModel';
import TokenHolderContract from '../../artifacts/TokenHolder.json';

const cache = {};
const prefix = '@elastic-dao/sdk - TokenHolder';

export const isTokenHolder = (thing) =>
  thing && typeof thing === 'object' && thing instanceof TokenHolder;
export const validateIsTokenHolder = (thing) => {
  const message = 'not a TokenHolder';
  validate(isTokenHolder(thing), { message, prefix });
};

export default class TokenHolder extends ElasticModel {
  constructor(sdk, { account, counter, ecosystem, lambda, token }) {
    super(sdk);
    this.id = `${token.uuid}|${account}`.toLowerCase();
    cache[this.id] = {
      account,
      counter,
      ecosystem,
      lambda,
      token,
    };
  }

  // Class functions

  static contract(sdk, address) {
    validateIsAddress(address, { prefix });
    return sdk.contract({ abi: TokenHolderContract.abi, address });
  }

  static async deserialize(sdk, uuid, ecosystem, token) {
    validateIsAddress(uuid, { prefix });
    validateIsEcosystem(ecosystem);
    validateIsToken(token);
    console.log('a', ecosystem.tokenHolderModelAddress);
    const tokenHolderModel = await this.contract(
      sdk,
      ecosystem.tokenHolderModelAddress,
    );
    console.log('b', uuid);
    const uuidVariable = uuid;
    const ecosystemObject = ecosystem.toObject();
    const tokenObject = token.toObject(false);
    delete ecosystemObject.id;
    delete tokenObject.id;
    console.log('uuidVariable: ', uuidVariable);
    console.log('ecosystemObject: ', ecosystemObject);
    console.log('tokenObject: ', tokenObject);
    console.log('tokenHolderModel:', tokenHolderModel.deserialize);
    console.log(
      await tokenHolderModel.deserialize(
        uuidVariable,
        ecosystemObject,
        tokenObject,
      ),
    );

    const account = await tokenHolderModel.deserialize(
      uuidVariable,
      ecosystemObject,
      tokenObject,
    );
    console.log('b.5');
    const lambda = await tokenHolderModel
      .deserialize(uuidVariable, ecosystemObject, tokenObject)
      .then(console.log('promise3'));
    const counter = await tokenHolderModel
      .deserialize(uuidVariable, ecosystemObject, tokenObject)
      .then(console.log('promise2'));

    console.log('c');
    return new TokenHolder(sdk, {
      account,
      counter,
      ecosystem,
      lambda,
      token,
    });
  }

  // Getters

  get account() {
    return cache[this.id].account;
  }

  get address() {
    return this.ecosystem.tokenHolderModelAddress;
  }

  get contract() {
    return this.constructor.contract(this.sdk, this.address);
  }

  get counter() {
    return this.toNumber(cache[this.id].counter);
  }

  get ecosystem() {
    return cache[this.id].ecosystem;
  }

  get lambda() {
    return this.toBigNumber(cache[this.id].lambda, 18);
  }

  get token() {
    return cache[this.id].token;
  }

  // Instance functions

  async refresh() {
    return this.constructor.deserialize(
      this.sdk,
      this.uuid,
      this.ecosystem,
      this.token,
    );
  }

  toObject(includeNested = true) {
    const { ecosystem, id, token } = this;

    const obj = {
      ...cache[id],
      id,
      ecosystem: ecosystem.toObject(false),
      token: token.toObject(false),
    };

    if (includeNested === false) {
      delete obj.ecosystem;
      delete obj.token;
    }

    return this.sanitize(obj);
  }
}
