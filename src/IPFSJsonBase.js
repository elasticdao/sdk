import Cachable from './Cachable';

export default class IPFSJsonBase extends Cachable {
  constructor(sdk, hash, cacheData) {
    super(sdk);
    this._hash = hash;
    this.load(false, cacheData);
  }

  get cached() {
    return this.cache.get(this.id);
  }

  get id() {
    return this._hash;
  }

  get loaded() {
    return this.cache.has(this.id);
  }

  get promise() {
    if (this.loaded) {
      return Promise.resolve();
    }

    const key = `loading|${this.id}`;

    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    return this.load();
  }

  async load(force = false, cacheData) {
    if (!force && this.loaded) {
      return this;
    }

    if (cacheData) {
      this.cache.set(this.id, cacheData);
      return this;
    }

    const key = `loading|${this.id}`;

    if (force || !this.cache.get(key)) {
      const promise = new Promise((resolve, reject) => {
        this.sdk.integrations.ipfs(this.id).then((raw) => {
          try {
            this.cache.set(this.id, JSON.parse(raw));
            this.cache.delete(key);
            resolve(this);
          } catch (e) {
            console.log('ERROR LOADING INSTANCE', this.id, raw);
            this.cache.delete(key);
            reject(e);
          }
        });
      });

      this.cache.set(key, promise, { persist: false });
    }

    return this.cache.get(key);
  }

  _value(key, fallback = '') {
    if (!this.loaded) {
      return fallback;
    }

    return key.split('.').reduce((acc, part) => acc[part], this.cached);
  }
}
