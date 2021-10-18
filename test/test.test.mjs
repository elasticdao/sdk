/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import { ethers } from 'ethers';
import build from '../dist/index.js';

const env = {
  factoryAddress: '0x3c919d30286c6407C1E59D9fc05B45Db81E6257c',
};

const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.alchemyapi.io/v2/waRPNreoyAFYt5Lk13srMxIFnFXjvaiU');

const ipfsGateways = [
  'https://gateway.elasticdao.org',
  'https://elastic01.mypinata.cloud',
  'https://elastic02.mypinata.cloud',
  'https://gateway.pinata.cloud',
  'https://cloudflare-ipfs.com',
  'https://ipfs.fleek.co',
  'https://ipfs.io',
];

const elasticNodeURL = 'http://node.dev.elasticdao.org';

const { expect, assert } = chai;
const ensRecord = 'elasticdao.eth';

const sdk = new build.SDK({
  elasticNodeURL,
  env,
  ipfsGateways,
  provider,
  live: true,
  customFetch: true,
  // multicall: true,
});

const ElasticRewardsClass = sdk.modules.elasticRewards(ensRecord);

const ElasticRewardsResults = ElasticRewardsClass.load('satur9.eth', false);

describe('SDK', () => {
  describe('ElasticRewards', () => {
    it('load() should return an object', async () => {
      assert.typeOf(await ElasticRewardsResults, 'object');
    });
  });
/*   describe('ElasticVote', () => {

  }); */
});
