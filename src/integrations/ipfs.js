export const nodes = [
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

    const path = [nodes[node], 'ipfs', ...parts].join('/');

    fetch(path, { mode: 'cors' })
      .then((response) => response.text())
      .then(resolve)
      .catch((err) => {
        const next = node + 1;
        if (next < nodes.length) {
          get(...parts, next).then(resolve, reject);
        } else {
          reject(err);
        }
      });
  });
