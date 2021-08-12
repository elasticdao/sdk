/* eslint import/no-unresolved: 0 */
import redis from 'Redis';

export default class RedisAdapter {
  constructor(config = {}) {
    this._client = redis.createClient(config);
  }

  get available() {
    return this._client.connected;
  }

  awaitAvailable(cycle = 0) {
    return new Promise((resolve, reject) => {
      if (this.available) {
        resolve(true);
      }

      if (cycle >= 50) {
        reject(
          new Error(
            '@elastic-dao/sdk - RedisAdapter: Redis server not available',
          ),
        );
      }

      setTimeout(() => {
        this.awaitAvailable(cycle + 1).then(resolve, reject);
      }, 100);
    });
  }

  ensureAvailable() {
    if (!this.available) {
      throw new Error(
        '@elastic-dao/sdk - RedisAdapter: Redis server not available',
      );
    }
  }

  async load(key) {
    await this.awaitAvailable();
    this.ensureAvailable();
    const value = await new Promise((resolve) =>
      this._client.get(key, resolve),
    );
    return JSON.parse(value);
  }

  async persist(key, data) {
    await this.awaitAvailable();
    this.ensureAvailable();

    return new Promise((resolve, reject) => {
      this._client.set(key, JSON.stringify(data), (result) => {
        if (result === 'OK') {
          resolve(true);
        } else {
          reject(new Error(result));
        }
      });
    });
  }

  async remove(key) {
    await this.awaitAvailable();
    this.ensureAvailable();

    await new Promise((resolve) => {
      this._client.del(key, resolve);
    });

    return true;
  }
}
