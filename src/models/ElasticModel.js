/* eslint class-methods-use-this: 0 */
import { isBigNumber } from '@pie-dao/utils';
import { toKey } from '../utils';
import QueryFilterable from '../QueryFilterable';

export default class ElasticModel extends QueryFilterable {
  constructor(sdk) {
    super(sdk);
    this._loaded = false;
  }

  get id() {
    return this._id;
  }

  get key() {
    return toKey(this.constructor.name, this.id);
  }

  get loaded() {
    return this._loaded;
  }

  async refresh() {
    return this.constructor.deserialize(this.id);
  }

  sanitize(obj) {
    const clean = {};
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      clean[key] = obj[key];
      try {
        if (isBigNumber(obj[key])) {
          clean[key] = obj[key].toFixed();
        }
      } catch (e) {
        // console.error(e);
      }
    });
    return clean;
  }

  toJSON() {
    return this.toObject();
  }

  toObject() {
    throw new Error(`${this.constructor.name}: 'toObject' must be defined!`);
  }
}
