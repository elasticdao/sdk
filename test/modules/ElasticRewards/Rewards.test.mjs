/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import ethers from 'ethers';
import build from '../../../dist/index.js';

const { isAddress, isHexString } = ethers.utils;
const { assert } = chai;

describe('Reward', () => {
  const raw =
  `{
    "blockNumber":13441870,
    "for":{
      "action":"Transfer",
      "item":{
          "type":"Transfer",
          "uuid":"a23b1f18-9199-44c7-99a7-4b72f580601c"
      },
      "message":"Transfer 0.1 from 0xE16584424F34380DBf798f547Af684597788FbC7 to 0xe16584424f34380dbf798f547af684597788fbc7"
    },
    "from":"0x9FF1Cf4491fc84F8e29c4b52dd6ECE5d60275814",
    "hash":"QmRowqfrJZNnEtYsw4vWPMd97kLsqJPfb8scUWKnu2BCZ2",
    "k":"100",
    "lambda":"0.000271078620754349",
    "m":"3.688966681390180631",
    "to":"0xe16584424f34380dbf798f547af684597788fbc7",
    "verification":{
      "required":true,
      "nonce":0,
      "signature":"0x92c7ccf7966d84049bc3de82e8c9ff065c60e6f58e32f17e320ffb91bbaebbd57bf6ab869058d2a788584413f08e15385d661cf53fe94be934486c6b249676fe1c",
      "reason":"Transfer"
    },
    "version":"1.1.0"
  }`;

  const reward = new build.Modules.ElasticRewards.Reward(null, null, JSON.parse(raw));

  it('Action typeOf is String', async () => {
    assert.typeOf(reward.action, 'string');
  });

  it('Item-Type typeOf is String', async () => {
    assert.typeOf(reward.item.type, 'string');
  });

  it('Item-UUID is valid RFC4122-v4', async () => {
    const regex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    assert.isTrue(regex.test(reward.item.uuid));
  });

  it('API is Null', async () => {
    assert.isTrue(reward.api === null);
  });

  it('Amount value is correct', async () => {
    assert.equal(reward.amount.toFixed(1), '0.1');
  });

  it('Amount value is greater than or equal to 0', async () => {
    assert.isAtLeast(Number(reward.amount), 0);
  });

  it('Amount typeOf is Number', async () => {
    assert.isFalse(Number.isNaN(parseFloat(reward.amount)));
  });

  it('BlockNumber typeOf is Number', async () => {
    assert.isFalse(Number.isNaN(parseFloat(reward.blockNumber)));
  });

  it('From is Address', async () => {
    assert.isTrue(isAddress(reward.from));
  });

  it('From is correct', async () => {
    assert.equal(reward.from, '0x9FF1Cf4491fc84F8e29c4b52dd6ECE5d60275814');
  });

  it('Locked is undefined', async () => {
    assert.isTrue(reward.locked === undefined);
  });

  it('Message is correct', async () => {
    const message = 'Transfer 0.1 from 0xE16584424F34380DBf798f547Af684597788FbC7 to 0xe16584424f34380dbf798f547af684597788fbc7';
    assert.isTrue(reward.message === message);
  });

  it('Hash is correct', async () => {
    const hash = 'QmRowqfrJZNnEtYsw4vWPMd97kLsqJPfb8scUWKnu2BCZ2';
    assert.isTrue(reward.hash === hash);
  });

  it('ID is correct', async () => {
    const id = 'QmRowqfrJZNnEtYsw4vWPMd97kLsqJPfb8scUWKnu2BCZ2';
    assert.isTrue(reward.id === id);
  });

  it('For has all keys', async () => {
    assert.containsAllKeys(reward.for, ['action', 'item', 'message']);
  });

  it('To is Address', async () => {
    assert.isTrue(isAddress(reward.to));
  });

  it('To is correct', async () => {
    assert.equal(reward.to, '0xe16584424f34380dbf798f547af684597788fbc7');
  });

  it('Signature is HexString', async () => {
    assert.isTrue(isHexString(reward.signature));
  });

  it('Nonce typeOf is Number', async () => {
    assert.isFalse(Number.isNaN(parseFloat(reward.nonce)));
  });

  it('Verification has all keys', async () => {
    assert.containsAllKeys(reward.verification, ['required', 'nonce', 'signature', 'reason']);
  });

  it('nodeUrl throws error', async () => {
    let bool = false;
    try {
      reward.nodeUrl;
    } catch {
      bool = true;
    }
    assert.isTrue(bool);
  });

  it('Transfer() throws error', async () => {
    let bool = false;
    try {
      await reward.transfer();
    } catch {
      bool = true;
    }
    assert.isTrue(bool);
  });

  it('patchTransfer() throws error', async () => {
    let bool = false;
    try {
      await reward.patchTransfer();
    } catch {
      bool = true;
    }
    assert.isTrue(bool);
  });

  it('toJSON() throws error', async () => {
    let bool = false;
    try {
      await reward.toJSON();
    } catch {
      bool = true;
    }
    assert.isTrue(bool);
  });
});
