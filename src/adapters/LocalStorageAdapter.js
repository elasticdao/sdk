/* eslint class-methods-use-this: 0 */

export default class LocalStorageAdapter {
  get available() {
    try {
      const x = '__storage_test__';
      localStorage.setItem(x, x);
      localStorage.removeItem(x);
      return true;
    } catch (e) {
      console.error(
        '@elastic-dao/sdk - LocalStorageAdapter: localStorage not available',
        e,
      );
    }

    return false;
  }

  awaitAvailable() {
    return new Promise((resolve, reject) => {
      if (this.available) {
        resolve(true);
      } else {
        reject(
          new Error(
            '@elastic-dao/sdk - LocalStorageAdapter: localStorage not available',
          ),
        );
      }
    });
  }

  ensureAvailable() {
    if (!this.available) {
      throw new Error(
        '@elastic-dao/sdk - LocalStorageAdapter: localStorage not available',
      );
    }
  }

  async load(key) {
    this.ensureAvailable();
    return JSON.parse(localStorage.getItem(key));
  }

  async persist(key, object) {
    this.ensureAvailable();
    localStorage.setItem(key, JSON.stringify(object));
    return true;
  }

  async remove(key) {
    this.ensureAvailable();
    localStorage.removeItem(key);
    return true;
  }
}
