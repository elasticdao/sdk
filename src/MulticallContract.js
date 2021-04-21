import { isPOJO } from '@pie-dao/utils';

export default class MulticallContract {
  constructor(sdk, contract, abi) {
    this._abi = abi;
    this._contract = contract;
    this._sdk = sdk;

    // https://docs.ethers.io/v5/api/contract/contract/#Contract--readonly
    this._functions = [];

    this._abi
      .filter(({ type }) => type === 'function')
      .forEach((fragment) => {
        const { name, outputs, stateMutability } = fragment;

        if (stateMutability === 'pure' || stateMutability === 'view') {
          this._functions[name] = (...args) =>
            new Promise((resolve, reject) => {
              const lastArg = args[args.length - 1];
              if (isPOJO(lastArg)) {
                if (lastArg.synchronous || lastArg.blockTag) {
                  const functionArgs = [...args];
                  delete lastArg.synchronous;
                  functionArgs.pop();
                  functionArgs.push(lastArg);

                  this._contract[name](...functionArgs).then(resolve, reject);
                }
              }

              this.populateTransaction[name](...args).then(({ data, to }) => {
                this._sdk.queue.push(
                  {
                    callback: resolve,
                    callData: data,
                    outputABI: outputs,
                    target: to,
                  },
                );
              });
            });

          this[name] = (...args) => this._functions[name](...args);
        } else {
          this[name] = this._contract[name].bind(this._contract);
        }
      });
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract--properties
  get address() {
    return this._contract.address;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#contract-callStatic
  get callStatic() {
    return this._contract.callStatic;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract--properties
  get deployTransaction() {
    return this._contract.deployTransaction;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#contract-estimateGas
  get estimateGas() {
    return this._contract.estimateGas;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract--filters
  get filters() {
    return this._contract.filters;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract--properties
  get interface() {
    return this._contract.interface;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#contract-populateTransaction
  get populateTransaction() {
    return this._contract.populateTransaction;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract--properties
  get provider() {
    return this._contract.provider;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract--properties
  get resolvedAddress() {
    return this._contract.resolvedAddress;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract--properties
  get signer() {
    return this._contract.signer;
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-attach
  attach(...args) {
    return new this.constructor(this._contract.attach(...args));
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-connect
  connect(...args) {
    return new this.constructor(this._contract.connect(...args));
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-deployed
  async deployed(...args) {
    return this._contract.deployed(...args);
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-isIndexed
  isIndexed(...args) {
    return this._contract.isIndexed(...args);
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-queryFilter
  async queryFilter(...args) {
    return this._contract.queryFilter(...args);
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-listenerCount
  listenerCount(...args) {
    return this._contract.listenerCount(...args);
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-listeners
  listeners(...args) {
    return this._contract.listeners(...args);
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-off
  off(...args) {
    return this._contract.off(...args);
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-on
  on(...args) {
    return this._contract.on(...args);
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-once
  once(...args) {
    return this._contract.once(...args);
  }

  // https://docs.ethers.io/v5/api/contract/contract/#Contract-removeAllListeners
  removeAllListeners(...args) {
    this._contract.removeAllListeners(...args);
    return this;
  }
}
