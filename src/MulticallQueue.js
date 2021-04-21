/* eslint no-cond-assign: 0 */
import { ethers } from 'ethers';
import MulticallABI from './abis/Multicall.json';

const aggregateOutputs = [
  {
    name: 'blockNumber',
    type: 'uint256',
  },
  {
    name: 'returnData',
    type: 'bytes[]',
  },
];

export default class MulticallQueue {
  constructor(sdk) {
    this._abiCoder = new ethers.utils.AbiCoder();
    this._entries = [];
    this._multicall = new ethers.Contract(
      '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
      MulticallABI,
    );
    this._sdk = sdk;
  }

  get abiCoder() {
    return this._abiCoder;
  }

  get multicall() {
    return this._multicall;
  }

  get sdk() {
    return this._sdk;
  }

  async call() {
    const calls = [];
    const callbacks = [];
    const outputs = [];
    let entry;

    while ((entry = this._entries.pop()) && entry) {
      const { callback, callData, outputABI, target } = entry;
      calls.push({ callData, target });
      callbacks.push(callback);
      outputs.push(outputABI);
    }

    if (calls.length > 0) {
      const { data, to } = await this.multicall.populateTransaction.aggregate(
        calls,
        {
          gasLimit: 0,
        },
      );
      const response = await this.sdk.provider.call({ data, to });
      const decoded = this.abiCoder.decode(aggregateOutputs, response);

      for (let i = 0; i < decoded.returnData.length; i += 1) {
        const result = this.abiCoder.decode(outputs[i], decoded.returnData[i]);
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
