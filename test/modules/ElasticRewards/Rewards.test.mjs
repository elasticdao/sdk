/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import { ethers } from 'ethers';
import build from '../../../dist/index.js';
const { assert } = chai;

describe('Reward', () => {
    it('has correct values from raw', async () => {

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
          "from":"0xe16584424f34380dbf798f547af684597788fbc7",
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
      }`
      const reward = new build.Modules.ElasticRewards.Reward(null, null, JSON.parse(raw));
      console.log(reward._raw);
      console.log("lambda:", reward.lambda);
      assert.equal(reward.amount.toFixed(), "0.1");
      
    });
});
