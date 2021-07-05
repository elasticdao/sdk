import Base from './Base';
import Cache from './Cache';

const cache = new Cache('IPFSJsonBase.js', { persist: false });

export default class IPFSJsonBase extends Base {
  constructor(sdk, hash) {
    super(sdk);
    this._hash = hash;
  }

  get cache() {
    return cache.get(this.id);
  }

  get id() {
    return this._hash;
  }

  get loaded() {
    return cache.has(this.id);
  }

  get promise() {
    if (this.loaded) {
      return Promise.resolve();
    }

    const key = `loading|${this.id}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    return this.constructor.load(this.sdk, this.id).promise;
  }

  static load(sdk, hash) {
    const instance = new this(sdk, hash);
    const key = `loading|${hash}`;

    if (!instance.loaded) {
      if (!cache.get(key)) {
        const promise = new Promise((resolve, reject) => {
          sdk.integrations.ipfs(hash).then((raw) => {
            try {
              cache.set(hash, JSON.parse(raw));
              resolve(instance);
            } catch (e) {
              console.log('ERROR LOADING INSTANCE', hash, raw);
              cache.delete(key);
              reject(e);
            }
          });
        });

        cache.set(key, promise);
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
