/* eslint no-cond-assign: 0 */
import { ethers } from 'ethers';
import MulticallABI from './abis/Multicall.json';

const aggOut = [
  {
    name: "blockNumber",
    type: "uint256"
  },
  {
    name: "returnData",
    type: "bytes[]"
  }
];

export default class MulticallQueue {
  constructor(sdk) {
    this._sdk = sdk;
    this._entries = [];
  }

  get sdk() {
    return this._sdk;
  }

  async call() {
    const calls = [];
    const callbacks = [];
    const outputs = [];
    const abiCoder = new ethers.utils.AbiCoder();
    let entry;

    while ((entry = this._entries.pop()) && entry) {
      const { callback, callData, outputABI, target } = entry;
      calls.push({ callData, target });
      callbacks.push(callback);
      outputs.push(outputABI);
    } 

    if (calls.length > 0) {
      const contract = new ethers.Contract(
        '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
        MulticallABI,
      );

      const { data, to } = await contract.populateTransaction.aggregate(calls, { gasLimit: 0 });
      const response = await this._sdk.provider.call({ data, to });
      const results = abiCoder.decode(aggOut, response);

      for (let i = 0; i < results.returnData.length; i += 1) {
        const result = abiCoder.decode(outputs[i], results.returnData[i]);
        callbacks[i](outputs[i].length === 1 ? result[0] : result);
      }
    }
  }

  push(entry) {
    clearTimeout(this._pid);
    this._entries.push(entry);
    this._pid = setTimeout(() => this.call(), 100);
  }
}
