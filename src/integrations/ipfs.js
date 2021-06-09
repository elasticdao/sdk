import Cache from '../Cache';

const cache = new Cache('ipfs.js', { persist: false });

export const nodes = [
  'https://gateway.elasticdao.org',
  'https://gateway.pinata.cloud',
  'https://cloudflare-ipfs.com',
  'https://ipfs.fleek.co',
  'https://ipfs.io',
];

export const get = (...args) =>
  new Promise((resolve, reject) => {
    let node = 0;
    const parts = [...args];
    const lastPart = parts[parts.length - 1];

    if (Number.isInteger(lastPart) && nodes[lastPart]) {
      node = parts.pop();
    }

    const key = parts.join('/');
    const path = [nodes[node], 'ipfs', key].join('/');

    if (cache.has(key)) {
      resolve(cache.get(key).text);
    } else {
      fetch(path, { mode: 'cors' })
        .then((response) => response.text())
        .then((text) => {
          cache.set(key, { path, text });
          resolve(cache.get(key).text);
        })
        .catch((err) => {
          const next = node + 1;
          if (next < nodes.length) {
            get(...parts, next).then(resolve, reject);
          } else {
            reject(err);
          }
        });
    }
  });
