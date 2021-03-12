/* eslint class-methods-use-this: 0 */
import { isBigNumber } from '@pie-dao/utils';
import { toKey } from '../utils';
import { subject } from '../observables';
import Base from '../Base';

export default class ElasticModel extends Base {
  get key() {
    return toKey(this.constructor.name, this.id);
  }

  get subject() {
    return subject(this.key);
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
}
