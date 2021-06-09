import { isPOJO } from '@pie-dao/utils';
import Subscribable from './Subscribable';

const localStorageAvailable = () => {
  try {
    const x = '__storage_test__';
    localStorage.setItem(x, x);
    localStorage.removeItem(x);
    return true;
  } catch (e) {
    console.error('@elastic-dao/sdk: persistent caching unavailable', e);
  }

  return false;
};

export default class Cache extends Subscribable {
  constructor(key = 'default', { persist = true } = {}) {
    super();

    this._key = `@elastic-dao/sdk - ${key}`;
    this._localStorage = false;
    this._store = {};

    if (persist && localStorageAvailable()) {
      this._localStorage = true;
      try {
        this._store = JSON.parse(localStorage.getItem(this.key));
        if (!isPOJO(this._store)) {
          this.clear();
        }
      } catch (e) {
        this.clear();
      }
    }
  }

  get key() {
    return this._key;
  }

  get localStorage() {
    return this._localStorage;
  }

  get raw() {
    return this._store;
  }

  get sdk() {
    return this._sdk;
  }

  clear() {
    if (this.localStorage) {
      localStorage.removeItem(this.key);
    }

    this._store = {};
  }

  delete(key, { persist = true } = {}) {
    delete this._store[key];
    if (persist) {
      setTimeout(() => this.persist(), 0);
    }
  }

  get(key) {
    return this._store[key];
  }

  has(key) {
    return Object.keys(this._store).includes(key);
  }

  persist() {
    if (this.localStorage) {
      localStorage.setItem(this.key, JSON.stringify(this._store));
    }
  }

  set(key, value, { persist = true } = {}) {
    this._store[key] = value;
    if (persist) {
      setTimeout(() => this.persist(), 0);
    }
  }
}
