import Cachable from './Cachable';

export default class IPFSJsonBase extends Cachable {
  constructor(sdk, hash) {
    super(sdk);
    this._hash = hash;
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

    return this.constructor.load(this.sdk, this.id).promise;
  }

  static load(sdk, hash) {
    const instance = new this(sdk, hash);
    const key = `loading|${hash}`;

    if (!instance.loaded) {
      if (!this.cache.get(key)) {
        const promise = new Promise((resolve, reject) => {
          sdk.integrations.ipfs(hash).then((raw) => {
            try {
              this.cache.set(hash, JSON.parse(raw));
              resolve(instance);
            } catch (e) {
              console.log('ERROR LOADING INSTANCE', hash, raw);
              this.cache.delete(key);
              reject(e);
            }
          });
        });

        this.cache.set(key, promise);
      }
    }

    return instance;
  }

  _value(key, fallback = '') {
    if (!this.loaded) {
      return fallback;
    }

    return key.split('.').reduce((acc, part) => acc[part], this.cache);
  }
}
