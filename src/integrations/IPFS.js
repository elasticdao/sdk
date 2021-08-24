import Cachable from '../Cachable';

export default class IPFS extends Cachable {
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

      if (this.cache.has(key)) {
        resolve(this.cache.get(key).text);
      } else {
        this.fetch(path, { mode: 'cors' })
          .then((response) => {
            if (response.status < 300) {
              return response.text();
            }
            throw new Error(response.statusText);
          })
          .then((text) => {
            this.cache.set(key, { path, text });
            resolve(this.cache.get(key).text);
          })
          .catch((err) => {
            console.log('IPFS Gateway failure', path, err.message);
            const next = node + 1;
            if (next < this.gateways.length) {
              console.log('Trying gateway at', this.gateways[next]);
              this.get(...parts, next).then(resolve, reject);
            } else {
              reject(err);
            }
          });
      }
    });
  }
}
