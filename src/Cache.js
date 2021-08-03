import { isPOJO } from '@pie-dao/utils';
import Base from './Base';

const localData = {};

export default class Cache extends Base {
  constructor(sdk, key = 'default', { persist = true } = {}) {
    super(sdk);

    this._key = `@elastic-dao/sdk - ${key}`;
    this._localStorage = false;

    if (!isPOJO(localData[this._key])) {
      localData[this.key] = {};
    }

    if (persist && this.adapter.available && localData[this.key] === {}) {
      localData[this.key].loading = true;

      this.adapter
        .load(this.key)
        .then((data) => {
          localData[this.key] = data;
          if (!isPOJO(localData[this.key])) {
            this.clear();
          }
        })
        .catch(() => {
          this.clear();
        });
    }
  }

  get adapter() {
    return this.sdk.storageAdapter;
  }

  get key() {
    return this._key;
  }

  get raw() {
    return localData[this.key];
  }

  get sdk() {
    return this._sdk;
  }

  clear() {
    if (this.adapter.available) {
      this.adapter.remove(this.key);
    }

    localData[this.key] = {};
  }

  delete(key, { persist = true } = {}) {
    delete localData[this.key][key];
    if (persist) {
      setTimeout(() => this.persist(), 0);
    }
  }

  get(key) {
    return localData[this.key][key];
  }

  has(key) {
    return Object.keys(localData[this.key]).includes(key);
  }

  persist() {
    if (this.adapter.available) {
      this.adapter.persist(this.key, localData[this.key]);
    }
  }

  set(key, value, { persist = true } = {}) {
    localData[this.key][key] = value;
    if (persist) {
      this.persist();
    }
  }
}
