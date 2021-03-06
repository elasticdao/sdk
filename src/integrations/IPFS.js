import Base from '../Base';
import Cache from '../Cache';

const cache = new Cache('ipfs.js', { persist: false });

export default class IPFS extends Base {
  get gateways() {
    return this.sdk.ipfsGateways;
  }

  get(...args) {
    return new Promise((resolve, reject) => {
      let node = 0;
      const parts = [...args];
      const lastPart = parts[parts.length - 1];

      if (Number.isInteger(lastPart) && this.gateways[lastPart]) {
        node = parts.pop();
      }

      const key = parts.join('/');
      const path = [this.gateways[node], 'ipfs', ...parts].join('/');

      if (cache.has(key)) {
        resolve(cache.get(key).text);
      } else {
        this.fetch(path, { mode: 'cors' })
          .then((response) => response.text())
          .then((text) => {
            cache.set(key, { path, text });
            resolve(cache.get(key).text);
          })
          .catch((err) => {
            const next = node + 1;
            if (next < this.gateways.length) {
              this.get(...parts, next).then(resolve, reject);
            } else {
              reject(err);
            }
          });
      }
    });
  }
}
