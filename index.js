
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function (exports, utils$1, ethers, BigNumber) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var BigNumber__default = /*#__PURE__*/_interopDefaultLegacy(BigNumber);

  const buildError = ({
    message,
    prefix = 'elasticdao.org/utils - validations',
  }) => `${prefix}: ${message}`;

  const upTo = (n) => {
    utils$1.validateIsNumber(n);
    const arr = [];
    for (let i = 0; i < n; i += 1) {
      arr.push(n - 1);
    }
    return arr;
  };

  const validate = (result, options) => {
    const { level = 'error', message, prefix, throwError = true } = options;

    if (result) {
      return true;
    }

    const error = buildError({ message, prefix });

    if (throwError) {
      throw new TypeError(error);
    }

    console[level](error);
    return false;
  };

  var _format = "hh-sol-artifact-1";
  var contractName = "Ecosystem";
  var sourceName = "src/models/Ecosystem.sol";
  var abi = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_daoAddress",
  				type: "address"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_daoAddress",
  				type: "address"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode = "0x608060405234801561001057600080fd5b50610a49806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063332a4d0914610046578063884a0c5f1461006f578063f6a3d24e14610084575b600080fd5b610059610054366004610578565b6100a4565b6040516100669190610911565b60405180910390f35b61008261007d366004610599565b610230565b005b610097610092366004610578565b610445565b6040516100669190610906565b6100ac610505565b6100b582610456565b1561022b576001600160a01b0382168082526040516100f5916100da9160200161076f565b60405160208183030381529060405280519060200120610487565b6001600160a01b0316602080830191909152815160405161011b926100da9291016107f7565b6001600160a01b031660408083019190915281519051610141916100da916020016106b5565b6001600160a01b03166101008201528051604051610165916100da91602001610882565b6001600160a01b03166060820152306080820152805160405161018e916100da916020016107ae565b6001600160a01b031660a082015280516040516101b1916100da91602001610840565b6001600160a01b031661014082015280516040516101d5916100da91602001610731565b6001600160a01b031661012082015280516040516101f9916100da916020016108bd565b6001600160a01b031660c0820152805160405161021c916100da916020016106f4565b6001600160a01b031660e08201525b919050565b8051604051610265916102459160200161076f565b6040516020818303038152906040528051906020012082602001516104a2565b805160405161029a9161027a916020016107f7565b6040516020818303038152906040528051906020012082604001516104a2565b80516040516102d0916102af916020016106b5565b604051602081830303815290604052805190602001208261010001516104a2565b8051604051610305916102e591602001610882565b6040516020818303038152906040528051906020012082606001516104a2565b805160405161033a9161031a916020016107ae565b604051602081830303815290604052805190602001208260a001516104a2565b80516040516103709161034f91602001610840565b604051602081830303815290604052805190602001208261014001516104a2565b80516040516103a69161038591602001610731565b604051602081830303815290604052805190602001208261012001516104a2565b80516040516103db916103bb916020016108bd565b604051602081830303815290604052805190602001208260c001516104a2565b8051604051610410916103f0916020016106f4565b604051602081830303815290604052805190602001208260e001516104a2565b80516040516104429161042591602001610683565b6040516020818303038152906040528051906020012060016104d0565b50565b600061045082610456565b92915050565b60006104508260405160200161046c9190610683565b604051602081830303815290604052805190602001206104f0565b6000908152602081905260409020546001600160a01b031690565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b600091825260016020526040909120805460ff1916911515919091179055565b60009081526001602052604090205460ff1690565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b80356001600160a01b038116811461022b57600080fd5b600060208284031215610589578081fd5b61059282610561565b9392505050565b60006101608083850312156105ac578182fd5b6105b5816109ef565b90506105c083610561565b81526105ce60208401610561565b60208201526105df60408401610561565b60408201526105f060608401610561565b606082015261060160808401610561565b608082015261061260a08401610561565b60a082015261062360c08401610561565b60c082015261063460e08401610561565b60e0820152610100610647818501610561565b90820152610120610659848201610561565b9082015261014061066b848201610561565b908201529392505050565b6001600160a01b03169052565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b0391909116815260406020820181905260139082015272636f6e666967757261746f724164647265737360681b606082015260800190565b6001600160a01b0391909116815260406020820181905260119082015270746f6b656e4d6f64656c4164647265737360781b606082015260800190565b6001600160a01b03919091168152604060208201819052601290820152717265676973747261746f724164647265737360701b606082015260800190565b6001600160a01b039190911681526040602082018190526013908201527262616c616e63654d6f64656c4164647265737360681b606082015260800190565b6001600160a01b039190911681526040602082018190526019908201527f656c61737469634d6f64756c654d6f64656c4164647265737300000000000000606082015260800190565b6001600160a01b03919091168152604060208201819052601e908201527f62616c616e63654d756c7469706c696572734d6f64656c416464726573730000606082015260800190565b6001600160a01b0391909116815260406020820181905260169082015275676f7665726e616e6365546f6b656e4164647265737360501b606082015260800190565b6001600160a01b03919091168152604060208201819052600f908201526e64616f4d6f64656c4164647265737360881b606082015260800190565b6001600160a01b039190911681526040602082018190526017908201527f746f6b656e486f6c6465724d6f64656c41646472657373000000000000000000606082015260800190565b901515815260200190565b600061016082019050610925828451610676565b60208301516109376020840182610676565b50604083015161094a6040840182610676565b50606083015161095d6060840182610676565b5060808301516109706080840182610676565b5060a083015161098360a0840182610676565b5060c083015161099660c0840182610676565b5060e08301516109a960e0840182610676565b50610100808401516109bd82850182610676565b5050610120808401516109d282850182610676565b5050610140808401516109e782850182610676565b505092915050565b60405181810167ffffffffffffffff81118282101715610a0b57fe5b60405291905056fea264697066735822122046d7d8783b80b4dd55d59d1858c7c2bea06ae3fb7e11cce370df45d6aa0c3cbb64736f6c63430007020033";
  var deployedBytecode = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063332a4d0914610046578063884a0c5f1461006f578063f6a3d24e14610084575b600080fd5b610059610054366004610578565b6100a4565b6040516100669190610911565b60405180910390f35b61008261007d366004610599565b610230565b005b610097610092366004610578565b610445565b6040516100669190610906565b6100ac610505565b6100b582610456565b1561022b576001600160a01b0382168082526040516100f5916100da9160200161076f565b60405160208183030381529060405280519060200120610487565b6001600160a01b0316602080830191909152815160405161011b926100da9291016107f7565b6001600160a01b031660408083019190915281519051610141916100da916020016106b5565b6001600160a01b03166101008201528051604051610165916100da91602001610882565b6001600160a01b03166060820152306080820152805160405161018e916100da916020016107ae565b6001600160a01b031660a082015280516040516101b1916100da91602001610840565b6001600160a01b031661014082015280516040516101d5916100da91602001610731565b6001600160a01b031661012082015280516040516101f9916100da916020016108bd565b6001600160a01b031660c0820152805160405161021c916100da916020016106f4565b6001600160a01b031660e08201525b919050565b8051604051610265916102459160200161076f565b6040516020818303038152906040528051906020012082602001516104a2565b805160405161029a9161027a916020016107f7565b6040516020818303038152906040528051906020012082604001516104a2565b80516040516102d0916102af916020016106b5565b604051602081830303815290604052805190602001208261010001516104a2565b8051604051610305916102e591602001610882565b6040516020818303038152906040528051906020012082606001516104a2565b805160405161033a9161031a916020016107ae565b604051602081830303815290604052805190602001208260a001516104a2565b80516040516103709161034f91602001610840565b604051602081830303815290604052805190602001208261014001516104a2565b80516040516103a69161038591602001610731565b604051602081830303815290604052805190602001208261012001516104a2565b80516040516103db916103bb916020016108bd565b604051602081830303815290604052805190602001208260c001516104a2565b8051604051610410916103f0916020016106f4565b604051602081830303815290604052805190602001208260e001516104a2565b80516040516104429161042591602001610683565b6040516020818303038152906040528051906020012060016104d0565b50565b600061045082610456565b92915050565b60006104508260405160200161046c9190610683565b604051602081830303815290604052805190602001206104f0565b6000908152602081905260409020546001600160a01b031690565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b600091825260016020526040909120805460ff1916911515919091179055565b60009081526001602052604090205460ff1690565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b80356001600160a01b038116811461022b57600080fd5b600060208284031215610589578081fd5b61059282610561565b9392505050565b60006101608083850312156105ac578182fd5b6105b5816109ef565b90506105c083610561565b81526105ce60208401610561565b60208201526105df60408401610561565b60408201526105f060608401610561565b606082015261060160808401610561565b608082015261061260a08401610561565b60a082015261062360c08401610561565b60c082015261063460e08401610561565b60e0820152610100610647818501610561565b90820152610120610659848201610561565b9082015261014061066b848201610561565b908201529392505050565b6001600160a01b03169052565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b0391909116815260406020820181905260139082015272636f6e666967757261746f724164647265737360681b606082015260800190565b6001600160a01b0391909116815260406020820181905260119082015270746f6b656e4d6f64656c4164647265737360781b606082015260800190565b6001600160a01b03919091168152604060208201819052601290820152717265676973747261746f724164647265737360701b606082015260800190565b6001600160a01b039190911681526040602082018190526013908201527262616c616e63654d6f64656c4164647265737360681b606082015260800190565b6001600160a01b039190911681526040602082018190526019908201527f656c61737469634d6f64756c654d6f64656c4164647265737300000000000000606082015260800190565b6001600160a01b03919091168152604060208201819052601e908201527f62616c616e63654d756c7469706c696572734d6f64656c416464726573730000606082015260800190565b6001600160a01b0391909116815260406020820181905260169082015275676f7665726e616e6365546f6b656e4164647265737360501b606082015260800190565b6001600160a01b03919091168152604060208201819052600f908201526e64616f4d6f64656c4164647265737360881b606082015260800190565b6001600160a01b039190911681526040602082018190526017908201527f746f6b656e486f6c6465724d6f64656c41646472657373000000000000000000606082015260800190565b901515815260200190565b600061016082019050610925828451610676565b60208301516109376020840182610676565b50604083015161094a6040840182610676565b50606083015161095d6060840182610676565b5060808301516109706080840182610676565b5060a083015161098360a0840182610676565b5060c083015161099660c0840182610676565b5060e08301516109a960e0840182610676565b50610100808401516109bd82850182610676565b5050610120808401516109d282850182610676565b5050610140808401516109e782850182610676565b505092915050565b60405181810167ffffffffffffffff81118282101715610a0b57fe5b60405291905056fea264697066735822122046d7d8783b80b4dd55d59d1858c7c2bea06ae3fb7e11cce370df45d6aa0c3cbb64736f6c63430007020033";
  var linkReferences = {
  };
  var deployedLinkReferences = {
  };
  var EcosystemContract = {
  	_format: _format,
  	contractName: contractName,
  	sourceName: sourceName,
  	abi: abi,
  	bytecode: bytecode,
  	deployedBytecode: deployedBytecode,
  	linkReferences: linkReferences,
  	deployedLinkReferences: deployedLinkReferences
  };

  /* eslint class-methods-use-this: 0 */

  const prefix = '@elastic-dao/sdk';
  const validKeys = ['from', 'gasLimit', 'gasPrice', 'nonce', 'value'];

  class Base {
    constructor(sdk) {
      this._sdk = sdk;
    }

    get sdk() {
      return this._sdk;
    }

    sanitizeOverrides(requested = {}) {
      const overrides = {};

      if (requested.from && utils$1.isAddress(requested.from)) {
        overrides.from = requested.from;
      } else {
        console.warn(
          `${prefix}: Requested override 'from' (${requested.from}) is not a valid address and was excluded`,
        );
      }

      if (requested.gasLimit) {
        try {
          overrides.gasLimit = this.toEthersBigNumber(requested.gasLimit);
        } catch (e) {
          console.warn(
            `${prefix}: Requested override 'gasLimit' (${requested.gasLimit}) is invalid and was excluded (${e.message})`,
          );
        }
      }

      if (requested.gasPrice) {
        try {
          overrides.gasPrice = this.toEthersBigNumber(requested.gasPrice);
        } catch (e) {
          console.warn(
            `${prefix}: Requested override 'gasPrice' (${requested.gasPrice}) is invalid and was excluded (${e.message})`,
          );
        }
      }

      if (requested.nonce && utils$1.isNumber(requested.nonce)) {
        overrides.nonce = requested.nonce;
      } else {
        console.warn(
          `${prefix}: Requested override 'nonce' (${requested.nonce}) is not a valid number and was excluded`,
        );
      }

      if (requested.value) {
        try {
          overrides.value = this.toEthersBigNumber(requested.value, 18);
        } catch (e) {
          console.warn(
            `${prefix}: Requested override 'value' (${requested.value}) is invalid and was excluded (${e.message})`,
          );
        }
      }

      Object.keys(requested).forEach((key) => {
        if (!validKeys.includes(key)) {
          console.warn(
            `${prefix}: Requested override '${key}' is not supported and was excluded`,
          );
        }
      });

      return overrides;
    }

    toBigNumber(value, decimalShift = 0) {
      return BigNumber__default['default'](value.toString()).dividedBy(10 ** decimalShift);
    }

    toEthersBigNumber(value, decimalShift = 0) {
      return ethers.ethers.BigNumber.from(
        BigNumber__default['default'](value.toString())
          .multipliedBy(10 ** decimalShift)
          .dp(0)
          .toString(),
      );
    }

    toNumber(value, decimalShift = 0) {
      return this.toBigNumber(value, decimalShift).toNumber();
    }
  }

  /* eslint class-methods-use-this: 0 */

  class ElasticModel extends Base {
    async refresh() {
      return this.constructor.deserialize(this.id);
    }

    sanitize(obj) {
      const clean = {};
      const keys = Object.keys(obj);
      keys.forEach((key) => {
        clean[key] = obj[key];
        try {
          if (utils$1.isBigNumber(obj[key])) {
            clean[key] = obj[key].toFixed();
          }
        } catch (e) {
          // console.error(e);
        }
      });
      return clean;
    }
  }

  const cache = {};
  const prefix$1 = '@elastic-dao/sdk - Ecosystem';

  const isEcosystem = (thing) =>
    thing && typeof thing === 'object' && thing instanceof Ecosystem;
  const validateIsEcosystem = (thing) => {
    const message = 'not an Ecosystem';
    validate(isEcosystem(thing), { message, prefix: prefix$1 });
  };

  class Ecosystem extends ElasticModel {
    constructor(
      sdk,
      {
        balanceModelAddress,
        balanceMultipliersModelAddress,
        configuratorAddress,
        daoAddress,
        daoModelAddress,
        ecosystemModelAddress,
        elasticModuleModelAddress,
        governanceTokenAddress,
        registratorAddress,
        tokenHolderModelAddress,
        tokenModelAddress,
      },
    ) {
      super(sdk);
      this.id = (daoAddress || ethers.ethers.constants.AddressZero).toLowerCase();
      cache[this.id] = {
        balanceModelAddress,
        balanceMultipliersModelAddress,
        configuratorAddress,
        daoAddress,
        daoModelAddress,
        ecosystemModelAddress,
        elasticModuleModelAddress,
        governanceTokenAddress,
        registratorAddress,
        tokenHolderModelAddress,
        tokenModelAddress,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$1 });
      return sdk.contract({ abi: EcosystemContract.abi, address });
    }

    static async deserialize(sdk, daoAddress) {
      utils$1.validateIsAddress(daoAddress, { prefix: prefix$1 });

      const ecosystemModel = await this.contract(
        sdk,
        sdk.env.elasticDAO.ecosystemModelAddress,
      );

      const {
        balanceModelAddress,
        balanceMultipliersModelAddress,
        configuratorAddress,
        daoModelAddress,
        ecosystemModelAddress,
        elasticModuleModelAddress,
        governanceTokenAddress,
        registratorAddress,
        tokenHolderModelAddress,
        tokenModelAddress,
      } = await ecosystemModel.deserialize(daoAddress);

      return new Ecosystem(sdk, {
        balanceModelAddress,
        balanceMultipliersModelAddress,
        configuratorAddress,
        daoAddress,
        daoModelAddress,
        ecosystemModelAddress,
        elasticModuleModelAddress,
        governanceTokenAddress,
        registratorAddress,
        tokenHolderModelAddress,
        tokenModelAddress,
      });
    }

    // Getters

    get address() {
      return this.sdk.env.elasticDAO.ecosystemModelAddress;
    }

    get balanceModelAddress() {
      return cache[this.id].balanceModelAddress;
    }

    get balanceMultipliersModelAddress() {
      return cache[this.id].balanceMultipliersModelAddress;
    }

    get configuratorAddress() {
      return cache[this.id].configuratorAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get daoAddress() {
      return cache[this.id].daoAddress;
    }

    get daoModelAddress() {
      return cache[this.id].daoModelAddress;
    }

    get ecosystemModelAddress() {
      return cache[this.id].ecosystemModelAddress;
    }

    get elasticModuleModelAddress() {
      return cache[this.id].elasticModuleModelAddress;
    }

    get governanceTokenAddress() {
      return cache[this.id].governanceTokenAddress;
    }

    get registratorAddress() {
      return cache[this.id].registratorAddress;
    }

    get tokenHolderModelAddress() {
      return cache[this.id].tokenHolderModelAddress;
    }

    get tokenModelAddress() {
      return cache[this.id].tokenModelAddress;
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(this.sdk, this.daoAddress);
    }

    toObject() {
      const { id } = this;

      return this.sanitize({
        ...cache[id],
        id,
      });
    }
  }

  var _format$1 = "hh-sol-artifact-1";
  var contractName$1 = "Token";
  var sourceName$1 = "src/models/Token.sol";
  var abi$1 = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_uuid",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "_ecosystem",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_uuid",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_uuid",
  				type: "address"
  			}
  		],
  		name: "incrementCounter",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "record",
  				type: "tuple"
  			},
  			{
  				internalType: "uint256",
  				name: "numberOfTokenHolders",
  				type: "uint256"
  			}
  		],
  		name: "updateNumberOfTokenHolders",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$1 = "0x608060405234801561001057600080fd5b50610fe3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063256fee401461005c5780637fc975f314610071578063e5910ae71461009a578063e8a85bdd146100ad578063fb10b0c5146100c0575b600080fd5b61006f61006a366004610a63565b6100e0565b005b61008461007f366004610a2f565b6102bf565b6040516100919190610e42565b60405180910390f35b61006f6100a8366004610a15565b6102d3565b61006f6100bb366004610a9e565b610344565b6100d36100ce366004610a2f565b610375565b6040516100919190610ebb565b8051604051610115916100f591602001610c3e565b6040516020818303038152906040528051906020012082602001516104c8565b805160405161014a9161012a91602001610d80565b6040516020818303038152906040528051906020012082604001516104c8565b805160405161017f9161015f91602001610d13565b6040516020818303038152906040528051906020012082608001516104ec565b80516040516101b49161019491602001610db2565b604051602081830303815290604052805190602001208260a001516104ec565b80516040516101e9916101c991602001610e15565b604051602081830303815290604052805190602001208260c001516104ec565b805160405161021e916101fe91602001610c6e565b604051602081830303815290604052805190602001208260e001516104ec565b80516040516102549161023391602001610de8565b604051602081830303815290604052805190602001208261010001516104ec565b805160405161028a9161026991602001610d43565b604051602081830303815290604052805190602001208261012001516104ec565b80516040516102bc9161029f91602001610c0c565b6040516020818303038152906040528051906020012060016104fe565b50565b60006102ca8361051e565b90505b92915050565b6000610304826040516020016102e99190610ce0565b60405160208183030381529060405280519060200120610557565b90506103408260405160200161031a9190610ce0565b6040516020818303038152906040528051906020012061033b836001610569565b6104ec565b5050565b81516040516103409161035991602001610ca0565b60405160208183030381529060405280519060200120826104ec565b61037d61067a565b6001600160a01b0383168152610160810182905261039a8361051e565b156102cd576103b3836040516020016102e99190610ce0565b60608201526040516103cd906102e9908590602001610d13565b60808201526040516103e7906102e9908590602001610db2565b60a0820152604051610401906102e9908590602001610e15565b60c082015260405161041b906102e9908590602001610c6e565b60e0820152604051610435906102e9908590602001610de8565b610100820152604051610450906102e9908590602001610d43565b6101208201526040516104869061046b908590602001610c3e565b60405160208183030381529060405280519060200120610597565b81602001819052506104a2836040516020016102e99190610ca0565b6101408201526040516104bd9061046b908590602001610d80565b604082015292915050565b600082815260046020908152604090912082516104e7928401906106e9565b505050565b60009182526005602052604090912055565b600091825260016020526040909120805460ff1916911515919091179055565b600061054f826040516020016105349190610c0c565b60405160208183030381529060405280519060200120610665565b90505b919050565b60009081526005602052604090205490565b6000828201838110156102ca5760405162461bcd60e51b815260040161058e90610e4d565b60405180910390fd5b60608160001a60f81b6001600160f81b0319166105c65760405162461bcd60e51b815260040161058e90610e84565b60008281526004602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b50505050509050919050565b60009081526001602052604090205460ff1690565b60405180610180016040528060006001600160a01b03168152602001606081526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016106e4610767565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061072a57805160ff1916838001178555610757565b82800160010185558215610757579182015b8281111561075757825182559160200191906001019061073c565b506107639291506107c3565b5090565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b5b8082111561076357600081556001016107c4565b80356001600160a01b038116811461055257600080fd5b600082601f8301126107ff578081fd5b813567ffffffffffffffff81111561081357fe5b610826601f8201601f1916602001610f89565b915080825283602082850101111561083d57600080fd5b8060208401602084013760009082016020015292915050565b6000610160808385031215610869578182fd5b61087281610f89565b91505061087e826107d8565b815261088c602083016107d8565b602082015261089d604083016107d8565b60408201526108ae606083016107d8565b60608201526108bf608083016107d8565b60808201526108d060a083016107d8565b60a08201526108e160c083016107d8565b60c08201526108f260e083016107d8565b60e08201526101006109058184016107d8565b908201526101206109178382016107d8565b908201526101406109298382016107d8565b9082015292915050565b60006102c08284031215610945578081fd5b610950610180610f89565b905061095b826107d8565b8152602082013567ffffffffffffffff8082111561097857600080fd5b610984858386016107ef565b6020840152604084013591508082111561099d57600080fd5b506109aa848285016107ef565b604083015250606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016061092984828501610856565b600060208284031215610a26578081fd5b6102ca826107d8565b6000806101808385031215610a42578081fd5b610a4b836107d8565b9150610a5a8460208501610856565b90509250929050565b600060208284031215610a74578081fd5b813567ffffffffffffffff811115610a8a578182fd5b610a9684828501610933565b949350505050565b60008060408385031215610ab0578182fd5b823567ffffffffffffffff811115610ac6578283fd5b610ad285828601610933565b95602094909401359450505050565b6001600160a01b03169052565b60008151808452815b81811015610b1357602081850181015186830182015201610af7565b81811115610b245782602083870101525b50601f01601f19169290920160200192915050565b610b44828251610ae1565b6020810151610b566020840182610ae1565b506040810151610b696040840182610ae1565b506060810151610b7c6060840182610ae1565b506080810151610b8f6080840182610ae1565b5060a0810151610ba260a0840182610ae1565b5060c0810151610bb560c0840182610ae1565b5060e0810151610bc860e0840182610ae1565b5061010080820151610bdc82850182610ae1565b505061012080820151610bf182850182610ae1565b505061014080820151610c0682850182610ae1565b50505050565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b03919091168152604060208201819052600490820152636e616d6560e01b606082015260800190565b6001600160a01b03919091168152604060208201819052600690820152656c616d62646160d01b606082015260800190565b6001600160a01b03919091168152604060208201819052601490820152736e756d6265724f66546f6b656e486f6c6465727360601b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526631b7bab73a32b960c91b606082015260800190565b6001600160a01b039190911681526040602082018190526004908201526319509e5b60e21b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d61784c616d626461507572636861736560781b606082015260800190565b6001600160a01b03919091168152604060208201819052600690820152651cde5b589bdb60d21b606082015260800190565b6001600160a01b03919091168152604060208201819052600a9082015269656c617374696369747960b01b606082015260800190565b6001600160a01b03919091168152604060208201819052600190820152606d60f81b606082015260800190565b6001600160a01b03919091168152604060208201819052600190820152606b60f81b606082015260800190565b901515815260200190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b600060208252610ecf602083018451610ae1565b60208301516102c06040840152610eea6102e0840182610aee565b90506040840151601f19848303016060850152610f078282610aee565b91505060608401516080840152608084015160a084015260a084015160c084015260c084015160e084015260e0840151610100818186015280860151915050610120818186015280860151915050610140818186015280860151915050610160818186015280860151915050610f81610180850182610b39565b509392505050565b60405181810167ffffffffffffffff81118282101715610fa557fe5b60405291905056fea26469706673582212206af73866f6053737f0f1fcfdada360e58d6bf1e6ea7f06fd8b5341d193e91bef64736f6c63430007020033";
  var deployedBytecode$1 = "0x608060405234801561001057600080fd5b50600436106100575760003560e01c8063256fee401461005c5780637fc975f314610071578063e5910ae71461009a578063e8a85bdd146100ad578063fb10b0c5146100c0575b600080fd5b61006f61006a366004610a63565b6100e0565b005b61008461007f366004610a2f565b6102bf565b6040516100919190610e42565b60405180910390f35b61006f6100a8366004610a15565b6102d3565b61006f6100bb366004610a9e565b610344565b6100d36100ce366004610a2f565b610375565b6040516100919190610ebb565b8051604051610115916100f591602001610c3e565b6040516020818303038152906040528051906020012082602001516104c8565b805160405161014a9161012a91602001610d80565b6040516020818303038152906040528051906020012082604001516104c8565b805160405161017f9161015f91602001610d13565b6040516020818303038152906040528051906020012082608001516104ec565b80516040516101b49161019491602001610db2565b604051602081830303815290604052805190602001208260a001516104ec565b80516040516101e9916101c991602001610e15565b604051602081830303815290604052805190602001208260c001516104ec565b805160405161021e916101fe91602001610c6e565b604051602081830303815290604052805190602001208260e001516104ec565b80516040516102549161023391602001610de8565b604051602081830303815290604052805190602001208261010001516104ec565b805160405161028a9161026991602001610d43565b604051602081830303815290604052805190602001208261012001516104ec565b80516040516102bc9161029f91602001610c0c565b6040516020818303038152906040528051906020012060016104fe565b50565b60006102ca8361051e565b90505b92915050565b6000610304826040516020016102e99190610ce0565b60405160208183030381529060405280519060200120610557565b90506103408260405160200161031a9190610ce0565b6040516020818303038152906040528051906020012061033b836001610569565b6104ec565b5050565b81516040516103409161035991602001610ca0565b60405160208183030381529060405280519060200120826104ec565b61037d61067a565b6001600160a01b0383168152610160810182905261039a8361051e565b156102cd576103b3836040516020016102e99190610ce0565b60608201526040516103cd906102e9908590602001610d13565b60808201526040516103e7906102e9908590602001610db2565b60a0820152604051610401906102e9908590602001610e15565b60c082015260405161041b906102e9908590602001610c6e565b60e0820152604051610435906102e9908590602001610de8565b610100820152604051610450906102e9908590602001610d43565b6101208201526040516104869061046b908590602001610c3e565b60405160208183030381529060405280519060200120610597565b81602001819052506104a2836040516020016102e99190610ca0565b6101408201526040516104bd9061046b908590602001610d80565b604082015292915050565b600082815260046020908152604090912082516104e7928401906106e9565b505050565b60009182526005602052604090912055565b600091825260016020526040909120805460ff1916911515919091179055565b600061054f826040516020016105349190610c0c565b60405160208183030381529060405280519060200120610665565b90505b919050565b60009081526005602052604090205490565b6000828201838110156102ca5760405162461bcd60e51b815260040161058e90610e4d565b60405180910390fd5b60608160001a60f81b6001600160f81b0319166105c65760405162461bcd60e51b815260040161058e90610e84565b60008281526004602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b50505050509050919050565b60009081526001602052604090205460ff1690565b60405180610180016040528060006001600160a01b03168152602001606081526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016106e4610767565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061072a57805160ff1916838001178555610757565b82800160010185558215610757579182015b8281111561075757825182559160200191906001019061073c565b506107639291506107c3565b5090565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b5b8082111561076357600081556001016107c4565b80356001600160a01b038116811461055257600080fd5b600082601f8301126107ff578081fd5b813567ffffffffffffffff81111561081357fe5b610826601f8201601f1916602001610f89565b915080825283602082850101111561083d57600080fd5b8060208401602084013760009082016020015292915050565b6000610160808385031215610869578182fd5b61087281610f89565b91505061087e826107d8565b815261088c602083016107d8565b602082015261089d604083016107d8565b60408201526108ae606083016107d8565b60608201526108bf608083016107d8565b60808201526108d060a083016107d8565b60a08201526108e160c083016107d8565b60c08201526108f260e083016107d8565b60e08201526101006109058184016107d8565b908201526101206109178382016107d8565b908201526101406109298382016107d8565b9082015292915050565b60006102c08284031215610945578081fd5b610950610180610f89565b905061095b826107d8565b8152602082013567ffffffffffffffff8082111561097857600080fd5b610984858386016107ef565b6020840152604084013591508082111561099d57600080fd5b506109aa848285016107ef565b604083015250606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016061092984828501610856565b600060208284031215610a26578081fd5b6102ca826107d8565b6000806101808385031215610a42578081fd5b610a4b836107d8565b9150610a5a8460208501610856565b90509250929050565b600060208284031215610a74578081fd5b813567ffffffffffffffff811115610a8a578182fd5b610a9684828501610933565b949350505050565b60008060408385031215610ab0578182fd5b823567ffffffffffffffff811115610ac6578283fd5b610ad285828601610933565b95602094909401359450505050565b6001600160a01b03169052565b60008151808452815b81811015610b1357602081850181015186830182015201610af7565b81811115610b245782602083870101525b50601f01601f19169290920160200192915050565b610b44828251610ae1565b6020810151610b566020840182610ae1565b506040810151610b696040840182610ae1565b506060810151610b7c6060840182610ae1565b506080810151610b8f6080840182610ae1565b5060a0810151610ba260a0840182610ae1565b5060c0810151610bb560c0840182610ae1565b5060e0810151610bc860e0840182610ae1565b5061010080820151610bdc82850182610ae1565b505061012080820151610bf182850182610ae1565b505061014080820151610c0682850182610ae1565b50505050565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b03919091168152604060208201819052600490820152636e616d6560e01b606082015260800190565b6001600160a01b03919091168152604060208201819052600690820152656c616d62646160d01b606082015260800190565b6001600160a01b03919091168152604060208201819052601490820152736e756d6265724f66546f6b656e486f6c6465727360601b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526631b7bab73a32b960c91b606082015260800190565b6001600160a01b039190911681526040602082018190526004908201526319509e5b60e21b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d61784c616d626461507572636861736560781b606082015260800190565b6001600160a01b03919091168152604060208201819052600690820152651cde5b589bdb60d21b606082015260800190565b6001600160a01b03919091168152604060208201819052600a9082015269656c617374696369747960b01b606082015260800190565b6001600160a01b03919091168152604060208201819052600190820152606d60f81b606082015260800190565b6001600160a01b03919091168152604060208201819052600190820152606b60f81b606082015260800190565b901515815260200190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b600060208252610ecf602083018451610ae1565b60208301516102c06040840152610eea6102e0840182610aee565b90506040840151601f19848303016060850152610f078282610aee565b91505060608401516080840152608084015160a084015260a084015160c084015260c084015160e084015260e0840151610100818186015280860151915050610120818186015280860151915050610140818186015280860151915050610160818186015280860151915050610f81610180850182610b39565b509392505050565b60405181810167ffffffffffffffff81118282101715610fa557fe5b60405291905056fea26469706673582212206af73866f6053737f0f1fcfdada360e58d6bf1e6ea7f06fd8b5341d193e91bef64736f6c63430007020033";
  var linkReferences$1 = {
  };
  var deployedLinkReferences$1 = {
  };
  var TokenContract = {
  	_format: _format$1,
  	contractName: contractName$1,
  	sourceName: sourceName$1,
  	abi: abi$1,
  	bytecode: bytecode$1,
  	deployedBytecode: deployedBytecode$1,
  	linkReferences: linkReferences$1,
  	deployedLinkReferences: deployedLinkReferences$1
  };

  const cache$1 = {};
  const prefix$2 = '@elastic-dao/sdk - Token';

  const isToken = (thing) =>
    thing && typeof thing === 'object' && thing instanceof Token;
  const validateIsToken = (thing) => {
    const message = 'not a Token';
    validate(isToken(thing), { message, prefix: prefix$2 });
  };

  class Token extends ElasticModel {
    constructor(
      sdk,
      {
        capitalDelta,
        counter,
        ecosystem,
        elasticity,
        k,
        lambda,
        m,
        maxLambdaPurchase,
        name,
        numberOfTokenHolders,
        symbol,
        uuid,
      },
    ) {
      super(sdk);
      this.id = uuid.toLowerCase();
      cache$1[this.id] = {
        capitalDelta,
        counter,
        ecosystem,
        elasticity,
        k,
        lambda,
        m,
        maxLambdaPurchase,
        name,
        numberOfTokenHolders,
        symbol,
        uuid,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$2 });
      return sdk.contract({ abi: TokenContract.abi, address });
    }

    static async deserialize(sdk, uuid, ecosystem) {
      utils$1.validateIsAddress(uuid, { prefix: prefix$2 });
      validateIsEcosystem(ecosystem);

      const tokenModel = await this.contract(sdk, ecosystem.tokenModelAddress);

      const {
        capitalDelta,
        counter,
        elasticity,
        k,
        lambda,
        m,
        maxLambdaPurchase,
        name,
        numberOfTokenHolders,
        symbol,
      } = await tokenModel.deserialize(uuid, ecosystem.toObject(false));

      return new Token(sdk, {
        capitalDelta,
        counter,
        ecosystem,
        elasticity,
        k,
        lambda,
        m,
        maxLambdaPurchase,
        name,
        numberOfTokenHolders,
        symbol,
        uuid,
      });
    }

    // Getters

    get address() {
      return this.ecosystem.tokenModelAddress;
    }

    get capitalDelta() {
      return this.toBigNumber(cache$1[this.id].capitalDelta, 18);
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get counter() {
      return this.toNumber(cache$1[this.id].counter);
    }

    get ecosystem() {
      return cache$1[this.id].ecosystem;
    }

    get elasticity() {
      return this.toBigNumber(cache$1[this.id].elasticity, 18);
    }

    get k() {
      return this.toBigNumber(cache$1[this.id].k, 18);
    }

    get lambda() {
      return this.toBigNumber(cache$1[this.id].lambda, 18);
    }

    get m() {
      return this.toBigNumber(cache$1[this.id].m, 18);
    }

    get maxLambdaPurchase() {
      return this.toBigNumber(cache$1[this.id].maxLambdaPurchase, 18);
    }

    get name() {
      return cache$1[this.id].name;
    }

    get numberOfTokenHolders() {
      return this.toNumber(cache$1[this.id].numberOfTokenHolders);
    }

    get symbol() {
      return cache$1[this.id].symbol;
    }

    get uuid() {
      return cache$1[this.id].uuid;
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(this.sdk, this.uuid, this.ecosystem);
    }

    toObject(includeNested = true) {
      const { ecosystem, id } = this;

      const obj = {
        ...cache$1[id],
        id,
        ecosystem: ecosystem.toObject(false),
      };

      if (includeNested === false) {
        delete obj.ecosystem;
      }

      return this.sanitize(obj);
    }
  }

  var _format$2 = "hh-sol-artifact-1";
  var contractName$2 = "TokenHolder";
  var sourceName$2 = "src/models/TokenHolder.sol";
  var abi$2 = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_account",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "_ecosystem",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "_token",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "account",
  						type: "address"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "string",
  								name: "symbol",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "eByl",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "elasticity",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "k",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "m",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxLambdaPurchase",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfTokenHolders",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct Token.Instance",
  						name: "token",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TokenHolder.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_account",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "_ecosystem",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "_token",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "account",
  						type: "address"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "string",
  								name: "symbol",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "eByl",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "elasticity",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "k",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "m",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxLambdaPurchase",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfTokenHolders",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct Token.Instance",
  						name: "token",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TokenHolder.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$2 = "0x608060405234801561001057600080fd5b50610a3f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631d4cf55c146100465780638133b1681461006f578063b1a771eb14610084575b600080fd5b6100596100543660046105e5565b6100a4565b60405161006691906108ca565b60405180910390f35b61008261007d366004610644565b6100bb565b005b6100976100923660046105e5565b610172565b60405161006691906108d5565b60006100b184848461020c565b90505b9392505050565b60808101515181516040516100f8926100d8929091602001610891565b604051602081830303815290604052805190602001208260200151610243565b608081015151815160405161013592610115929091602001610859565b604051602081830303815290604052805190602001208260400151610243565b608081015151815160405161016f92610152929091602001610821565b604051602081830303815290604052805190602001206001610255565b50565b61017a61029f565b6001600160a01b0384168152606081018390526080810182905261019f84848461020c565b156100b45760808101515181516040516101dc926101c1929091602001610891565b60405160208183030381529060405280519060200120610275565b6020808301919091526080820151518251604051610200936101c193929101610859565b60408201529392505050565b60006100b1826000015185604051602001610228929190610821565b6040516020818303038152906040528051906020012061028a565b60009182526005602052604090912055565b600091825260016020526040909120805460ff1916911515919091179055565b6000818152600560205260409020545b919050565b60009081526001602052604090205460ff1690565b6040518060a0016040528060006001600160a01b0316815260200160008152602001600081526020016102d06102e2565b81526020016102dd61033e565b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b03168152602001606081526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016102dd6102e2565b80356001600160a01b038116811461028557600080fd5b600082601f8301126103cf578081fd5b813567ffffffffffffffff8111156103e357fe5b6103f6601f8201601f19166020016109e5565b915080825283602082850101111561040d57600080fd5b8060208401602084013760009082016020015292915050565b6000610160808385031215610439578182fd5b610442816109e5565b91505061044e826103a8565b815261045c602083016103a8565b602082015261046d604083016103a8565b604082015261047e606083016103a8565b606082015261048f608083016103a8565b60808201526104a060a083016103a8565b60a08201526104b160c083016103a8565b60c08201526104c260e083016103a8565b60e08201526101006104d58184016103a8565b908201526101206104e78382016103a8565b908201526101406104f98382016103a8565b9082015292915050565b60006102c08284031215610515578081fd5b6105206101806109e5565b905061052b826103a8565b8152602082013567ffffffffffffffff8082111561054857600080fd5b610554858386016103bf565b6020840152604084013591508082111561056d57600080fd5b5061057a848285016103bf565b604083015250606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101606104f984828501610426565b60008060006101a084860312156105fa578283fd5b610603846103a8565b92506106128560208601610426565b915061018084013567ffffffffffffffff81111561062e578182fd5b61063a86828701610503565b9150509250925092565b600060208284031215610655578081fd5b813567ffffffffffffffff8082111561066c578283fd5b908301906101e08286031215610680578283fd5b60405160a08101818110838211171561069557fe5b6040526106a1836103a8565b815260208301356020820152604083013560408201526106c48660608501610426565b60608201526101c0830135828111156106db578485fd5b6106e787828601610503565b60808301525095945050505050565b6001600160a01b03169052565b60008151808452815b818110156107285760208185018101518683018201520161070c565b818111156107395782602083870101525b50601f01601f19169290920160200192915050565b6107598282516106f6565b602081015161076b60208401826106f6565b50604081015161077e60408401826106f6565b50606081015161079160608401826106f6565b5060808101516107a460808401826106f6565b5060a08101516107b760a08401826106f6565b5060c08101516107ca60c08401826106f6565b5060e08101516107dd60e08401826106f6565b50610100808201516107f1828501826106f6565b505061012080820151610806828501826106f6565b50506101408082015161081b828501826106f6565b50505050565b6001600160a01b039283168152911660208201526060604082018190526006908201526565786973747360d01b608082015260a00190565b6001600160a01b03928316815291166020820152606060408201819052600690820152656c616d62646160d01b608082015260a00190565b6001600160a01b039283168152911660208201526060604082018190526007908201526631b7bab73a32b960c91b608082015260a00190565b901515815260200190565b60006020825260018060a01b03835116602083015260208301516040830152604083015160608301526060830151610910608084018261074e565b5060808301516101e080818501525061092e610200840182516106f6565b60208101516102c08061022086015261094b6104c0860183610703565b915060408301516101ff198684030161024087015261096a8382610703565b9250506060830151610260860152608083015161028086015260a08301516102a086015260c0830151818601525060e08201516102e085015261010082015161030085015261012082015161032085015261014082015161034085015261016082015191506109dd61036085018361074e565b949350505050565b60405181810167ffffffffffffffff81118282101715610a0157fe5b60405291905056fea26469706673582212203d768c6707f67c6f975467dc6206c6403dda2d99cfc3430534fa8a9211789f1b64736f6c63430007020033";
  var deployedBytecode$2 = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80631d4cf55c146100465780638133b1681461006f578063b1a771eb14610084575b600080fd5b6100596100543660046105e5565b6100a4565b60405161006691906108ca565b60405180910390f35b61008261007d366004610644565b6100bb565b005b6100976100923660046105e5565b610172565b60405161006691906108d5565b60006100b184848461020c565b90505b9392505050565b60808101515181516040516100f8926100d8929091602001610891565b604051602081830303815290604052805190602001208260200151610243565b608081015151815160405161013592610115929091602001610859565b604051602081830303815290604052805190602001208260400151610243565b608081015151815160405161016f92610152929091602001610821565b604051602081830303815290604052805190602001206001610255565b50565b61017a61029f565b6001600160a01b0384168152606081018390526080810182905261019f84848461020c565b156100b45760808101515181516040516101dc926101c1929091602001610891565b60405160208183030381529060405280519060200120610275565b6020808301919091526080820151518251604051610200936101c193929101610859565b60408201529392505050565b60006100b1826000015185604051602001610228929190610821565b6040516020818303038152906040528051906020012061028a565b60009182526005602052604090912055565b600091825260016020526040909120805460ff1916911515919091179055565b6000818152600560205260409020545b919050565b60009081526001602052604090205460ff1690565b6040518060a0016040528060006001600160a01b0316815260200160008152602001600081526020016102d06102e2565b81526020016102dd61033e565b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b03168152602001606081526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016102dd6102e2565b80356001600160a01b038116811461028557600080fd5b600082601f8301126103cf578081fd5b813567ffffffffffffffff8111156103e357fe5b6103f6601f8201601f19166020016109e5565b915080825283602082850101111561040d57600080fd5b8060208401602084013760009082016020015292915050565b6000610160808385031215610439578182fd5b610442816109e5565b91505061044e826103a8565b815261045c602083016103a8565b602082015261046d604083016103a8565b604082015261047e606083016103a8565b606082015261048f608083016103a8565b60808201526104a060a083016103a8565b60a08201526104b160c083016103a8565b60c08201526104c260e083016103a8565b60e08201526101006104d58184016103a8565b908201526101206104e78382016103a8565b908201526101406104f98382016103a8565b9082015292915050565b60006102c08284031215610515578081fd5b6105206101806109e5565b905061052b826103a8565b8152602082013567ffffffffffffffff8082111561054857600080fd5b610554858386016103bf565b6020840152604084013591508082111561056d57600080fd5b5061057a848285016103bf565b604083015250606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101606104f984828501610426565b60008060006101a084860312156105fa578283fd5b610603846103a8565b92506106128560208601610426565b915061018084013567ffffffffffffffff81111561062e578182fd5b61063a86828701610503565b9150509250925092565b600060208284031215610655578081fd5b813567ffffffffffffffff8082111561066c578283fd5b908301906101e08286031215610680578283fd5b60405160a08101818110838211171561069557fe5b6040526106a1836103a8565b815260208301356020820152604083013560408201526106c48660608501610426565b60608201526101c0830135828111156106db578485fd5b6106e787828601610503565b60808301525095945050505050565b6001600160a01b03169052565b60008151808452815b818110156107285760208185018101518683018201520161070c565b818111156107395782602083870101525b50601f01601f19169290920160200192915050565b6107598282516106f6565b602081015161076b60208401826106f6565b50604081015161077e60408401826106f6565b50606081015161079160608401826106f6565b5060808101516107a460808401826106f6565b5060a08101516107b760a08401826106f6565b5060c08101516107ca60c08401826106f6565b5060e08101516107dd60e08401826106f6565b50610100808201516107f1828501826106f6565b505061012080820151610806828501826106f6565b50506101408082015161081b828501826106f6565b50505050565b6001600160a01b039283168152911660208201526060604082018190526006908201526565786973747360d01b608082015260a00190565b6001600160a01b03928316815291166020820152606060408201819052600690820152656c616d62646160d01b608082015260a00190565b6001600160a01b039283168152911660208201526060604082018190526007908201526631b7bab73a32b960c91b608082015260a00190565b901515815260200190565b60006020825260018060a01b03835116602083015260208301516040830152604083015160608301526060830151610910608084018261074e565b5060808301516101e080818501525061092e610200840182516106f6565b60208101516102c08061022086015261094b6104c0860183610703565b915060408301516101ff198684030161024087015261096a8382610703565b9250506060830151610260860152608083015161028086015260a08301516102a086015260c0830151818601525060e08201516102e085015261010082015161030085015261012082015161032085015261014082015161034085015261016082015191506109dd61036085018361074e565b949350505050565b60405181810167ffffffffffffffff81118282101715610a0157fe5b60405291905056fea26469706673582212203d768c6707f67c6f975467dc6206c6403dda2d99cfc3430534fa8a9211789f1b64736f6c63430007020033";
  var linkReferences$2 = {
  };
  var deployedLinkReferences$2 = {
  };
  var TokenHolderContract = {
  	_format: _format$2,
  	contractName: contractName$2,
  	sourceName: sourceName$2,
  	abi: abi$2,
  	bytecode: bytecode$2,
  	deployedBytecode: deployedBytecode$2,
  	linkReferences: linkReferences$2,
  	deployedLinkReferences: deployedLinkReferences$2
  };

  const cache$2 = {};
  const prefix$3 = '@elastic-dao/sdk - TokenHolder';

  const isTokenHolder = (thing) =>
    thing && typeof thing === 'object' && thing instanceof TokenHolder;
  const validateIsTokenHolder = (thing) => {
    const message = 'not a TokenHolder';
    validate(isTokenHolder(thing), { message, prefix: prefix$3 });
  };

  class TokenHolder extends ElasticModel {
    constructor(sdk, { account, counter, ecosystem, lambda, token }) {
      super(sdk);
      this.id = `${token.uuid}|${account}`.toLowerCase();
      cache$2[this.id] = {
        account,
        counter,
        ecosystem,
        lambda,
        token,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$3 });
      return sdk.contract({ abi: TokenHolderContract.abi, address });
    }

    static async deserialize(sdk, uuid, ecosystem, token) {
      utils$1.validateIsAddress(uuid, { prefix: prefix$3 });
      validateIsEcosystem(ecosystem);
      validateIsToken(token);

      const tokenHolderModel = await this.contract(
        sdk,
        ecosystem.tokenHolderModelAddress,
      );

      const { account, counter, lambda } = await tokenHolderModel.deserialize(
        uuid,
        ecosystem.toObject(false),
        token.toObject(false),
      );

      return new TokenHolder(sdk, {
        account,
        counter,
        ecosystem,
        lambda,
        token,
      });
    }

    // Getters

    get account() {
      return cache$2[this.id].account;
    }

    get address() {
      return this.ecosystem.tokenHolderModelAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get counter() {
      return this.toNumber(cache$2[this.id].counter);
    }

    get ecosystem() {
      return cache$2[this.id].ecosystem;
    }

    get lambda() {
      return this.toBigNumber(cache$2[this.id].lambda, 18);
    }

    get token() {
      return cache$2[this.id].token;
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(
        this.sdk,
        this.uuid,
        this.ecosystem,
        this.token,
      );
    }

    toObject(includeNested = true) {
      const { ecosystem, id, token } = this;

      const obj = {
        ...cache$2[id],
        id,
        ecosystem: ecosystem.toObject(false),
        token: token.toObject(false),
      };

      if (includeNested === false) {
        delete obj.ecosystem;
        delete obj.token;
      }

      return this.sanitize(obj);
    }
  }

  var _format$3 = "hh-sol-artifact-1";
  var contractName$3 = "Balance";
  var sourceName$3 = "src/models/Balance.sol";
  var abi$3 = [
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_blockNumber",
  				type: "uint256"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "_ecosystem",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "_token",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "account",
  						type: "address"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "string",
  								name: "symbol",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "eByl",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "elasticity",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "k",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "m",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxLambdaPurchase",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfTokenHolders",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct Token.Instance",
  						name: "token",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TokenHolder.Instance",
  				name: "_tokenHolder",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "uint256",
  						name: "blockNumber",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "string",
  								name: "symbol",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "eByl",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "elasticity",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "k",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "m",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxLambdaPurchase",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfTokenHolders",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct Token.Instance",
  						name: "token",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "account",
  								type: "address"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "uuid",
  										type: "address"
  									},
  									{
  										internalType: "string",
  										name: "name",
  										type: "string"
  									},
  									{
  										internalType: "string",
  										name: "symbol",
  										type: "string"
  									},
  									{
  										internalType: "uint256",
  										name: "counter",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "eByl",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "elasticity",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "k",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "lambda",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "m",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "maxLambdaPurchase",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "numberOfTokenHolders",
  										type: "uint256"
  									},
  									{
  										components: [
  											{
  												internalType: "address",
  												name: "daoAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "balanceModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "balanceMultipliersModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "daoModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "ecosystemModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "elasticModuleModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "tokenHolderModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "tokenModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "configuratorAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "registratorAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "governanceTokenAddress",
  												type: "address"
  											}
  										],
  										internalType: "struct Ecosystem.Instance",
  										name: "ecosystem",
  										type: "tuple"
  									}
  								],
  								internalType: "struct Token.Instance",
  								name: "token",
  								type: "tuple"
  							}
  						],
  						internalType: "struct TokenHolder.Instance",
  						name: "tokenHolder",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Balance.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "account",
  						type: "address"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "string",
  								name: "symbol",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "eByl",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "elasticity",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "k",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "m",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxLambdaPurchase",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfTokenHolders",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct Token.Instance",
  						name: "token",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TokenHolder.Instance",
  				name: "",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		stateMutability: "pure",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "uint256",
  						name: "blockNumber",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "string",
  								name: "symbol",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "eByl",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "elasticity",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "k",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "m",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxLambdaPurchase",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfTokenHolders",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct Token.Instance",
  						name: "token",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "account",
  								type: "address"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "uuid",
  										type: "address"
  									},
  									{
  										internalType: "string",
  										name: "name",
  										type: "string"
  									},
  									{
  										internalType: "string",
  										name: "symbol",
  										type: "string"
  									},
  									{
  										internalType: "uint256",
  										name: "counter",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "eByl",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "elasticity",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "k",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "lambda",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "m",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "maxLambdaPurchase",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "numberOfTokenHolders",
  										type: "uint256"
  									},
  									{
  										components: [
  											{
  												internalType: "address",
  												name: "daoAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "balanceModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "balanceMultipliersModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "daoModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "ecosystemModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "elasticModuleModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "tokenHolderModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "tokenModelAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "configuratorAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "registratorAddress",
  												type: "address"
  											},
  											{
  												internalType: "address",
  												name: "governanceTokenAddress",
  												type: "address"
  											}
  										],
  										internalType: "struct Ecosystem.Instance",
  										name: "ecosystem",
  										type: "tuple"
  									}
  								],
  								internalType: "struct Token.Instance",
  								name: "token",
  								type: "tuple"
  							}
  						],
  						internalType: "struct TokenHolder.Instance",
  						name: "tokenHolder",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Balance.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$3 = "0x608060405234801561001057600080fd5b506113e7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630dd1a2a9146100465780631b860a801461006f578063286b04eb14610084575b600080fd5b610059610054366004610e16565b6100a4565b60405161006691906111bf565b60405180910390f35b61008261007d366004610d40565b6100ae565b005b610097610092366004610e16565b610255565b6040516100669190611274565b6001949350505050565b60c08101515160e0820151516020808401516040516100f6946100d69490939092910161118d565b604051602081830303815290604052805190602001208260000151610340565b60c08101515160e08201515160208084015160405161013e9461011e9490939092910161115b565b604051602081830303815290604052805190602001208260800151610340565b61014661063f565b8151815260c082018051606090810151602084015260408085015181850152818501519184019190915260a08085018051608086015292519084015290518101519051631cba6f1360e31b81526001600160a01b039091169063e5d37898906101b3908490600401611214565b600060405180830381600087803b1580156101cd57600080fd5b505af11580156101e1573d6000803e3d6000fd5b5050505060a082015160e0015160c08301515160405163e5910ae760e01b81526001600160a01b039092169163e5910ae79161021f916004016110df565b600060405180830381600087803b15801561023957600080fd5b505af115801561024d573d6000803e3d6000fd5b505050505050565b61025d610680565b61026f85836020015160008686610352565b60a0810185905260c0810184905260e08101839052905061028e61063f565b60a082015160408082015160c08501519151634ce53b9f60e01b81526001600160a01b0390911692634ce53b9f926102cc928b9291906004016112ff565b60006040518083038186803b1580156102e457600080fd5b505afa1580156102f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103209190810190610c89565b868352604080820151908401526060908101519083015250949350505050565b60009182526005602052604090912055565b61035a610680565b8461036e5785815260006080820152610505565b8460011415610473576000610383858761050e565b845184516040519293506103bc926103a1929190859060200161118d565b60405160208183030381529060405280519060200120610543565b80835215806103cb5750815187105b15610458578461043957835183516040516103f1926103a1929091600090602001611127565b80835215806104005750815187105b15610412575060006080820152610505565b8351835160405161042e926103a19290916000906020016110f3565b608083015250610505565b6104508787610449886001610558565b8787610352565b915050610505565b8351835160405161042e926103a1929091859060200161115b565b600061048086600261059a565b9050600061048e828761050e565b855185516040519293506104ac926103a1929190859060200161118d565b8084528810156104cc576104c38883888888610352565b92505050610505565b82518811156104e2576104c38883838888610352565b845184516040516104fd926103a1929091859060200161115b565b608084015250505b95945050505050565b60008282018381101561053c5760405162461bcd60e51b8152600401610533906111dd565b60405180910390fd5b9392505050565b6000818152600560205260409020545b919050565b600061053c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506105dc565b600061053c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610608565b600081848411156106005760405162461bcd60e51b815260040161053391906111ca565b505050900390565b600081836106295760405162461bcd60e51b815260040161053391906111ca565b50600083858161063557fe5b0495945050505050565b6040518060c001604052806000815260200160008152602001600081526020016000815260200161066e6106d1565b815260200161067b61072d565b905290565b60405180610100016040528060008152602001600081526020016000815260200160008152602001600081526020016106b76106d1565b81526020016106c461072d565b815260200161067b610797565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b031681526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161067b6106d1565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200161066e6106d1565b803561055381611399565b805161055381611399565b600082601f8301126107ee578081fd5b81356108016107fc8261134b565b611327565b915080825283602082850101111561081857600080fd5b8060208401602084013760009082016020015292915050565b600082601f830112610841578081fd5b815161084f6107fc8261134b565b915080825283602082850101111561086657600080fd5b61087781602084016020860161136d565b5092915050565b6000610160808385031215610891578182fd5b61089a81611327565b9150506108a6826107c8565b81526108b4602083016107c8565b60208201526108c5604083016107c8565b60408201526108d6606083016107c8565b60608201526108e7608083016107c8565b60808201526108f860a083016107c8565b60a082015261090960c083016107c8565b60c082015261091a60e083016107c8565b60e082015261010061092d8184016107c8565b9082015261012061093f8382016107c8565b908201526101406109518382016107c8565b9082015292915050565b600061016080838503121561096e578182fd5b61097781611327565b915050610983826107d3565b8152610991602083016107d3565b60208201526109a2604083016107d3565b60408201526109b3606083016107d3565b60608201526109c4608083016107d3565b60808201526109d560a083016107d3565b60a08201526109e660c083016107d3565b60c08201526109f760e083016107d3565b60e0820152610100610a0a8184016107d3565b90820152610120610a1c8382016107d3565b908201526101406109518382016107d3565b60006102c08284031215610a40578081fd5b610a4b610180611327565b9050610a56826107c8565b8152602082013567ffffffffffffffff80821115610a7357600080fd5b610a7f858386016107de565b60208401526040840135915080821115610a9857600080fd5b50610aa5848285016107de565b604083015250606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101606109518482850161087e565b60006102c08284031215610b22578081fd5b610b2d610180611327565b9050610b38826107d3565b8152602082015167ffffffffffffffff80821115610b5557600080fd5b610b6185838601610831565b60208401526040840151915080821115610b7a57600080fd5b50610b8784828501610831565b604083015250606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101606109518482850161095b565b60006101e08284031215610c04578081fd5b60405160a0810167ffffffffffffffff8282108183111715610c2257fe5b81604052829350610c32856107c8565b83526020850135602084015260408501356040840152610c55866060870161087e565b60608401526101c0850135915080821115610c6f57600080fd5b50610c7c85828601610a2e565b6080830152505092915050565b600060208284031215610c9a578081fd5b815167ffffffffffffffff80821115610cb1578283fd5b908301906102008286031215610cc5578283fd5b60405160c081018181108382111715610cda57fe5b806040525082518152602083015160208201526040830151604082015260608301516060820152610d0e866080850161095b565b60808201526101e083015182811115610d25578485fd5b610d3187828601610b10565b60a08301525095945050505050565b600060208284031215610d51578081fd5b813567ffffffffffffffff80821115610d68578283fd5b908301906102408286031215610d7c578283fd5b610d87610100611327565b8235815260208301356020820152604083013560408201526060830135606082015260808301356080820152610dc08660a0850161087e565b60a082015261020083013582811115610dd7578485fd5b610de387828601610a2e565b60c08301525061022083013582811115610dfb578485fd5b610e0787828601610bf2565b60e08301525095945050505050565b6000806000806101c08587031215610e2c578283fd5b84359350610e3d866020870161087e565b925061018085013567ffffffffffffffff80821115610e5a578384fd5b610e6688838901610a2e565b93506101a0870135915080821115610e7c578283fd5b50610e8987828801610bf2565b91505092959194509250565b6001600160a01b03169052565b60008151808452610eba81602086016020860161136d565b601f01601f19169290920160200192915050565b60068152656c616d62646160d01b602082015260400190565b600b81526a313637b1b5a73ab6b132b960a91b602082015260400190565b610f10828251610e95565b6020810151610f226020840182610e95565b506040810151610f356040840182610e95565b506060810151610f486060840182610e95565b506080810151610f5b6080840182610e95565b5060a0810151610f6e60a0840182610e95565b5060c0810151610f8160c0840182610e95565b5060e0810151610f9460e0840182610e95565b5061010080820151610fa882850182610e95565b505061012080820151610fbd82850182610e95565b505061014080820151610fd282850182610e95565b50505050565b60006102c0610fe8848451610e95565b6020830151816020860152610fff82860182610ea2565b915050604083015184820360408601526110198282610ea2565b915050606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e08501526101008084015181860152506101208084015181860152506101408084015181860152506101608084015161108582870182610f05565b5090949350505050565b60006101e060018060a01b038351168452602083015160208501526040830151604085015260608301516110c66060860182610f05565b506080830151816101c086015261050582860182610fd8565b6001600160a01b0391909116815260200190565b6001600160a01b0384811682528316602082015260ff82166040820152608060608201819052600090610505908301610ece565b6001600160a01b0384811682528316602082015260ff82166040820152608060608201819052600090610505908301610ee7565b6001600160a01b0384811682528316602082015260408101829052608060608201819052600090610505908301610ece565b6001600160a01b0384811682528316602082015260408101829052608060608201819052600090610505908301610ee7565b901515815260200190565b60006020825261053c6020830184610ea2565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60006020825282516020830152602083015160408301526040830151606083015260608301516080830152608083015161125160a0840182610f05565b5060a08301516102008381015261126c610220840182610fd8565b949350505050565b60006020825282516020830152602083015160408301526040830151606083015260608301516080830152608083015160a083015260a08301516112bb60c0840182610f05565b5060c0830151610240806102208501526112d9610260850183610fd8565b915060e0850151601f1985840301828601526112f5838261108f565b9695505050505050565b60006101a08583526113146020840186610f05565b806101808401526112f581840185610fd8565b60405181810167ffffffffffffffff8111828210171561134357fe5b604052919050565b600067ffffffffffffffff82111561135f57fe5b50601f01601f191660200190565b60005b83811015611388578181015183820152602001611370565b83811115610fd25750506000910152565b6001600160a01b03811681146113ae57600080fd5b5056fea26469706673582212200ba6a132194b18fac1d421144cb7e89139c16b62f0949097b1097e63a91aa65b64736f6c63430007020033";
  var deployedBytecode$3 = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80630dd1a2a9146100465780631b860a801461006f578063286b04eb14610084575b600080fd5b610059610054366004610e16565b6100a4565b60405161006691906111bf565b60405180910390f35b61008261007d366004610d40565b6100ae565b005b610097610092366004610e16565b610255565b6040516100669190611274565b6001949350505050565b60c08101515160e0820151516020808401516040516100f6946100d69490939092910161118d565b604051602081830303815290604052805190602001208260000151610340565b60c08101515160e08201515160208084015160405161013e9461011e9490939092910161115b565b604051602081830303815290604052805190602001208260800151610340565b61014661063f565b8151815260c082018051606090810151602084015260408085015181850152818501519184019190915260a08085018051608086015292519084015290518101519051631cba6f1360e31b81526001600160a01b039091169063e5d37898906101b3908490600401611214565b600060405180830381600087803b1580156101cd57600080fd5b505af11580156101e1573d6000803e3d6000fd5b5050505060a082015160e0015160c08301515160405163e5910ae760e01b81526001600160a01b039092169163e5910ae79161021f916004016110df565b600060405180830381600087803b15801561023957600080fd5b505af115801561024d573d6000803e3d6000fd5b505050505050565b61025d610680565b61026f85836020015160008686610352565b60a0810185905260c0810184905260e08101839052905061028e61063f565b60a082015160408082015160c08501519151634ce53b9f60e01b81526001600160a01b0390911692634ce53b9f926102cc928b9291906004016112ff565b60006040518083038186803b1580156102e457600080fd5b505afa1580156102f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103209190810190610c89565b868352604080820151908401526060908101519083015250949350505050565b60009182526005602052604090912055565b61035a610680565b8461036e5785815260006080820152610505565b8460011415610473576000610383858761050e565b845184516040519293506103bc926103a1929190859060200161118d565b60405160208183030381529060405280519060200120610543565b80835215806103cb5750815187105b15610458578461043957835183516040516103f1926103a1929091600090602001611127565b80835215806104005750815187105b15610412575060006080820152610505565b8351835160405161042e926103a19290916000906020016110f3565b608083015250610505565b6104508787610449886001610558565b8787610352565b915050610505565b8351835160405161042e926103a1929091859060200161115b565b600061048086600261059a565b9050600061048e828761050e565b855185516040519293506104ac926103a1929190859060200161118d565b8084528810156104cc576104c38883888888610352565b92505050610505565b82518811156104e2576104c38883838888610352565b845184516040516104fd926103a1929091859060200161115b565b608084015250505b95945050505050565b60008282018381101561053c5760405162461bcd60e51b8152600401610533906111dd565b60405180910390fd5b9392505050565b6000818152600560205260409020545b919050565b600061053c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506105dc565b600061053c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610608565b600081848411156106005760405162461bcd60e51b815260040161053391906111ca565b505050900390565b600081836106295760405162461bcd60e51b815260040161053391906111ca565b50600083858161063557fe5b0495945050505050565b6040518060c001604052806000815260200160008152602001600081526020016000815260200161066e6106d1565b815260200161067b61072d565b905290565b60405180610100016040528060008152602001600081526020016000815260200160008152602001600081526020016106b76106d1565b81526020016106c461072d565b815260200161067b610797565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b031681526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161067b6106d1565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200161066e6106d1565b803561055381611399565b805161055381611399565b600082601f8301126107ee578081fd5b81356108016107fc8261134b565b611327565b915080825283602082850101111561081857600080fd5b8060208401602084013760009082016020015292915050565b600082601f830112610841578081fd5b815161084f6107fc8261134b565b915080825283602082850101111561086657600080fd5b61087781602084016020860161136d565b5092915050565b6000610160808385031215610891578182fd5b61089a81611327565b9150506108a6826107c8565b81526108b4602083016107c8565b60208201526108c5604083016107c8565b60408201526108d6606083016107c8565b60608201526108e7608083016107c8565b60808201526108f860a083016107c8565b60a082015261090960c083016107c8565b60c082015261091a60e083016107c8565b60e082015261010061092d8184016107c8565b9082015261012061093f8382016107c8565b908201526101406109518382016107c8565b9082015292915050565b600061016080838503121561096e578182fd5b61097781611327565b915050610983826107d3565b8152610991602083016107d3565b60208201526109a2604083016107d3565b60408201526109b3606083016107d3565b60608201526109c4608083016107d3565b60808201526109d560a083016107d3565b60a08201526109e660c083016107d3565b60c08201526109f760e083016107d3565b60e0820152610100610a0a8184016107d3565b90820152610120610a1c8382016107d3565b908201526101406109518382016107d3565b60006102c08284031215610a40578081fd5b610a4b610180611327565b9050610a56826107c8565b8152602082013567ffffffffffffffff80821115610a7357600080fd5b610a7f858386016107de565b60208401526040840135915080821115610a9857600080fd5b50610aa5848285016107de565b604083015250606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101606109518482850161087e565b60006102c08284031215610b22578081fd5b610b2d610180611327565b9050610b38826107d3565b8152602082015167ffffffffffffffff80821115610b5557600080fd5b610b6185838601610831565b60208401526040840151915080821115610b7a57600080fd5b50610b8784828501610831565b604083015250606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101606109518482850161095b565b60006101e08284031215610c04578081fd5b60405160a0810167ffffffffffffffff8282108183111715610c2257fe5b81604052829350610c32856107c8565b83526020850135602084015260408501356040840152610c55866060870161087e565b60608401526101c0850135915080821115610c6f57600080fd5b50610c7c85828601610a2e565b6080830152505092915050565b600060208284031215610c9a578081fd5b815167ffffffffffffffff80821115610cb1578283fd5b908301906102008286031215610cc5578283fd5b60405160c081018181108382111715610cda57fe5b806040525082518152602083015160208201526040830151604082015260608301516060820152610d0e866080850161095b565b60808201526101e083015182811115610d25578485fd5b610d3187828601610b10565b60a08301525095945050505050565b600060208284031215610d51578081fd5b813567ffffffffffffffff80821115610d68578283fd5b908301906102408286031215610d7c578283fd5b610d87610100611327565b8235815260208301356020820152604083013560408201526060830135606082015260808301356080820152610dc08660a0850161087e565b60a082015261020083013582811115610dd7578485fd5b610de387828601610a2e565b60c08301525061022083013582811115610dfb578485fd5b610e0787828601610bf2565b60e08301525095945050505050565b6000806000806101c08587031215610e2c578283fd5b84359350610e3d866020870161087e565b925061018085013567ffffffffffffffff80821115610e5a578384fd5b610e6688838901610a2e565b93506101a0870135915080821115610e7c578283fd5b50610e8987828801610bf2565b91505092959194509250565b6001600160a01b03169052565b60008151808452610eba81602086016020860161136d565b601f01601f19169290920160200192915050565b60068152656c616d62646160d01b602082015260400190565b600b81526a313637b1b5a73ab6b132b960a91b602082015260400190565b610f10828251610e95565b6020810151610f226020840182610e95565b506040810151610f356040840182610e95565b506060810151610f486060840182610e95565b506080810151610f5b6080840182610e95565b5060a0810151610f6e60a0840182610e95565b5060c0810151610f8160c0840182610e95565b5060e0810151610f9460e0840182610e95565b5061010080820151610fa882850182610e95565b505061012080820151610fbd82850182610e95565b505061014080820151610fd282850182610e95565b50505050565b60006102c0610fe8848451610e95565b6020830151816020860152610fff82860182610ea2565b915050604083015184820360408601526110198282610ea2565b915050606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e08501526101008084015181860152506101208084015181860152506101408084015181860152506101608084015161108582870182610f05565b5090949350505050565b60006101e060018060a01b038351168452602083015160208501526040830151604085015260608301516110c66060860182610f05565b506080830151816101c086015261050582860182610fd8565b6001600160a01b0391909116815260200190565b6001600160a01b0384811682528316602082015260ff82166040820152608060608201819052600090610505908301610ece565b6001600160a01b0384811682528316602082015260ff82166040820152608060608201819052600090610505908301610ee7565b6001600160a01b0384811682528316602082015260408101829052608060608201819052600090610505908301610ece565b6001600160a01b0384811682528316602082015260408101829052608060608201819052600090610505908301610ee7565b901515815260200190565b60006020825261053c6020830184610ea2565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60006020825282516020830152602083015160408301526040830151606083015260608301516080830152608083015161125160a0840182610f05565b5060a08301516102008381015261126c610220840182610fd8565b949350505050565b60006020825282516020830152602083015160408301526040830151606083015260608301516080830152608083015160a083015260a08301516112bb60c0840182610f05565b5060c0830151610240806102208501526112d9610260850183610fd8565b915060e0850151601f1985840301828601526112f5838261108f565b9695505050505050565b60006101a08583526113146020840186610f05565b806101808401526112f581840185610fd8565b60405181810167ffffffffffffffff8111828210171561134357fe5b604052919050565b600067ffffffffffffffff82111561135f57fe5b50601f01601f191660200190565b60005b83811015611388578181015183820152602001611370565b83811115610fd25750506000910152565b6001600160a01b03811681146113ae57600080fd5b5056fea26469706673582212200ba6a132194b18fac1d421144cb7e89139c16b62f0949097b1097e63a91aa65b64736f6c63430007020033";
  var linkReferences$3 = {
  };
  var deployedLinkReferences$3 = {
  };
  var BalanceContract = {
  	_format: _format$3,
  	contractName: contractName$3,
  	sourceName: sourceName$3,
  	abi: abi$3,
  	bytecode: bytecode$3,
  	deployedBytecode: deployedBytecode$3,
  	linkReferences: linkReferences$3,
  	deployedLinkReferences: deployedLinkReferences$3
  };

  const cache$3 = {};
  const prefix$4 = '@elastic-dao/sdk - models/Balance';

  const isBalance = (thing) =>
    thing && typeof thing === 'object' && thing instanceof Balance;
  const validateIsBalance = (thing) => {
    const message = 'not a Balance';
    validate(isBalance(thing), { message, prefix: prefix$4 });
  };

  class Balance extends ElasticModel {
    constructor(
      sdk,
      { blockNumber, index, k, lambda, m, ecosystem, token, tokenHolder },
    ) {
      super(sdk);
      this.id = `${token.uuid}|${tokenHolder.account}|${blockNumber}`.toLowerCase();
      cache$3[this.id] = {
        blockNumber,
        index,
        k,
        lambda,
        m,
        ecosystem,
        token,
        tokenHolder,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$4 });
      return sdk.contract({ abi: BalanceContract.abi, address });
    }

    static async deserialize(sdk, blockNumber, ecosystem, token, tokenHolder) {
      utils$1.validateIsNumber(blockNumber, { prefix: prefix$4 });
      validateIsEcosystem(ecosystem);
      validateIsToken(token);
      validateIsTokenHolder(tokenHolder);

      const balanceModel = await this.contract(
        sdk,
        ecosystem.balanceModelAddress,
      );

      const { index, k, lambda, m } = await balanceModel.deserialize(
        blockNumber,
        ecosystem.toObject(false),
        token.toObject(false),
        tokenHolder.toObject(false),
      );

      return new Balance(sdk, {
        blockNumber,
        index,
        k,
        lambda,
        m,
        ecosystem,
        token,
        tokenHolder,
      });
    }

    // Getters

    get address() {
      return this.ecosystem.balanceModelAddress;
    }

    get blockNumber() {
      return this.toNumber(cache$3[this.id].blockNumber);
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get index() {
      return this.toNumber(cache$3[this.id].index);
    }

    get k() {
      return this.toBigNumber(cache$3[this.id].k, 18);
    }

    get lambda() {
      return this.toBigNumber(cache$3[this.id].lambda, 18);
    }

    get m() {
      return this.toBigNumber(cache$3[this.id].m, 18);
    }

    get ecosystem() {
      return cache$3[this.id].ecosystem;
    }

    get token() {
      return cache$3[this.id].token;
    }

    get tokenHolder() {
      return cache$3[this.id].tokenHolder;
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(
        this.sdk,
        this.blockNumber,
        this.ecosystem,
        this.token,
        this.tokenHolder,
      );
    }

    toObject(includeNested = true) {
      const { ecosystem, id, token, tokenHolder } = this;

      const obj = {
        ...cache$3[id],
        id,
        ecosystem: ecosystem.toObject(false),
        token: token.toObject(false),
        tokenHolder: tokenHolder.toObject(false),
      };

      if (includeNested === false) {
        delete obj.ecosystem;
        delete obj.token;
        delete obj.tokenHolder;
      }

      return this.sanitize(obj);
    }
  }

  var _format$4 = "hh-sol-artifact-1";
  var contractName$4 = "BalanceMultipliers";
  var sourceName$4 = "src/models/BalanceMultipliers.sol";
  var abi$4 = [
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_blockNumber",
  				type: "uint256"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "_ecosystem",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "_token",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "uint256",
  						name: "blockNumber",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "string",
  								name: "symbol",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "eByl",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "elasticity",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "k",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "m",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxLambdaPurchase",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfTokenHolders",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct Token.Instance",
  						name: "token",
  						type: "tuple"
  					}
  				],
  				internalType: "struct BalanceMultipliers.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "string",
  						name: "symbol",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "eByl",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "elasticity",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxLambdaPurchase",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfTokenHolders",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct Token.Instance",
  				name: "",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		stateMutability: "pure",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "uint256",
  						name: "blockNumber",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "k",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "m",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "string",
  								name: "symbol",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "eByl",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "elasticity",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "k",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "lambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "m",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxLambdaPurchase",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfTokenHolders",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct Token.Instance",
  						name: "token",
  						type: "tuple"
  					}
  				],
  				internalType: "struct BalanceMultipliers.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$4 = "0x608060405234801561001057600080fd5b50610d69806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634ce53b9f14610046578063a261a55a1461006f578063e5d378981461008f575b600080fd5b6100596100543660046108f1565b6100a4565b6040516100669190610c05565b60405180910390f35b61008261007d3660046108f1565b6100d1565b6040516100669190610bb0565b6100a261009d36600461083a565b6100da565b005b6100ac6104f6565b6100bd8483606001516000856101a3565b93845250608083019190915260a082015290565b60019392505050565b61011c8160a001516000015182602001516040516020016100fc929190610b3e565b6040516020818303038152906040528051906020012082600001516103b3565b61015e8160a0015160000151826020015160405160200161013e929190610b8a565b6040516020818303038152906040528051906020012082604001516103b3565b6101a08160a00151600001518260200151604051602001610180929190610b64565b6040516020818303038152906040528051906020012082606001516103b3565b50565b6101ab6104f6565b836101c65784815260006040820181905260608201526103ab565b83600114156103025760006101db84866103c5565b90506102128360000151826040516020016101f7929190610b3e565b604051602081830303815290604052805190602001206103fa565b80835215806102215750815186105b156102cc57836102ae578251604051610243916101f791600090602001610aba565b80835215806102525750815186105b1561026b575060006040820181905260608201526103ab565b8251604051610283916101f791600090602001610b12565b604080840191909152835190516102a3916101f791600090602001610ae6565b6060830152506103ab565b6102c486866102be87600161040f565b866101a3565b9150506103ab565b82516040516102e3916101f7918490602001610b8a565b604080840191909152835190516102a3916101f7918490602001610b64565b600061030f856002610451565b9050600061031d82866103c5565b90506103398460000151826040516020016101f7929190610b3e565b8084528710156103585761034f878387876101a3565b925050506103ab565b825187111561036d5761034f878383876101a3565b8351604051610384916101f7918490602001610b8a565b604080850191909152845190516103a3916101f7918490602001610b64565b606084015250505b949350505050565b60009182526005602052604090912055565b6000828201838110156103f35760405162461bcd60e51b81526004016103ea90610bce565b60405180910390fd5b9392505050565b6000818152600560205260409020545b919050565b60006103f383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610493565b60006103f383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506104bf565b600081848411156104b75760405162461bcd60e51b81526004016103ea9190610bbb565b505050900390565b600081836104e05760405162461bcd60e51b81526004016103ea9190610bbb565b5060008385816104ec57fe5b0495945050505050565b6040518060c0016040528060008152602001600081526020016000815260200160008152602001610525610537565b8152602001610532610593565b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b0316815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001610532610537565b80356001600160a01b038116811461040a57600080fd5b600082601f830112610624578081fd5b813567ffffffffffffffff81111561063857fe5b61064b601f8201601f1916602001610d0f565b915080825283602082850101111561066257600080fd5b8060208401602084013760009082016020015292915050565b600061016080838503121561068e578182fd5b61069781610d0f565b9150506106a3826105fd565b81526106b1602083016105fd565b60208201526106c2604083016105fd565b60408201526106d3606083016105fd565b60608201526106e4608083016105fd565b60808201526106f560a083016105fd565b60a082015261070660c083016105fd565b60c082015261071760e083016105fd565b60e082015261010061072a8184016105fd565b9082015261012061073c8382016105fd565b9082015261014061074e8382016105fd565b9082015292915050565b60006102c0828403121561076a578081fd5b610775610180610d0f565b9050610780826105fd565b8152602082013567ffffffffffffffff8082111561079d57600080fd5b6107a985838601610614565b602084015260408401359150808211156107c257600080fd5b506107cf84828501610614565b604083015250606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016061074e8482850161067b565b60006020828403121561084b578081fd5b813567ffffffffffffffff80821115610862578283fd5b908301906102008286031215610876578283fd5b60405160c08101818110838211171561088b57fe5b8060405250823581526020830135602082015260408301356040820152606083013560608201526108bf866080850161067b565b60808201526101e0830135828111156108d6578485fd5b6108e287828601610758565b60a08301525095945050505050565b60008060006101a08486031215610906578182fd5b83359250610917856020860161067b565b915061018084013567ffffffffffffffff811115610933578182fd5b61093f86828701610758565b9150509250925092565b6001600160a01b03169052565b60008151808452815b8181101561097b5760208185018101518683018201520161095f565b8181111561098c5782602083870101525b50601f01601f19169290920160200192915050565b600b81526a313637b1b5a73ab6b132b960a91b602082015260400190565b60018152606d60f81b602082015260400190565b60018152606b60f81b602082015260400190565b6109f2828251610949565b6020810151610a046020840182610949565b506040810151610a176040840182610949565b506060810151610a2a6060840182610949565b506080810151610a3d6080840182610949565b5060a0810151610a5060a0840182610949565b5060c0810151610a6360c0840182610949565b5060e0810151610a7660e0840182610949565b5061010080820151610a8a82850182610949565b505061012080820151610a9f82850182610949565b505061014080820151610ab482850182610949565b50505050565b6001600160a01b038316815260ff821660208201526060604082018190526000906103ab9083016109a1565b6001600160a01b038316815260ff821660208201526060604082018190526000906103ab9083016109bf565b6001600160a01b038316815260ff821660208201526060604082018190526000906103ab9083016109d3565b600060018060a01b0384168252826020830152606060408301526103ab606083016109a1565b600060018060a01b0384168252826020830152606060408301526103ab606083016109bf565b600060018060a01b0384168252826020830152606060408301526103ab606083016109d3565b901515815260200190565b6000602082526103f36020830184610956565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b600060208252825160208301526020830151604083015260408301516060830152606083015160808301526080830151610c4260a08401826109e7565b5060a0830151610200808185015250610c6061022084018251610949565b60208101516102c080610240860152610c7d6104e0860183610956565b9150604083015161021f1986840301610260870152610c9c8382610956565b925050606083015161028086015260808301516102a086015260a0830151818601525060c08201516102e085015260e082015161030085015261010082015161032085015261012082015161034085015261014082015161036085015261016082015191506103ab6103808501836109e7565b60405181810167ffffffffffffffff81118282101715610d2b57fe5b60405291905056fea2646970667358221220997a8e927518e1612a5d3c331d7d2782effdc70cc3367af168f400a73907d89d64736f6c63430007020033";
  var deployedBytecode$4 = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80634ce53b9f14610046578063a261a55a1461006f578063e5d378981461008f575b600080fd5b6100596100543660046108f1565b6100a4565b6040516100669190610c05565b60405180910390f35b61008261007d3660046108f1565b6100d1565b6040516100669190610bb0565b6100a261009d36600461083a565b6100da565b005b6100ac6104f6565b6100bd8483606001516000856101a3565b93845250608083019190915260a082015290565b60019392505050565b61011c8160a001516000015182602001516040516020016100fc929190610b3e565b6040516020818303038152906040528051906020012082600001516103b3565b61015e8160a0015160000151826020015160405160200161013e929190610b8a565b6040516020818303038152906040528051906020012082604001516103b3565b6101a08160a00151600001518260200151604051602001610180929190610b64565b6040516020818303038152906040528051906020012082606001516103b3565b50565b6101ab6104f6565b836101c65784815260006040820181905260608201526103ab565b83600114156103025760006101db84866103c5565b90506102128360000151826040516020016101f7929190610b3e565b604051602081830303815290604052805190602001206103fa565b80835215806102215750815186105b156102cc57836102ae578251604051610243916101f791600090602001610aba565b80835215806102525750815186105b1561026b575060006040820181905260608201526103ab565b8251604051610283916101f791600090602001610b12565b604080840191909152835190516102a3916101f791600090602001610ae6565b6060830152506103ab565b6102c486866102be87600161040f565b866101a3565b9150506103ab565b82516040516102e3916101f7918490602001610b8a565b604080840191909152835190516102a3916101f7918490602001610b64565b600061030f856002610451565b9050600061031d82866103c5565b90506103398460000151826040516020016101f7929190610b3e565b8084528710156103585761034f878387876101a3565b925050506103ab565b825187111561036d5761034f878383876101a3565b8351604051610384916101f7918490602001610b8a565b604080850191909152845190516103a3916101f7918490602001610b64565b606084015250505b949350505050565b60009182526005602052604090912055565b6000828201838110156103f35760405162461bcd60e51b81526004016103ea90610bce565b60405180910390fd5b9392505050565b6000818152600560205260409020545b919050565b60006103f383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610493565b60006103f383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506104bf565b600081848411156104b75760405162461bcd60e51b81526004016103ea9190610bbb565b505050900390565b600081836104e05760405162461bcd60e51b81526004016103ea9190610bbb565b5060008385816104ec57fe5b0495945050505050565b6040518060c0016040528060008152602001600081526020016000815260200160008152602001610525610537565b8152602001610532610593565b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b0316815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001610532610537565b80356001600160a01b038116811461040a57600080fd5b600082601f830112610624578081fd5b813567ffffffffffffffff81111561063857fe5b61064b601f8201601f1916602001610d0f565b915080825283602082850101111561066257600080fd5b8060208401602084013760009082016020015292915050565b600061016080838503121561068e578182fd5b61069781610d0f565b9150506106a3826105fd565b81526106b1602083016105fd565b60208201526106c2604083016105fd565b60408201526106d3606083016105fd565b60608201526106e4608083016105fd565b60808201526106f560a083016105fd565b60a082015261070660c083016105fd565b60c082015261071760e083016105fd565b60e082015261010061072a8184016105fd565b9082015261012061073c8382016105fd565b9082015261014061074e8382016105fd565b9082015292915050565b60006102c0828403121561076a578081fd5b610775610180610d0f565b9050610780826105fd565b8152602082013567ffffffffffffffff8082111561079d57600080fd5b6107a985838601610614565b602084015260408401359150808211156107c257600080fd5b506107cf84828501610614565b604083015250606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016061074e8482850161067b565b60006020828403121561084b578081fd5b813567ffffffffffffffff80821115610862578283fd5b908301906102008286031215610876578283fd5b60405160c08101818110838211171561088b57fe5b8060405250823581526020830135602082015260408301356040820152606083013560608201526108bf866080850161067b565b60808201526101e0830135828111156108d6578485fd5b6108e287828601610758565b60a08301525095945050505050565b60008060006101a08486031215610906578182fd5b83359250610917856020860161067b565b915061018084013567ffffffffffffffff811115610933578182fd5b61093f86828701610758565b9150509250925092565b6001600160a01b03169052565b60008151808452815b8181101561097b5760208185018101518683018201520161095f565b8181111561098c5782602083870101525b50601f01601f19169290920160200192915050565b600b81526a313637b1b5a73ab6b132b960a91b602082015260400190565b60018152606d60f81b602082015260400190565b60018152606b60f81b602082015260400190565b6109f2828251610949565b6020810151610a046020840182610949565b506040810151610a176040840182610949565b506060810151610a2a6060840182610949565b506080810151610a3d6080840182610949565b5060a0810151610a5060a0840182610949565b5060c0810151610a6360c0840182610949565b5060e0810151610a7660e0840182610949565b5061010080820151610a8a82850182610949565b505061012080820151610a9f82850182610949565b505061014080820151610ab482850182610949565b50505050565b6001600160a01b038316815260ff821660208201526060604082018190526000906103ab9083016109a1565b6001600160a01b038316815260ff821660208201526060604082018190526000906103ab9083016109bf565b6001600160a01b038316815260ff821660208201526060604082018190526000906103ab9083016109d3565b600060018060a01b0384168252826020830152606060408301526103ab606083016109a1565b600060018060a01b0384168252826020830152606060408301526103ab606083016109bf565b600060018060a01b0384168252826020830152606060408301526103ab606083016109d3565b901515815260200190565b6000602082526103f36020830184610956565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b600060208252825160208301526020830151604083015260408301516060830152606083015160808301526080830151610c4260a08401826109e7565b5060a0830151610200808185015250610c6061022084018251610949565b60208101516102c080610240860152610c7d6104e0860183610956565b9150604083015161021f1986840301610260870152610c9c8382610956565b925050606083015161028086015260808301516102a086015260a0830151818601525060c08201516102e085015260e082015161030085015261010082015161032085015261012082015161034085015261014082015161036085015261016082015191506103ab6103808501836109e7565b60405181810167ffffffffffffffff81118282101715610d2b57fe5b60405291905056fea2646970667358221220997a8e927518e1612a5d3c331d7d2782effdc70cc3367af168f400a73907d89d64736f6c63430007020033";
  var linkReferences$4 = {
  };
  var deployedLinkReferences$4 = {
  };
  var BalanceMultipliersContract = {
  	_format: _format$4,
  	contractName: contractName$4,
  	sourceName: sourceName$4,
  	abi: abi$4,
  	bytecode: bytecode$4,
  	deployedBytecode: deployedBytecode$4,
  	linkReferences: linkReferences$4,
  	deployedLinkReferences: deployedLinkReferences$4
  };

  const cache$4 = {};
  const prefix$5 = '@elastic-dao/sdk - BalanceMultipliers';

  const isBalanceMultipliers = (thing) =>
    thing && typeof thing === 'object' && thing instanceof BalanceMultipliers;
  const validateIsBalanceMultipliers = (thing) => {
    const message = 'not a BalanceMultipliers';
    validate(isBalanceMultipliers(thing), { message, prefix: prefix$5 });
  };

  class BalanceMultipliers extends ElasticModel {
    constructor(sdk, { blockNumber, index, k, m, ecosystem, token }) {
      super(sdk);
      this.id = `${token.uuid}|${blockNumber}`.toLowerCase();
      cache$4[this.id] = {
        blockNumber,
        index,
        k,
        m,
        ecosystem,
        token,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$5 });
      return sdk.contract({ abi: BalanceMultipliersContract.abi, address });
    }

    static async deserialize(sdk, blockNumber, ecosystem, token) {
      utils$1.validateIsNumber(blockNumber, { prefix: prefix$5 });
      validateIsEcosystem(ecosystem);
      validateIsToken(token);

      const balanceMultipliersModel = await this.contract(
        sdk,
        ecosystem.balanceMultipliersModelAddress,
      );

      const { index, k, m } = await balanceMultipliersModel.deserialize(
        blockNumber,
        ecosystem.toObject(false),
        token.toObject(false),
      );

      return new BalanceMultipliers(sdk, {
        blockNumber,
        index,
        k,
        m,
        ecosystem,
        token,
      });
    }

    // Getters

    get address() {
      return this.ecosystem.balanceMultipliersModelAddress;
    }

    get blockNumber() {
      return this.toNumber(cache$4[this.id].blockNumber);
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get index() {
      return this.toNumber(cache$4[this.id].index);
    }

    get k() {
      return this.toBigNumber(cache$4[this.id].k, 18);
    }

    get m() {
      return this.toBigNumber(cache$4[this.id].m, 18);
    }

    get ecosystem() {
      return cache$4[this.id].ecosystem;
    }

    get token() {
      return cache$4[this.id].token;
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(
        this.sdk,
        this.blockNumber,
        this.ecosystem,
        this.token,
      );
    }

    toObject(includeNested = true) {
      const { ecosystem, id, token } = this;

      const obj = {
        ...cache$4[id],
        id,
        ecosystem: ecosystem.toObject(false),
        token: token.toObject(false),
      };

      if (includeNested === false) {
        delete obj.ecosystem;
        delete obj.token;
      }

      return this.sanitize(obj);
    }
  }

  var _format$5 = "hh-sol-artifact-1";
  var contractName$5 = "DAO";
  var sourceName$5 = "src/models/DAO.sol";
  var abi$5 = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_uuid",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "_ecosystem",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "address[]",
  						name: "summoners",
  						type: "address[]"
  					},
  					{
  						internalType: "bool",
  						name: "summoned",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfSummoners",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct DAO.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_uuid",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "address[]",
  						name: "summoners",
  						type: "address[]"
  					},
  					{
  						internalType: "bool",
  						name: "summoned",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfSummoners",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct DAO.Instance",
  				name: "_dao",
  				type: "tuple"
  			},
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			}
  		],
  		name: "getSummoner",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "address[]",
  						name: "summoners",
  						type: "address[]"
  					},
  					{
  						internalType: "bool",
  						name: "summoned",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfSummoners",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct DAO.Instance",
  				name: "_dao",
  				type: "tuple"
  			},
  			{
  				internalType: "address",
  				name: "_summonerAddress",
  				type: "address"
  			}
  		],
  		name: "isSummoner",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "address[]",
  						name: "summoners",
  						type: "address[]"
  					},
  					{
  						internalType: "bool",
  						name: "summoned",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfSummoners",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct DAO.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$5 = "0x608060405234801561001057600080fd5b50610e64806100206000396000f3fe608060405234801561001057600080fd5b50600436106100565760003560e01c80626cfdda1461005b578063587ce3b1146100845780637fc975f314610099578063cc469ca7146100ac578063fb10b0c5146100cc575b600080fd5b61006e6100693660046109c3565b6100ec565b60405161007b9190610cd5565b60405180910390f35b610097610092366004610988565b61012c565b005b61006e6100a7366004610954565b6102af565b6100bf6100ba366004610a06565b6102ba565b60405161007b9190610b7a565b6100df6100da366004610954565b6102f1565b60405161007b9190610d4e565b6000610123836000015183604051602001610108929190610c9b565b604051602081830303815290604052805190602001206103a5565b90505b92915050565b80516040516101619161014191602001610bfd565b6040516020818303038152906040528051906020012082606001516103bd565b80516040516101969161017691602001610bc0565b6040516020818303038152906040528051906020012082608001516103e1565b80516040516101cb916101ab91602001610c2d565b6040516020818303038152906040528051906020012082604001516103f3565b806080015181602001515114156102975760005b81608001518110156102955761023982600001518360200151838151811061020357fe5b602002602001015160405160200161021c929190610c9b565b6040516020818303038152906040528051906020012060016103f3565b815160405161028391610250918490602001610c61565b604051602081830303815290604052805190602001208360200151838151811061027657fe5b6020026020010151610413565b61028e816001610441565b90506101df565b505b80516040516102ac9161021c91602001610b8e565b50565b60006101238361046f565b60006101238360000151836040516020016102d6929190610c61565b60405160208183030381529060405280519060200120610485565b6102f9610580565b6001600160a01b038316815260a081018290526103158361046f565b15610126576103498360405160200161032e9190610bfd565b604051602081830303815290604052805190602001206104a0565b606082015260405161037e90610363908590602001610bc0565b6040516020818303038152906040528051906020012061056e565b608082015260405161039890610108908590602001610c2d565b1515604082015292915050565b60008181526001602052604090205460ff165b919050565b600082815260046020908152604090912082516103dc928401906105c6565b505050565b60009182526005602052604090912055565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000828201838110156101235760405162461bcd60e51b815260040161046690610ce0565b60405180910390fd5b6000610126826040516020016101089190610b8e565b6000908152602081905260409020546001600160a01b031690565b60608160001a60f81b6001600160f81b0319166104cf5760405162461bcd60e51b815260040161046690610d17565b60008281526004602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156105625780601f1061053757610100808354040283529160200191610562565b820191906000526020600020905b81548152906001019060200180831161054557829003601f168201915b50505050509050919050565b60009081526005602052604090205490565b6040518060c0016040528060006001600160a01b031681526020016060815260200160001515815260200160608152602001600081526020016105c1610644565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061060757805160ff1916838001178555610634565b82800160010185558215610634579182015b82811115610634578251825591602001919060010190610619565b506106409291506106a0565b5090565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b5b8082111561064057600081556001016106a1565b80356001600160a01b03811681146103b857600080fd5b600082601f8301126106dc578081fd5b813567ffffffffffffffff8111156106f057fe5b6020808202610700828201610e0a565b8381529350818401858301828701840188101561071c57600080fd5b600092505b8483101561074657610732816106b5565b825260019290920191908301908301610721565b505050505092915050565b803580151581146103b857600080fd5b600082601f830112610771578081fd5b813567ffffffffffffffff81111561078557fe5b610798601f8201601f1916602001610e0a565b91508082528360208285010111156107af57600080fd5b8060208401602084013760009082016020015292915050565b600061020082840312156107da578081fd5b6107e460c0610e0a565b90506107ef826106b5565b8152602082013567ffffffffffffffff8082111561080c57600080fd5b610818858386016106cc565b602084015261082960408501610751565b6040840152606084013591508082111561084257600080fd5b5061084f84828501610761565b6060830152506080820135608082015261086c8360a08401610877565b60a082015292915050565b600061016080838503121561088a578182fd5b61089381610e0a565b91505061089f826106b5565b81526108ad602083016106b5565b60208201526108be604083016106b5565b60408201526108cf606083016106b5565b60608201526108e0608083016106b5565b60808201526108f160a083016106b5565b60a082015261090260c083016106b5565b60c082015261091360e083016106b5565b60e08201526101006109268184016106b5565b908201526101206109388382016106b5565b9082015261014061094a8382016106b5565b9082015292915050565b6000806101808385031215610967578182fd5b610970836106b5565b915061097f8460208501610877565b90509250929050565b600060208284031215610999578081fd5b813567ffffffffffffffff8111156109af578182fd5b6109bb848285016107c8565b949350505050565b600080604083850312156109d5578182fd5b823567ffffffffffffffff8111156109eb578283fd5b6109f7858286016107c8565b92505061097f602084016106b5565b60008060408385031215610a18578182fd5b823567ffffffffffffffff811115610a2e578283fd5b610a3a858286016107c8565b95602094909401359450505050565b6001600160a01b03169052565b15159052565b60008151808452815b81811015610a8157602081850181015186830182015201610a65565b81811115610a925782602083870101525b50601f01601f19169290920160200192915050565b610ab2828251610a49565b6020810151610ac46020840182610a49565b506040810151610ad76040840182610a49565b506060810151610aea6060840182610a49565b506080810151610afd6080840182610a49565b5060a0810151610b1060a0840182610a49565b5060c0810151610b2360c0840182610a49565b5060e0810151610b3660e0840182610a49565b5061010080820151610b4a82850182610a49565b505061012080820151610b5f82850182610a49565b505061014080820151610b7482850182610a49565b50505050565b6001600160a01b0391909116815260200190565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706e756d6265724f6653756d6d6f6e65727360781b606082015260800190565b6001600160a01b03919091168152604060208201819052600490820152636e616d6560e01b606082015260800190565b6001600160a01b03919091168152604060208201819052600890820152671cdd5b5b5bdb995960c21b606082015260800190565b6001600160a01b039290921682526060602083018190526009908301526873756d6d6f6e65727360b81b6080830152604082015260a00190565b6001600160a01b0392831681526060602082018190526008908201526739bab6b6b7b732b960c11b60808201529116604082015260a00190565b901515815260200190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b602080825282516001600160a01b03908116838301528382015161020060408501528051610220850181905260009392918301919084906102408701905b80831015610dae57845184168252938501936001929092019190850190610d8c565b5060408801519450610dc36060880186610a56565b6060880151878203601f190160808901529450610de08186610a5c565b945050505050608084015160a084015260a0840151610e0260c0850182610aa7565b509392505050565b60405181810167ffffffffffffffff81118282101715610e2657fe5b60405291905056fea26469706673582212206078461e7830e9f5ada0778d9f79cab3d0edb7100c3d314f40c99710378bd13964736f6c63430007020033";
  var deployedBytecode$5 = "0x608060405234801561001057600080fd5b50600436106100565760003560e01c80626cfdda1461005b578063587ce3b1146100845780637fc975f314610099578063cc469ca7146100ac578063fb10b0c5146100cc575b600080fd5b61006e6100693660046109c3565b6100ec565b60405161007b9190610cd5565b60405180910390f35b610097610092366004610988565b61012c565b005b61006e6100a7366004610954565b6102af565b6100bf6100ba366004610a06565b6102ba565b60405161007b9190610b7a565b6100df6100da366004610954565b6102f1565b60405161007b9190610d4e565b6000610123836000015183604051602001610108929190610c9b565b604051602081830303815290604052805190602001206103a5565b90505b92915050565b80516040516101619161014191602001610bfd565b6040516020818303038152906040528051906020012082606001516103bd565b80516040516101969161017691602001610bc0565b6040516020818303038152906040528051906020012082608001516103e1565b80516040516101cb916101ab91602001610c2d565b6040516020818303038152906040528051906020012082604001516103f3565b806080015181602001515114156102975760005b81608001518110156102955761023982600001518360200151838151811061020357fe5b602002602001015160405160200161021c929190610c9b565b6040516020818303038152906040528051906020012060016103f3565b815160405161028391610250918490602001610c61565b604051602081830303815290604052805190602001208360200151838151811061027657fe5b6020026020010151610413565b61028e816001610441565b90506101df565b505b80516040516102ac9161021c91602001610b8e565b50565b60006101238361046f565b60006101238360000151836040516020016102d6929190610c61565b60405160208183030381529060405280519060200120610485565b6102f9610580565b6001600160a01b038316815260a081018290526103158361046f565b15610126576103498360405160200161032e9190610bfd565b604051602081830303815290604052805190602001206104a0565b606082015260405161037e90610363908590602001610bc0565b6040516020818303038152906040528051906020012061056e565b608082015260405161039890610108908590602001610c2d565b1515604082015292915050565b60008181526001602052604090205460ff165b919050565b600082815260046020908152604090912082516103dc928401906105c6565b505050565b60009182526005602052604090912055565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000828201838110156101235760405162461bcd60e51b815260040161046690610ce0565b60405180910390fd5b6000610126826040516020016101089190610b8e565b6000908152602081905260409020546001600160a01b031690565b60608160001a60f81b6001600160f81b0319166104cf5760405162461bcd60e51b815260040161046690610d17565b60008281526004602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156105625780601f1061053757610100808354040283529160200191610562565b820191906000526020600020905b81548152906001019060200180831161054557829003601f168201915b50505050509050919050565b60009081526005602052604090205490565b6040518060c0016040528060006001600160a01b031681526020016060815260200160001515815260200160608152602001600081526020016105c1610644565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061060757805160ff1916838001178555610634565b82800160010185558215610634579182015b82811115610634578251825591602001919060010190610619565b506106409291506106a0565b5090565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b5b8082111561064057600081556001016106a1565b80356001600160a01b03811681146103b857600080fd5b600082601f8301126106dc578081fd5b813567ffffffffffffffff8111156106f057fe5b6020808202610700828201610e0a565b8381529350818401858301828701840188101561071c57600080fd5b600092505b8483101561074657610732816106b5565b825260019290920191908301908301610721565b505050505092915050565b803580151581146103b857600080fd5b600082601f830112610771578081fd5b813567ffffffffffffffff81111561078557fe5b610798601f8201601f1916602001610e0a565b91508082528360208285010111156107af57600080fd5b8060208401602084013760009082016020015292915050565b600061020082840312156107da578081fd5b6107e460c0610e0a565b90506107ef826106b5565b8152602082013567ffffffffffffffff8082111561080c57600080fd5b610818858386016106cc565b602084015261082960408501610751565b6040840152606084013591508082111561084257600080fd5b5061084f84828501610761565b6060830152506080820135608082015261086c8360a08401610877565b60a082015292915050565b600061016080838503121561088a578182fd5b61089381610e0a565b91505061089f826106b5565b81526108ad602083016106b5565b60208201526108be604083016106b5565b60408201526108cf606083016106b5565b60608201526108e0608083016106b5565b60808201526108f160a083016106b5565b60a082015261090260c083016106b5565b60c082015261091360e083016106b5565b60e08201526101006109268184016106b5565b908201526101206109388382016106b5565b9082015261014061094a8382016106b5565b9082015292915050565b6000806101808385031215610967578182fd5b610970836106b5565b915061097f8460208501610877565b90509250929050565b600060208284031215610999578081fd5b813567ffffffffffffffff8111156109af578182fd5b6109bb848285016107c8565b949350505050565b600080604083850312156109d5578182fd5b823567ffffffffffffffff8111156109eb578283fd5b6109f7858286016107c8565b92505061097f602084016106b5565b60008060408385031215610a18578182fd5b823567ffffffffffffffff811115610a2e578283fd5b610a3a858286016107c8565b95602094909401359450505050565b6001600160a01b03169052565b15159052565b60008151808452815b81811015610a8157602081850181015186830182015201610a65565b81811115610a925782602083870101525b50601f01601f19169290920160200192915050565b610ab2828251610a49565b6020810151610ac46020840182610a49565b506040810151610ad76040840182610a49565b506060810151610aea6060840182610a49565b506080810151610afd6080840182610a49565b5060a0810151610b1060a0840182610a49565b5060c0810151610b2360c0840182610a49565b5060e0810151610b3660e0840182610a49565b5061010080820151610b4a82850182610a49565b505061012080820151610b5f82850182610a49565b505061014080820151610b7482850182610a49565b50505050565b6001600160a01b0391909116815260200190565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706e756d6265724f6653756d6d6f6e65727360781b606082015260800190565b6001600160a01b03919091168152604060208201819052600490820152636e616d6560e01b606082015260800190565b6001600160a01b03919091168152604060208201819052600890820152671cdd5b5b5bdb995960c21b606082015260800190565b6001600160a01b039290921682526060602083018190526009908301526873756d6d6f6e65727360b81b6080830152604082015260a00190565b6001600160a01b0392831681526060602082018190526008908201526739bab6b6b7b732b960c11b60808201529116604082015260a00190565b901515815260200190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b602080825282516001600160a01b03908116838301528382015161020060408501528051610220850181905260009392918301919084906102408701905b80831015610dae57845184168252938501936001929092019190850190610d8c565b5060408801519450610dc36060880186610a56565b6060880151878203601f190160808901529450610de08186610a5c565b945050505050608084015160a084015260a0840151610e0260c0850182610aa7565b509392505050565b60405181810167ffffffffffffffff81118282101715610e2657fe5b60405291905056fea26469706673582212206078461e7830e9f5ada0778d9f79cab3d0edb7100c3d314f40c99710378bd13964736f6c63430007020033";
  var linkReferences$5 = {
  };
  var deployedLinkReferences$5 = {
  };
  var DAOContract = {
  	_format: _format$5,
  	contractName: contractName$5,
  	sourceName: sourceName$5,
  	abi: abi$5,
  	bytecode: bytecode$5,
  	deployedBytecode: deployedBytecode$5,
  	linkReferences: linkReferences$5,
  	deployedLinkReferences: deployedLinkReferences$5
  };

  var _format$6 = "hh-sol-artifact-1";
  var contractName$6 = "ElasticDAO";
  var sourceName$6 = "src/core/ElasticDAO.sol";
  var abi$6 = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_ecosystemModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address[]",
  				name: "_summoners",
  				type: "address[]"
  			},
  			{
  				internalType: "string",
  				name: "_name",
  				type: "string"
  			},
  			{
  				internalType: "uint256",
  				name: "_numberOfSummoners",
  				type: "uint256"
  			}
  		],
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "address",
  				name: "tokenAddress",
  				type: "address"
  			}
  		],
  		name: "ElasticGovernanceTokenDeployed",
  		type: "event"
  	},
  	{
  		stateMutability: "payable",
  		type: "fallback"
  	},
  	{
  		inputs: [
  		],
  		name: "getDAO",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "address[]",
  						name: "summoners",
  						type: "address[]"
  					},
  					{
  						internalType: "bool",
  						name: "summoned",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfSummoners",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct DAO.Instance",
  				name: "",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "getEcosystem",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "daoAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "balanceMultipliersModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "daoModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "ecosystemModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "elasticModuleModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenHolderModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "tokenModelAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "configuratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "registratorAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "governanceTokenAddress",
  						type: "address"
  					}
  				],
  				internalType: "struct Ecosystem.Instance",
  				name: "",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_moduleAddress",
  				type: "address"
  			},
  			{
  				internalType: "string",
  				name: "_name",
  				type: "string"
  			}
  		],
  		name: "initializeModule",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "string",
  				name: "_name",
  				type: "string"
  			},
  			{
  				internalType: "string",
  				name: "_symbol",
  				type: "string"
  			},
  			{
  				internalType: "uint256",
  				name: "_eByl",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_elasticity",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_k",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_maxLambdaPurchase",
  				type: "uint256"
  			}
  		],
  		name: "initializeToken",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_deltaLambda",
  				type: "uint256"
  			}
  		],
  		name: "join",
  		outputs: [
  		],
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "seedSummoning",
  		outputs: [
  		],
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_deltaLambda",
  				type: "uint256"
  			}
  		],
  		name: "summon",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		name: "summoners",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		stateMutability: "payable",
  		type: "receive"
  	}
  ];
  var bytecode$6 = "0x60806040523480156200001157600080fd5b506040516200284d3803806200284d83398101604081905262000034916200053c565b600080546001600160a01b0386166001600160a01b03199182161790915560018054909116331790556200006762000238565b60405163332a4d0960e01b81526001600160a01b0386169063332a4d09906200009690600090600401620007b7565b6101606040518083038186803b158015620000b057600080fd5b505afa158015620000c5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000eb91906200069b565b84519091506200010390600290602087019062000294565b506101008101516200011462000238565b6040516316c5ac2560e11b81526001600160a01b03831690632d8b584a90620001429086906004016200085e565b61016060405180830381600087803b1580156200015e57600080fd5b505af115801562000173573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019991906200069b565b6040516312e9f95760e31b81529091506001600160a01b0383169063974fcab890620001d0908990899089908790600401620007cb565b600060405180830381600087803b158015620001eb57600080fd5b505af115801562000200573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200022a9190810190620005be565b5050505050505050620008c8565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b828054828255906000526020600020908101928215620002ec579160200282015b82811115620002ec57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002b5565b50620002fa929150620002fe565b5090565b5b80821115620002fa5780546001600160a01b0319168155600101620002ff565b80516001600160a01b03811681146200033757600080fd5b919050565b600082601f8301126200034d578081fd5b81516001600160401b038111156200036157fe5b60208082026200037382820162000875565b838152935081840185830182870184018810156200039057600080fd5b600092505b84831015620003be57620003a9816200031f565b82526001929092019190830190830162000395565b505050505092915050565b805180151581146200033757600080fd5b600082601f830112620003eb578081fd5b81516001600160401b03811115620003ff57fe5b62000414601f8201601f191660200162000875565b91508082528360208285010111156200042c57600080fd5b6200043f81602084016020860162000899565b5092915050565b60006101608083850312156200045a578182fd5b620004658162000875565b91505062000473826200031f565b815262000483602083016200031f565b602082015262000496604083016200031f565b6040820152620004a9606083016200031f565b6060820152620004bc608083016200031f565b6080820152620004cf60a083016200031f565b60a0820152620004e260c083016200031f565b60c0820152620004f560e083016200031f565b60e08201526101006200050a8184016200031f565b908201526101206200051e8382016200031f565b90820152610140620005328382016200031f565b9082015292915050565b6000806000806080858703121562000552578384fd5b6200055d856200031f565b60208601519094506001600160401b03808211156200057a578485fd5b62000588888389016200033c565b945060408701519150808211156200059e578384fd5b50620005ad87828801620003da565b606096909601519497939650505050565b600060208284031215620005d0578081fd5b81516001600160401b0380821115620005e7578283fd5b908301906102008286031215620005fc578283fd5b6200060860c062000875565b62000613836200031f565b815260208301518281111562000627578485fd5b62000635878286016200033c565b6020830152506200064960408401620003c9565b604082015260608301518281111562000660578485fd5b6200066e87828601620003da565b606083015250608083015160808201526200068d8660a0850162000446565b60a082015295945050505050565b60006101608284031215620006ae578081fd5b620006ba838362000446565b9392505050565b6001600160a01b03169052565b620006db828251620006c1565b6020810151620006ef6020840182620006c1565b506040810151620007046040840182620006c1565b506060810151620007196060840182620006c1565b5060808101516200072e6080840182620006c1565b5060a08101516200074360a0840182620006c1565b5060c08101516200075860c0840182620006c1565b5060e08101516200076d60e0840182620006c1565b50610100808201516200078382850182620006c1565b5050610120808201516200079a82850182620006c1565b505061014080820151620007b182850182620006c1565b50505050565b6001600160a01b0391909116815260200190565b6101c080825285519082018190526000906101e0830190602090818901845b82811015620008115781516001600160a01b031685529383019390830190600101620007ea565b5050508382038185015286518083526200083181838501848b0162000899565b60408501879052601f01601f191691909101019050620008556060830184620006ce565b95945050505050565b61016081016200086f8284620006ce565b92915050565b6040518181016001600160401b03811182821017156200089157fe5b604052919050565b60005b83811015620008b65781810151838201526020016200089c565b83811115620007b15750506000910152565b611f7580620008d86000396000f3fe60806040526004361061007f5760003560e01c80631fb460891161004e5780631fb46089146100fb578063985da72614610103578063a0f2c9771461012e578063d38b576d1461015057610086565b80630181bb0b14610088578063035d9f2a146100a857806303ca8c09146100c8578063049878f3146100e857610086565b3661008657005b005b34801561009457600080fd5b506100866100a3366004611517565b61017d565b3480156100b457600080fd5b506100866100c33660046117f7565b61023e565b3480156100d457600080fd5b506100866100e336600461157f565b6106a6565b6100866100f63660046117f7565b6107f5565b610086610a5f565b34801561010f57600080fd5b50610118610d69565b6040516101259190611d81565b60405180910390f35b34801561013a57600080fd5b50610143610d7e565b6040516101259190611de0565b34801561015c57600080fd5b5061017061016b3660046117f7565b610d8e565b60405161012591906119e9565b6101856111d0565b61018d610db5565b6040810151909150156101bb5760405162461bcd60e51b81526004016101b290611ad4565b60405180910390fd5b6101c3611216565b6101cb610e5c565b6101208101516040516331081b8760e01b8152919250906001600160a01b038216906331081b879061020590889088908790600401611a34565b600060405180830381600087803b15801561021f57600080fd5b505af1158015610233573d6000803e3d6000fd5b505050505050505050565b6102466111d0565b61024e610db5565b6040810151909150156102735760405162461bcd60e51b81526004016101b290611ad4565b61027b611216565b610283610e5c565b60608101519091506102936111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c5906102c190309087906004016119fd565b60006040518083038186803b1580156102d957600080fd5b505afa1580156102ed573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103159190810190611603565b90506000826001600160a01b0316626cfdda83336040518363ffffffff1660e01b8152600401610346929190611d94565b60206040518083038186803b15801561035e57600080fd5b505afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190611565565b9050806103b55760405162461bcd60e51b81526004016101b290611b18565b600047116103d55760405162461bcd60e51b81526004016101b290611d24565b6103dd611216565b6103e5610e5c565b60608101519091506103f56111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c59061042390309087906004016119fd565b60006040518083038186803b15801561043b57600080fd5b505afa15801561044f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104779190810190611603565b9050610481611272565b60e084015161014085015160405163fb10b0c560e01b81526001600160a01b039092169163fb10b0c5916104b99188906004016119fd565b60006040518083038186803b1580156104d157600080fd5b505afa1580156104e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261050d91908101906116ec565b805190915060005b836080015181101561063157816001600160a01b031663528c198a866001600160a01b031663cc469ca787856040518363ffffffff1660e01b815260040161055e929190611dbe565b60206040518083038186803b15801561057657600080fd5b505afa15801561058a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ae91906114fb565b8e6040518363ffffffff1660e01b81526004016105cc929190611a1b565b602060405180830381600087803b1580156105e657600080fd5b505af11580156105fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e9190611565565b5061062a816001610ee5565b9050610515565b5060016040808501919091525163587ce3b160e01b81526001600160a01b0385169063587ce3b190610667908690600401611d81565b600060405180830381600087803b15801561068157600080fd5b505af1158015610695573d6000803e3d6000fd5b505050505050505050505050505050565b6106ae6111d0565b6106b6610db5565b6040810151909150156106db5760405162461bcd60e51b81526004016101b290611ad4565b6001546001600160a01b031633146107055760405162461bcd60e51b81526004016101b290611cd2565b61070d611216565b610715610e5c565b905061071f611272565b8161010001516001600160a01b0316638891ba638a8a8a8a8a8a896040518863ffffffff1660e01b815260040161075c9796959493929190611a84565b600060405180830381600087803b15801561077657600080fd5b505af115801561078a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107b291908101906116ec565b80516040519192506001600160a01b0316907fad65bbe394ae719938a7445c7588b2cdb455ea64f1364115b1e073e31bb1af9b90600090a2505050505050505050565b6107fd6111d0565b610805610db5565b905080604001516108285760405162461bcd60e51b81526004016101b290611bda565b610830611272565b610838610f13565b905080610120015183111561085f5760405162461bcd60e51b81526004016101b290611b86565b60008160000151905060006108e6344703836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108a957600080fd5b505afa1580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e1919061180f565b610fb8565b9050600061090986838660c001518760a001518860e00151896101000151610fc4565b905034811461092a5760405162461bcd60e51b81526004016101b290611c0f565b600061093a878660e00151610ee5565b90506000610952828760e0015188610100015161101e565b905061095c611216565b610964610e5c565b60e081015161010089018490526040516295bfb960e61b8152919250906001600160a01b0382169063256fee40906109a0908b90600401611def565b600060405180830381600087803b1580156109ba57600080fd5b505af11580156109ce573d6000803e3d6000fd5b50506040516329460cc560e11b81526001600160a01b038a16925063528c198a9150610a009033908e90600401611a1b565b602060405180830381600087803b158015610a1a57600080fd5b505af1158015610a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a529190611565565b5050505050505050505050565b610a676111d0565b610a6f610db5565b604081015190915015610a945760405162461bcd60e51b81526004016101b290611ad4565b610a9c611216565b610aa4610e5c565b6060810151909150610ab46111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c590610ae290309087906004016119fd565b60006040518083038186803b158015610afa57600080fd5b505afa158015610b0e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b369190810190611603565b90506000826001600160a01b0316626cfdda83336040518363ffffffff1660e01b8152600401610b67929190611d94565b60206040518083038186803b158015610b7f57600080fd5b505afa158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190611565565b905080610bd65760405162461bcd60e51b81526004016101b290611b18565b610bde611216565b610be6610e5c565b90506000610bf2610e5c565b60e00151610140830151604051637fc975f360e01b81526001600160a01b0390921691637fc975f391610c299186906004016119fd565b60206040518083038186803b158015610c4157600080fd5b505afa158015610c55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c799190611565565b905080610c985760405162461bcd60e51b81526004016101b290611c85565b610ca0611272565b610ca8610f13565b905060003490506000610cbf82846080015161103d565b90506000610cd7828560c0015186610100015161106d565b84516040516329460cc560e11b81529192506001600160a01b03169063528c198a90610d099033908690600401611a1b565b602060405180830381600087803b158015610d2357600080fd5b505af1158015610d37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5b9190611565565b505050505050505050505050565b610d716111d0565b610d79610db5565b905090565b610d86611216565b610d79610e5c565b60028181548110610d9b57fe5b6000918252602090912001546001600160a01b0316905081565b610dbd6111d0565b610dc5611216565b610dcd610e5c565b606081015160405163fb10b0c560e01b81529192506001600160a01b03169063fb10b0c590610e0290309085906004016119fd565b60006040518083038186803b158015610e1a57600080fd5b505afa158015610e2e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e569190810190611603565b91505090565b610e64611216565b60005460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990610e949030906004016119e9565b6101606040518083038186803b158015610ead57600080fd5b505afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7991906116d0565b600082820183811015610f0a5760405162461bcd60e51b81526004016101b290611b4f565b90505b92915050565b610f1b611272565b610f23611216565b610f2b610e5c565b90508060e001516001600160a01b031663fb10b0c5826101400151836040518363ffffffff1660e01b8152600401610f649291906119fd565b60006040518083038186803b158015610f7c57600080fd5b505afa158015610f90573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e5691908101906116ec565b6000610f0a838361103d565b600080610fd18885610ee5565b9050611012610fe08888611078565b610ffe61100384610ffe610ff5878b8b61101e565b610ffe8c61109e565b611078565b61100d8888611078565b6110bd565b98975050505050505050565b600061103361102d858561103d565b83611078565b90505b9392505050565b60008161105e61105585670de0b6b3a76400006110ff565b60028504610ee5565b8161106557fe5b049392505050565b600061103361102d85855b6000670de0b6b3a764000061105e61109085856110ff565b6706f05b59d3b20000610ee5565b60006110b5826110b0600a6012611139565b610ee5565b90505b919050565b6000610f0a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506111a4565b60008261110e57506000610f0d565b8282028284828161111b57fe5b0414610f0a5760405162461bcd60e51b81526004016101b290611c44565b60008161114857506001610f0d565b8160011415611158575081610f0d565b8215801561116557508115155b1561117257506000610f0d565b8260015b8381101561119c5761118882866110ff565b9150611195816001610ee5565b9050611176565b509050610f0d565b600081848411156111c85760405162461bcd60e51b81526004016101b29190611a71565b505050900390565b6040518060c0016040528060006001600160a01b03168152602001606081526020016000151581526020016060815260200160008152602001611211611216565b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b0316815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611211611216565b80516110b881611f27565b600082601f8301126112f7578081fd5b815167ffffffffffffffff81111561130b57fe5b602080820261131b828201611eb5565b8381529350818401858301828701840188101561133757600080fd5b600092505b8483101561136357805161134f81611f27565b82526001929092019190830190830161133c565b505050505092915050565b805180151581146110b857600080fd5b600082601f83011261138e578081fd5b81356113a161139c82611ed9565b611eb5565b91508082528360208285010111156113b857600080fd5b8060208401602084013760009082016020015292915050565b600082601f8301126113e1578081fd5b81516113ef61139c82611ed9565b915080825283602082850101111561140657600080fd5b611417816020840160208601611efb565b5092915050565b6000610160808385031215611431578182fd5b61143a81611eb5565b915050611446826112dc565b8152611454602083016112dc565b6020820152611465604083016112dc565b6040820152611476606083016112dc565b6060820152611487608083016112dc565b608082015261149860a083016112dc565b60a08201526114a960c083016112dc565b60c08201526114ba60e083016112dc565b60e08201526101006114cd8184016112dc565b908201526101206114df8382016112dc565b908201526101406114f18382016112dc565b9082015292915050565b60006020828403121561150c578081fd5b8151610f0a81611f27565b60008060408385031215611529578081fd5b823561153481611f27565b9150602083013567ffffffffffffffff81111561154f578182fd5b61155b8582860161137e565b9150509250929050565b600060208284031215611576578081fd5b610f0a8261136e565b60008060008060008060c08789031215611597578182fd5b863567ffffffffffffffff808211156115ae578384fd5b6115ba8a838b0161137e565b975060208901359150808211156115cf578384fd5b506115dc89828a0161137e565b96999698505050506040850135946060810135946080820135945060a09091013592509050565b600060208284031215611614578081fd5b815167ffffffffffffffff8082111561162b578283fd5b90830190610200828603121561163f578283fd5b61164960c0611eb5565b611652836112dc565b8152602083015182811115611665578485fd5b611671878286016112e7565b6020830152506116836040840161136e565b6040820152606083015182811115611699578485fd5b6116a5878286016113d1565b606083015250608083015160808201526116c28660a0850161141e565b60a082015295945050505050565b600061016082840312156116e2578081fd5b610f0a838361141e565b6000602082840312156116fd578081fd5b815167ffffffffffffffff80821115611714578283fd5b908301906102c08286031215611728578283fd5b611733610180611eb5565b61173c836112dc565b815260208301518281111561174f578485fd5b61175b878286016113d1565b602083015250604083015182811115611772578485fd5b61177e878286016113d1565b604083015250606083810151908201526080808401519082015260a0808401519082015260c0808401519082015260e0808401519082015261010080840151908201526101208084015190820152610140808401519082015261016091506117e88683850161141e565b91810191909152949350505050565b600060208284031215611808578081fd5b5035919050565b600060208284031215611820578081fd5b5051919050565b6001600160a01b03169052565b15159052565b60008151808452611852816020860160208601611efb565b601f01601f19169290920160200192915050565b80516001600160a01b039081168352602080830151610200828601819052815190860181905260009361022087019392830192909185905b808210156118c05784518416865294820194938201936001919091019061189e565b505050505060408301516118d76040860182611834565b50606083015184820360608601526118ef828261183a565b9150506080830151608085015260a083015161190e60a0860182611916565b509392505050565b611921828251611827565b60208101516119336020840182611827565b5060408101516119466040840182611827565b5060608101516119596060840182611827565b50608081015161196c6080840182611827565b5060a081015161197f60a0840182611827565b5060c081015161199260c0840182611827565b5060e08101516119a560e0840182611827565b50610100808201516119b982850182611827565b5050610120808201516119ce82850182611827565b5050610140808201516119e382850182611827565b50505050565b6001600160a01b0391909116815260200190565b6001600160a01b038316815261018081016110366020830184611916565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03841681526101a060208201819052600090611a598382018661183a565b915050611a696040830184611916565b949350505050565b600060208252610f0a602083018461183a565b6000610220808352611a988184018b61183a565b90508281036020840152611aac818a61183a565b9150508660408301528560608301528460808301528360a083015261101260c0830184611916565b60208082526024908201527f456c617374696344414f3a2044414f206d757374206e6f742062652073756d6d6040820152631bdb995960e21b606082015260800190565b6020808252601a908201527f456c617374696344414f3a204f6e6c792073756d6d6f6e657273000000000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526034908201527f456c617374696344414f3a2043616e6e6f742070757263686173652074686174604082015273206d616e7920736861726573206174206f6e636560601b606082015260800190565b6020808252818101527f456c617374696344414f3a2044414f206d7573742062652073756d6d6f6e6564604082015260600190565b6020808252818101527f456c617374696344414f3a20496e636f72726563742045544820616d6f756e74604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602d908201527f456c617374696344414f3a20506c656173652063616c6c20696e697469616c6960408201526c1e99551bdad95b88199a5c9cdd609a1b606082015260800190565b60208082526032908201527f456c617374696344414f3a204f6e6c79206465706c6f7965722063616e20696e60408201527134ba34b0b634bd32903a3432902a37b5b2b760711b606082015260800190565b60208082526039908201527f456c617374696344414f3a20506c6561736520736565642044414f207769746860408201527f2045544820746f20736574204554483a45475420726174696f00000000000000606082015260800190565b600060208252610f0a6020830184611866565b600060408252611da76040830185611866565b905060018060a01b03831660208301529392505050565b600060408252611dd16040830185611866565b90508260208301529392505050565b6101608101610f0d8284611916565b600060208252611e03602083018451611827565b60208301516102c06040840152611e1e6102e084018261183a565b90506040840151601f19848303016060850152611e3b828261183a565b91505060608401516080840152608084015160a084015260a084015160c084015260c084015160e084015260e084015161010081818601528086015191505061012081818601528086015191505061014081818601528086015191505061016081818601528086015191505061190e610180850182611916565b60405181810167ffffffffffffffff81118282101715611ed157fe5b604052919050565b600067ffffffffffffffff821115611eed57fe5b50601f01601f191660200190565b60005b83811015611f16578181015183820152602001611efe565b838111156119e35750506000910152565b6001600160a01b0381168114611f3c57600080fd5b5056fea2646970667358221220f060723535f8a28bd788874bb45eb8f63bc270a7b75bf938bfee9b37a76681e664736f6c63430007020033";
  var deployedBytecode$6 = "0x60806040526004361061007f5760003560e01c80631fb460891161004e5780631fb46089146100fb578063985da72614610103578063a0f2c9771461012e578063d38b576d1461015057610086565b80630181bb0b14610088578063035d9f2a146100a857806303ca8c09146100c8578063049878f3146100e857610086565b3661008657005b005b34801561009457600080fd5b506100866100a3366004611517565b61017d565b3480156100b457600080fd5b506100866100c33660046117f7565b61023e565b3480156100d457600080fd5b506100866100e336600461157f565b6106a6565b6100866100f63660046117f7565b6107f5565b610086610a5f565b34801561010f57600080fd5b50610118610d69565b6040516101259190611d81565b60405180910390f35b34801561013a57600080fd5b50610143610d7e565b6040516101259190611de0565b34801561015c57600080fd5b5061017061016b3660046117f7565b610d8e565b60405161012591906119e9565b6101856111d0565b61018d610db5565b6040810151909150156101bb5760405162461bcd60e51b81526004016101b290611ad4565b60405180910390fd5b6101c3611216565b6101cb610e5c565b6101208101516040516331081b8760e01b8152919250906001600160a01b038216906331081b879061020590889088908790600401611a34565b600060405180830381600087803b15801561021f57600080fd5b505af1158015610233573d6000803e3d6000fd5b505050505050505050565b6102466111d0565b61024e610db5565b6040810151909150156102735760405162461bcd60e51b81526004016101b290611ad4565b61027b611216565b610283610e5c565b60608101519091506102936111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c5906102c190309087906004016119fd565b60006040518083038186803b1580156102d957600080fd5b505afa1580156102ed573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103159190810190611603565b90506000826001600160a01b0316626cfdda83336040518363ffffffff1660e01b8152600401610346929190611d94565b60206040518083038186803b15801561035e57600080fd5b505afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190611565565b9050806103b55760405162461bcd60e51b81526004016101b290611b18565b600047116103d55760405162461bcd60e51b81526004016101b290611d24565b6103dd611216565b6103e5610e5c565b60608101519091506103f56111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c59061042390309087906004016119fd565b60006040518083038186803b15801561043b57600080fd5b505afa15801561044f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104779190810190611603565b9050610481611272565b60e084015161014085015160405163fb10b0c560e01b81526001600160a01b039092169163fb10b0c5916104b99188906004016119fd565b60006040518083038186803b1580156104d157600080fd5b505afa1580156104e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261050d91908101906116ec565b805190915060005b836080015181101561063157816001600160a01b031663528c198a866001600160a01b031663cc469ca787856040518363ffffffff1660e01b815260040161055e929190611dbe565b60206040518083038186803b15801561057657600080fd5b505afa15801561058a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ae91906114fb565b8e6040518363ffffffff1660e01b81526004016105cc929190611a1b565b602060405180830381600087803b1580156105e657600080fd5b505af11580156105fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e9190611565565b5061062a816001610ee5565b9050610515565b5060016040808501919091525163587ce3b160e01b81526001600160a01b0385169063587ce3b190610667908690600401611d81565b600060405180830381600087803b15801561068157600080fd5b505af1158015610695573d6000803e3d6000fd5b505050505050505050505050505050565b6106ae6111d0565b6106b6610db5565b6040810151909150156106db5760405162461bcd60e51b81526004016101b290611ad4565b6001546001600160a01b031633146107055760405162461bcd60e51b81526004016101b290611cd2565b61070d611216565b610715610e5c565b905061071f611272565b8161010001516001600160a01b0316638891ba638a8a8a8a8a8a896040518863ffffffff1660e01b815260040161075c9796959493929190611a84565b600060405180830381600087803b15801561077657600080fd5b505af115801561078a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107b291908101906116ec565b80516040519192506001600160a01b0316907fad65bbe394ae719938a7445c7588b2cdb455ea64f1364115b1e073e31bb1af9b90600090a2505050505050505050565b6107fd6111d0565b610805610db5565b905080604001516108285760405162461bcd60e51b81526004016101b290611bda565b610830611272565b610838610f13565b905080610120015183111561085f5760405162461bcd60e51b81526004016101b290611b86565b60008160000151905060006108e6344703836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108a957600080fd5b505afa1580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e1919061180f565b610fb8565b9050600061090986838660c001518760a001518860e00151896101000151610fc4565b905034811461092a5760405162461bcd60e51b81526004016101b290611c0f565b600061093a878660e00151610ee5565b90506000610952828760e0015188610100015161101e565b905061095c611216565b610964610e5c565b60e081015161010089018490526040516295bfb960e61b8152919250906001600160a01b0382169063256fee40906109a0908b90600401611def565b600060405180830381600087803b1580156109ba57600080fd5b505af11580156109ce573d6000803e3d6000fd5b50506040516329460cc560e11b81526001600160a01b038a16925063528c198a9150610a009033908e90600401611a1b565b602060405180830381600087803b158015610a1a57600080fd5b505af1158015610a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a529190611565565b5050505050505050505050565b610a676111d0565b610a6f610db5565b604081015190915015610a945760405162461bcd60e51b81526004016101b290611ad4565b610a9c611216565b610aa4610e5c565b6060810151909150610ab46111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c590610ae290309087906004016119fd565b60006040518083038186803b158015610afa57600080fd5b505afa158015610b0e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b369190810190611603565b90506000826001600160a01b0316626cfdda83336040518363ffffffff1660e01b8152600401610b67929190611d94565b60206040518083038186803b158015610b7f57600080fd5b505afa158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190611565565b905080610bd65760405162461bcd60e51b81526004016101b290611b18565b610bde611216565b610be6610e5c565b90506000610bf2610e5c565b60e00151610140830151604051637fc975f360e01b81526001600160a01b0390921691637fc975f391610c299186906004016119fd565b60206040518083038186803b158015610c4157600080fd5b505afa158015610c55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c799190611565565b905080610c985760405162461bcd60e51b81526004016101b290611c85565b610ca0611272565b610ca8610f13565b905060003490506000610cbf82846080015161103d565b90506000610cd7828560c0015186610100015161106d565b84516040516329460cc560e11b81529192506001600160a01b03169063528c198a90610d099033908690600401611a1b565b602060405180830381600087803b158015610d2357600080fd5b505af1158015610d37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5b9190611565565b505050505050505050505050565b610d716111d0565b610d79610db5565b905090565b610d86611216565b610d79610e5c565b60028181548110610d9b57fe5b6000918252602090912001546001600160a01b0316905081565b610dbd6111d0565b610dc5611216565b610dcd610e5c565b606081015160405163fb10b0c560e01b81529192506001600160a01b03169063fb10b0c590610e0290309085906004016119fd565b60006040518083038186803b158015610e1a57600080fd5b505afa158015610e2e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e569190810190611603565b91505090565b610e64611216565b60005460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990610e949030906004016119e9565b6101606040518083038186803b158015610ead57600080fd5b505afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7991906116d0565b600082820183811015610f0a5760405162461bcd60e51b81526004016101b290611b4f565b90505b92915050565b610f1b611272565b610f23611216565b610f2b610e5c565b90508060e001516001600160a01b031663fb10b0c5826101400151836040518363ffffffff1660e01b8152600401610f649291906119fd565b60006040518083038186803b158015610f7c57600080fd5b505afa158015610f90573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e5691908101906116ec565b6000610f0a838361103d565b600080610fd18885610ee5565b9050611012610fe08888611078565b610ffe61100384610ffe610ff5878b8b61101e565b610ffe8c61109e565b611078565b61100d8888611078565b6110bd565b98975050505050505050565b600061103361102d858561103d565b83611078565b90505b9392505050565b60008161105e61105585670de0b6b3a76400006110ff565b60028504610ee5565b8161106557fe5b049392505050565b600061103361102d85855b6000670de0b6b3a764000061105e61109085856110ff565b6706f05b59d3b20000610ee5565b60006110b5826110b0600a6012611139565b610ee5565b90505b919050565b6000610f0a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506111a4565b60008261110e57506000610f0d565b8282028284828161111b57fe5b0414610f0a5760405162461bcd60e51b81526004016101b290611c44565b60008161114857506001610f0d565b8160011415611158575081610f0d565b8215801561116557508115155b1561117257506000610f0d565b8260015b8381101561119c5761118882866110ff565b9150611195816001610ee5565b9050611176565b509050610f0d565b600081848411156111c85760405162461bcd60e51b81526004016101b29190611a71565b505050900390565b6040518060c0016040528060006001600160a01b03168152602001606081526020016000151581526020016060815260200160008152602001611211611216565b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b0316815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611211611216565b80516110b881611f27565b600082601f8301126112f7578081fd5b815167ffffffffffffffff81111561130b57fe5b602080820261131b828201611eb5565b8381529350818401858301828701840188101561133757600080fd5b600092505b8483101561136357805161134f81611f27565b82526001929092019190830190830161133c565b505050505092915050565b805180151581146110b857600080fd5b600082601f83011261138e578081fd5b81356113a161139c82611ed9565b611eb5565b91508082528360208285010111156113b857600080fd5b8060208401602084013760009082016020015292915050565b600082601f8301126113e1578081fd5b81516113ef61139c82611ed9565b915080825283602082850101111561140657600080fd5b611417816020840160208601611efb565b5092915050565b6000610160808385031215611431578182fd5b61143a81611eb5565b915050611446826112dc565b8152611454602083016112dc565b6020820152611465604083016112dc565b6040820152611476606083016112dc565b6060820152611487608083016112dc565b608082015261149860a083016112dc565b60a08201526114a960c083016112dc565b60c08201526114ba60e083016112dc565b60e08201526101006114cd8184016112dc565b908201526101206114df8382016112dc565b908201526101406114f18382016112dc565b9082015292915050565b60006020828403121561150c578081fd5b8151610f0a81611f27565b60008060408385031215611529578081fd5b823561153481611f27565b9150602083013567ffffffffffffffff81111561154f578182fd5b61155b8582860161137e565b9150509250929050565b600060208284031215611576578081fd5b610f0a8261136e565b60008060008060008060c08789031215611597578182fd5b863567ffffffffffffffff808211156115ae578384fd5b6115ba8a838b0161137e565b975060208901359150808211156115cf578384fd5b506115dc89828a0161137e565b96999698505050506040850135946060810135946080820135945060a09091013592509050565b600060208284031215611614578081fd5b815167ffffffffffffffff8082111561162b578283fd5b90830190610200828603121561163f578283fd5b61164960c0611eb5565b611652836112dc565b8152602083015182811115611665578485fd5b611671878286016112e7565b6020830152506116836040840161136e565b6040820152606083015182811115611699578485fd5b6116a5878286016113d1565b606083015250608083015160808201526116c28660a0850161141e565b60a082015295945050505050565b600061016082840312156116e2578081fd5b610f0a838361141e565b6000602082840312156116fd578081fd5b815167ffffffffffffffff80821115611714578283fd5b908301906102c08286031215611728578283fd5b611733610180611eb5565b61173c836112dc565b815260208301518281111561174f578485fd5b61175b878286016113d1565b602083015250604083015182811115611772578485fd5b61177e878286016113d1565b604083015250606083810151908201526080808401519082015260a0808401519082015260c0808401519082015260e0808401519082015261010080840151908201526101208084015190820152610140808401519082015261016091506117e88683850161141e565b91810191909152949350505050565b600060208284031215611808578081fd5b5035919050565b600060208284031215611820578081fd5b5051919050565b6001600160a01b03169052565b15159052565b60008151808452611852816020860160208601611efb565b601f01601f19169290920160200192915050565b80516001600160a01b039081168352602080830151610200828601819052815190860181905260009361022087019392830192909185905b808210156118c05784518416865294820194938201936001919091019061189e565b505050505060408301516118d76040860182611834565b50606083015184820360608601526118ef828261183a565b9150506080830151608085015260a083015161190e60a0860182611916565b509392505050565b611921828251611827565b60208101516119336020840182611827565b5060408101516119466040840182611827565b5060608101516119596060840182611827565b50608081015161196c6080840182611827565b5060a081015161197f60a0840182611827565b5060c081015161199260c0840182611827565b5060e08101516119a560e0840182611827565b50610100808201516119b982850182611827565b5050610120808201516119ce82850182611827565b5050610140808201516119e382850182611827565b50505050565b6001600160a01b0391909116815260200190565b6001600160a01b038316815261018081016110366020830184611916565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03841681526101a060208201819052600090611a598382018661183a565b915050611a696040830184611916565b949350505050565b600060208252610f0a602083018461183a565b6000610220808352611a988184018b61183a565b90508281036020840152611aac818a61183a565b9150508660408301528560608301528460808301528360a083015261101260c0830184611916565b60208082526024908201527f456c617374696344414f3a2044414f206d757374206e6f742062652073756d6d6040820152631bdb995960e21b606082015260800190565b6020808252601a908201527f456c617374696344414f3a204f6e6c792073756d6d6f6e657273000000000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526034908201527f456c617374696344414f3a2043616e6e6f742070757263686173652074686174604082015273206d616e7920736861726573206174206f6e636560601b606082015260800190565b6020808252818101527f456c617374696344414f3a2044414f206d7573742062652073756d6d6f6e6564604082015260600190565b6020808252818101527f456c617374696344414f3a20496e636f72726563742045544820616d6f756e74604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602d908201527f456c617374696344414f3a20506c656173652063616c6c20696e697469616c6960408201526c1e99551bdad95b88199a5c9cdd609a1b606082015260800190565b60208082526032908201527f456c617374696344414f3a204f6e6c79206465706c6f7965722063616e20696e60408201527134ba34b0b634bd32903a3432902a37b5b2b760711b606082015260800190565b60208082526039908201527f456c617374696344414f3a20506c6561736520736565642044414f207769746860408201527f2045544820746f20736574204554483a45475420726174696f00000000000000606082015260800190565b600060208252610f0a6020830184611866565b600060408252611da76040830185611866565b905060018060a01b03831660208301529392505050565b600060408252611dd16040830185611866565b90508260208301529392505050565b6101608101610f0d8284611916565b600060208252611e03602083018451611827565b60208301516102c06040840152611e1e6102e084018261183a565b90506040840151601f19848303016060850152611e3b828261183a565b91505060608401516080840152608084015160a084015260a084015160c084015260c084015160e084015260e084015161010081818601528086015191505061012081818601528086015191505061014081818601528086015191505061016081818601528086015191505061190e610180850182611916565b60405181810167ffffffffffffffff81118282101715611ed157fe5b604052919050565b600067ffffffffffffffff821115611eed57fe5b50601f01601f191660200190565b60005b83811015611f16578181015183820152602001611efe565b838111156119e35750506000910152565b6001600160a01b0381168114611f3c57600080fd5b5056fea2646970667358221220f060723535f8a28bd788874bb45eb8f63bc270a7b75bf938bfee9b37a76681e664736f6c63430007020033";
  var linkReferences$6 = {
  };
  var deployedLinkReferences$6 = {
  };
  var ElasticDAOContract = {
  	_format: _format$6,
  	contractName: contractName$6,
  	sourceName: sourceName$6,
  	abi: abi$6,
  	bytecode: bytecode$6,
  	deployedBytecode: deployedBytecode$6,
  	linkReferences: linkReferences$6,
  	deployedLinkReferences: deployedLinkReferences$6
  };

  const onlyAfterSummoning = 'DAO must be summoned';
  const onlyBeforeSummoning = 'DAO must not be summoned';
  const prefix$6 = '@elastic-dao/sdk - ElasticDAO';
  const valueGreaterThanZero = 'a value greater than 0 must be provided';

  class ElasticDAO extends Base {
    constructor(dao) {
      super(dao.sdk);
      this.dao = dao;
    }

    static contract(sdk, address) {
      return sdk.contract({ abi: ElasticDAOContract.abi, address });
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.dao.uuid);
    }

    async getDAO() {
      return this.dao.refresh();
    }

    async getEcosystem() {
      return this.dao.ecosystem.refresh();
    }

    async initializeModule(address, name, overrides = {}) {
      this.onlyBeforeSummoning();
      const elasticDAO = await this.contract();
      await elasticDAO.initializeModule(
        address,
        name,
        this.sanitizeOverrides(overrides),
      );
      return true;
    }

    async join(deltaLambda, overrides = {}) {
      this.onlyAfterSummoning();
      const elasticDAO = await this.contract();
      await elasticDAO.join(
        this.toEthersBigNumber(deltaLambda, 18),
        this.sanitizeOverrides(overrides),
      );
      return true;
    }

    onlyAfterSummoning() {
      if (!this.dao.summoned) {
        throw new Error(`${prefix$6}: ${onlyAfterSummoning}`);
      }
    }

    onlyBeforeSummoning() {
      if (this.dao.summoned) {
        throw new Error(`${prefix$6}: ${onlyBeforeSummoning}`);
      }
    }

    async seedSummoning(overrides = {}) {
      this.onlyBeforeSummoning();
      const elasticDAO = await this.contract();
      if (overrides.value && BigNumber__default['default'](overrides.value).isGreaterThan(0)) {
        return elasticDAO.seedSummoning(this.sanitizeOverrides(overrides));
      }
      throw new Error(`${prefix$6}: ${valueGreaterThanZero}`);
    }

    async summon(deltaLambda, overrides = {}) {
      this.onlyBeforeSummoning();
      const elasticDAO = await this.contract();
      return elasticDAO.summon(
        this.toEthersBigNumber(deltaLambda, 18),
        this.sanitizeOverrides(overrides),
      );
    }

    async summoners() {
      const elasticDAO = await this.contract();

      console.log('summoners', this.dao, this.dao.numberOfSummoners);
      return Promise.all(
        upTo(this.dao.numberOfSummoners).map((i) => elasticDAO.summoners(i)),
      );
    }
  }

  const cache$5 = {};
  const prefix$7 = '@elastic-dao/sdk - DAO';

  const isDAO = (thing) =>
    thing && typeof thing === 'object' && thing instanceof DAO;
  const validateIsDAO = (thing) => {
    const message = 'not a DAO';
    validate(isDAO(thing), { message, prefix: prefix$7 });
  };

  class DAO extends ElasticModel {
    constructor(sdk, { ecosystem, name, numberOfSummoners, summoned, uuid }) {
      super(sdk);
      this.id = uuid.toLowerCase();
      cache$5[this.id] = {
        ecosystem,
        name,
        numberOfSummoners,
        summoned,
        uuid,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$7 });
      return sdk.contract({ abi: DAOContract.abi, address });
    }

    static async deserialize(sdk, uuid, _ecosystem) {
      utils$1.validateIsAddress(uuid, { prefix: prefix$7 });

      let ecosystem = _ecosystem;
      if (!isEcosystem(ecosystem)) {
        ecosystem = await Ecosystem.deserialize(uuid);
      }

      const daoModel = await this.contract(sdk, ecosystem.daoModelAddress);

      const { name, numberOfSummoners, summoned } = await daoModel.deserialize(
        uuid,
        ecosystem.toObject(false),
      );

      return new DAO(sdk, {
        ecosystem,
        name,
        numberOfSummoners,
        summoned,
        uuid,
      });
    }

    // Getters

    get address() {
      return this.ecosystem.daoModelAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get ecosystem() {
      return cache$5[this.id].ecosystem;
    }

    get elasticDAO() {
      return new ElasticDAO(this);
    }

    get name() {
      return cache$5[this.id].name;
    }

    get numberOfSummoners() {
      return this.toNumber(cache$5[this.id].numberOfSummoners);
    }

    get summoned() {
      return cache$5[this.id].summoned;
    }

    get uuid() {
      return cache$5[this.id].uuid;
    }

    // Instance functions

    async ethBalance() {
      return this.toBigNumber(await this.sdk.provider.getBalance(this.uuid), 18);
    }

    async refresh() {
      return this.constructor.deserialize(this.sdk, this.uuid, this.ecosystem);
    }

    async summoners() {
      return this.elasticDAO.summoners();
    }

    async token() {
      return Token.deserialize(
        this.sdk,
        this.ecosystem.governanceTokenAddress,
        this.ecosystem,
      );
    }

    toObject(includeNested = true) {
      const { ecosystem, id } = this;

      const obj = {
        ...cache$5[id],
        id,
        ecosystem: ecosystem.toObject(false),
        summoners: [],
      };

      if (includeNested === false) {
        delete obj.ecosystem;
      }

      return this.sanitize(obj);
    }
  }

  var _format$7 = "hh-sol-artifact-1";
  var contractName$7 = "ElasticDAOFactory";
  var sourceName$7 = "src/core/ElasticDAOFactory.sol";
  var abi$7 = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_ecosystemModelAddress",
  				type: "address"
  			}
  		],
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "address",
  				name: "daoAddress",
  				type: "address"
  			}
  		],
  		name: "DAODeployed",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "address",
  				name: "feeReceiver",
  				type: "address"
  			}
  		],
  		name: "FeeAddressUpdated",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "address",
  				name: "treasuryAddress",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "amount",
  				type: "uint256"
  			}
  		],
  		name: "FeesCollected",
  		type: "event"
  	},
  	{
  		stateMutability: "payable",
  		type: "fallback"
  	},
  	{
  		inputs: [
  		],
  		name: "collectFees",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address[]",
  				name: "_summoners",
  				type: "address[]"
  			},
  			{
  				internalType: "string",
  				name: "_nameOfDAO",
  				type: "string"
  			},
  			{
  				internalType: "uint256",
  				name: "_numberOfSummoners",
  				type: "uint256"
  			},
  			{
  				internalType: "string",
  				name: "_nameOfToken",
  				type: "string"
  			},
  			{
  				internalType: "string",
  				name: "_symbol",
  				type: "string"
  			},
  			{
  				internalType: "uint256",
  				name: "_eByl",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_elasticity",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_k",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_maxLambdaPurchase",
  				type: "uint256"
  			}
  		],
  		name: "deployDAOAndToken",
  		outputs: [
  		],
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		name: "deployedDAOAddresses",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "deployedDAOCount",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_feeReceiver",
  				type: "address"
  			}
  		],
  		name: "updateFeeAddress",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		stateMutability: "payable",
  		type: "receive"
  	}
  ];
  var bytecode$7 = "0x6080604052600060035534801561001557600080fd5b506040516130af3803806130af83398101604081905261003491610059565b600080546001600160a01b0319166001600160a01b0392909216919091179055610087565b60006020828403121561006a578081fd5b81516001600160a01b0381168114610080578182fd5b9392505050565b613019806100966000396000f3fe608060405260043610620000555760003560e01c806357b3d0ec146200005f578063822fc6161462000076578063bbcaac3814620000a6578063c465b10514620000cb578063c879657214620000ff576200005d565b366200005d57005b005b6200005d62000070366004620004ef565b62000117565b3480156200008357600080fd5b506200008e62000275565b6040516200009d919062000768565b60405180910390f35b348015620000b357600080fd5b506200005d620000c5366004620004d2565b6200027b565b348015620000d857600080fd5b50620000f0620000ea366004620005d3565b620002c5565b6040516200009d91906200063a565b3480156200010c57600080fd5b506200005d620002ed565b600080546040516001600160a01b03909116908b908b908b906200013b90620003ad565b6200014a94939291906200064e565b604051809103906000f08015801562000167573d6000803e3d6000fd5b506040516303ca8c0960e01b81529091506001600160a01b038216906303ca8c0990620001a3908a908a908a908a908a908a90600401620006e2565b600060405180830381600087803b158015620001be57600080fd5b505af1158015620001d3573d6000803e3d6000fd5b505060028054600180820183556000929092527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b038616179055600354620002329350915062000375565b6003556040516001600160a01b038216907f1cb5b7f48694f77209ac2e140151cda89a929b850874f26d327e8638e9fa65e090600090a250505050505050505050565b60035481565b600180546001600160a01b0319166001600160a01b0383169081179091556040517f446e39bcf1b47cfadfaa23442cb4b34682cfe6bd9220da084894e3b1f834e4f390600090a250565b60028181548110620002d357fe5b6000918252602090912001546001600160a01b0316905081565b60015460405147916001600160a01b03169082156108fc029083906000818181858888f1935050505015801562000328573d6000803e3d6000fd5b506001546040517f9dc46f23cfb5ddcad0ae7ea2be38d47fec07bb9382ec7e564efc69e036dd66ce916200036a916001600160a01b03909116908490620006c9565b60405180910390a150565b600082820183811015620003a65760405162461bcd60e51b81526004016200039d9062000731565b60405180910390fd5b9392505050565b61284d806200079783390190565b80356001600160a01b0381168114620003d357600080fd5b919050565b600082601f830112620003e9578081fd5b813567ffffffffffffffff811115620003fe57fe5b60208082026200041082820162000771565b838152935081840185830182870184018810156200042d57600080fd5b600092505b848310156200045b576200044681620003bb565b82526001929092019190830190830162000432565b505050505092915050565b600082601f83011262000477578081fd5b813567ffffffffffffffff8111156200048c57fe5b620004a1601f8201601f191660200162000771565b9150808252836020828501011115620004b957600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215620004e4578081fd5b620003a682620003bb565b60008060008060008060008060006101208a8c0312156200050e578485fd5b893567ffffffffffffffff8082111562000526578687fd5b620005348d838e01620003d8565b9a5060208c01359150808211156200054a578687fd5b620005588d838e0162000466565b995060408c0135985060608c013591508082111562000575578687fd5b620005838d838e0162000466565b975060808c013591508082111562000599578687fd5b50620005a88c828d0162000466565b999c989b50969995989760a0870135975060c08701359660e081013596506101000135945092505050565b600060208284031215620005e5578081fd5b5035919050565b60008151808452815b818110156200061357602081850181015186830182015201620005f5565b81811115620006255782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682526080602080840182905286519184018290526000928782019290919060a0860190855b818110156200069e5785518516835294830194918301916001016200067e565b50508581036040870152620006b48189620005ec565b94505050505082606083015295945050505050565b6001600160a01b03929092168252602082015260400190565b600060c08252620006f760c0830189620005ec565b82810360208401526200070b8189620005ec565b9150508560408301528460608301528360808301528260a0830152979650505050505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b90815260200190565b60405181810167ffffffffffffffff811182821017156200078e57fe5b60405291905056fe60806040523480156200001157600080fd5b506040516200284d3803806200284d83398101604081905262000034916200053c565b600080546001600160a01b0386166001600160a01b03199182161790915560018054909116331790556200006762000238565b60405163332a4d0960e01b81526001600160a01b0386169063332a4d09906200009690600090600401620007b7565b6101606040518083038186803b158015620000b057600080fd5b505afa158015620000c5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000eb91906200069b565b84519091506200010390600290602087019062000294565b506101008101516200011462000238565b6040516316c5ac2560e11b81526001600160a01b03831690632d8b584a90620001429086906004016200085e565b61016060405180830381600087803b1580156200015e57600080fd5b505af115801562000173573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019991906200069b565b6040516312e9f95760e31b81529091506001600160a01b0383169063974fcab890620001d0908990899089908790600401620007cb565b600060405180830381600087803b158015620001eb57600080fd5b505af115801562000200573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200022a9190810190620005be565b5050505050505050620008c8565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b828054828255906000526020600020908101928215620002ec579160200282015b82811115620002ec57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002b5565b50620002fa929150620002fe565b5090565b5b80821115620002fa5780546001600160a01b0319168155600101620002ff565b80516001600160a01b03811681146200033757600080fd5b919050565b600082601f8301126200034d578081fd5b81516001600160401b038111156200036157fe5b60208082026200037382820162000875565b838152935081840185830182870184018810156200039057600080fd5b600092505b84831015620003be57620003a9816200031f565b82526001929092019190830190830162000395565b505050505092915050565b805180151581146200033757600080fd5b600082601f830112620003eb578081fd5b81516001600160401b03811115620003ff57fe5b62000414601f8201601f191660200162000875565b91508082528360208285010111156200042c57600080fd5b6200043f81602084016020860162000899565b5092915050565b60006101608083850312156200045a578182fd5b620004658162000875565b91505062000473826200031f565b815262000483602083016200031f565b602082015262000496604083016200031f565b6040820152620004a9606083016200031f565b6060820152620004bc608083016200031f565b6080820152620004cf60a083016200031f565b60a0820152620004e260c083016200031f565b60c0820152620004f560e083016200031f565b60e08201526101006200050a8184016200031f565b908201526101206200051e8382016200031f565b90820152610140620005328382016200031f565b9082015292915050565b6000806000806080858703121562000552578384fd5b6200055d856200031f565b60208601519094506001600160401b03808211156200057a578485fd5b62000588888389016200033c565b945060408701519150808211156200059e578384fd5b50620005ad87828801620003da565b606096909601519497939650505050565b600060208284031215620005d0578081fd5b81516001600160401b0380821115620005e7578283fd5b908301906102008286031215620005fc578283fd5b6200060860c062000875565b62000613836200031f565b815260208301518281111562000627578485fd5b62000635878286016200033c565b6020830152506200064960408401620003c9565b604082015260608301518281111562000660578485fd5b6200066e87828601620003da565b606083015250608083015160808201526200068d8660a0850162000446565b60a082015295945050505050565b60006101608284031215620006ae578081fd5b620006ba838362000446565b9392505050565b6001600160a01b03169052565b620006db828251620006c1565b6020810151620006ef6020840182620006c1565b506040810151620007046040840182620006c1565b506060810151620007196060840182620006c1565b5060808101516200072e6080840182620006c1565b5060a08101516200074360a0840182620006c1565b5060c08101516200075860c0840182620006c1565b5060e08101516200076d60e0840182620006c1565b50610100808201516200078382850182620006c1565b5050610120808201516200079a82850182620006c1565b505061014080820151620007b182850182620006c1565b50505050565b6001600160a01b0391909116815260200190565b6101c080825285519082018190526000906101e0830190602090818901845b82811015620008115781516001600160a01b031685529383019390830190600101620007ea565b5050508382038185015286518083526200083181838501848b0162000899565b60408501879052601f01601f191691909101019050620008556060830184620006ce565b95945050505050565b61016081016200086f8284620006ce565b92915050565b6040518181016001600160401b03811182821017156200089157fe5b604052919050565b60005b83811015620008b65781810151838201526020016200089c565b83811115620007b15750506000910152565b611f7580620008d86000396000f3fe60806040526004361061007f5760003560e01c80631fb460891161004e5780631fb46089146100fb578063985da72614610103578063a0f2c9771461012e578063d38b576d1461015057610086565b80630181bb0b14610088578063035d9f2a146100a857806303ca8c09146100c8578063049878f3146100e857610086565b3661008657005b005b34801561009457600080fd5b506100866100a3366004611517565b61017d565b3480156100b457600080fd5b506100866100c33660046117f7565b61023e565b3480156100d457600080fd5b506100866100e336600461157f565b6106a6565b6100866100f63660046117f7565b6107f5565b610086610a5f565b34801561010f57600080fd5b50610118610d69565b6040516101259190611d81565b60405180910390f35b34801561013a57600080fd5b50610143610d7e565b6040516101259190611de0565b34801561015c57600080fd5b5061017061016b3660046117f7565b610d8e565b60405161012591906119e9565b6101856111d0565b61018d610db5565b6040810151909150156101bb5760405162461bcd60e51b81526004016101b290611ad4565b60405180910390fd5b6101c3611216565b6101cb610e5c565b6101208101516040516331081b8760e01b8152919250906001600160a01b038216906331081b879061020590889088908790600401611a34565b600060405180830381600087803b15801561021f57600080fd5b505af1158015610233573d6000803e3d6000fd5b505050505050505050565b6102466111d0565b61024e610db5565b6040810151909150156102735760405162461bcd60e51b81526004016101b290611ad4565b61027b611216565b610283610e5c565b60608101519091506102936111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c5906102c190309087906004016119fd565b60006040518083038186803b1580156102d957600080fd5b505afa1580156102ed573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103159190810190611603565b90506000826001600160a01b0316626cfdda83336040518363ffffffff1660e01b8152600401610346929190611d94565b60206040518083038186803b15801561035e57600080fd5b505afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190611565565b9050806103b55760405162461bcd60e51b81526004016101b290611b18565b600047116103d55760405162461bcd60e51b81526004016101b290611d24565b6103dd611216565b6103e5610e5c565b60608101519091506103f56111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c59061042390309087906004016119fd565b60006040518083038186803b15801561043b57600080fd5b505afa15801561044f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104779190810190611603565b9050610481611272565b60e084015161014085015160405163fb10b0c560e01b81526001600160a01b039092169163fb10b0c5916104b99188906004016119fd565b60006040518083038186803b1580156104d157600080fd5b505afa1580156104e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261050d91908101906116ec565b805190915060005b836080015181101561063157816001600160a01b031663528c198a866001600160a01b031663cc469ca787856040518363ffffffff1660e01b815260040161055e929190611dbe565b60206040518083038186803b15801561057657600080fd5b505afa15801561058a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ae91906114fb565b8e6040518363ffffffff1660e01b81526004016105cc929190611a1b565b602060405180830381600087803b1580156105e657600080fd5b505af11580156105fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e9190611565565b5061062a816001610ee5565b9050610515565b5060016040808501919091525163587ce3b160e01b81526001600160a01b0385169063587ce3b190610667908690600401611d81565b600060405180830381600087803b15801561068157600080fd5b505af1158015610695573d6000803e3d6000fd5b505050505050505050505050505050565b6106ae6111d0565b6106b6610db5565b6040810151909150156106db5760405162461bcd60e51b81526004016101b290611ad4565b6001546001600160a01b031633146107055760405162461bcd60e51b81526004016101b290611cd2565b61070d611216565b610715610e5c565b905061071f611272565b8161010001516001600160a01b0316638891ba638a8a8a8a8a8a896040518863ffffffff1660e01b815260040161075c9796959493929190611a84565b600060405180830381600087803b15801561077657600080fd5b505af115801561078a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107b291908101906116ec565b80516040519192506001600160a01b0316907fad65bbe394ae719938a7445c7588b2cdb455ea64f1364115b1e073e31bb1af9b90600090a2505050505050505050565b6107fd6111d0565b610805610db5565b905080604001516108285760405162461bcd60e51b81526004016101b290611bda565b610830611272565b610838610f13565b905080610120015183111561085f5760405162461bcd60e51b81526004016101b290611b86565b60008160000151905060006108e6344703836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108a957600080fd5b505afa1580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e1919061180f565b610fb8565b9050600061090986838660c001518760a001518860e00151896101000151610fc4565b905034811461092a5760405162461bcd60e51b81526004016101b290611c0f565b600061093a878660e00151610ee5565b90506000610952828760e0015188610100015161101e565b905061095c611216565b610964610e5c565b60e081015161010089018490526040516295bfb960e61b8152919250906001600160a01b0382169063256fee40906109a0908b90600401611def565b600060405180830381600087803b1580156109ba57600080fd5b505af11580156109ce573d6000803e3d6000fd5b50506040516329460cc560e11b81526001600160a01b038a16925063528c198a9150610a009033908e90600401611a1b565b602060405180830381600087803b158015610a1a57600080fd5b505af1158015610a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a529190611565565b5050505050505050505050565b610a676111d0565b610a6f610db5565b604081015190915015610a945760405162461bcd60e51b81526004016101b290611ad4565b610a9c611216565b610aa4610e5c565b6060810151909150610ab46111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c590610ae290309087906004016119fd565b60006040518083038186803b158015610afa57600080fd5b505afa158015610b0e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b369190810190611603565b90506000826001600160a01b0316626cfdda83336040518363ffffffff1660e01b8152600401610b67929190611d94565b60206040518083038186803b158015610b7f57600080fd5b505afa158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190611565565b905080610bd65760405162461bcd60e51b81526004016101b290611b18565b610bde611216565b610be6610e5c565b90506000610bf2610e5c565b60e00151610140830151604051637fc975f360e01b81526001600160a01b0390921691637fc975f391610c299186906004016119fd565b60206040518083038186803b158015610c4157600080fd5b505afa158015610c55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c799190611565565b905080610c985760405162461bcd60e51b81526004016101b290611c85565b610ca0611272565b610ca8610f13565b905060003490506000610cbf82846080015161103d565b90506000610cd7828560c0015186610100015161106d565b84516040516329460cc560e11b81529192506001600160a01b03169063528c198a90610d099033908690600401611a1b565b602060405180830381600087803b158015610d2357600080fd5b505af1158015610d37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5b9190611565565b505050505050505050505050565b610d716111d0565b610d79610db5565b905090565b610d86611216565b610d79610e5c565b60028181548110610d9b57fe5b6000918252602090912001546001600160a01b0316905081565b610dbd6111d0565b610dc5611216565b610dcd610e5c565b606081015160405163fb10b0c560e01b81529192506001600160a01b03169063fb10b0c590610e0290309085906004016119fd565b60006040518083038186803b158015610e1a57600080fd5b505afa158015610e2e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e569190810190611603565b91505090565b610e64611216565b60005460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990610e949030906004016119e9565b6101606040518083038186803b158015610ead57600080fd5b505afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7991906116d0565b600082820183811015610f0a5760405162461bcd60e51b81526004016101b290611b4f565b90505b92915050565b610f1b611272565b610f23611216565b610f2b610e5c565b90508060e001516001600160a01b031663fb10b0c5826101400151836040518363ffffffff1660e01b8152600401610f649291906119fd565b60006040518083038186803b158015610f7c57600080fd5b505afa158015610f90573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e5691908101906116ec565b6000610f0a838361103d565b600080610fd18885610ee5565b9050611012610fe08888611078565b610ffe61100384610ffe610ff5878b8b61101e565b610ffe8c61109e565b611078565b61100d8888611078565b6110bd565b98975050505050505050565b600061103361102d858561103d565b83611078565b90505b9392505050565b60008161105e61105585670de0b6b3a76400006110ff565b60028504610ee5565b8161106557fe5b049392505050565b600061103361102d85855b6000670de0b6b3a764000061105e61109085856110ff565b6706f05b59d3b20000610ee5565b60006110b5826110b0600a6012611139565b610ee5565b90505b919050565b6000610f0a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506111a4565b60008261110e57506000610f0d565b8282028284828161111b57fe5b0414610f0a5760405162461bcd60e51b81526004016101b290611c44565b60008161114857506001610f0d565b8160011415611158575081610f0d565b8215801561116557508115155b1561117257506000610f0d565b8260015b8381101561119c5761118882866110ff565b9150611195816001610ee5565b9050611176565b509050610f0d565b600081848411156111c85760405162461bcd60e51b81526004016101b29190611a71565b505050900390565b6040518060c0016040528060006001600160a01b03168152602001606081526020016000151581526020016060815260200160008152602001611211611216565b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b0316815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611211611216565b80516110b881611f27565b600082601f8301126112f7578081fd5b815167ffffffffffffffff81111561130b57fe5b602080820261131b828201611eb5565b8381529350818401858301828701840188101561133757600080fd5b600092505b8483101561136357805161134f81611f27565b82526001929092019190830190830161133c565b505050505092915050565b805180151581146110b857600080fd5b600082601f83011261138e578081fd5b81356113a161139c82611ed9565b611eb5565b91508082528360208285010111156113b857600080fd5b8060208401602084013760009082016020015292915050565b600082601f8301126113e1578081fd5b81516113ef61139c82611ed9565b915080825283602082850101111561140657600080fd5b611417816020840160208601611efb565b5092915050565b6000610160808385031215611431578182fd5b61143a81611eb5565b915050611446826112dc565b8152611454602083016112dc565b6020820152611465604083016112dc565b6040820152611476606083016112dc565b6060820152611487608083016112dc565b608082015261149860a083016112dc565b60a08201526114a960c083016112dc565b60c08201526114ba60e083016112dc565b60e08201526101006114cd8184016112dc565b908201526101206114df8382016112dc565b908201526101406114f18382016112dc565b9082015292915050565b60006020828403121561150c578081fd5b8151610f0a81611f27565b60008060408385031215611529578081fd5b823561153481611f27565b9150602083013567ffffffffffffffff81111561154f578182fd5b61155b8582860161137e565b9150509250929050565b600060208284031215611576578081fd5b610f0a8261136e565b60008060008060008060c08789031215611597578182fd5b863567ffffffffffffffff808211156115ae578384fd5b6115ba8a838b0161137e565b975060208901359150808211156115cf578384fd5b506115dc89828a0161137e565b96999698505050506040850135946060810135946080820135945060a09091013592509050565b600060208284031215611614578081fd5b815167ffffffffffffffff8082111561162b578283fd5b90830190610200828603121561163f578283fd5b61164960c0611eb5565b611652836112dc565b8152602083015182811115611665578485fd5b611671878286016112e7565b6020830152506116836040840161136e565b6040820152606083015182811115611699578485fd5b6116a5878286016113d1565b606083015250608083015160808201526116c28660a0850161141e565b60a082015295945050505050565b600061016082840312156116e2578081fd5b610f0a838361141e565b6000602082840312156116fd578081fd5b815167ffffffffffffffff80821115611714578283fd5b908301906102c08286031215611728578283fd5b611733610180611eb5565b61173c836112dc565b815260208301518281111561174f578485fd5b61175b878286016113d1565b602083015250604083015182811115611772578485fd5b61177e878286016113d1565b604083015250606083810151908201526080808401519082015260a0808401519082015260c0808401519082015260e0808401519082015261010080840151908201526101208084015190820152610140808401519082015261016091506117e88683850161141e565b91810191909152949350505050565b600060208284031215611808578081fd5b5035919050565b600060208284031215611820578081fd5b5051919050565b6001600160a01b03169052565b15159052565b60008151808452611852816020860160208601611efb565b601f01601f19169290920160200192915050565b80516001600160a01b039081168352602080830151610200828601819052815190860181905260009361022087019392830192909185905b808210156118c05784518416865294820194938201936001919091019061189e565b505050505060408301516118d76040860182611834565b50606083015184820360608601526118ef828261183a565b9150506080830151608085015260a083015161190e60a0860182611916565b509392505050565b611921828251611827565b60208101516119336020840182611827565b5060408101516119466040840182611827565b5060608101516119596060840182611827565b50608081015161196c6080840182611827565b5060a081015161197f60a0840182611827565b5060c081015161199260c0840182611827565b5060e08101516119a560e0840182611827565b50610100808201516119b982850182611827565b5050610120808201516119ce82850182611827565b5050610140808201516119e382850182611827565b50505050565b6001600160a01b0391909116815260200190565b6001600160a01b038316815261018081016110366020830184611916565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03841681526101a060208201819052600090611a598382018661183a565b915050611a696040830184611916565b949350505050565b600060208252610f0a602083018461183a565b6000610220808352611a988184018b61183a565b90508281036020840152611aac818a61183a565b9150508660408301528560608301528460808301528360a083015261101260c0830184611916565b60208082526024908201527f456c617374696344414f3a2044414f206d757374206e6f742062652073756d6d6040820152631bdb995960e21b606082015260800190565b6020808252601a908201527f456c617374696344414f3a204f6e6c792073756d6d6f6e657273000000000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526034908201527f456c617374696344414f3a2043616e6e6f742070757263686173652074686174604082015273206d616e7920736861726573206174206f6e636560601b606082015260800190565b6020808252818101527f456c617374696344414f3a2044414f206d7573742062652073756d6d6f6e6564604082015260600190565b6020808252818101527f456c617374696344414f3a20496e636f72726563742045544820616d6f756e74604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602d908201527f456c617374696344414f3a20506c656173652063616c6c20696e697469616c6960408201526c1e99551bdad95b88199a5c9cdd609a1b606082015260800190565b60208082526032908201527f456c617374696344414f3a204f6e6c79206465706c6f7965722063616e20696e60408201527134ba34b0b634bd32903a3432902a37b5b2b760711b606082015260800190565b60208082526039908201527f456c617374696344414f3a20506c6561736520736565642044414f207769746860408201527f2045544820746f20736574204554483a45475420726174696f00000000000000606082015260800190565b600060208252610f0a6020830184611866565b600060408252611da76040830185611866565b905060018060a01b03831660208301529392505050565b600060408252611dd16040830185611866565b90508260208301529392505050565b6101608101610f0d8284611916565b600060208252611e03602083018451611827565b60208301516102c06040840152611e1e6102e084018261183a565b90506040840151601f19848303016060850152611e3b828261183a565b91505060608401516080840152608084015160a084015260a084015160c084015260c084015160e084015260e084015161010081818601528086015191505061012081818601528086015191505061014081818601528086015191505061016081818601528086015191505061190e610180850182611916565b60405181810167ffffffffffffffff81118282101715611ed157fe5b604052919050565b600067ffffffffffffffff821115611eed57fe5b50601f01601f191660200190565b60005b83811015611f16578181015183820152602001611efe565b838111156119e35750506000910152565b6001600160a01b0381168114611f3c57600080fd5b5056fea2646970667358221220f060723535f8a28bd788874bb45eb8f63bc270a7b75bf938bfee9b37a76681e664736f6c63430007020033a264697066735822122085788a8f30cae47aaaed51ebdc5f2f72f309b89644b7200cf5cc50c75b7e012364736f6c63430007020033";
  var deployedBytecode$7 = "0x608060405260043610620000555760003560e01c806357b3d0ec146200005f578063822fc6161462000076578063bbcaac3814620000a6578063c465b10514620000cb578063c879657214620000ff576200005d565b366200005d57005b005b6200005d62000070366004620004ef565b62000117565b3480156200008357600080fd5b506200008e62000275565b6040516200009d919062000768565b60405180910390f35b348015620000b357600080fd5b506200005d620000c5366004620004d2565b6200027b565b348015620000d857600080fd5b50620000f0620000ea366004620005d3565b620002c5565b6040516200009d91906200063a565b3480156200010c57600080fd5b506200005d620002ed565b600080546040516001600160a01b03909116908b908b908b906200013b90620003ad565b6200014a94939291906200064e565b604051809103906000f08015801562000167573d6000803e3d6000fd5b506040516303ca8c0960e01b81529091506001600160a01b038216906303ca8c0990620001a3908a908a908a908a908a908a90600401620006e2565b600060405180830381600087803b158015620001be57600080fd5b505af1158015620001d3573d6000803e3d6000fd5b505060028054600180820183556000929092527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b038616179055600354620002329350915062000375565b6003556040516001600160a01b038216907f1cb5b7f48694f77209ac2e140151cda89a929b850874f26d327e8638e9fa65e090600090a250505050505050505050565b60035481565b600180546001600160a01b0319166001600160a01b0383169081179091556040517f446e39bcf1b47cfadfaa23442cb4b34682cfe6bd9220da084894e3b1f834e4f390600090a250565b60028181548110620002d357fe5b6000918252602090912001546001600160a01b0316905081565b60015460405147916001600160a01b03169082156108fc029083906000818181858888f1935050505015801562000328573d6000803e3d6000fd5b506001546040517f9dc46f23cfb5ddcad0ae7ea2be38d47fec07bb9382ec7e564efc69e036dd66ce916200036a916001600160a01b03909116908490620006c9565b60405180910390a150565b600082820183811015620003a65760405162461bcd60e51b81526004016200039d9062000731565b60405180910390fd5b9392505050565b61284d806200079783390190565b80356001600160a01b0381168114620003d357600080fd5b919050565b600082601f830112620003e9578081fd5b813567ffffffffffffffff811115620003fe57fe5b60208082026200041082820162000771565b838152935081840185830182870184018810156200042d57600080fd5b600092505b848310156200045b576200044681620003bb565b82526001929092019190830190830162000432565b505050505092915050565b600082601f83011262000477578081fd5b813567ffffffffffffffff8111156200048c57fe5b620004a1601f8201601f191660200162000771565b9150808252836020828501011115620004b957600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215620004e4578081fd5b620003a682620003bb565b60008060008060008060008060006101208a8c0312156200050e578485fd5b893567ffffffffffffffff8082111562000526578687fd5b620005348d838e01620003d8565b9a5060208c01359150808211156200054a578687fd5b620005588d838e0162000466565b995060408c0135985060608c013591508082111562000575578687fd5b620005838d838e0162000466565b975060808c013591508082111562000599578687fd5b50620005a88c828d0162000466565b999c989b50969995989760a0870135975060c08701359660e081013596506101000135945092505050565b600060208284031215620005e5578081fd5b5035919050565b60008151808452815b818110156200061357602081850181015186830182015201620005f5565b81811115620006255782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682526080602080840182905286519184018290526000928782019290919060a0860190855b818110156200069e5785518516835294830194918301916001016200067e565b50508581036040870152620006b48189620005ec565b94505050505082606083015295945050505050565b6001600160a01b03929092168252602082015260400190565b600060c08252620006f760c0830189620005ec565b82810360208401526200070b8189620005ec565b9150508560408301528460608301528360808301528260a0830152979650505050505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b90815260200190565b60405181810167ffffffffffffffff811182821017156200078e57fe5b60405291905056fe60806040523480156200001157600080fd5b506040516200284d3803806200284d83398101604081905262000034916200053c565b600080546001600160a01b0386166001600160a01b03199182161790915560018054909116331790556200006762000238565b60405163332a4d0960e01b81526001600160a01b0386169063332a4d09906200009690600090600401620007b7565b6101606040518083038186803b158015620000b057600080fd5b505afa158015620000c5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000eb91906200069b565b84519091506200010390600290602087019062000294565b506101008101516200011462000238565b6040516316c5ac2560e11b81526001600160a01b03831690632d8b584a90620001429086906004016200085e565b61016060405180830381600087803b1580156200015e57600080fd5b505af115801562000173573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019991906200069b565b6040516312e9f95760e31b81529091506001600160a01b0383169063974fcab890620001d0908990899089908790600401620007cb565b600060405180830381600087803b158015620001eb57600080fd5b505af115801562000200573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200022a9190810190620005be565b5050505050505050620008c8565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b828054828255906000526020600020908101928215620002ec579160200282015b82811115620002ec57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002b5565b50620002fa929150620002fe565b5090565b5b80821115620002fa5780546001600160a01b0319168155600101620002ff565b80516001600160a01b03811681146200033757600080fd5b919050565b600082601f8301126200034d578081fd5b81516001600160401b038111156200036157fe5b60208082026200037382820162000875565b838152935081840185830182870184018810156200039057600080fd5b600092505b84831015620003be57620003a9816200031f565b82526001929092019190830190830162000395565b505050505092915050565b805180151581146200033757600080fd5b600082601f830112620003eb578081fd5b81516001600160401b03811115620003ff57fe5b62000414601f8201601f191660200162000875565b91508082528360208285010111156200042c57600080fd5b6200043f81602084016020860162000899565b5092915050565b60006101608083850312156200045a578182fd5b620004658162000875565b91505062000473826200031f565b815262000483602083016200031f565b602082015262000496604083016200031f565b6040820152620004a9606083016200031f565b6060820152620004bc608083016200031f565b6080820152620004cf60a083016200031f565b60a0820152620004e260c083016200031f565b60c0820152620004f560e083016200031f565b60e08201526101006200050a8184016200031f565b908201526101206200051e8382016200031f565b90820152610140620005328382016200031f565b9082015292915050565b6000806000806080858703121562000552578384fd5b6200055d856200031f565b60208601519094506001600160401b03808211156200057a578485fd5b62000588888389016200033c565b945060408701519150808211156200059e578384fd5b50620005ad87828801620003da565b606096909601519497939650505050565b600060208284031215620005d0578081fd5b81516001600160401b0380821115620005e7578283fd5b908301906102008286031215620005fc578283fd5b6200060860c062000875565b62000613836200031f565b815260208301518281111562000627578485fd5b62000635878286016200033c565b6020830152506200064960408401620003c9565b604082015260608301518281111562000660578485fd5b6200066e87828601620003da565b606083015250608083015160808201526200068d8660a0850162000446565b60a082015295945050505050565b60006101608284031215620006ae578081fd5b620006ba838362000446565b9392505050565b6001600160a01b03169052565b620006db828251620006c1565b6020810151620006ef6020840182620006c1565b506040810151620007046040840182620006c1565b506060810151620007196060840182620006c1565b5060808101516200072e6080840182620006c1565b5060a08101516200074360a0840182620006c1565b5060c08101516200075860c0840182620006c1565b5060e08101516200076d60e0840182620006c1565b50610100808201516200078382850182620006c1565b5050610120808201516200079a82850182620006c1565b505061014080820151620007b182850182620006c1565b50505050565b6001600160a01b0391909116815260200190565b6101c080825285519082018190526000906101e0830190602090818901845b82811015620008115781516001600160a01b031685529383019390830190600101620007ea565b5050508382038185015286518083526200083181838501848b0162000899565b60408501879052601f01601f191691909101019050620008556060830184620006ce565b95945050505050565b61016081016200086f8284620006ce565b92915050565b6040518181016001600160401b03811182821017156200089157fe5b604052919050565b60005b83811015620008b65781810151838201526020016200089c565b83811115620007b15750506000910152565b611f7580620008d86000396000f3fe60806040526004361061007f5760003560e01c80631fb460891161004e5780631fb46089146100fb578063985da72614610103578063a0f2c9771461012e578063d38b576d1461015057610086565b80630181bb0b14610088578063035d9f2a146100a857806303ca8c09146100c8578063049878f3146100e857610086565b3661008657005b005b34801561009457600080fd5b506100866100a3366004611517565b61017d565b3480156100b457600080fd5b506100866100c33660046117f7565b61023e565b3480156100d457600080fd5b506100866100e336600461157f565b6106a6565b6100866100f63660046117f7565b6107f5565b610086610a5f565b34801561010f57600080fd5b50610118610d69565b6040516101259190611d81565b60405180910390f35b34801561013a57600080fd5b50610143610d7e565b6040516101259190611de0565b34801561015c57600080fd5b5061017061016b3660046117f7565b610d8e565b60405161012591906119e9565b6101856111d0565b61018d610db5565b6040810151909150156101bb5760405162461bcd60e51b81526004016101b290611ad4565b60405180910390fd5b6101c3611216565b6101cb610e5c565b6101208101516040516331081b8760e01b8152919250906001600160a01b038216906331081b879061020590889088908790600401611a34565b600060405180830381600087803b15801561021f57600080fd5b505af1158015610233573d6000803e3d6000fd5b505050505050505050565b6102466111d0565b61024e610db5565b6040810151909150156102735760405162461bcd60e51b81526004016101b290611ad4565b61027b611216565b610283610e5c565b60608101519091506102936111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c5906102c190309087906004016119fd565b60006040518083038186803b1580156102d957600080fd5b505afa1580156102ed573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103159190810190611603565b90506000826001600160a01b0316626cfdda83336040518363ffffffff1660e01b8152600401610346929190611d94565b60206040518083038186803b15801561035e57600080fd5b505afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190611565565b9050806103b55760405162461bcd60e51b81526004016101b290611b18565b600047116103d55760405162461bcd60e51b81526004016101b290611d24565b6103dd611216565b6103e5610e5c565b60608101519091506103f56111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c59061042390309087906004016119fd565b60006040518083038186803b15801561043b57600080fd5b505afa15801561044f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104779190810190611603565b9050610481611272565b60e084015161014085015160405163fb10b0c560e01b81526001600160a01b039092169163fb10b0c5916104b99188906004016119fd565b60006040518083038186803b1580156104d157600080fd5b505afa1580156104e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261050d91908101906116ec565b805190915060005b836080015181101561063157816001600160a01b031663528c198a866001600160a01b031663cc469ca787856040518363ffffffff1660e01b815260040161055e929190611dbe565b60206040518083038186803b15801561057657600080fd5b505afa15801561058a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ae91906114fb565b8e6040518363ffffffff1660e01b81526004016105cc929190611a1b565b602060405180830381600087803b1580156105e657600080fd5b505af11580156105fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e9190611565565b5061062a816001610ee5565b9050610515565b5060016040808501919091525163587ce3b160e01b81526001600160a01b0385169063587ce3b190610667908690600401611d81565b600060405180830381600087803b15801561068157600080fd5b505af1158015610695573d6000803e3d6000fd5b505050505050505050505050505050565b6106ae6111d0565b6106b6610db5565b6040810151909150156106db5760405162461bcd60e51b81526004016101b290611ad4565b6001546001600160a01b031633146107055760405162461bcd60e51b81526004016101b290611cd2565b61070d611216565b610715610e5c565b905061071f611272565b8161010001516001600160a01b0316638891ba638a8a8a8a8a8a896040518863ffffffff1660e01b815260040161075c9796959493929190611a84565b600060405180830381600087803b15801561077657600080fd5b505af115801561078a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107b291908101906116ec565b80516040519192506001600160a01b0316907fad65bbe394ae719938a7445c7588b2cdb455ea64f1364115b1e073e31bb1af9b90600090a2505050505050505050565b6107fd6111d0565b610805610db5565b905080604001516108285760405162461bcd60e51b81526004016101b290611bda565b610830611272565b610838610f13565b905080610120015183111561085f5760405162461bcd60e51b81526004016101b290611b86565b60008160000151905060006108e6344703836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108a957600080fd5b505afa1580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e1919061180f565b610fb8565b9050600061090986838660c001518760a001518860e00151896101000151610fc4565b905034811461092a5760405162461bcd60e51b81526004016101b290611c0f565b600061093a878660e00151610ee5565b90506000610952828760e0015188610100015161101e565b905061095c611216565b610964610e5c565b60e081015161010089018490526040516295bfb960e61b8152919250906001600160a01b0382169063256fee40906109a0908b90600401611def565b600060405180830381600087803b1580156109ba57600080fd5b505af11580156109ce573d6000803e3d6000fd5b50506040516329460cc560e11b81526001600160a01b038a16925063528c198a9150610a009033908e90600401611a1b565b602060405180830381600087803b158015610a1a57600080fd5b505af1158015610a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a529190611565565b5050505050505050505050565b610a676111d0565b610a6f610db5565b604081015190915015610a945760405162461bcd60e51b81526004016101b290611ad4565b610a9c611216565b610aa4610e5c565b6060810151909150610ab46111d0565b60405163fb10b0c560e01b81526001600160a01b0383169063fb10b0c590610ae290309087906004016119fd565b60006040518083038186803b158015610afa57600080fd5b505afa158015610b0e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b369190810190611603565b90506000826001600160a01b0316626cfdda83336040518363ffffffff1660e01b8152600401610b67929190611d94565b60206040518083038186803b158015610b7f57600080fd5b505afa158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190611565565b905080610bd65760405162461bcd60e51b81526004016101b290611b18565b610bde611216565b610be6610e5c565b90506000610bf2610e5c565b60e00151610140830151604051637fc975f360e01b81526001600160a01b0390921691637fc975f391610c299186906004016119fd565b60206040518083038186803b158015610c4157600080fd5b505afa158015610c55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c799190611565565b905080610c985760405162461bcd60e51b81526004016101b290611c85565b610ca0611272565b610ca8610f13565b905060003490506000610cbf82846080015161103d565b90506000610cd7828560c0015186610100015161106d565b84516040516329460cc560e11b81529192506001600160a01b03169063528c198a90610d099033908690600401611a1b565b602060405180830381600087803b158015610d2357600080fd5b505af1158015610d37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5b9190611565565b505050505050505050505050565b610d716111d0565b610d79610db5565b905090565b610d86611216565b610d79610e5c565b60028181548110610d9b57fe5b6000918252602090912001546001600160a01b0316905081565b610dbd6111d0565b610dc5611216565b610dcd610e5c565b606081015160405163fb10b0c560e01b81529192506001600160a01b03169063fb10b0c590610e0290309085906004016119fd565b60006040518083038186803b158015610e1a57600080fd5b505afa158015610e2e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e569190810190611603565b91505090565b610e64611216565b60005460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990610e949030906004016119e9565b6101606040518083038186803b158015610ead57600080fd5b505afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7991906116d0565b600082820183811015610f0a5760405162461bcd60e51b81526004016101b290611b4f565b90505b92915050565b610f1b611272565b610f23611216565b610f2b610e5c565b90508060e001516001600160a01b031663fb10b0c5826101400151836040518363ffffffff1660e01b8152600401610f649291906119fd565b60006040518083038186803b158015610f7c57600080fd5b505afa158015610f90573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e5691908101906116ec565b6000610f0a838361103d565b600080610fd18885610ee5565b9050611012610fe08888611078565b610ffe61100384610ffe610ff5878b8b61101e565b610ffe8c61109e565b611078565b61100d8888611078565b6110bd565b98975050505050505050565b600061103361102d858561103d565b83611078565b90505b9392505050565b60008161105e61105585670de0b6b3a76400006110ff565b60028504610ee5565b8161106557fe5b049392505050565b600061103361102d85855b6000670de0b6b3a764000061105e61109085856110ff565b6706f05b59d3b20000610ee5565b60006110b5826110b0600a6012611139565b610ee5565b90505b919050565b6000610f0a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506111a4565b60008261110e57506000610f0d565b8282028284828161111b57fe5b0414610f0a5760405162461bcd60e51b81526004016101b290611c44565b60008161114857506001610f0d565b8160011415611158575081610f0d565b8215801561116557508115155b1561117257506000610f0d565b8260015b8381101561119c5761118882866110ff565b9150611195816001610ee5565b9050611176565b509050610f0d565b600081848411156111c85760405162461bcd60e51b81526004016101b29190611a71565b505050900390565b6040518060c0016040528060006001600160a01b03168152602001606081526020016000151581526020016060815260200160008152602001611211611216565b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b60405180610180016040528060006001600160a01b0316815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611211611216565b80516110b881611f27565b600082601f8301126112f7578081fd5b815167ffffffffffffffff81111561130b57fe5b602080820261131b828201611eb5565b8381529350818401858301828701840188101561133757600080fd5b600092505b8483101561136357805161134f81611f27565b82526001929092019190830190830161133c565b505050505092915050565b805180151581146110b857600080fd5b600082601f83011261138e578081fd5b81356113a161139c82611ed9565b611eb5565b91508082528360208285010111156113b857600080fd5b8060208401602084013760009082016020015292915050565b600082601f8301126113e1578081fd5b81516113ef61139c82611ed9565b915080825283602082850101111561140657600080fd5b611417816020840160208601611efb565b5092915050565b6000610160808385031215611431578182fd5b61143a81611eb5565b915050611446826112dc565b8152611454602083016112dc565b6020820152611465604083016112dc565b6040820152611476606083016112dc565b6060820152611487608083016112dc565b608082015261149860a083016112dc565b60a08201526114a960c083016112dc565b60c08201526114ba60e083016112dc565b60e08201526101006114cd8184016112dc565b908201526101206114df8382016112dc565b908201526101406114f18382016112dc565b9082015292915050565b60006020828403121561150c578081fd5b8151610f0a81611f27565b60008060408385031215611529578081fd5b823561153481611f27565b9150602083013567ffffffffffffffff81111561154f578182fd5b61155b8582860161137e565b9150509250929050565b600060208284031215611576578081fd5b610f0a8261136e565b60008060008060008060c08789031215611597578182fd5b863567ffffffffffffffff808211156115ae578384fd5b6115ba8a838b0161137e565b975060208901359150808211156115cf578384fd5b506115dc89828a0161137e565b96999698505050506040850135946060810135946080820135945060a09091013592509050565b600060208284031215611614578081fd5b815167ffffffffffffffff8082111561162b578283fd5b90830190610200828603121561163f578283fd5b61164960c0611eb5565b611652836112dc565b8152602083015182811115611665578485fd5b611671878286016112e7565b6020830152506116836040840161136e565b6040820152606083015182811115611699578485fd5b6116a5878286016113d1565b606083015250608083015160808201526116c28660a0850161141e565b60a082015295945050505050565b600061016082840312156116e2578081fd5b610f0a838361141e565b6000602082840312156116fd578081fd5b815167ffffffffffffffff80821115611714578283fd5b908301906102c08286031215611728578283fd5b611733610180611eb5565b61173c836112dc565b815260208301518281111561174f578485fd5b61175b878286016113d1565b602083015250604083015182811115611772578485fd5b61177e878286016113d1565b604083015250606083810151908201526080808401519082015260a0808401519082015260c0808401519082015260e0808401519082015261010080840151908201526101208084015190820152610140808401519082015261016091506117e88683850161141e565b91810191909152949350505050565b600060208284031215611808578081fd5b5035919050565b600060208284031215611820578081fd5b5051919050565b6001600160a01b03169052565b15159052565b60008151808452611852816020860160208601611efb565b601f01601f19169290920160200192915050565b80516001600160a01b039081168352602080830151610200828601819052815190860181905260009361022087019392830192909185905b808210156118c05784518416865294820194938201936001919091019061189e565b505050505060408301516118d76040860182611834565b50606083015184820360608601526118ef828261183a565b9150506080830151608085015260a083015161190e60a0860182611916565b509392505050565b611921828251611827565b60208101516119336020840182611827565b5060408101516119466040840182611827565b5060608101516119596060840182611827565b50608081015161196c6080840182611827565b5060a081015161197f60a0840182611827565b5060c081015161199260c0840182611827565b5060e08101516119a560e0840182611827565b50610100808201516119b982850182611827565b5050610120808201516119ce82850182611827565b5050610140808201516119e382850182611827565b50505050565b6001600160a01b0391909116815260200190565b6001600160a01b038316815261018081016110366020830184611916565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03841681526101a060208201819052600090611a598382018661183a565b915050611a696040830184611916565b949350505050565b600060208252610f0a602083018461183a565b6000610220808352611a988184018b61183a565b90508281036020840152611aac818a61183a565b9150508660408301528560608301528460808301528360a083015261101260c0830184611916565b60208082526024908201527f456c617374696344414f3a2044414f206d757374206e6f742062652073756d6d6040820152631bdb995960e21b606082015260800190565b6020808252601a908201527f456c617374696344414f3a204f6e6c792073756d6d6f6e657273000000000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526034908201527f456c617374696344414f3a2043616e6e6f742070757263686173652074686174604082015273206d616e7920736861726573206174206f6e636560601b606082015260800190565b6020808252818101527f456c617374696344414f3a2044414f206d7573742062652073756d6d6f6e6564604082015260600190565b6020808252818101527f456c617374696344414f3a20496e636f72726563742045544820616d6f756e74604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602d908201527f456c617374696344414f3a20506c656173652063616c6c20696e697469616c6960408201526c1e99551bdad95b88199a5c9cdd609a1b606082015260800190565b60208082526032908201527f456c617374696344414f3a204f6e6c79206465706c6f7965722063616e20696e60408201527134ba34b0b634bd32903a3432902a37b5b2b760711b606082015260800190565b60208082526039908201527f456c617374696344414f3a20506c6561736520736565642044414f207769746860408201527f2045544820746f20736574204554483a45475420726174696f00000000000000606082015260800190565b600060208252610f0a6020830184611866565b600060408252611da76040830185611866565b905060018060a01b03831660208301529392505050565b600060408252611dd16040830185611866565b90508260208301529392505050565b6101608101610f0d8284611916565b600060208252611e03602083018451611827565b60208301516102c06040840152611e1e6102e084018261183a565b90506040840151601f19848303016060850152611e3b828261183a565b91505060608401516080840152608084015160a084015260a084015160c084015260c084015160e084015260e084015161010081818601528086015191505061012081818601528086015191505061014081818601528086015191505061016081818601528086015191505061190e610180850182611916565b60405181810167ffffffffffffffff81118282101715611ed157fe5b604052919050565b600067ffffffffffffffff821115611eed57fe5b50601f01601f191660200190565b60005b83811015611f16578181015183820152602001611efe565b838111156119e35750506000910152565b6001600160a01b0381168114611f3c57600080fd5b5056fea2646970667358221220f060723535f8a28bd788874bb45eb8f63bc270a7b75bf938bfee9b37a76681e664736f6c63430007020033a264697066735822122085788a8f30cae47aaaed51ebdc5f2f72f309b89644b7200cf5cc50c75b7e012364736f6c63430007020033";
  var linkReferences$7 = {
  };
  var deployedLinkReferences$7 = {
  };
  var ElasticDAOFactoryContract = {
  	_format: _format$7,
  	contractName: contractName$7,
  	sourceName: sourceName$7,
  	abi: abi$7,
  	bytecode: bytecode$7,
  	deployedBytecode: deployedBytecode$7,
  	linkReferences: linkReferences$7,
  	deployedLinkReferences: deployedLinkReferences$7
  };

  class ElasticDAOFactory extends Base {
    constructor(sdk) {
      super(sdk);
      this.address = sdk.env.elasticDAO.factoryAddress;
    }

    static contract(sdk, address) {
      return sdk.contract({ abi: ElasticDAOFactoryContract.abi, address });
    }

    get address() {
      return this.sdk.env.elasticDAO.factoryAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    async deployDAOAndToken(
      summoners,
      nameOfDAO,
      numberOfSummoners,
      nameOfToken,
      symbol,
      capitalDelta,
      elasticity,
      k,
      maxLambdaPurchase,
      overrides = {},
    ) {
      const payload = [
        summoners,
        nameOfDAO,
        numberOfSummoners,
        nameOfToken,
        symbol,
        this.toEthersBigNumber(capitalDelta, 18),
        this.toEthersBigNumber(elasticity, 18),
        this.toEthersBigNumber(k, 18),
        this.toEthersBigNumber(maxLambdaPurchase, 18),
      ];
      const factory = await this.contract();

      const daoDeployedFilter = factory.filters.DAODeployed();
      const daoDeployedFilterPromise = new Promise(async (resolve, reject) => {
        let tx = {};

        const handler = ({ transactionHash, topics }) => {
          if (transactionHash === tx.hash) {
            this.sdk.provider.off(daoDeployedFilter, handler);
            resolve(`0x${topics[1].substring(26)}`);
          }
        };

        this.sdk.provider.on(daoDeployedFilter, handler);

        tx = await factory.deployDAOAndToken(
          ...payload,
          this.sanitizeOverrides({
            ...overrides,
            value: this.sdk.env.fees.deploy,
          }),
        );

        await tx.wait(2);
        reject();
      });

      return DAO.deserialize(await daoDeployedFilterPromise);
    }

    async deployedDAOAddresses() {
      const factory = await this.contract();
      const deployedDAOCount = await factory.deployedDAOCount();

      const promises = upTo(deployedDAOCount.toNumber()).map((i) =>
        factory.deployedDAOAddresses(i),
      );
      return Promise.all(promises);
    }
  }

  var _format$8 = "hh-sol-artifact-1";
  var contractName$8 = "ElasticModule";
  var sourceName$8 = "src/models/ElasticModule.sol";
  var abi$8 = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_uuid",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "address[]",
  						name: "summoners",
  						type: "address[]"
  					},
  					{
  						internalType: "bool",
  						name: "summoned",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfSummoners",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct DAO.Instance",
  				name: "_dao",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "address[]",
  								name: "summoners",
  								type: "address[]"
  							},
  							{
  								internalType: "bool",
  								name: "summoned",
  								type: "bool"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfSummoners",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct DAO.Instance",
  						name: "dao",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct ElasticModule.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "string",
  				name: "_name",
  				type: "string"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "address[]",
  						name: "summoners",
  						type: "address[]"
  					},
  					{
  						internalType: "bool",
  						name: "summoned",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfSummoners",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct DAO.Instance",
  				name: "_dao",
  				type: "tuple"
  			}
  		],
  		name: "deserializeByName",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "address[]",
  								name: "summoners",
  								type: "address[]"
  							},
  							{
  								internalType: "bool",
  								name: "summoned",
  								type: "bool"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfSummoners",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct DAO.Instance",
  						name: "dao",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct ElasticModule.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_uuid",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "address[]",
  						name: "summoners",
  						type: "address[]"
  					},
  					{
  						internalType: "bool",
  						name: "summoned",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "numberOfSummoners",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct DAO.Instance",
  				name: "_dao",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "uuid",
  						type: "address"
  					},
  					{
  						internalType: "string",
  						name: "name",
  						type: "string"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "uuid",
  								type: "address"
  							},
  							{
  								internalType: "address[]",
  								name: "summoners",
  								type: "address[]"
  							},
  							{
  								internalType: "bool",
  								name: "summoned",
  								type: "bool"
  							},
  							{
  								internalType: "string",
  								name: "name",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "numberOfSummoners",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "daoAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "balanceMultipliersModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "daoModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "ecosystemModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "elasticModuleModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenHolderModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "tokenModelAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "configuratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "registratorAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "governanceTokenAddress",
  										type: "address"
  									}
  								],
  								internalType: "struct Ecosystem.Instance",
  								name: "ecosystem",
  								type: "tuple"
  							}
  						],
  						internalType: "struct DAO.Instance",
  						name: "dao",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "daoAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "balanceMultipliersModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "daoModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "ecosystemModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "elasticModuleModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenHolderModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "tokenModelAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "configuratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "registratorAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "governanceTokenAddress",
  								type: "address"
  							}
  						],
  						internalType: "struct Ecosystem.Instance",
  						name: "ecosystem",
  						type: "tuple"
  					}
  				],
  				internalType: "struct ElasticModule.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$8 = "0x608060405234801561001057600080fd5b50610c94806100206000396000f3fe608060405234801561001057600080fd5b506004361061004b5760003560e01c80626a35dd146100505780632485d7dd1461006557806374184a351461008e578063bedcdb4a146100a1575b600080fd5b61006361005e36600461088c565b6100c1565b005b610078610073366004610835565b61017b565b6040516100859190610b3d565b60405180910390f35b61007861009c3660046107e9565b6101d3565b6100b46100af3660046107e9565b61022b565b6040516100859190610afb565b61010381604001516000015182602001516040516020016100e3929190610acf565b60405160208183030381529060405280519060200120826000015161023e565b604080820151518251915161013f9261011f9291602001610a7d565b60405160208183030381529060405280519060200120826020015161026c565b60408082015151825191516101789261015b9291602001610a97565b604051602081830303815290604052805190602001206001610290565b50565b6101836103ec565b81516040516101b59161019a918690602001610acf565b604051602081830303815290604052805190602001206102b0565b6001600160a01b031681526040810191909152602081019190915290565b6101db6103ec565b6001600160a01b038316808252604080830184905283519051610220926102059291602001610a7d565b604051602081830303815290604052805190602001206102ce565b602082015292915050565b600061023783836103a5565b9392505050565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000828152600460209081526040909120825161028b9284019061041e565b505050565b600091825260016020526040909120805460ff1916911515919091179055565b6000818152602081905260409020546001600160a01b03165b919050565b60608160001a60f81b6001600160f81b0319166103065760405162461bcd60e51b81526004016102fd90610b06565b60405180910390fd5b60008281526004602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156103995780601f1061036e57610100808354040283529160200191610399565b820191906000526020600020905b81548152906001019060200180831161037c57829003601f168201915b50505050509050919050565b60006102378260000151846040516020016103c1929190610a97565b6040516020818303038152906040528051906020012060009081526001602052604090205460ff1690565b60408051608081018252600081526060602082015290810161040c61049c565b81526020016104196104d9565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061045f57805160ff191683800117855561048c565b8280016001018555821561048c579182015b8281111561048c578251825591602001919060010190610471565b50610498929150610535565b5090565b6040518060c0016040528060006001600160a01b031681526020016060815260200160001515815260200160608152602001600081526020016104195b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b5b808211156104985760008155600101610536565b80356001600160a01b03811681146102c957600080fd5b600082601f830112610571578081fd5b813567ffffffffffffffff81111561058557fe5b6020808202610595828201610c3a565b838152935081840185830182870184018810156105b157600080fd5b600092505b848310156105db576105c78161054a565b8252600192909201919083019083016105b6565b505050505092915050565b803580151581146102c957600080fd5b600082601f830112610606578081fd5b813567ffffffffffffffff81111561061a57fe5b61062d601f8201601f1916602001610c3a565b915080825283602082850101111561064457600080fd5b8060208401602084013760009082016020015292915050565b6000610200828403121561066f578081fd5b61067960c0610c3a565b90506106848261054a565b8152602082013567ffffffffffffffff808211156106a157600080fd5b6106ad85838601610561565b60208401526106be604085016105e6565b604084015260608401359150808211156106d757600080fd5b506106e4848285016105f6565b606083015250608082013560808201526107018360a0840161070c565b60a082015292915050565b600061016080838503121561071f578182fd5b61072881610c3a565b9150506107348261054a565b81526107426020830161054a565b60208201526107536040830161054a565b60408201526107646060830161054a565b60608201526107756080830161054a565b608082015261078660a0830161054a565b60a082015261079760c0830161054a565b60c08201526107a860e0830161054a565b60e08201526101006107bb81840161054a565b908201526101206107cd83820161054a565b908201526101406107df83820161054a565b9082015292915050565b600080604083850312156107fb578182fd5b6108048361054a565b9150602083013567ffffffffffffffff81111561081f578182fd5b61082b8582860161065d565b9150509250929050565b60008060408385031215610847578182fd5b823567ffffffffffffffff8082111561085e578384fd5b61086a868387016105f6565b9350602085013591508082111561087f578283fd5b5061082b8582860161065d565b60006020828403121561089d578081fd5b813567ffffffffffffffff808211156108b4578283fd5b908301906101c082860312156108c8578283fd5b6040516080810181811083821117156108dd57fe5b6040526108e98361054a565b81526020830135828111156108fc578485fd5b610908878286016105f6565b60208301525060408301358281111561091f578485fd5b61092b8782860161065d565b60408301525061093e866060850161070c565b606082015295945050505050565b6001600160a01b03169052565b15159052565b60008151808452815b8181101561098457602081850181015186830182015201610968565b818111156109955782602083870101525b50601f01601f19169290920160200192915050565b6109b582825161094c565b60208101516109c7602084018261094c565b5060408101516109da604084018261094c565b5060608101516109ed606084018261094c565b506080810151610a00608084018261094c565b5060a0810151610a1360a084018261094c565b5060c0810151610a2660c084018261094c565b5060e0810151610a3960e084018261094c565b5061010080820151610a4d8285018261094c565b505061012080820151610a628285018261094c565b505061014080820151610a778285018261094c565b50505050565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039283168152911660208201526060604082018190526006908201526565786973747360d01b608082015260a00190565b6001600160a01b0383168152604060208201819052600090610af39083018461095f565b949350505050565b901515815260200190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b6000602080835260018060a01b038085511682850152818501516101c06040860152610b6d6101e086018261095f565b6040870151868203601f19016060880152805184168252848101516102008684018190528151908401819052929350909161022084019186019087905b80821015610bcc57825187168452928701929187019160019190910190610baa565b50505060408201519450610be36040840186610959565b606082015194508281036060840152610bfc818661095f565b9450506080810151608083015260a0810151925050610c1e60a08201836109aa565b50506060840151610c3260808501826109aa565b509392505050565b60405181810167ffffffffffffffff81118282101715610c5657fe5b60405291905056fea2646970667358221220ad602776bb1a866490faad6eabebb443a81c5f560d5b2293969cb4945ab37dce64736f6c63430007020033";
  var deployedBytecode$8 = "0x608060405234801561001057600080fd5b506004361061004b5760003560e01c80626a35dd146100505780632485d7dd1461006557806374184a351461008e578063bedcdb4a146100a1575b600080fd5b61006361005e36600461088c565b6100c1565b005b610078610073366004610835565b61017b565b6040516100859190610b3d565b60405180910390f35b61007861009c3660046107e9565b6101d3565b6100b46100af3660046107e9565b61022b565b6040516100859190610afb565b61010381604001516000015182602001516040516020016100e3929190610acf565b60405160208183030381529060405280519060200120826000015161023e565b604080820151518251915161013f9261011f9291602001610a7d565b60405160208183030381529060405280519060200120826020015161026c565b60408082015151825191516101789261015b9291602001610a97565b604051602081830303815290604052805190602001206001610290565b50565b6101836103ec565b81516040516101b59161019a918690602001610acf565b604051602081830303815290604052805190602001206102b0565b6001600160a01b031681526040810191909152602081019190915290565b6101db6103ec565b6001600160a01b038316808252604080830184905283519051610220926102059291602001610a7d565b604051602081830303815290604052805190602001206102ce565b602082015292915050565b600061023783836103a5565b9392505050565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000828152600460209081526040909120825161028b9284019061041e565b505050565b600091825260016020526040909120805460ff1916911515919091179055565b6000818152602081905260409020546001600160a01b03165b919050565b60608160001a60f81b6001600160f81b0319166103065760405162461bcd60e51b81526004016102fd90610b06565b60405180910390fd5b60008281526004602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156103995780601f1061036e57610100808354040283529160200191610399565b820191906000526020600020905b81548152906001019060200180831161037c57829003601f168201915b50505050509050919050565b60006102378260000151846040516020016103c1929190610a97565b6040516020818303038152906040528051906020012060009081526001602052604090205460ff1690565b60408051608081018252600081526060602082015290810161040c61049c565b81526020016104196104d9565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061045f57805160ff191683800117855561048c565b8280016001018555821561048c579182015b8281111561048c578251825591602001919060010190610471565b50610498929150610535565b5090565b6040518060c0016040528060006001600160a01b031681526020016060815260200160001515815260200160608152602001600081526020016104195b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b5b808211156104985760008155600101610536565b80356001600160a01b03811681146102c957600080fd5b600082601f830112610571578081fd5b813567ffffffffffffffff81111561058557fe5b6020808202610595828201610c3a565b838152935081840185830182870184018810156105b157600080fd5b600092505b848310156105db576105c78161054a565b8252600192909201919083019083016105b6565b505050505092915050565b803580151581146102c957600080fd5b600082601f830112610606578081fd5b813567ffffffffffffffff81111561061a57fe5b61062d601f8201601f1916602001610c3a565b915080825283602082850101111561064457600080fd5b8060208401602084013760009082016020015292915050565b6000610200828403121561066f578081fd5b61067960c0610c3a565b90506106848261054a565b8152602082013567ffffffffffffffff808211156106a157600080fd5b6106ad85838601610561565b60208401526106be604085016105e6565b604084015260608401359150808211156106d757600080fd5b506106e4848285016105f6565b606083015250608082013560808201526107018360a0840161070c565b60a082015292915050565b600061016080838503121561071f578182fd5b61072881610c3a565b9150506107348261054a565b81526107426020830161054a565b60208201526107536040830161054a565b60408201526107646060830161054a565b60608201526107756080830161054a565b608082015261078660a0830161054a565b60a082015261079760c0830161054a565b60c08201526107a860e0830161054a565b60e08201526101006107bb81840161054a565b908201526101206107cd83820161054a565b908201526101406107df83820161054a565b9082015292915050565b600080604083850312156107fb578182fd5b6108048361054a565b9150602083013567ffffffffffffffff81111561081f578182fd5b61082b8582860161065d565b9150509250929050565b60008060408385031215610847578182fd5b823567ffffffffffffffff8082111561085e578384fd5b61086a868387016105f6565b9350602085013591508082111561087f578283fd5b5061082b8582860161065d565b60006020828403121561089d578081fd5b813567ffffffffffffffff808211156108b4578283fd5b908301906101c082860312156108c8578283fd5b6040516080810181811083821117156108dd57fe5b6040526108e98361054a565b81526020830135828111156108fc578485fd5b610908878286016105f6565b60208301525060408301358281111561091f578485fd5b61092b8782860161065d565b60408301525061093e866060850161070c565b606082015295945050505050565b6001600160a01b03169052565b15159052565b60008151808452815b8181101561098457602081850181015186830182015201610968565b818111156109955782602083870101525b50601f01601f19169290920160200192915050565b6109b582825161094c565b60208101516109c7602084018261094c565b5060408101516109da604084018261094c565b5060608101516109ed606084018261094c565b506080810151610a00608084018261094c565b5060a0810151610a1360a084018261094c565b5060c0810151610a2660c084018261094c565b5060e0810151610a3960e084018261094c565b5061010080820151610a4d8285018261094c565b505061012080820151610a628285018261094c565b505061014080820151610a778285018261094c565b50505050565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039283168152911660208201526060604082018190526006908201526565786973747360d01b608082015260a00190565b6001600160a01b0383168152604060208201819052600090610af39083018461095f565b949350505050565b901515815260200190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b6000602080835260018060a01b038085511682850152818501516101c06040860152610b6d6101e086018261095f565b6040870151868203601f19016060880152805184168252848101516102008684018190528151908401819052929350909161022084019186019087905b80821015610bcc57825187168452928701929187019160019190910190610baa565b50505060408201519450610be36040840186610959565b606082015194508281036060840152610bfc818661095f565b9450506080810151608083015260a0810151925050610c1e60a08201836109aa565b50506060840151610c3260808501826109aa565b509392505050565b60405181810167ffffffffffffffff81118282101715610c5657fe5b60405291905056fea2646970667358221220ad602776bb1a866490faad6eabebb443a81c5f560d5b2293969cb4945ab37dce64736f6c63430007020033";
  var linkReferences$8 = {
  };
  var deployedLinkReferences$8 = {
  };
  var ElasticModuleContract = {
  	_format: _format$8,
  	contractName: contractName$8,
  	sourceName: sourceName$8,
  	abi: abi$8,
  	bytecode: bytecode$8,
  	deployedBytecode: deployedBytecode$8,
  	linkReferences: linkReferences$8,
  	deployedLinkReferences: deployedLinkReferences$8
  };

  const cache$6 = {};
  const prefix$8 = '@elastic-dao/sdk - ElasticModule';

  const isElasticModule = (thing) =>
    thing && typeof thing === 'object' && thing instanceof ElasticModule;
  const validateIsElasticModule = (thing) => {
    const message = 'not an ElasticModule';
    validate(isElasticModule(thing), { message, prefix: prefix$8 });
  };

  class ElasticModule extends ElasticModel {
    constructor(sdk, { dao, ecosystem, name, uuid }) {
      super(sdk);
      this.id = `${dao.uuid}|${uuid}`.toLowerCase();
      cache$6[this.id] = {
        dao,
        ecosystem,
        name,
        uuid,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$8 });
      return sdk.contract({ abi: ElasticModuleContract.abi, address });
    }

    static async deserialize(sdk, uuid, dao) {
      utils$1.validateIsAddress(uuid, { prefix: prefix$8 });
      validateIsDAO(dao);
      const { ecosystem } = dao;

      const elasticModuleModel = await this.contract(
        sdk,
        ecosystem.elasticModuleModelAddress,
      );

      const { name } = await elasticModuleModel.deserialize(
        uuid,
        ecosystem.toObject(false),
      );

      return new ElasticModule(sdk, {
        dao,
        ecosystem,
        name,
        uuid,
      });
    }

    static async deserializeByName(sdk, name, dao) {
      validateIsDAO(dao);
      const { ecosystem } = dao;

      const elasticModuleModel = await this.contract(
        sdk,
        ecosystem.elasticModuleModelAddress,
      );

      const { uuid } = await elasticModuleModel.deserializeByName(name, {
        ...dao.toObject(false),
        ecosystem: ecosystem.toObject(false),
      });

      return new ElasticModule(sdk, {
        dao,
        ecosystem,
        name,
        uuid,
      });
    }

    // Getters

    get address() {
      return this.ecosystem.elasticModuleModelAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get dao() {
      return cache$6[this.id].summoned;
    }

    get ecosystem() {
      return cache$6[this.id].ecosystem;
    }

    get name() {
      return cache$6[this.id].name;
    }

    get uuid() {
      return cache$6[this.id].uuid;
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(this.sdk, this.uuid, this.dao);
    }

    toObject(includeNested = true) {
      const { dao, ecosystem, id } = this;

      const obj = {
        ...cache$6[id],
        id,
        dao: dao.toObject(false),
        ecosystem: ecosystem.toObject(false),
      };

      if (!includeNested) {
        delete obj.dao;
        delete obj.ecosystem;
      }

      return this.sanitize(obj);
    }
  }

  var _format$9 = "hh-sol-artifact-1";
  var contractName$9 = "InformationalVoteManager";
  var sourceName$9 = "src/modules/InformationalVote/Manager.sol";
  var abi$9 = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_ballotModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_settingsModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_voteModelAddress",
  				type: "address"
  			}
  		],
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "index",
  				type: "uint256"
  			}
  		],
  		name: "CreateVote",
  		type: "event"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			},
  			{
  				internalType: "address[]",
  				name: "_addressesToPenalize",
  				type: "address[]"
  			}
  		],
  		name: "applyPenalty",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "ballotModelAddress",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_yna",
  				type: "uint256"
  			}
  		],
  		name: "castBallot",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "string",
  				name: "_proposal",
  				type: "string"
  			},
  			{
  				internalType: "uint256",
  				name: "_endOnBlock",
  				type: "uint256"
  			}
  		],
  		name: "createVote",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "getSettings",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct InformationalVoteSettings.Instance",
  				name: "",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_votingTokenAddress",
  				type: "address"
  			},
  			{
  				internalType: "bool",
  				name: "_hasPenalty",
  				type: "bool"
  			},
  			{
  				internalType: "uint256[10]",
  				name: "_settings",
  				type: "uint256[10]"
  			}
  		],
  		name: "initialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "initialized",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "settingsModelAddress",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "voteModelAddress",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	}
  ];
  var bytecode$9 = "0x60806040523480156200001157600080fd5b506040516200219f3803806200219f83398101604081905262000034916200009d565b600080546001600160a01b039485166001600160a01b0319918216179091556002805460018054958716959093169490941790915592166001600160a81b0319909116179055620000e6565b80516001600160a01b03811681146200009857600080fd5b919050565b600080600060608486031215620000b2578283fd5b620000bd8462000080565b9250620000cd6020850162000080565b9150620000dd6040850162000080565b90509250925092565b6120a980620000f66000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063478eadbe11610066578063478eadbe146100fe578063743812131461011357806385b4bb531461011b578063d6055ae814610130578063e1faaae81461014357610093565b8063083964b1146100985780630c09135b146100ad578063158ef93e146100c05780634541c853146100de575b600080fd5b6100ab6100a63660046117f7565b61014b565b005b6100ab6100bb366004611743565b610615565b6100c861099a565b6040516100d59190611ab1565b60405180910390f35b6100f16100ec366004611505565b6109aa565b6040516100d59190611fb9565b610106610c95565b6040516100d59190611a49565b610106610ca4565b610123610cb3565b6040516100d59190611f97565b6100ab61013e36600461143f565b610cc8565b610106610e27565b610153611169565b61015b610e36565b90506101678382610ebf565b61018c5760405162461bcd60e51b815260040161018390611ef6565b60405180910390fd5b6101946111ec565b61019e8483610f4b565b60a0810151909150156101c35760405162461bcd60e51b815260040161018390611acf565b80608001516101e45760405162461bcd60e51b815260040161018390611c61565b6101ed81610fd9565b6102095760405162461bcd60e51b815260040161018390611c61565b600383106102295760405162461bcd60e51b815260040161018390611d60565b6020810151604051633e174aaf60e01b81526000906001600160a01b03831690633e174aaf9061025d903390600401611a49565b60206040518083038186803b15801561027557600080fd5b505afa158015610289573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ad919061172b565b61028084015160405163046deee960e01b81529192506000916001600160a01b0385169163046deee9916102e5913391600401611a5d565b60206040518083038186803b1580156102fd57600080fd5b505afa158015610311573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610335919061172b565b905081811015610343578091505b8184610160015110156103595783610160015191505b856103785761036d846102a0015183611062565b6102a08501526103af565b856001141561039b57610390846101e0015183611062565b6101e08501526103af565b6103a98460e0015183611062565b60e08501525b60006103d26103c8866102a00151876101e00151611062565b8660e00151611062565b90506000846001600160a01b03166378b61f226040518163ffffffff1660e01b815260040160206040518083038186803b15801561040f57600080fd5b505afa158015610423573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610447919061172b565b9050600061045a82886102200151611087565b905080831061046b57600160608801525b600061047c83896101000151611087565b905080841061048d57600160a08901525b6104956112b9565b338152608081018a905260a081018990526040808201889052606082018c9052600054905163ccaf715d60e01b81526001600160a01b039091169063ccaf715d906104e4908490600401611f2d565b600060405180830381600087803b1580156104fe57600080fd5b505af1158015610512573d6000803e3d6000fd5b50506002546040516368f0460f60e01b81526001600160a01b0390911692506368f0460f9150610546908c90600401611fa6565b600060405180830381600087803b15801561056057600080fd5b505af1158015610574573d6000803e3d6000fd5b50505050876001600160a01b031663528c198a336105978a8d6102600151611087565b6040518363ffffffff1660e01b81526004016105b4929190611a5d565b602060405180830381600087803b1580156105ce57600080fd5b505af11580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060691906114e9565b50505050505050505050505050565b61061d611169565b610625610e36565b90506106318382610ebf565b61064d5760405162461bcd60e51b815260040161018390611ef6565b6106556111ec565b61065f8483610f4b565b60a0810151909150156106845760405162461bcd60e51b815260040161018390611dcd565b6080810151156106a65760405162461bcd60e51b815260040161018390611eab565b6060810151156106c85760405162461bcd60e51b815260040161018390611bb8565b80604001516106e95760405162461bcd60e51b815260040161018390611d1b565b6000805460208301516001600160a01b03909116915b855181101561099157826001600160a01b031663e2ff8d6687838151811061072357fe5b602002602001015187876040518463ffffffff1660e01b815260040161074b93929190611a76565b60206040518083038186803b15801561076357600080fd5b505afa158015610777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079b91906114e9565b61097f576107a76112b9565b8682815181106107b357fe5b6020908102919091018101516001600160a01b0390811683526080830188905260a0830187905260019183019190915287516000916108819190861690633e174aaf908b908790811061080257fe5b60200260200101516040518263ffffffff1660e01b81526004016108269190611a49565b60206040518083038186803b15801561083e57600080fd5b505afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610876919061172b565b876102000151611087565b60408084018290525163ccaf715d60e01b81529091506001600160a01b0386169063ccaf715d906108b6908590600401611f2d565b600060405180830381600087803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b50505050836001600160a01b031663ee7a7c0489858151811061090357fe5b6020026020010151836040518363ffffffff1660e01b8152600401610929929190611a5d565b602060405180830381600087803b15801561094357600080fd5b505af1158015610957573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097b91906114e9565b5050505b61098a816001611062565b90506106ff565b50505050505050565b600254600160a01b900460ff1681565b600254600090600160a01b900460ff166109d65760405162461bcd60e51b815260040161018390611b2c565b6109de611169565b6109e6610e36565b6020810151610140820151604051633e174aaf60e01b815292935090916001600160a01b03831690633e174aaf90610a22903390600401611a49565b60206040518083038186803b158015610a3a57600080fd5b505afa158015610a4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a72919061172b565b1015610a905760405162461bcd60e51b815260040161018390611c15565b8160e00151610a9f85436110bc565b1015610abd5760405162461bcd60e51b815260040161018390611e5d565b6002546001600160a01b0316610ad16111ec565b6102c08101849052338152604080850151151581830152600060608301819052600160808085019190915260a080850183905260c08086018c905260e08601849052610100860184905261012086018b9052918801516101408601528701516101608086019190915290870151610180808601919091526101e08501839052908701516102008501528601516102208401526101a0860151610260840152436102808401526020808701516001600160a01b03908116918501919091526102a084019190915290516368f0460f60e01b8152908316906368f0460f90610bbb908490600401611fa6565b600060405180830381600087803b158015610bd557600080fd5b505af1158015610be9573d6000803e3d6000fd5b505060015460405163e5910ae760e01b81526001600160a01b03909116925063e5910ae79150610c1d903090600401611a49565b600060405180830381600087803b158015610c3757600080fd5b505af1158015610c4b573d6000803e3d6000fd5b505050507f460e77e3c8455201c4722742a8a654c959331ac344ab1b2ecefdb2b500f129c8816101400151604051610c839190611fb9565b60405180910390a15050505092915050565b6001546001600160a01b031681565b6000546001600160a01b031681565b610cbb611169565b610cc3610e36565b905090565b600254600160a01b900460ff1615610cf25760405162461bcd60e51b815260040161018390611cbe565b6001546001600160a01b0316610d06611169565b3081526001600160a01b038516602082015283151560408201528260006020020151606082015260006080820152826001602002015160a0820152826002602002015160c0820152826003602002015160e08201528260046020020151610100820152826005602002015161012082015282600660200201516101408201528260076020020151610160820152826008602002015161018082015282600960200201516101a082015260405163e416649960e01b81526001600160a01b0383169063e416649990610ddb908490600401611f97565b600060405180830381600087803b158015610df557600080fd5b505af1158015610e09573d6000803e3d6000fd5b50506002805460ff60a01b1916600160a01b17905550505050505050565b6002546001600160a01b031681565b610e3e611169565b60015460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990610e6e903090600401611a49565b6101c06040518083038186803b158015610e8757600080fd5b505afa158015610e9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc39190611581565b600254604051634a52ae5960e01b81526000916001600160a01b031690634a52ae5990610ef29086908690600401611fc2565b60206040518083038186803b158015610f0a57600080fd5b505afa158015610f1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4291906114e9565b90505b92915050565b610f536111ec565b600254604051631d97355360e21b81526001600160a01b039091169063765cd54c90610f859086908690600401611fc2565b60006040518083038186803b158015610f9d57600080fd5b505afa158015610fb1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f42919081019061159d565b6000438261012001511161105957600060808301526002546040516368f0460f60e01b81526001600160a01b03909116906368f0460f9061101e908590600401611fa6565b600060405180830381600087803b15801561103857600080fd5b505af115801561104c573d6000803e3d6000fd5b505050506000905061105d565b5060015b919050565b600082820183811015610f425760405162461bcd60e51b815260040161018390611b81565b6000670de0b6b3a76400006110ad61109f85856110fe565b6706f05b59d3b20000611062565b816110b457fe5b049392505050565b6000610f4283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611138565b60008261110d57506000610f45565b8282028284828161111a57fe5b0414610f425760405162461bcd60e51b815260040161018390611e1c565b6000818484111561115c5760405162461bcd60e51b81526004016101839190611abc565b50508183035b9392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806102e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600015158152602001600015158152602001600015158152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016112b4611169565b905290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160008152602001600081526020016112f3611169565b81526020016112b46111ec565b803561105d8161204d565b805161105d8161204d565b805161105d81612065565b600082601f830112611331578081fd5b815161134461133f82611ffb565b611fd7565b915080825283602082850101111561135b57600080fd5b61136c81602084016020860161201d565b5092915050565b60006101c0808385031215611386578182fd5b61138f81611fd7565b91505061139b8261130b565b81526113a96020830161130b565b60208201526113ba60408301611316565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b6000806000610180808587031215611455578384fd5b84356114608161204d565b935060208581013561147181612065565b9350605f86018713611481578283fd5b604051610140810181811067ffffffffffffffff8211171561149f57fe5b8060405250806040880189858a0111156114b7578586fd5b8594505b600a8510156114da5780358252600194909401939083019083016114bb565b50508093505050509250925092565b6000602082840312156114fa578081fd5b8151610f4281612065565b60008060408385031215611517578182fd5b823567ffffffffffffffff81111561152d578283fd5b8301601f8101851361153d578283fd5b803561154b61133f82611ffb565b81815286602083850101111561155f578485fd5b8160208401602083013790810160209081019490945295939092013593505050565b60006101c08284031215611593578081fd5b610f428383611373565b6000602082840312156115ae578081fd5b815167ffffffffffffffff808211156115c5578283fd5b9083019061048082860312156115d9578283fd5b6115e46102e0611fd7565b6115ed8361130b565b81526115fb6020840161130b565b602082015261160c60408401611316565b604082015261161d60608401611316565b606082015261162e60808401611316565b608082015261163f60a08401611316565b60a082015260c083015182811115611655578485fd5b61166187828601611321565b60c08301525060e08381015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e08084015190820152610200808401519082015261022080840151908201526102408084015190820152610260808401519082015261028080840151908201526102a080840151908201526102c0915061171c86838501611373565b91810191909152949350505050565b60006020828403121561173c578081fd5b5051919050565b60008060408385031215611755578182fd5b8235915060208084013567ffffffffffffffff80821115611774578384fd5b818601915086601f830112611787578384fd5b81358181111561179357fe5b83810291506117a3848301611fd7565b8181528481019084860184860187018b10156117bd578788fd5b8795505b838610156117e6576117d281611300565b8352600195909501949186019186016117c1565b508096505050505050509250929050565b60008060408385031215611809578182fd5b50508035926020909101359150565b6001600160a01b03169052565b15159052565b6000815180845261184381602086016020860161201d565b601f01601f19169290920160200192915050565b611862828251611818565b60208101516118746020840182611818565b5060408101516118876040840182611825565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b600061048061190d848451611818565b602083015161191f6020860182611818565b5060408301516119326040860182611825565b5060608301516119456060860182611825565b5060808301516119586080860182611825565b5060a083015161196b60a0860182611825565b5060c08301518160c08601526119838286018261182b565b60e08581015190870152610100808601519087015261012080860151908701526101408086015190870152610160808601519087015261018080860151908701526101a080860151908701526101c080860151908701526101e08086015190870152610200808601519087015261022080860151908701526102408086015190870152610260808601519087015261028080860151908701526102a080860151908701526102c0808601519193509150611a3f82870182611857565b5090949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03841681526000610200611a946020840186611857565b806101e0840152611aa7818401856118fd565b9695505050505050565b901515815260200190565b600060208252610f42602083018461182b565b60208082526038908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520686160408201527f7320616c7265616479206265656e20617070726f7665642e0000000000000000606082015260800190565b60208082526035908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f7465204d616040820152741b9859d95c881b9bdd081a5b9a5d1a585b1a5e9959605a1b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252603b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201527f746520746861742068617320726561636865642071756f72756d2e0000000000606082015260800190565b6020808252602c908201527f456c617374696344414f3a204e6f7420656e6f7567682073686172657320746f60408201526b2063726561746520766f746560a01b606082015260800190565b60208082526039908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520697360408201527f206e6f7420616374697665206f722068617320656e6465642e00000000000000606082015260800190565b6020808252603b908201527f456c617374696344414f3a20496e666f726d6174696f6e616c20566f7465204d60408201527f616e6167657220616c726561647920696e697469616c697a65642e0000000000606082015260800190565b60208082526025908201527f456c617374696344414f3a205468697320766f746520686173206e6f2070656e60408201526430b63a3c9760d91b606082015260800190565b60208082526047908201527f456c617374696344414f3a20496e76616c6964205f796e612076616c75652e2060408201527f557365203020666f72207965732c203120666f72206e6f2c203220666f7220616060820152663139ba30b4b71760c91b608082015260a00190565b6020808252602f908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201526e3a32903a3430ba103830b9b9b2b21760891b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602e908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520706560408201526d1c9a5bd9081d1bdbc81cda1bdc9d60921b606082015260800190565b6020808252602b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a6520616e206160408201526a31ba34bb32903b37ba329760a91b606082015260800190565b6020808252601c908201527f456c617374696344414f3a20496e76616c696420766f74652069642e00000000604082015260600190565b60006020825260018060a01b03835116602083015260208301511515604083015260408301516060830152606083015160808301526080830151611f7460a0840182611857565b5060a083015161026083810152611f8f6102808401826118fd565b949350505050565b6101c08101610f458284611857565b600060208252610f4260208301846118fd565b90815260200190565b8281526101e081016111626020830184611857565b60405181810167ffffffffffffffff81118282101715611ff357fe5b604052919050565b600067ffffffffffffffff82111561200f57fe5b50601f01601f191660200190565b60005b83811015612038578181015183820152602001612020565b83811115612047576000848401525b50505050565b6001600160a01b038116811461206257600080fd5b50565b801515811461206257600080fdfea2646970667358221220c0f44117f511920d15c9c9e32d5e564f6b72a18e3b9cf7bec464756ffa116a6264736f6c63430007020033";
  var deployedBytecode$9 = "0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063478eadbe11610066578063478eadbe146100fe578063743812131461011357806385b4bb531461011b578063d6055ae814610130578063e1faaae81461014357610093565b8063083964b1146100985780630c09135b146100ad578063158ef93e146100c05780634541c853146100de575b600080fd5b6100ab6100a63660046117f7565b61014b565b005b6100ab6100bb366004611743565b610615565b6100c861099a565b6040516100d59190611ab1565b60405180910390f35b6100f16100ec366004611505565b6109aa565b6040516100d59190611fb9565b610106610c95565b6040516100d59190611a49565b610106610ca4565b610123610cb3565b6040516100d59190611f97565b6100ab61013e36600461143f565b610cc8565b610106610e27565b610153611169565b61015b610e36565b90506101678382610ebf565b61018c5760405162461bcd60e51b815260040161018390611ef6565b60405180910390fd5b6101946111ec565b61019e8483610f4b565b60a0810151909150156101c35760405162461bcd60e51b815260040161018390611acf565b80608001516101e45760405162461bcd60e51b815260040161018390611c61565b6101ed81610fd9565b6102095760405162461bcd60e51b815260040161018390611c61565b600383106102295760405162461bcd60e51b815260040161018390611d60565b6020810151604051633e174aaf60e01b81526000906001600160a01b03831690633e174aaf9061025d903390600401611a49565b60206040518083038186803b15801561027557600080fd5b505afa158015610289573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ad919061172b565b61028084015160405163046deee960e01b81529192506000916001600160a01b0385169163046deee9916102e5913391600401611a5d565b60206040518083038186803b1580156102fd57600080fd5b505afa158015610311573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610335919061172b565b905081811015610343578091505b8184610160015110156103595783610160015191505b856103785761036d846102a0015183611062565b6102a08501526103af565b856001141561039b57610390846101e0015183611062565b6101e08501526103af565b6103a98460e0015183611062565b60e08501525b60006103d26103c8866102a00151876101e00151611062565b8660e00151611062565b90506000846001600160a01b03166378b61f226040518163ffffffff1660e01b815260040160206040518083038186803b15801561040f57600080fd5b505afa158015610423573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610447919061172b565b9050600061045a82886102200151611087565b905080831061046b57600160608801525b600061047c83896101000151611087565b905080841061048d57600160a08901525b6104956112b9565b338152608081018a905260a081018990526040808201889052606082018c9052600054905163ccaf715d60e01b81526001600160a01b039091169063ccaf715d906104e4908490600401611f2d565b600060405180830381600087803b1580156104fe57600080fd5b505af1158015610512573d6000803e3d6000fd5b50506002546040516368f0460f60e01b81526001600160a01b0390911692506368f0460f9150610546908c90600401611fa6565b600060405180830381600087803b15801561056057600080fd5b505af1158015610574573d6000803e3d6000fd5b50505050876001600160a01b031663528c198a336105978a8d6102600151611087565b6040518363ffffffff1660e01b81526004016105b4929190611a5d565b602060405180830381600087803b1580156105ce57600080fd5b505af11580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060691906114e9565b50505050505050505050505050565b61061d611169565b610625610e36565b90506106318382610ebf565b61064d5760405162461bcd60e51b815260040161018390611ef6565b6106556111ec565b61065f8483610f4b565b60a0810151909150156106845760405162461bcd60e51b815260040161018390611dcd565b6080810151156106a65760405162461bcd60e51b815260040161018390611eab565b6060810151156106c85760405162461bcd60e51b815260040161018390611bb8565b80604001516106e95760405162461bcd60e51b815260040161018390611d1b565b6000805460208301516001600160a01b03909116915b855181101561099157826001600160a01b031663e2ff8d6687838151811061072357fe5b602002602001015187876040518463ffffffff1660e01b815260040161074b93929190611a76565b60206040518083038186803b15801561076357600080fd5b505afa158015610777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079b91906114e9565b61097f576107a76112b9565b8682815181106107b357fe5b6020908102919091018101516001600160a01b0390811683526080830188905260a0830187905260019183019190915287516000916108819190861690633e174aaf908b908790811061080257fe5b60200260200101516040518263ffffffff1660e01b81526004016108269190611a49565b60206040518083038186803b15801561083e57600080fd5b505afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610876919061172b565b876102000151611087565b60408084018290525163ccaf715d60e01b81529091506001600160a01b0386169063ccaf715d906108b6908590600401611f2d565b600060405180830381600087803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b50505050836001600160a01b031663ee7a7c0489858151811061090357fe5b6020026020010151836040518363ffffffff1660e01b8152600401610929929190611a5d565b602060405180830381600087803b15801561094357600080fd5b505af1158015610957573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097b91906114e9565b5050505b61098a816001611062565b90506106ff565b50505050505050565b600254600160a01b900460ff1681565b600254600090600160a01b900460ff166109d65760405162461bcd60e51b815260040161018390611b2c565b6109de611169565b6109e6610e36565b6020810151610140820151604051633e174aaf60e01b815292935090916001600160a01b03831690633e174aaf90610a22903390600401611a49565b60206040518083038186803b158015610a3a57600080fd5b505afa158015610a4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a72919061172b565b1015610a905760405162461bcd60e51b815260040161018390611c15565b8160e00151610a9f85436110bc565b1015610abd5760405162461bcd60e51b815260040161018390611e5d565b6002546001600160a01b0316610ad16111ec565b6102c08101849052338152604080850151151581830152600060608301819052600160808085019190915260a080850183905260c08086018c905260e08601849052610100860184905261012086018b9052918801516101408601528701516101608086019190915290870151610180808601919091526101e08501839052908701516102008501528601516102208401526101a0860151610260840152436102808401526020808701516001600160a01b03908116918501919091526102a084019190915290516368f0460f60e01b8152908316906368f0460f90610bbb908490600401611fa6565b600060405180830381600087803b158015610bd557600080fd5b505af1158015610be9573d6000803e3d6000fd5b505060015460405163e5910ae760e01b81526001600160a01b03909116925063e5910ae79150610c1d903090600401611a49565b600060405180830381600087803b158015610c3757600080fd5b505af1158015610c4b573d6000803e3d6000fd5b505050507f460e77e3c8455201c4722742a8a654c959331ac344ab1b2ecefdb2b500f129c8816101400151604051610c839190611fb9565b60405180910390a15050505092915050565b6001546001600160a01b031681565b6000546001600160a01b031681565b610cbb611169565b610cc3610e36565b905090565b600254600160a01b900460ff1615610cf25760405162461bcd60e51b815260040161018390611cbe565b6001546001600160a01b0316610d06611169565b3081526001600160a01b038516602082015283151560408201528260006020020151606082015260006080820152826001602002015160a0820152826002602002015160c0820152826003602002015160e08201528260046020020151610100820152826005602002015161012082015282600660200201516101408201528260076020020151610160820152826008602002015161018082015282600960200201516101a082015260405163e416649960e01b81526001600160a01b0383169063e416649990610ddb908490600401611f97565b600060405180830381600087803b158015610df557600080fd5b505af1158015610e09573d6000803e3d6000fd5b50506002805460ff60a01b1916600160a01b17905550505050505050565b6002546001600160a01b031681565b610e3e611169565b60015460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990610e6e903090600401611a49565b6101c06040518083038186803b158015610e8757600080fd5b505afa158015610e9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc39190611581565b600254604051634a52ae5960e01b81526000916001600160a01b031690634a52ae5990610ef29086908690600401611fc2565b60206040518083038186803b158015610f0a57600080fd5b505afa158015610f1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4291906114e9565b90505b92915050565b610f536111ec565b600254604051631d97355360e21b81526001600160a01b039091169063765cd54c90610f859086908690600401611fc2565b60006040518083038186803b158015610f9d57600080fd5b505afa158015610fb1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f42919081019061159d565b6000438261012001511161105957600060808301526002546040516368f0460f60e01b81526001600160a01b03909116906368f0460f9061101e908590600401611fa6565b600060405180830381600087803b15801561103857600080fd5b505af115801561104c573d6000803e3d6000fd5b505050506000905061105d565b5060015b919050565b600082820183811015610f425760405162461bcd60e51b815260040161018390611b81565b6000670de0b6b3a76400006110ad61109f85856110fe565b6706f05b59d3b20000611062565b816110b457fe5b049392505050565b6000610f4283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611138565b60008261110d57506000610f45565b8282028284828161111a57fe5b0414610f425760405162461bcd60e51b815260040161018390611e1c565b6000818484111561115c5760405162461bcd60e51b81526004016101839190611abc565b50508183035b9392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806102e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600015158152602001600015158152602001600015158152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016112b4611169565b905290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160008152602001600081526020016112f3611169565b81526020016112b46111ec565b803561105d8161204d565b805161105d8161204d565b805161105d81612065565b600082601f830112611331578081fd5b815161134461133f82611ffb565b611fd7565b915080825283602082850101111561135b57600080fd5b61136c81602084016020860161201d565b5092915050565b60006101c0808385031215611386578182fd5b61138f81611fd7565b91505061139b8261130b565b81526113a96020830161130b565b60208201526113ba60408301611316565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b6000806000610180808587031215611455578384fd5b84356114608161204d565b935060208581013561147181612065565b9350605f86018713611481578283fd5b604051610140810181811067ffffffffffffffff8211171561149f57fe5b8060405250806040880189858a0111156114b7578586fd5b8594505b600a8510156114da5780358252600194909401939083019083016114bb565b50508093505050509250925092565b6000602082840312156114fa578081fd5b8151610f4281612065565b60008060408385031215611517578182fd5b823567ffffffffffffffff81111561152d578283fd5b8301601f8101851361153d578283fd5b803561154b61133f82611ffb565b81815286602083850101111561155f578485fd5b8160208401602083013790810160209081019490945295939092013593505050565b60006101c08284031215611593578081fd5b610f428383611373565b6000602082840312156115ae578081fd5b815167ffffffffffffffff808211156115c5578283fd5b9083019061048082860312156115d9578283fd5b6115e46102e0611fd7565b6115ed8361130b565b81526115fb6020840161130b565b602082015261160c60408401611316565b604082015261161d60608401611316565b606082015261162e60808401611316565b608082015261163f60a08401611316565b60a082015260c083015182811115611655578485fd5b61166187828601611321565b60c08301525060e08381015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e08084015190820152610200808401519082015261022080840151908201526102408084015190820152610260808401519082015261028080840151908201526102a080840151908201526102c0915061171c86838501611373565b91810191909152949350505050565b60006020828403121561173c578081fd5b5051919050565b60008060408385031215611755578182fd5b8235915060208084013567ffffffffffffffff80821115611774578384fd5b818601915086601f830112611787578384fd5b81358181111561179357fe5b83810291506117a3848301611fd7565b8181528481019084860184860187018b10156117bd578788fd5b8795505b838610156117e6576117d281611300565b8352600195909501949186019186016117c1565b508096505050505050509250929050565b60008060408385031215611809578182fd5b50508035926020909101359150565b6001600160a01b03169052565b15159052565b6000815180845261184381602086016020860161201d565b601f01601f19169290920160200192915050565b611862828251611818565b60208101516118746020840182611818565b5060408101516118876040840182611825565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b600061048061190d848451611818565b602083015161191f6020860182611818565b5060408301516119326040860182611825565b5060608301516119456060860182611825565b5060808301516119586080860182611825565b5060a083015161196b60a0860182611825565b5060c08301518160c08601526119838286018261182b565b60e08581015190870152610100808601519087015261012080860151908701526101408086015190870152610160808601519087015261018080860151908701526101a080860151908701526101c080860151908701526101e08086015190870152610200808601519087015261022080860151908701526102408086015190870152610260808601519087015261028080860151908701526102a080860151908701526102c0808601519193509150611a3f82870182611857565b5090949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03841681526000610200611a946020840186611857565b806101e0840152611aa7818401856118fd565b9695505050505050565b901515815260200190565b600060208252610f42602083018461182b565b60208082526038908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520686160408201527f7320616c7265616479206265656e20617070726f7665642e0000000000000000606082015260800190565b60208082526035908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f7465204d616040820152741b9859d95c881b9bdd081a5b9a5d1a585b1a5e9959605a1b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252603b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201527f746520746861742068617320726561636865642071756f72756d2e0000000000606082015260800190565b6020808252602c908201527f456c617374696344414f3a204e6f7420656e6f7567682073686172657320746f60408201526b2063726561746520766f746560a01b606082015260800190565b60208082526039908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520697360408201527f206e6f7420616374697665206f722068617320656e6465642e00000000000000606082015260800190565b6020808252603b908201527f456c617374696344414f3a20496e666f726d6174696f6e616c20566f7465204d60408201527f616e6167657220616c726561647920696e697469616c697a65642e0000000000606082015260800190565b60208082526025908201527f456c617374696344414f3a205468697320766f746520686173206e6f2070656e60408201526430b63a3c9760d91b606082015260800190565b60208082526047908201527f456c617374696344414f3a20496e76616c6964205f796e612076616c75652e2060408201527f557365203020666f72207965732c203120666f72206e6f2c203220666f7220616060820152663139ba30b4b71760c91b608082015260a00190565b6020808252602f908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201526e3a32903a3430ba103830b9b9b2b21760891b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602e908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520706560408201526d1c9a5bd9081d1bdbc81cda1bdc9d60921b606082015260800190565b6020808252602b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a6520616e206160408201526a31ba34bb32903b37ba329760a91b606082015260800190565b6020808252601c908201527f456c617374696344414f3a20496e76616c696420766f74652069642e00000000604082015260600190565b60006020825260018060a01b03835116602083015260208301511515604083015260408301516060830152606083015160808301526080830151611f7460a0840182611857565b5060a083015161026083810152611f8f6102808401826118fd565b949350505050565b6101c08101610f458284611857565b600060208252610f4260208301846118fd565b90815260200190565b8281526101e081016111626020830184611857565b60405181810167ffffffffffffffff81118282101715611ff357fe5b604052919050565b600067ffffffffffffffff82111561200f57fe5b50601f01601f191660200190565b60005b83811015612038578181015183820152602001612020565b83811115612047576000848401525b50505050565b6001600160a01b038116811461206257600080fd5b50565b801515811461206257600080fdfea2646970667358221220c0f44117f511920d15c9c9e32d5e564f6b72a18e3b9cf7bec464756ffa116a6264736f6c63430007020033";
  var linkReferences$9 = {
  };
  var deployedLinkReferences$9 = {
  };
  var InformationalVoteManagerContract = {
  	_format: _format$9,
  	contractName: contractName$9,
  	sourceName: sourceName$9,
  	abi: abi$9,
  	bytecode: bytecode$9,
  	deployedBytecode: deployedBytecode$9,
  	linkReferences: linkReferences$9,
  	deployedLinkReferences: deployedLinkReferences$9
  };

  var _format$a = "hh-sol-artifact-1";
  var contractName$a = "InformationalVoteSettings";
  var sourceName$a = "src/modules/InformationalVote/models/Settings.sol";
  var abi$a = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_managerAddress",
  				type: "address"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct InformationalVoteSettings.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_managerAddress",
  				type: "address"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_managerAddress",
  				type: "address"
  			}
  		],
  		name: "incrementCounter",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct InformationalVoteSettings.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$a = "0x608060405234801561001057600080fd5b50610cee806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063332a4d0914610051578063e41664991461007a578063e5910ae71461008f578063f6a3d24e146100a2575b600080fd5b61006461005f366004610780565b6100c2565b6040516100719190610bda565b60405180910390f35b61008d61008836600461079a565b61029f565b005b61008d61009d366004610780565b61058b565b6100b56100b0366004610780565b6105d8565b6040516100719190610b98565b6100ca6106d6565b6001600160a01b03821681526100df826105e9565b1561029a57610113826040516020016100f89190610add565b604051602081830303815290604052805190602001206105ff565b606082015260405161012d906100f89084906020016108d9565b608082015260405161016290610147908490602001610aa7565b60405160208183030381529060405280519060200120610611565b151560408083019190915251610180906100f8908490602001610b4f565b60a082015260405161019a906100f8908490602001610a68565b60c08201526040516101b4906100f89084906020016109ae565b60e08201526040516101ce906100f890849060200161093e565b6101408201526040516101e9906100f8908490602001610b11565b610100820152604051610204906100f8908490602001610a2b565b61012082015260405161021f906100f890849060200161097b565b61016082015260405161023a906100f89084906020016108a7565b610180820152604051610255906100f890849060200161090c565b6101a082015260405161028b906102709084906020016109ed565b60405160208183030381529060405280519060200120610626565b6001600160a01b031660208201525b919050565b80516040516102d4916102b491602001610aa7565b604051602081830303815290604052805190602001208260400151610641565b8051604051610309916102e991602001610add565b604051602081830303815290604052805190602001208260600151610661565b805160405161033e9161031e916020016108d9565b604051602081830303815290604052805190602001208260800151610661565b80516040516103739161035391602001610b4f565b604051602081830303815290604052805190602001208260a00151610661565b80516040516103a89161038891602001610a68565b604051602081830303815290604052805190602001208260c00151610661565b80516040516103dd916103bd916020016109ae565b604051602081830303815290604052805190602001208260e00151610661565b8051604051610413916103f291602001610b11565b60405160208183030381529060405280519060200120826101000151610661565b80516040516104499161042891602001610a2b565b60405160208183030381529060405280519060200120826101200151610661565b805160405161047f9161045e9160200161093e565b60405160208183030381529060405280519060200120826101400151610661565b80516040516104b5916104949160200161097b565b60405160208183030381529060405280519060200120826101600151610661565b80516040516104eb916104ca916020016108a7565b60405160208183030381529060405280519060200120826101800151610661565b8051604051610521916105009160200161090c565b60405160208183030381529060405280519060200120826101a00151610661565b805160405161055691610536916020016109ed565b604051602081830303815290604052805190602001208260200151610673565b80516040516105889161056b91602001610875565b604051602081830303815290604052805190602001206001610641565b50565b6105888160405160200161059f91906108d9565b604051602081830303815290604052805190602001206105d36105cc846040516020016100f891906108d9565b60016106a1565b610661565b60006105e3826105e9565b92915050565b60006105e3826040516020016101479190610875565b60009081526005602052604090205490565b60009081526001602052604090205460ff1690565b6000908152602081905260409020546001600160a01b031690565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526005602052604090912055565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000828201838110156106cf5760405162461bcd60e51b81526004016106c690610ba3565b60405180910390fd5b9392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b80356001600160a01b038116811461029a57600080fd5b8035801515811461029a57600080fd5b600060208284031215610791578081fd5b6106cf82610759565b60006101c08083850312156107ad578182fd5b6107b681610c94565b90506107c183610759565b81526107cf60208401610759565b60208201526107e060408401610770565b6040820152606083810135908201526080808401359082015260a0808401359082015260c0808401359082015260e08084013590820152610100808401359082015261012080840135908201526101408084013590820152610160808401359082015261018080840135908201526101a0928301359281019290925250919050565b6001600160a01b03169052565b15159052565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b039190911681526040602082018190526006908201526571756f72756d60d01b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526631b7bab73a32b960c91b606082015260800190565b6001600160a01b03919091168152604060208201819052600690820152651c995dd85c9960d21b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d696e536861726573546f43726561746560781b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526670656e616c747960c81b606082015260800190565b6001600160a01b03919091168152604060208201819052601390820152726d696e4475726174696f6e496e426c6f636b7360681b606082015260800190565b6001600160a01b0391909116815260406020820181905260129082015271766f74696e67546f6b656e4164647265737360701b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d696e526577617264496e53686172657360781b606082015260800190565b6001600160a01b03919091168152604060208201819052601390820152726d696e426c6f636b73466f7250656e616c747960681b606082015260800190565b6001600160a01b03919091168152604060208201819052600a908201526968617350656e616c747960b01b606082015260800190565b6001600160a01b0391909116815260406020820181905260089082015267185c1c1c9bdd985b60c21b606082015260800190565b6001600160a01b03919091168152604060208201819052601290820152716d696e50656e616c7479496e53686172657360701b606082015260800190565b6001600160a01b039190911681526040602082018190526017908201527f6d6178536861726573506572546f6b656e486f6c646572000000000000000000606082015260800190565b901515815260200190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60006101c082019050610bee828451610862565b6020830151610c006020840182610862565b506040830151610c13604084018261086f565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015181840152506101808084015181840152506101a080840151818401525092915050565b60405181810167ffffffffffffffff81118282101715610cb057fe5b60405291905056fea26469706673582212206440a4ce8edb2002265fc7998aa43321eb855af88016b0a967d481d0f0da5b9864736f6c63430007020033";
  var deployedBytecode$a = "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063332a4d0914610051578063e41664991461007a578063e5910ae71461008f578063f6a3d24e146100a2575b600080fd5b61006461005f366004610780565b6100c2565b6040516100719190610bda565b60405180910390f35b61008d61008836600461079a565b61029f565b005b61008d61009d366004610780565b61058b565b6100b56100b0366004610780565b6105d8565b6040516100719190610b98565b6100ca6106d6565b6001600160a01b03821681526100df826105e9565b1561029a57610113826040516020016100f89190610add565b604051602081830303815290604052805190602001206105ff565b606082015260405161012d906100f89084906020016108d9565b608082015260405161016290610147908490602001610aa7565b60405160208183030381529060405280519060200120610611565b151560408083019190915251610180906100f8908490602001610b4f565b60a082015260405161019a906100f8908490602001610a68565b60c08201526040516101b4906100f89084906020016109ae565b60e08201526040516101ce906100f890849060200161093e565b6101408201526040516101e9906100f8908490602001610b11565b610100820152604051610204906100f8908490602001610a2b565b61012082015260405161021f906100f890849060200161097b565b61016082015260405161023a906100f89084906020016108a7565b610180820152604051610255906100f890849060200161090c565b6101a082015260405161028b906102709084906020016109ed565b60405160208183030381529060405280519060200120610626565b6001600160a01b031660208201525b919050565b80516040516102d4916102b491602001610aa7565b604051602081830303815290604052805190602001208260400151610641565b8051604051610309916102e991602001610add565b604051602081830303815290604052805190602001208260600151610661565b805160405161033e9161031e916020016108d9565b604051602081830303815290604052805190602001208260800151610661565b80516040516103739161035391602001610b4f565b604051602081830303815290604052805190602001208260a00151610661565b80516040516103a89161038891602001610a68565b604051602081830303815290604052805190602001208260c00151610661565b80516040516103dd916103bd916020016109ae565b604051602081830303815290604052805190602001208260e00151610661565b8051604051610413916103f291602001610b11565b60405160208183030381529060405280519060200120826101000151610661565b80516040516104499161042891602001610a2b565b60405160208183030381529060405280519060200120826101200151610661565b805160405161047f9161045e9160200161093e565b60405160208183030381529060405280519060200120826101400151610661565b80516040516104b5916104949160200161097b565b60405160208183030381529060405280519060200120826101600151610661565b80516040516104eb916104ca916020016108a7565b60405160208183030381529060405280519060200120826101800151610661565b8051604051610521916105009160200161090c565b60405160208183030381529060405280519060200120826101a00151610661565b805160405161055691610536916020016109ed565b604051602081830303815290604052805190602001208260200151610673565b80516040516105889161056b91602001610875565b604051602081830303815290604052805190602001206001610641565b50565b6105888160405160200161059f91906108d9565b604051602081830303815290604052805190602001206105d36105cc846040516020016100f891906108d9565b60016106a1565b610661565b60006105e3826105e9565b92915050565b60006105e3826040516020016101479190610875565b60009081526005602052604090205490565b60009081526001602052604090205460ff1690565b6000908152602081905260409020546001600160a01b031690565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526005602052604090912055565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000828201838110156106cf5760405162461bcd60e51b81526004016106c690610ba3565b60405180910390fd5b9392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b80356001600160a01b038116811461029a57600080fd5b8035801515811461029a57600080fd5b600060208284031215610791578081fd5b6106cf82610759565b60006101c08083850312156107ad578182fd5b6107b681610c94565b90506107c183610759565b81526107cf60208401610759565b60208201526107e060408401610770565b6040820152606083810135908201526080808401359082015260a0808401359082015260c0808401359082015260e08084013590820152610100808401359082015261012080840135908201526101408084013590820152610160808401359082015261018080840135908201526101a0928301359281019290925250919050565b6001600160a01b03169052565b15159052565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b039190911681526040602082018190526006908201526571756f72756d60d01b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526631b7bab73a32b960c91b606082015260800190565b6001600160a01b03919091168152604060208201819052600690820152651c995dd85c9960d21b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d696e536861726573546f43726561746560781b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526670656e616c747960c81b606082015260800190565b6001600160a01b03919091168152604060208201819052601390820152726d696e4475726174696f6e496e426c6f636b7360681b606082015260800190565b6001600160a01b0391909116815260406020820181905260129082015271766f74696e67546f6b656e4164647265737360701b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d696e526577617264496e53686172657360781b606082015260800190565b6001600160a01b03919091168152604060208201819052601390820152726d696e426c6f636b73466f7250656e616c747960681b606082015260800190565b6001600160a01b03919091168152604060208201819052600a908201526968617350656e616c747960b01b606082015260800190565b6001600160a01b0391909116815260406020820181905260089082015267185c1c1c9bdd985b60c21b606082015260800190565b6001600160a01b03919091168152604060208201819052601290820152716d696e50656e616c7479496e53686172657360701b606082015260800190565b6001600160a01b039190911681526040602082018190526017908201527f6d6178536861726573506572546f6b656e486f6c646572000000000000000000606082015260800190565b901515815260200190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60006101c082019050610bee828451610862565b6020830151610c006020840182610862565b506040830151610c13604084018261086f565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015181840152506101808084015181840152506101a080840151818401525092915050565b60405181810167ffffffffffffffff81118282101715610cb057fe5b60405291905056fea26469706673582212206440a4ce8edb2002265fc7998aa43321eb855af88016b0a967d481d0f0da5b9864736f6c63430007020033";
  var linkReferences$a = {
  };
  var deployedLinkReferences$a = {
  };
  var InformationalVoteSettingsContract = {
  	_format: _format$a,
  	contractName: contractName$a,
  	sourceName: sourceName$a,
  	abi: abi$a,
  	bytecode: bytecode$a,
  	deployedBytecode: deployedBytecode$a,
  	linkReferences: linkReferences$a,
  	deployedLinkReferences: deployedLinkReferences$a
  };

  const cache$7 = {};
  const prefix$9 = '@elastic-dao/sdk - InformationalVoteSettings';

  const isInformationalVoteSettings = (thing) =>
    thing &&
    typeof thing === 'object' &&
    thing instanceof InformationalVoteSettings;
  const validateIsInformationalVoteSettings = (thing) => {
    const message = 'not an InformationalVoteSettings';
    validate(isInformationalVoteSettings(thing), { message, prefix: prefix$9 });
  };

  class InformationalVoteSettings extends ElasticModel {
    constructor({
      approval,
      counter,
      hasPenalty,
      managerAddress,
      maxSharesPerTokenHolder,
      minBlocksForPenalty,
      minDurationInBlocks,
      minPenaltyInShares,
      minRewardInShares,
      minSharesToCreate,
      penalty,
      quorum,
      reward,
      settingsModelAddress,
      votingTokenAddress,
    }) {
      super();
      this.id = managerAddress.toLowerCase();
      cache$7[this.id] = {
        approval,
        counter,
        hasPenalty,
        managerAddress,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
        settingsModelAddress,
        votingTokenAddress,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$9 });
      return sdk.contract({
        abi: InformationalVoteSettingsContract.abi,
        address,
      });
    }

    static async deserialize(sdk, managerAddress) {
      utils$1.validateIsAddress(managerAddress, { prefix: prefix$9 });
      const manager = this.managerContract(sdk, managerAddress);

      const settingsModelAddress = await manager.settingsModelAddress();
      const informationalVoteSettingsModel = this.contract(
        sdk,
        settingsModelAddress,
      );

      const {
        approval,
        counter,
        hasPenalty,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
        votingTokenAddress,
      } = await informationalVoteSettingsModel.deserialize(managerAddress);

      return new InformationalVoteSettings({
        approval,
        counter,
        hasPenalty,
        managerAddress,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
        settingsModelAddress,
        votingTokenAddress,
      });
    }

    static managerContract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$9 });
      return sdk.contract({
        abi: InformationalVoteManagerContract.abi,
        address,
      });
    }

    // Getters

    get address() {
      return cache$7[this.id].settingsModelAddress;
    }

    get approval() {
      return this.toBigNumber(cache$7[this.id].approval, 18);
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get counter() {
      return this.toNumber(cache$7[this.id].counter);
    }

    get hasPenalty() {
      return cache$7[this.id].hasPenalty;
    }

    get manager() {
      return this.constructor.managerContract(this.sdk, this.managerAddress);
    }

    get managerAddress() {
      return cache$7[this.id].managerAddress;
    }

    get maxSharesPerTokenHolder() {
      return this.toBigNumber(cache$7[this.id].maxSharesPerTokenHolder, 18);
    }

    get minBlocksForPenalty() {
      return this.toNumber(cache$7[this.id].minBlocksForPenalty);
    }

    get minDurationInBlocks() {
      return this.toNumber(cache$7[this.id].minDurationInBlocks);
    }

    get minPenaltyInShares() {
      return this.toBigNumber(cache$7[this.id].minPenaltyInShares, 18);
    }

    get minRewardInShares() {
      return this.toBigNumber(cache$7[this.id].minRewardInShares, 18);
    }

    get minSharesToCreate() {
      return this.toBigNumber(cache$7[this.id].minSharesToCreate, 18);
    }

    get penalty() {
      return this.toBigNumber(cache$7[this.id].penalty, 18);
    }

    get quorum() {
      return this.toBigNumber(cache$7[this.id].quorum, 18);
    }

    get reward() {
      return this.toBigNumber(cache$7[this.id].reward, 18);
    }

    get votingTokenAddress() {
      return cache$7[this.id].votingTokenAddress;
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(this.sdk, this.managerAddress);
    }

    toObject() {
      const { id } = this;

      const obj = {
        ...cache$7[id],
        id,
      };

      delete obj.settingsModelAddress;

      return this.sanitize(obj);
    }
  }

  var _format$b = "hh-sol-artifact-1";
  var contractName$b = "InformationalVote";
  var sourceName$b = "src/modules/InformationalVote/models/Vote.sol";
  var abi$b = [
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct InformationalVoteSettings.Instance",
  				name: "_settings",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "author",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "hasReachedQuorum",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isActive",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isApproved",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "proposal",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "abstainLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "endOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "noLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorumLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "startOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yesLambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct InformationalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					}
  				],
  				internalType: "struct InformationalVote.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct InformationalVoteSettings.Instance",
  				name: "_settings",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "author",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "hasReachedQuorum",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isActive",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isApproved",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "proposal",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "abstainLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "endOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "noLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorumLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "startOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yesLambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct InformationalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					}
  				],
  				internalType: "struct InformationalVote.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$b = "0x608060405234801561001057600080fd5b5061187a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634a52ae591461004657806368f0460f1461006f578063765cd54c14610084575b600080fd5b610059610054366004611008565b6100a4565b604051610066919061166f565b60405180910390f35b61008261007d366004610e7a565b6100b9565b005b610097610092366004611008565b610672565b60405161006691906116b1565b60006100b08383610981565b90505b92915050565b6102c0810151516101408201516040516100fb926100db929091602001611299565b60405160208183030381529060405280519060200120826000015161099d565b6102c08101515161014082015160405161013d9261011d929091602001611466565b60405160208183030381529060405280519060200120826020015161099d565b6102c08101515161014082015160405161017f9261015f92909160200161156a565b6040516020818303038152906040528051906020012082604001516109cb565b6102c0810151516101408201516040516101c1926101a1929091602001611258565b6040516020818303038152906040528051906020012082606001516109cb565b6102c081015151610140820151604051610203926101e392909160200161121f565b6040516020818303038152906040528051906020012082608001516109cb565b6102c0810151516101408201516040516102459261022592909160200161137d565b604051602081830303815290604052805190602001208260a001516109cb565b6102c081015151610140820151604051610287926102679290916020016113f0565b604051602081830303815290604052805190602001208260c001516109eb565b6102c0810151516101408201516040516102c9926102a99290916020016111aa565b604051602081830303815290604052805190602001208260e00151610a0f565b6102c08101515161014082015160405161030c926102eb9290916020016115a5565b60405160208183030381529060405280519060200120826101000151610a0f565b6102c08101515161014082015160405161034f9261032e92909160200161152f565b60405160208183030381529060405280519060200120826101200151610a0f565b6102c08101515161014082015160405161039292610371929091602001611621565b60405160208183030381529060405280519060200120826101600151610a0f565b6102c0810151516101408201516040516103d5926103b49290916020016114eb565b60405160208183030381529060405280519060200120826101800151610a0f565b6102c081015151610140820151604051610418926103f79290916020016115de565b60405160208183030381529060405280519060200120826101a00151610a0f565b6102c08101515161014082015160405161045b9261043a9290916020016114a9565b60405160208183030381529060405280519060200120826101c00151610a0f565b6102c08101515161014082015160405161049e9261047d929091602001611344565b60405160208183030381529060405280519060200120826101e00151610a0f565b6102c0810151516101408201516040516104e1926104c09290916020016113b8565b60405160208183030381529060405280519060200120826102000151610a0f565b6102c081015151610140820151604051610524926105039290916020016111e8565b60405160208183030381529060405280519060200120826102200151610a0f565b6102c08101515161014082015160405161056792610546929091602001611429565b60405160208183030381529060405280519060200120826102400151610a0f565b6102c0810151516101408201516040516105aa926105899290916020016112d0565b60405160208183030381529060405280519060200120826102600151610a0f565b6102c0810151516101408201516040516105ed926105cc929091602001611307565b60405160208183030381529060405280519060200120826102800151610a0f565b6102c0810151516101408201516040516106309261060f929091602001611170565b60405160208183030381529060405280519060200120826102a00151610a0f565b6102c08101515161014082015160405161066f92610652929091602001611139565b6040516020818303038152906040528051906020012060016109cb565b50565b61067a610b3d565b61014081018390526102c081018290526106948383610981565b156100b35781516040516106cb916106b09186906020016111aa565b60405160208183030381529060405280519060200120610a21565b60e082015281516040516106e7916106b09186906020016115a5565b610100820152815160405161071f91610704918690602001611299565b60405160208183030381529060405280519060200120610a36565b6001600160a01b031681528151604051610741916106b091869060200161152f565b61012082015281516040516107799161075e91869060200161156a565b60405160208183030381529060405280519060200120610a51565b15156040808301919091528251905161079a9161075e918690602001611258565b1515606082015281516040516107b89161075e91869060200161121f565b1515608082015281516040516107d69161075e91869060200161137d565b151560a082015281516040516107f4916106b0918690602001611621565b6101608201528151604051610811916106b09186906020016114eb565b610180820152815160405161082e916106b09186906020016115de565b6101a0820152815160405161084b916106b09186906020016114a9565b6101c08201528151604051610868916106b0918690602001611344565b6101e08201528151604051610885916106b09186906020016113b8565b61020082015281516040516108bd916108a29186906020016113f0565b60405160208183030381529060405280519060200120610a66565b60c082015281516040516108d9916106b09186906020016111e8565b61022082015281516040516108f6916106b0918690602001611429565b6102408201528151604051610913916106b09186906020016112d0565b6102608201528151604051610930916106b0918690602001611307565b610280820152815160405161094d91610704918690602001611466565b6001600160a01b03166020808301919091528251604051610975926106b09291879101611170565b6102a082015292915050565b60006100b082600001518460405160200161075e929190611139565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b600091825260016020526040909120805460ff1916911515919091179055565b60008281526004602090815260409091208251610a0a92840190610c0a565b505050565b60009182526005602052604090912055565b6000818152600560205260409020545b919050565b6000908152602081905260409020546001600160a01b031690565b60009081526001602052604090205460ff1690565b60608160001a60f81b6001600160f81b031916610a9e5760405162461bcd60e51b8152600401610a959061167a565b60405180910390fd5b60008281526004602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084529091830182828015610b315780601f10610b0657610100808354040283529160200191610b31565b820191906000526020600020905b815481529060010190602001808311610b1457829003601f168201915b50505050509050919050565b604051806102e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160001515815260200160001515815260200160001515815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001610c05610c88565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c4b57805160ff1916838001178555610c78565b82800160010185558215610c78579182015b82811115610c78578251825591602001919060010190610c5d565b50610c84929150610d0b565b5090565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115610c845760008155600101610d0c565b80356001600160a01b0381168114610a3157600080fd5b80358015158114610a3157600080fd5b600082601f830112610d57578081fd5b813567ffffffffffffffff811115610d6b57fe5b610d7e601f8201601f1916602001611820565b9150808252836020828501011115610d9557600080fd5b8060208401602084013760009082016020015292915050565b60006101c0808385031215610dc1578182fd5b610dca81611820565b915050610dd682610d20565b8152610de460208301610d20565b6020820152610df560408301610d37565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b600060208284031215610e8b578081fd5b813567ffffffffffffffff80821115610ea2578283fd5b908301906104808286031215610eb6578283fd5b610ec16102e0611820565b610eca83610d20565b8152610ed860208401610d20565b6020820152610ee960408401610d37565b6040820152610efa60608401610d37565b6060820152610f0b60808401610d37565b6080820152610f1c60a08401610d37565b60a082015260c083013582811115610f32578485fd5b610f3e87828601610d47565b60c08301525060e08381013590820152610100808401359082015261012080840135908201526101408084013590820152610160808401359082015261018080840135908201526101a080840135908201526101c080840135908201526101e08084013590820152610200808401359082015261022080840135908201526102408084013590820152610260808401359082015261028080840135908201526102a080840135908201526102c09150610ff986838501610dae565b91810191909152949350505050565b6000806101e0838503121561101b578081fd5b8235915061102c8460208501610dae565b90509250929050565b6001600160a01b03169052565b15159052565b60008151808452815b8181101561106d57602081850181015186830182015201611051565b8181111561107e5782602083870101525b50601f01601f19169290920160200192915050565b61109e828251611035565b60208101516110b06020840182611035565b5060408101516110c36040840182611042565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6001600160a01b0392909216825260208201526060604082018190526006908201526565786973747360d01b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600990820152687965734c616d62646160b81b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600d908201526c6162737461696e4c616d62646160981b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526006908201526571756f72756d60d01b608082015260a00190565b6001600160a01b03929092168252602082015260606040820181905260089082015267697341637469766560c01b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526010908201526f6861735265616368656451756f72756d60801b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526006908201526530baba3437b960d11b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600690820152651c995dd85c9960d21b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600c908201526b73746172744f6e426c6f636b60a01b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600890820152676e6f4c616d62646160c01b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600a90820152691a5cd05c1c1c9bdd995960b21b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526007908201526670656e616c747960c81b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600890820152671c1c9bdc1bdcd85b60c21b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600c908201526b71756f72756d4c616d62646160a01b608082015260a00190565b6001600160a01b03929092168252602082015260606040820181905260129082015271766f74696e67546f6b656e4164647265737360701b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052601190820152706d696e526577617264496e53686172657360781b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052601390820152726d696e426c6f636b73466f7250656e616c747960681b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600a9082015269656e644f6e426c6f636b60b01b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600a908201526968617350656e616c747960b01b608082015260a00190565b6001600160a01b03929092168252602082015260606040820181905260089082015267185c1c1c9bdd985b60c21b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052601290820152716d696e50656e616c7479496e53686172657360701b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526017908201527f6d6178536861726573506572546f6b656e486f6c646572000000000000000000608082015260a00190565b901515815260200190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b6000602082526116c5602083018451611035565b60208301516116d76040840182611035565b5060408301516116ea6060840182611042565b5060608301516116fd6080840182611042565b50608083015161171060a0840182611042565b5060a083015161172360c0840182611042565b5060c083015161048060e084015261173f6104a0840182611048565b60e085015161010085810191909152850151610120808601919091528501516101408086019190915285015161016080860191909152850151610180808601919091528501516101a0808601919091528501516101c0808601919091528501516101e08086019190915285015161020080860191909152850151610220808601919091528501516102408086019190915285015161026080860191909152850151610280808601919091528501516102a0808601919091528501516102c0808601919091528501519091506118186102e0850182611093565b509392505050565b60405181810167ffffffffffffffff8111828210171561183c57fe5b60405291905056fea2646970667358221220706a7c4999fc1cf70e94b98f38309b2e3ebf394b54c2466a16b1cde0fd773ab564736f6c63430007020033";
  var deployedBytecode$b = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80634a52ae591461004657806368f0460f1461006f578063765cd54c14610084575b600080fd5b610059610054366004611008565b6100a4565b604051610066919061166f565b60405180910390f35b61008261007d366004610e7a565b6100b9565b005b610097610092366004611008565b610672565b60405161006691906116b1565b60006100b08383610981565b90505b92915050565b6102c0810151516101408201516040516100fb926100db929091602001611299565b60405160208183030381529060405280519060200120826000015161099d565b6102c08101515161014082015160405161013d9261011d929091602001611466565b60405160208183030381529060405280519060200120826020015161099d565b6102c08101515161014082015160405161017f9261015f92909160200161156a565b6040516020818303038152906040528051906020012082604001516109cb565b6102c0810151516101408201516040516101c1926101a1929091602001611258565b6040516020818303038152906040528051906020012082606001516109cb565b6102c081015151610140820151604051610203926101e392909160200161121f565b6040516020818303038152906040528051906020012082608001516109cb565b6102c0810151516101408201516040516102459261022592909160200161137d565b604051602081830303815290604052805190602001208260a001516109cb565b6102c081015151610140820151604051610287926102679290916020016113f0565b604051602081830303815290604052805190602001208260c001516109eb565b6102c0810151516101408201516040516102c9926102a99290916020016111aa565b604051602081830303815290604052805190602001208260e00151610a0f565b6102c08101515161014082015160405161030c926102eb9290916020016115a5565b60405160208183030381529060405280519060200120826101000151610a0f565b6102c08101515161014082015160405161034f9261032e92909160200161152f565b60405160208183030381529060405280519060200120826101200151610a0f565b6102c08101515161014082015160405161039292610371929091602001611621565b60405160208183030381529060405280519060200120826101600151610a0f565b6102c0810151516101408201516040516103d5926103b49290916020016114eb565b60405160208183030381529060405280519060200120826101800151610a0f565b6102c081015151610140820151604051610418926103f79290916020016115de565b60405160208183030381529060405280519060200120826101a00151610a0f565b6102c08101515161014082015160405161045b9261043a9290916020016114a9565b60405160208183030381529060405280519060200120826101c00151610a0f565b6102c08101515161014082015160405161049e9261047d929091602001611344565b60405160208183030381529060405280519060200120826101e00151610a0f565b6102c0810151516101408201516040516104e1926104c09290916020016113b8565b60405160208183030381529060405280519060200120826102000151610a0f565b6102c081015151610140820151604051610524926105039290916020016111e8565b60405160208183030381529060405280519060200120826102200151610a0f565b6102c08101515161014082015160405161056792610546929091602001611429565b60405160208183030381529060405280519060200120826102400151610a0f565b6102c0810151516101408201516040516105aa926105899290916020016112d0565b60405160208183030381529060405280519060200120826102600151610a0f565b6102c0810151516101408201516040516105ed926105cc929091602001611307565b60405160208183030381529060405280519060200120826102800151610a0f565b6102c0810151516101408201516040516106309261060f929091602001611170565b60405160208183030381529060405280519060200120826102a00151610a0f565b6102c08101515161014082015160405161066f92610652929091602001611139565b6040516020818303038152906040528051906020012060016109cb565b50565b61067a610b3d565b61014081018390526102c081018290526106948383610981565b156100b35781516040516106cb916106b09186906020016111aa565b60405160208183030381529060405280519060200120610a21565b60e082015281516040516106e7916106b09186906020016115a5565b610100820152815160405161071f91610704918690602001611299565b60405160208183030381529060405280519060200120610a36565b6001600160a01b031681528151604051610741916106b091869060200161152f565b61012082015281516040516107799161075e91869060200161156a565b60405160208183030381529060405280519060200120610a51565b15156040808301919091528251905161079a9161075e918690602001611258565b1515606082015281516040516107b89161075e91869060200161121f565b1515608082015281516040516107d69161075e91869060200161137d565b151560a082015281516040516107f4916106b0918690602001611621565b6101608201528151604051610811916106b09186906020016114eb565b610180820152815160405161082e916106b09186906020016115de565b6101a0820152815160405161084b916106b09186906020016114a9565b6101c08201528151604051610868916106b0918690602001611344565b6101e08201528151604051610885916106b09186906020016113b8565b61020082015281516040516108bd916108a29186906020016113f0565b60405160208183030381529060405280519060200120610a66565b60c082015281516040516108d9916106b09186906020016111e8565b61022082015281516040516108f6916106b0918690602001611429565b6102408201528151604051610913916106b09186906020016112d0565b6102608201528151604051610930916106b0918690602001611307565b610280820152815160405161094d91610704918690602001611466565b6001600160a01b03166020808301919091528251604051610975926106b09291879101611170565b6102a082015292915050565b60006100b082600001518460405160200161075e929190611139565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b600091825260016020526040909120805460ff1916911515919091179055565b60008281526004602090815260409091208251610a0a92840190610c0a565b505050565b60009182526005602052604090912055565b6000818152600560205260409020545b919050565b6000908152602081905260409020546001600160a01b031690565b60009081526001602052604090205460ff1690565b60608160001a60f81b6001600160f81b031916610a9e5760405162461bcd60e51b8152600401610a959061167a565b60405180910390fd5b60008281526004602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084529091830182828015610b315780601f10610b0657610100808354040283529160200191610b31565b820191906000526020600020905b815481529060010190602001808311610b1457829003601f168201915b50505050509050919050565b604051806102e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160001515815260200160001515815260200160001515815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001610c05610c88565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c4b57805160ff1916838001178555610c78565b82800160010185558215610c78579182015b82811115610c78578251825591602001919060010190610c5d565b50610c84929150610d0b565b5090565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115610c845760008155600101610d0c565b80356001600160a01b0381168114610a3157600080fd5b80358015158114610a3157600080fd5b600082601f830112610d57578081fd5b813567ffffffffffffffff811115610d6b57fe5b610d7e601f8201601f1916602001611820565b9150808252836020828501011115610d9557600080fd5b8060208401602084013760009082016020015292915050565b60006101c0808385031215610dc1578182fd5b610dca81611820565b915050610dd682610d20565b8152610de460208301610d20565b6020820152610df560408301610d37565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b600060208284031215610e8b578081fd5b813567ffffffffffffffff80821115610ea2578283fd5b908301906104808286031215610eb6578283fd5b610ec16102e0611820565b610eca83610d20565b8152610ed860208401610d20565b6020820152610ee960408401610d37565b6040820152610efa60608401610d37565b6060820152610f0b60808401610d37565b6080820152610f1c60a08401610d37565b60a082015260c083013582811115610f32578485fd5b610f3e87828601610d47565b60c08301525060e08381013590820152610100808401359082015261012080840135908201526101408084013590820152610160808401359082015261018080840135908201526101a080840135908201526101c080840135908201526101e08084013590820152610200808401359082015261022080840135908201526102408084013590820152610260808401359082015261028080840135908201526102a080840135908201526102c09150610ff986838501610dae565b91810191909152949350505050565b6000806101e0838503121561101b578081fd5b8235915061102c8460208501610dae565b90509250929050565b6001600160a01b03169052565b15159052565b60008151808452815b8181101561106d57602081850181015186830182015201611051565b8181111561107e5782602083870101525b50601f01601f19169290920160200192915050565b61109e828251611035565b60208101516110b06020840182611035565b5060408101516110c36040840182611042565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6001600160a01b0392909216825260208201526060604082018190526006908201526565786973747360d01b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600990820152687965734c616d62646160b81b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600d908201526c6162737461696e4c616d62646160981b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526006908201526571756f72756d60d01b608082015260a00190565b6001600160a01b03929092168252602082015260606040820181905260089082015267697341637469766560c01b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526010908201526f6861735265616368656451756f72756d60801b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526006908201526530baba3437b960d11b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600690820152651c995dd85c9960d21b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600c908201526b73746172744f6e426c6f636b60a01b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600890820152676e6f4c616d62646160c01b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600a90820152691a5cd05c1c1c9bdd995960b21b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526007908201526670656e616c747960c81b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600890820152671c1c9bdc1bdcd85b60c21b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600c908201526b71756f72756d4c616d62646160a01b608082015260a00190565b6001600160a01b03929092168252602082015260606040820181905260129082015271766f74696e67546f6b656e4164647265737360701b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052601190820152706d696e526577617264496e53686172657360781b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052601390820152726d696e426c6f636b73466f7250656e616c747960681b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600a9082015269656e644f6e426c6f636b60b01b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052600a908201526968617350656e616c747960b01b608082015260a00190565b6001600160a01b03929092168252602082015260606040820181905260089082015267185c1c1c9bdd985b60c21b608082015260a00190565b6001600160a01b039290921682526020820152606060408201819052601290820152716d696e50656e616c7479496e53686172657360701b608082015260a00190565b6001600160a01b0392909216825260208201526060604082018190526017908201527f6d6178536861726573506572546f6b656e486f6c646572000000000000000000608082015260a00190565b901515815260200190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b6000602082526116c5602083018451611035565b60208301516116d76040840182611035565b5060408301516116ea6060840182611042565b5060608301516116fd6080840182611042565b50608083015161171060a0840182611042565b5060a083015161172360c0840182611042565b5060c083015161048060e084015261173f6104a0840182611048565b60e085015161010085810191909152850151610120808601919091528501516101408086019190915285015161016080860191909152850151610180808601919091528501516101a0808601919091528501516101c0808601919091528501516101e08086019190915285015161020080860191909152850151610220808601919091528501516102408086019190915285015161026080860191909152850151610280808601919091528501516102a0808601919091528501516102c0808601919091528501519091506118186102e0850182611093565b509392505050565b60405181810167ffffffffffffffff8111828210171561183c57fe5b60405291905056fea2646970667358221220706a7c4999fc1cf70e94b98f38309b2e3ebf394b54c2466a16b1cde0fd773ab564736f6c63430007020033";
  var linkReferences$b = {
  };
  var deployedLinkReferences$b = {
  };
  var InformationalVoteContract = {
  	_format: _format$b,
  	contractName: contractName$b,
  	sourceName: sourceName$b,
  	abi: abi$b,
  	bytecode: bytecode$b,
  	deployedBytecode: deployedBytecode$b,
  	linkReferences: linkReferences$b,
  	deployedLinkReferences: deployedLinkReferences$b
  };

  const cache$8 = {};
  const prefix$a = '@elastic-dao/sdk - InformationalVote';

  const isInformationalVote = (thing) =>
    thing && typeof thing === 'object' && thing instanceof InformationalVote;
  const validateIsInformationalVote = (thing) => {
    const message = 'not an InformationalVote';
    validate(isInformationalVote(thing), { message, prefix: prefix$a });
  };

  class InformationalVote extends ElasticModel {
    constructor(
      sdk,
      {
        abstainLambda,
        approval,
        author,
        endOnBlock,
        hasPenalty,
        hasReachedQuorum,
        index,
        isActive,
        isApproved,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minPenaltyInShares,
        minRewardInShares,
        noLambda,
        penalty,
        proposal,
        quorum,
        quorumLambda,
        reward,
        settings,
        startOnBlock,
        voteModelAddress,
        votingToken,
        yesLambda,
      },
    ) {
      super(sdk);
      this.id = `${settings.uuid}|${index}`.toLowerCase();
      cache$8[this.id] = {
        abstainLambda,
        approval,
        author,
        endOnBlock,
        hasPenalty,
        hasReachedQuorum,
        index,
        isActive,
        isApproved,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minPenaltyInShares,
        minRewardInShares,
        noLambda,
        penalty,
        proposal,
        quorum,
        quorumLambda,
        reward,
        settings,
        startOnBlock,
        voteModelAddress,
        votingToken,
        yesLambda,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$a });
      return sdk.contract({ abi: InformationalVoteContract.abi, address });
    }

    static async deserialize(sdk, index, settings) {
      utils$1.validateIsNumber(index, { prefix: prefix$a });
      validateIsInformationalVoteSettings(settings);

      const voteModelAddress = await settings.manager.voteModelAddress();
      const informationalVoteModel = await this.contract(sdk, voteModelAddress);

      const {
        abstainLambda,
        approval,
        author,
        endOnBlock,
        hasPenalty,
        hasReachedQuorum,
        isActive,
        isApproved,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minPenaltyInShares,
        minRewardInShares,
        noLambda,
        penalty,
        proposal,
        quorum,
        quorumLambda,
        reward,
        startOnBlock,
        votingToken,
        yesLambda,
      } = await informationalVoteModel.deserialize(
        index,
        settings.toObject(false),
      );

      return new InformationalVote(sdk, {
        abstainLambda,
        approval,
        author,
        endOnBlock,
        hasPenalty,
        hasReachedQuorum,
        index,
        isActive,
        isApproved,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minPenaltyInShares,
        minRewardInShares,
        noLambda,
        penalty,
        proposal,
        quorum,
        quorumLambda,
        reward,
        settings,
        startOnBlock,
        voteModelAddress,
        votingToken,
        yesLambda,
      });
    }

    // Getters

    get abstainLambda() {
      return this.toBigNumber(cache$8[this.id].abstainLambda, 18);
    }

    get address() {
      return cache$8[this.id].voteModelAddress;
    }

    get approval() {
      return this.toBigNumber(cache$8[this.id].approval, 18);
    }

    get author() {
      return cache$8[this.id].author;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get endOnBlock() {
      return this.toNumber(cache$8[this.id].endOnBlock);
    }

    get hasPenalty() {
      return cache$8[this.id].hasPenalty;
    }

    get hasReachedQuorum() {
      return cache$8[this.id].hasReachedQuorum;
    }

    get index() {
      return this.toNumber(cache$8[this.id].index);
    }

    get isActive() {
      return cache$8[this.id].isActive;
    }

    get isApproved() {
      return cache$8[this.id].isApproved;
    }

    get maxSharesPerTokenHolder() {
      return this.toBigNumber(cache$8[this.id].maxSharesPerTokenHolder, 18);
    }

    get minBlocksForPenalty() {
      return this.toNumber(cache$8[this.id].minBlocksForPenalty);
    }

    get minPenaltyInShares() {
      return this.toBigNumber(cache$8[this.id].minPenaltyInShares, 18);
    }

    get minRewardInShares() {
      return this.toBigNumber(cache$8[this.id].minRewardInShares, 18);
    }

    get noLambda() {
      return this.toBigNumber(cache$8[this.id].noLambda, 18);
    }

    get penalty() {
      return this.toBigNumber(cache$8[this.id].penalty, 18);
    }

    get proposal() {
      return cache$8[this.id].proposal;
    }

    get quorum() {
      return this.toBigNumber(cache$8[this.id].quorum, 18);
    }

    get quorumLambda() {
      return this.toBigNumber(cache$8[this.id].quorumLambda, 18);
    }

    get reward() {
      return this.toBigNumber(cache$8[this.id].reward, 18);
    }

    get settings() {
      return cache$8[this.id].settings;
    }

    get startOnBlock() {
      return this.toNumber(cache$8[this.id].startOnBlock);
    }

    get votingToken() {
      return cache$8[this.id].votingToken;
    }

    get yesLambda() {
      return this.toBigNumber(cache$8[this.id].yesLambda, 18);
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(this.sdk, this.index, this.settings);
    }

    toObject(includeNested = true) {
      const { id, settings } = this;

      const obj = {
        ...cache$8[id],
        id,
        settings: settings.toObject(false),
      };

      delete obj.voteModelAddress;

      if (includeNested === false) {
        delete obj.settings;
      }

      return this.sanitize(obj);
    }
  }

  var _format$c = "hh-sol-artifact-1";
  var contractName$c = "InformationalVoteBallot";
  var sourceName$c = "src/modules/InformationalVote/models/Ballot.sol";
  var abi$c = [
  	{
  		inputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_voter",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct InformationalVoteSettings.Instance",
  				name: "_settings",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "author",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "hasReachedQuorum",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isActive",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isApproved",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "proposal",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "abstainLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "endOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "noLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorumLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "startOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yesLambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct InformationalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					}
  				],
  				internalType: "struct InformationalVote.Instance",
  				name: "_vote",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "voter",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "wasPenalized",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yna",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct InformationalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "author",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "hasReachedQuorum",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isActive",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isApproved",
  								type: "bool"
  							},
  							{
  								internalType: "string",
  								name: "proposal",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "abstainLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "endOnBlock",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "index",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "noLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorumLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "startOnBlock",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "yesLambda",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "managerAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "votingTokenAddress",
  										type: "address"
  									},
  									{
  										internalType: "bool",
  										name: "hasPenalty",
  										type: "bool"
  									},
  									{
  										internalType: "uint256",
  										name: "approval",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "counter",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "maxSharesPerTokenHolder",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minBlocksForPenalty",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minDurationInBlocks",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minPenaltyInShares",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minRewardInShares",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minSharesToCreate",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "penalty",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "quorum",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "reward",
  										type: "uint256"
  									}
  								],
  								internalType: "struct InformationalVoteSettings.Instance",
  								name: "settings",
  								type: "tuple"
  							}
  						],
  						internalType: "struct InformationalVote.Instance",
  						name: "vote",
  						type: "tuple"
  					}
  				],
  				internalType: "struct InformationalVoteBallot.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_voter",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct InformationalVoteSettings.Instance",
  				name: "_settings",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "author",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "hasReachedQuorum",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isActive",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isApproved",
  						type: "bool"
  					},
  					{
  						internalType: "string",
  						name: "proposal",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "abstainLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "endOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "noLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorumLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "startOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yesLambda",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct InformationalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					}
  				],
  				internalType: "struct InformationalVote.Instance",
  				name: "_vote",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "voter",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "wasPenalized",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yna",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct InformationalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "author",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "hasReachedQuorum",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isActive",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isApproved",
  								type: "bool"
  							},
  							{
  								internalType: "string",
  								name: "proposal",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "abstainLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "endOnBlock",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "index",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "noLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorumLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "startOnBlock",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "yesLambda",
  								type: "uint256"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "managerAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "votingTokenAddress",
  										type: "address"
  									},
  									{
  										internalType: "bool",
  										name: "hasPenalty",
  										type: "bool"
  									},
  									{
  										internalType: "uint256",
  										name: "approval",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "counter",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "maxSharesPerTokenHolder",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minBlocksForPenalty",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minDurationInBlocks",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minPenaltyInShares",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minRewardInShares",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minSharesToCreate",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "penalty",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "quorum",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "reward",
  										type: "uint256"
  									}
  								],
  								internalType: "struct InformationalVoteSettings.Instance",
  								name: "settings",
  								type: "tuple"
  							}
  						],
  						internalType: "struct InformationalVote.Instance",
  						name: "vote",
  						type: "tuple"
  					}
  				],
  				internalType: "struct InformationalVoteBallot.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$c = "0x608060405234801561001057600080fd5b50610cdf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327a4eb4d14610046578063ccaf715d1461006f578063e2ff8d6614610084575b600080fd5b610059610054366004610794565b6100a4565b6040516100669190610acc565b60405180910390f35b61008261007d3660046107f3565b610186565b005b610097610092366004610794565b6102aa565b6040516100669190610ac1565b6100ac61033b565b6001600160a01b03841681526080810183905260a081018290526100d18484846102bf565b1561017f578251610140830151604051610110926100f592909188906020016109fb565b604051602081830303815290604052805190602001206102df565b604080830191909152835161014084015191516101519261013692918890602001610a7a565b604051602081830303815290604052805190602001206102f4565b15156020808301919091528351610140840151604051610179936100f5939291899101610a3c565b60608201525b9392505050565b60808101515160a0820151610140015182516040516101cf936101af9390929091602001610a7a565b604051602081830303815290604052805190602001208260200151610309565b60808101515160a082015161014001518251604051610218936101f893909290916020016109fb565b604051602081830303815290604052805190602001208260400151610329565b60808101515160a082015161014001518251604051610261936102419390929091602001610a3c565b604051602081830303815290604052805190602001208260600151610329565b60808101515160a0820151610140015182516040516102a79361028a93909290916020016109ba565b604051602081830303815290604052805190602001206001610309565b50565b60006102b78484846102bf565b949350505050565b81516101408201516040516000926102b7926101369288906020016109ba565b6000818152600560205260409020545b919050565b60009081526001602052604090205460ff1690565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526005602052604090912055565b6040518060c0016040528060006001600160a01b031681526020016000151581526020016000815260200160008152602001610375610387565b815260200161038261040a565b905290565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806102e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160001515815260200160001515815260200160001515815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001610382610387565b80356001600160a01b03811681146102ef57600080fd5b803580151581146102ef57600080fd5b600082601f830112610509578081fd5b813567ffffffffffffffff81111561051d57fe5b610530601f8201601f1916602001610c85565b915080825283602082850101111561054757600080fd5b8060208401602084013760009082016020015292915050565b60006101c0808385031215610573578182fd5b61057c81610c85565b915050610588826104d2565b8152610596602083016104d2565b60208201526105a7604083016104e9565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b6000610480828403121561063e578081fd5b6106496102e0610c85565b9050610654826104d2565b8152610662602083016104d2565b6020820152610673604083016104e9565b6040820152610684606083016104e9565b6060820152610695608083016104e9565b60808201526106a660a083016104e9565b60a082015260c082013567ffffffffffffffff8111156106c557600080fd5b6106d1848285016104f9565b60c08301525060e08281013590820152610100808301359082015261012080830135908201526101408083013590820152610160808301359082015261018080830135908201526101a080830135908201526101c080830135908201526101e08083013590820152610200808301359082015261022080830135908201526102408083013590820152610260808301359082015261028080830135908201526102a080830135908201526102c061078a84828501610560565b9082015292915050565b600080600061020084860312156107a9578283fd5b6107b2846104d2565b92506107c18560208601610560565b91506101e084013567ffffffffffffffff8111156107dd578182fd5b6107e98682870161062c565b9150509250925092565b600060208284031215610804578081fd5b813567ffffffffffffffff8082111561081b578283fd5b90830190610260828603121561082f578283fd5b60405160c08101818110838211171561084457fe5b604052610850836104d2565b815261085e602084016104e9565b602082015260408301356040820152606083013560608201526108848660808501610560565b60808201526102408301358281111561089b578485fd5b6108a78782860161062c565b60a08301525095945050505050565b6001600160a01b03169052565b15159052565b60008151808452815b818110156108ee576020818501810151868301820152016108d2565b818111156108ff5782602083870101525b50601f01601f19169290920160200192915050565b61091f8282516108b6565b602081015161093160208401826108b6565b50604081015161094460408401826108c3565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6001600160a01b039384168152602081019290925290911660408201526080606082018190526006908201526565786973747360d01b60a082015260c00190565b6001600160a01b03938416815260208101929092529091166040820152608060608201819052600690820152656c616d62646160d01b60a082015260c00190565b6001600160a01b0393841681526020810192909252909116604082015260806060820181905260039082015262796e6160e81b60a082015260c00190565b6001600160a01b03938416815260208101929092529091166040820152608060608201819052600c908201526b1dd85cd4195b985b1a5e995960a21b60a082015260c00190565b901515815260200190565b60006020825261028060018060a01b03845116602084015260208401511515604084015260408401516060840152606084015160808401526080840151610b1660a0850182610914565b5060a08401516102608081860152610b3183860183516108b6565b60208201516102a0610b45818801836108b6565b604084015191506102c0610b5b818901846108c3565b60608501519250610b706102e08901846108c3565b60808501519250610b856103008901846108c3565b60a08501519250610b9a6103208901846108c3565b60c08501519250610480806103408a0152610bb96107008a01856108c9565b60e08701516103608b01526101008701516103808b01526101208701516103a08b01526101408701516103c08b01526101608701516103e08b01526101808701516104008b01526101a08701516104208b01526101c08701516104408b01526101e08701516104608b0152610200870151918a01919091526102208601516104a08a01526102408601516104c08a0152848601516104e08a01529585015161050089015290840151610520880152830151939050610c7b610540870185610914565b9695505050505050565b60405181810167ffffffffffffffff81118282101715610ca157fe5b60405291905056fea2646970667358221220b4d58160afdfb35b13bc0e389a79bd3f871d60b3d71f526f537ba3edf20ca5a364736f6c63430007020033";
  var deployedBytecode$c = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327a4eb4d14610046578063ccaf715d1461006f578063e2ff8d6614610084575b600080fd5b610059610054366004610794565b6100a4565b6040516100669190610acc565b60405180910390f35b61008261007d3660046107f3565b610186565b005b610097610092366004610794565b6102aa565b6040516100669190610ac1565b6100ac61033b565b6001600160a01b03841681526080810183905260a081018290526100d18484846102bf565b1561017f578251610140830151604051610110926100f592909188906020016109fb565b604051602081830303815290604052805190602001206102df565b604080830191909152835161014084015191516101519261013692918890602001610a7a565b604051602081830303815290604052805190602001206102f4565b15156020808301919091528351610140840151604051610179936100f5939291899101610a3c565b60608201525b9392505050565b60808101515160a0820151610140015182516040516101cf936101af9390929091602001610a7a565b604051602081830303815290604052805190602001208260200151610309565b60808101515160a082015161014001518251604051610218936101f893909290916020016109fb565b604051602081830303815290604052805190602001208260400151610329565b60808101515160a082015161014001518251604051610261936102419390929091602001610a3c565b604051602081830303815290604052805190602001208260600151610329565b60808101515160a0820151610140015182516040516102a79361028a93909290916020016109ba565b604051602081830303815290604052805190602001206001610309565b50565b60006102b78484846102bf565b949350505050565b81516101408201516040516000926102b7926101369288906020016109ba565b6000818152600560205260409020545b919050565b60009081526001602052604090205460ff1690565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526005602052604090912055565b6040518060c0016040528060006001600160a01b031681526020016000151581526020016000815260200160008152602001610375610387565b815260200161038261040a565b905290565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806102e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160001515815260200160001515815260200160001515815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001610382610387565b80356001600160a01b03811681146102ef57600080fd5b803580151581146102ef57600080fd5b600082601f830112610509578081fd5b813567ffffffffffffffff81111561051d57fe5b610530601f8201601f1916602001610c85565b915080825283602082850101111561054757600080fd5b8060208401602084013760009082016020015292915050565b60006101c0808385031215610573578182fd5b61057c81610c85565b915050610588826104d2565b8152610596602083016104d2565b60208201526105a7604083016104e9565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b6000610480828403121561063e578081fd5b6106496102e0610c85565b9050610654826104d2565b8152610662602083016104d2565b6020820152610673604083016104e9565b6040820152610684606083016104e9565b6060820152610695608083016104e9565b60808201526106a660a083016104e9565b60a082015260c082013567ffffffffffffffff8111156106c557600080fd5b6106d1848285016104f9565b60c08301525060e08281013590820152610100808301359082015261012080830135908201526101408083013590820152610160808301359082015261018080830135908201526101a080830135908201526101c080830135908201526101e08083013590820152610200808301359082015261022080830135908201526102408083013590820152610260808301359082015261028080830135908201526102a080830135908201526102c061078a84828501610560565b9082015292915050565b600080600061020084860312156107a9578283fd5b6107b2846104d2565b92506107c18560208601610560565b91506101e084013567ffffffffffffffff8111156107dd578182fd5b6107e98682870161062c565b9150509250925092565b600060208284031215610804578081fd5b813567ffffffffffffffff8082111561081b578283fd5b90830190610260828603121561082f578283fd5b60405160c08101818110838211171561084457fe5b604052610850836104d2565b815261085e602084016104e9565b602082015260408301356040820152606083013560608201526108848660808501610560565b60808201526102408301358281111561089b578485fd5b6108a78782860161062c565b60a08301525095945050505050565b6001600160a01b03169052565b15159052565b60008151808452815b818110156108ee576020818501810151868301820152016108d2565b818111156108ff5782602083870101525b50601f01601f19169290920160200192915050565b61091f8282516108b6565b602081015161093160208401826108b6565b50604081015161094460408401826108c3565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6001600160a01b039384168152602081019290925290911660408201526080606082018190526006908201526565786973747360d01b60a082015260c00190565b6001600160a01b03938416815260208101929092529091166040820152608060608201819052600690820152656c616d62646160d01b60a082015260c00190565b6001600160a01b0393841681526020810192909252909116604082015260806060820181905260039082015262796e6160e81b60a082015260c00190565b6001600160a01b03938416815260208101929092529091166040820152608060608201819052600c908201526b1dd85cd4195b985b1a5e995960a21b60a082015260c00190565b901515815260200190565b60006020825261028060018060a01b03845116602084015260208401511515604084015260408401516060840152606084015160808401526080840151610b1660a0850182610914565b5060a08401516102608081860152610b3183860183516108b6565b60208201516102a0610b45818801836108b6565b604084015191506102c0610b5b818901846108c3565b60608501519250610b706102e08901846108c3565b60808501519250610b856103008901846108c3565b60a08501519250610b9a6103208901846108c3565b60c08501519250610480806103408a0152610bb96107008a01856108c9565b60e08701516103608b01526101008701516103808b01526101208701516103a08b01526101408701516103c08b01526101608701516103e08b01526101808701516104008b01526101a08701516104208b01526101c08701516104408b01526101e08701516104608b0152610200870151918a01919091526102208601516104a08a01526102408601516104c08a0152848601516104e08a01529585015161050089015290840151610520880152830151939050610c7b610540870185610914565b9695505050505050565b60405181810167ffffffffffffffff81118282101715610ca157fe5b60405291905056fea2646970667358221220b4d58160afdfb35b13bc0e389a79bd3f871d60b3d71f526f537ba3edf20ca5a364736f6c63430007020033";
  var linkReferences$c = {
  };
  var deployedLinkReferences$c = {
  };
  var InformationalVoteBallotContract = {
  	_format: _format$c,
  	contractName: contractName$c,
  	sourceName: sourceName$c,
  	abi: abi$c,
  	bytecode: bytecode$c,
  	deployedBytecode: deployedBytecode$c,
  	linkReferences: linkReferences$c,
  	deployedLinkReferences: deployedLinkReferences$c
  };

  const cache$9 = {};
  const prefix$b = '@elastic-dao/sdk - InformationalVoteBallot';

  const isInformationalVoteBallot = (thing) =>
    thing &&
    typeof thing === 'object' &&
    thing instanceof InformationalVoteBallot;
  const validateIsInformationalVoteBallot = (thing) => {
    const message = 'not an InformationalVoteBallot';
    validate(isInformationalVoteBallot(thing), { message, prefix: prefix$b });
  };

  class InformationalVoteBallot extends ElasticModel {
    constructor(
      sdk,
      { ballotModelAddress, lambda, settings, vote, voter, wasPenalized, yna },
    ) {
      super(sdk);
      this.id = `${settings.uuid}|${vote.index}|${voter}`.toLowerCase();
      cache$9[this.id] = {
        ballotModelAddress,
        lambda,
        settings,
        vote,
        voter,
        wasPenalized,
        yna,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$b });
      return sdk.contract({ abi: InformationalVoteBallotContract.abi, address });
    }

    static async deserialize(sdk, voter, settings, vote) {
      utils$1.validateIsAddress(voter, { prefix: prefix$b });
      validateIsInformationalVote(vote);
      validateIsInformationalVoteSettings(settings);

      const ballotModelAddress = await settings.manager.ballotModelAddress();
      const informationalVoteBallotModel = this.contract(sdk, ballotModelAddress);

      const {
        lambda,
        wasPenalized,
        yna,
      } = await informationalVoteBallotModel.deserialize(
        voter,
        settings.toObject(false),
        vote.toObject(false),
      );

      return new InformationalVoteBallot({
        ballotModelAddress,
        lambda,
        settings,
        vote,
        voter,
        wasPenalized,
        yna,
      });
    }

    // Getters

    get address() {
      return cache$9[this.id].ballotModelAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get lambda() {
      return this.toBigNumber(cache$9[this.id].lambda);
    }

    get settings() {
      return cache$9[this.id].settings;
    }

    get vote() {
      return cache$9[this.id].vote;
    }

    get voter() {
      return cache$9[this.id].voter;
    }

    get wasPenalized() {
      return cache$9[this.id].wasPenalized;
    }

    get yna() {
      return this.toNumber(cache$9[this.id].yna);
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(
        this.sdk,
        this.voter,
        this.settings,
        this.vote,
      );
    }

    toObject(includeNested = true) {
      const { id, settings, vote } = this;

      const obj = {
        ...cache$9[id],
        id,
        settings: settings.toObject(false),
        vote: vote.toObject(false),
      };

      delete obj.ballotModelAddress;

      if (includeNested === false) {
        delete obj.settings;
        delete obj.vote;
      }

      return this.sanitize(obj);
    }
  }

  var _format$d = "hh-sol-artifact-1";
  var contractName$d = "InformationalVoteFactory";
  var sourceName$d = "src/modules/InformationalVote/Factory.sol";
  var abi$d = [
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "address",
  				name: "managerAddress",
  				type: "address"
  			}
  		],
  		name: "ManagerDeployed",
  		type: "event"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_ballotModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address payable",
  				name: "_elasticDAOAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_settingsModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_voteModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_votingTokenAddress",
  				type: "address"
  			},
  			{
  				internalType: "bool",
  				name: "_hasPenalty",
  				type: "bool"
  			},
  			{
  				internalType: "uint256[10]",
  				name: "_settings",
  				type: "uint256[10]"
  			}
  		],
  		name: "deployManager",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$d = "0x608060405234801561001057600080fd5b5061252f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631aded75414610030575b600080fd5b61004361003e366004610190565b610045565b005b600087868660405161005690610183565b61006293929190610287565b604051809103906000f08015801561007e573d6000803e3d6000fd5b50604051631ac0ab5d60e31b81529091506001600160a01b0382169063d6055ae8906100b2908790879087906004016102aa565b600060405180830381600087803b1580156100cc57600080fd5b505af11580156100e0573d6000803e3d6000fd5b5050604051630181bb0b60e01b81528992506001600160a01b0383169150630181bb0b906101129085906004016102f9565b600060405180830381600087803b15801561012c57600080fd5b505af1158015610140573d6000803e3d6000fd5b50506040516001600160a01b03851692507f5caf3d7ccd76ce2fb019663b95a98e88bcc4fe4330e687c78ea5882daccab9ff9150600090a2505050505050505050565b61219f8061035b83390190565b600080600080600080600061020080898b0312156101ac578384fd5b88356101b781610342565b97506020898101356101c881610342565b975060408a01356101d881610342565b965060608a01356101e881610342565b955060808a01356101f881610342565b945060a08a0135801515811461020c578485fd5b935060df8a018b1361021c578283fd5b604051610140810181811067ffffffffffffffff8211171561023a57fe5b6040528060c08c01848d018e1015610250578586fd5b8594505b600a851015610273578035825260019490940193908301908301610254565b505080935050505092959891949750929550565b6001600160a01b0393841681529183166020830152909116604082015260600190565b6001600160a01b0384168152821515602080830191909152610180820190604083018460005b600a8110156102ed578151835291830191908301906001016102d0565b50505050949350505050565b6001600160a01b039190911681526040602082018190526017908201527f496e666f726d6174696f6e616c566f74654d6f64756c65000000000000000000606082015260800190565b6001600160a01b038116811461035757600080fd5b5056fe60806040523480156200001157600080fd5b506040516200219f3803806200219f83398101604081905262000034916200009d565b600080546001600160a01b039485166001600160a01b0319918216179091556002805460018054958716959093169490941790915592166001600160a81b0319909116179055620000e6565b80516001600160a01b03811681146200009857600080fd5b919050565b600080600060608486031215620000b2578283fd5b620000bd8462000080565b9250620000cd6020850162000080565b9150620000dd6040850162000080565b90509250925092565b6120a980620000f66000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063478eadbe11610066578063478eadbe146100fe578063743812131461011357806385b4bb531461011b578063d6055ae814610130578063e1faaae81461014357610093565b8063083964b1146100985780630c09135b146100ad578063158ef93e146100c05780634541c853146100de575b600080fd5b6100ab6100a63660046117f7565b61014b565b005b6100ab6100bb366004611743565b610615565b6100c861099a565b6040516100d59190611ab1565b60405180910390f35b6100f16100ec366004611505565b6109aa565b6040516100d59190611fb9565b610106610c95565b6040516100d59190611a49565b610106610ca4565b610123610cb3565b6040516100d59190611f97565b6100ab61013e36600461143f565b610cc8565b610106610e27565b610153611169565b61015b610e36565b90506101678382610ebf565b61018c5760405162461bcd60e51b815260040161018390611ef6565b60405180910390fd5b6101946111ec565b61019e8483610f4b565b60a0810151909150156101c35760405162461bcd60e51b815260040161018390611acf565b80608001516101e45760405162461bcd60e51b815260040161018390611c61565b6101ed81610fd9565b6102095760405162461bcd60e51b815260040161018390611c61565b600383106102295760405162461bcd60e51b815260040161018390611d60565b6020810151604051633e174aaf60e01b81526000906001600160a01b03831690633e174aaf9061025d903390600401611a49565b60206040518083038186803b15801561027557600080fd5b505afa158015610289573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ad919061172b565b61028084015160405163046deee960e01b81529192506000916001600160a01b0385169163046deee9916102e5913391600401611a5d565b60206040518083038186803b1580156102fd57600080fd5b505afa158015610311573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610335919061172b565b905081811015610343578091505b8184610160015110156103595783610160015191505b856103785761036d846102a0015183611062565b6102a08501526103af565b856001141561039b57610390846101e0015183611062565b6101e08501526103af565b6103a98460e0015183611062565b60e08501525b60006103d26103c8866102a00151876101e00151611062565b8660e00151611062565b90506000846001600160a01b03166378b61f226040518163ffffffff1660e01b815260040160206040518083038186803b15801561040f57600080fd5b505afa158015610423573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610447919061172b565b9050600061045a82886102200151611087565b905080831061046b57600160608801525b600061047c83896101000151611087565b905080841061048d57600160a08901525b6104956112b9565b338152608081018a905260a081018990526040808201889052606082018c9052600054905163ccaf715d60e01b81526001600160a01b039091169063ccaf715d906104e4908490600401611f2d565b600060405180830381600087803b1580156104fe57600080fd5b505af1158015610512573d6000803e3d6000fd5b50506002546040516368f0460f60e01b81526001600160a01b0390911692506368f0460f9150610546908c90600401611fa6565b600060405180830381600087803b15801561056057600080fd5b505af1158015610574573d6000803e3d6000fd5b50505050876001600160a01b031663528c198a336105978a8d6102600151611087565b6040518363ffffffff1660e01b81526004016105b4929190611a5d565b602060405180830381600087803b1580156105ce57600080fd5b505af11580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060691906114e9565b50505050505050505050505050565b61061d611169565b610625610e36565b90506106318382610ebf565b61064d5760405162461bcd60e51b815260040161018390611ef6565b6106556111ec565b61065f8483610f4b565b60a0810151909150156106845760405162461bcd60e51b815260040161018390611dcd565b6080810151156106a65760405162461bcd60e51b815260040161018390611eab565b6060810151156106c85760405162461bcd60e51b815260040161018390611bb8565b80604001516106e95760405162461bcd60e51b815260040161018390611d1b565b6000805460208301516001600160a01b03909116915b855181101561099157826001600160a01b031663e2ff8d6687838151811061072357fe5b602002602001015187876040518463ffffffff1660e01b815260040161074b93929190611a76565b60206040518083038186803b15801561076357600080fd5b505afa158015610777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079b91906114e9565b61097f576107a76112b9565b8682815181106107b357fe5b6020908102919091018101516001600160a01b0390811683526080830188905260a0830187905260019183019190915287516000916108819190861690633e174aaf908b908790811061080257fe5b60200260200101516040518263ffffffff1660e01b81526004016108269190611a49565b60206040518083038186803b15801561083e57600080fd5b505afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610876919061172b565b876102000151611087565b60408084018290525163ccaf715d60e01b81529091506001600160a01b0386169063ccaf715d906108b6908590600401611f2d565b600060405180830381600087803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b50505050836001600160a01b031663ee7a7c0489858151811061090357fe5b6020026020010151836040518363ffffffff1660e01b8152600401610929929190611a5d565b602060405180830381600087803b15801561094357600080fd5b505af1158015610957573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097b91906114e9565b5050505b61098a816001611062565b90506106ff565b50505050505050565b600254600160a01b900460ff1681565b600254600090600160a01b900460ff166109d65760405162461bcd60e51b815260040161018390611b2c565b6109de611169565b6109e6610e36565b6020810151610140820151604051633e174aaf60e01b815292935090916001600160a01b03831690633e174aaf90610a22903390600401611a49565b60206040518083038186803b158015610a3a57600080fd5b505afa158015610a4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a72919061172b565b1015610a905760405162461bcd60e51b815260040161018390611c15565b8160e00151610a9f85436110bc565b1015610abd5760405162461bcd60e51b815260040161018390611e5d565b6002546001600160a01b0316610ad16111ec565b6102c08101849052338152604080850151151581830152600060608301819052600160808085019190915260a080850183905260c08086018c905260e08601849052610100860184905261012086018b9052918801516101408601528701516101608086019190915290870151610180808601919091526101e08501839052908701516102008501528601516102208401526101a0860151610260840152436102808401526020808701516001600160a01b03908116918501919091526102a084019190915290516368f0460f60e01b8152908316906368f0460f90610bbb908490600401611fa6565b600060405180830381600087803b158015610bd557600080fd5b505af1158015610be9573d6000803e3d6000fd5b505060015460405163e5910ae760e01b81526001600160a01b03909116925063e5910ae79150610c1d903090600401611a49565b600060405180830381600087803b158015610c3757600080fd5b505af1158015610c4b573d6000803e3d6000fd5b505050507f460e77e3c8455201c4722742a8a654c959331ac344ab1b2ecefdb2b500f129c8816101400151604051610c839190611fb9565b60405180910390a15050505092915050565b6001546001600160a01b031681565b6000546001600160a01b031681565b610cbb611169565b610cc3610e36565b905090565b600254600160a01b900460ff1615610cf25760405162461bcd60e51b815260040161018390611cbe565b6001546001600160a01b0316610d06611169565b3081526001600160a01b038516602082015283151560408201528260006020020151606082015260006080820152826001602002015160a0820152826002602002015160c0820152826003602002015160e08201528260046020020151610100820152826005602002015161012082015282600660200201516101408201528260076020020151610160820152826008602002015161018082015282600960200201516101a082015260405163e416649960e01b81526001600160a01b0383169063e416649990610ddb908490600401611f97565b600060405180830381600087803b158015610df557600080fd5b505af1158015610e09573d6000803e3d6000fd5b50506002805460ff60a01b1916600160a01b17905550505050505050565b6002546001600160a01b031681565b610e3e611169565b60015460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990610e6e903090600401611a49565b6101c06040518083038186803b158015610e8757600080fd5b505afa158015610e9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc39190611581565b600254604051634a52ae5960e01b81526000916001600160a01b031690634a52ae5990610ef29086908690600401611fc2565b60206040518083038186803b158015610f0a57600080fd5b505afa158015610f1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4291906114e9565b90505b92915050565b610f536111ec565b600254604051631d97355360e21b81526001600160a01b039091169063765cd54c90610f859086908690600401611fc2565b60006040518083038186803b158015610f9d57600080fd5b505afa158015610fb1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f42919081019061159d565b6000438261012001511161105957600060808301526002546040516368f0460f60e01b81526001600160a01b03909116906368f0460f9061101e908590600401611fa6565b600060405180830381600087803b15801561103857600080fd5b505af115801561104c573d6000803e3d6000fd5b505050506000905061105d565b5060015b919050565b600082820183811015610f425760405162461bcd60e51b815260040161018390611b81565b6000670de0b6b3a76400006110ad61109f85856110fe565b6706f05b59d3b20000611062565b816110b457fe5b049392505050565b6000610f4283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611138565b60008261110d57506000610f45565b8282028284828161111a57fe5b0414610f425760405162461bcd60e51b815260040161018390611e1c565b6000818484111561115c5760405162461bcd60e51b81526004016101839190611abc565b50508183035b9392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806102e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600015158152602001600015158152602001600015158152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016112b4611169565b905290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160008152602001600081526020016112f3611169565b81526020016112b46111ec565b803561105d8161204d565b805161105d8161204d565b805161105d81612065565b600082601f830112611331578081fd5b815161134461133f82611ffb565b611fd7565b915080825283602082850101111561135b57600080fd5b61136c81602084016020860161201d565b5092915050565b60006101c0808385031215611386578182fd5b61138f81611fd7565b91505061139b8261130b565b81526113a96020830161130b565b60208201526113ba60408301611316565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b6000806000610180808587031215611455578384fd5b84356114608161204d565b935060208581013561147181612065565b9350605f86018713611481578283fd5b604051610140810181811067ffffffffffffffff8211171561149f57fe5b8060405250806040880189858a0111156114b7578586fd5b8594505b600a8510156114da5780358252600194909401939083019083016114bb565b50508093505050509250925092565b6000602082840312156114fa578081fd5b8151610f4281612065565b60008060408385031215611517578182fd5b823567ffffffffffffffff81111561152d578283fd5b8301601f8101851361153d578283fd5b803561154b61133f82611ffb565b81815286602083850101111561155f578485fd5b8160208401602083013790810160209081019490945295939092013593505050565b60006101c08284031215611593578081fd5b610f428383611373565b6000602082840312156115ae578081fd5b815167ffffffffffffffff808211156115c5578283fd5b9083019061048082860312156115d9578283fd5b6115e46102e0611fd7565b6115ed8361130b565b81526115fb6020840161130b565b602082015261160c60408401611316565b604082015261161d60608401611316565b606082015261162e60808401611316565b608082015261163f60a08401611316565b60a082015260c083015182811115611655578485fd5b61166187828601611321565b60c08301525060e08381015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e08084015190820152610200808401519082015261022080840151908201526102408084015190820152610260808401519082015261028080840151908201526102a080840151908201526102c0915061171c86838501611373565b91810191909152949350505050565b60006020828403121561173c578081fd5b5051919050565b60008060408385031215611755578182fd5b8235915060208084013567ffffffffffffffff80821115611774578384fd5b818601915086601f830112611787578384fd5b81358181111561179357fe5b83810291506117a3848301611fd7565b8181528481019084860184860187018b10156117bd578788fd5b8795505b838610156117e6576117d281611300565b8352600195909501949186019186016117c1565b508096505050505050509250929050565b60008060408385031215611809578182fd5b50508035926020909101359150565b6001600160a01b03169052565b15159052565b6000815180845261184381602086016020860161201d565b601f01601f19169290920160200192915050565b611862828251611818565b60208101516118746020840182611818565b5060408101516118876040840182611825565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b600061048061190d848451611818565b602083015161191f6020860182611818565b5060408301516119326040860182611825565b5060608301516119456060860182611825565b5060808301516119586080860182611825565b5060a083015161196b60a0860182611825565b5060c08301518160c08601526119838286018261182b565b60e08581015190870152610100808601519087015261012080860151908701526101408086015190870152610160808601519087015261018080860151908701526101a080860151908701526101c080860151908701526101e08086015190870152610200808601519087015261022080860151908701526102408086015190870152610260808601519087015261028080860151908701526102a080860151908701526102c0808601519193509150611a3f82870182611857565b5090949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03841681526000610200611a946020840186611857565b806101e0840152611aa7818401856118fd565b9695505050505050565b901515815260200190565b600060208252610f42602083018461182b565b60208082526038908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520686160408201527f7320616c7265616479206265656e20617070726f7665642e0000000000000000606082015260800190565b60208082526035908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f7465204d616040820152741b9859d95c881b9bdd081a5b9a5d1a585b1a5e9959605a1b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252603b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201527f746520746861742068617320726561636865642071756f72756d2e0000000000606082015260800190565b6020808252602c908201527f456c617374696344414f3a204e6f7420656e6f7567682073686172657320746f60408201526b2063726561746520766f746560a01b606082015260800190565b60208082526039908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520697360408201527f206e6f7420616374697665206f722068617320656e6465642e00000000000000606082015260800190565b6020808252603b908201527f456c617374696344414f3a20496e666f726d6174696f6e616c20566f7465204d60408201527f616e6167657220616c726561647920696e697469616c697a65642e0000000000606082015260800190565b60208082526025908201527f456c617374696344414f3a205468697320766f746520686173206e6f2070656e60408201526430b63a3c9760d91b606082015260800190565b60208082526047908201527f456c617374696344414f3a20496e76616c6964205f796e612076616c75652e2060408201527f557365203020666f72207965732c203120666f72206e6f2c203220666f7220616060820152663139ba30b4b71760c91b608082015260a00190565b6020808252602f908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201526e3a32903a3430ba103830b9b9b2b21760891b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602e908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520706560408201526d1c9a5bd9081d1bdbc81cda1bdc9d60921b606082015260800190565b6020808252602b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a6520616e206160408201526a31ba34bb32903b37ba329760a91b606082015260800190565b6020808252601c908201527f456c617374696344414f3a20496e76616c696420766f74652069642e00000000604082015260600190565b60006020825260018060a01b03835116602083015260208301511515604083015260408301516060830152606083015160808301526080830151611f7460a0840182611857565b5060a083015161026083810152611f8f6102808401826118fd565b949350505050565b6101c08101610f458284611857565b600060208252610f4260208301846118fd565b90815260200190565b8281526101e081016111626020830184611857565b60405181810167ffffffffffffffff81118282101715611ff357fe5b604052919050565b600067ffffffffffffffff82111561200f57fe5b50601f01601f191660200190565b60005b83811015612038578181015183820152602001612020565b83811115612047576000848401525b50505050565b6001600160a01b038116811461206257600080fd5b50565b801515811461206257600080fdfea2646970667358221220c0f44117f511920d15c9c9e32d5e564f6b72a18e3b9cf7bec464756ffa116a6264736f6c63430007020033a264697066735822122059b1d38efae6847d3681d6b362353e7d198d384756f2fb885548ee193508978364736f6c63430007020033";
  var deployedBytecode$d = "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80631aded75414610030575b600080fd5b61004361003e366004610190565b610045565b005b600087868660405161005690610183565b61006293929190610287565b604051809103906000f08015801561007e573d6000803e3d6000fd5b50604051631ac0ab5d60e31b81529091506001600160a01b0382169063d6055ae8906100b2908790879087906004016102aa565b600060405180830381600087803b1580156100cc57600080fd5b505af11580156100e0573d6000803e3d6000fd5b5050604051630181bb0b60e01b81528992506001600160a01b0383169150630181bb0b906101129085906004016102f9565b600060405180830381600087803b15801561012c57600080fd5b505af1158015610140573d6000803e3d6000fd5b50506040516001600160a01b03851692507f5caf3d7ccd76ce2fb019663b95a98e88bcc4fe4330e687c78ea5882daccab9ff9150600090a2505050505050505050565b61219f8061035b83390190565b600080600080600080600061020080898b0312156101ac578384fd5b88356101b781610342565b97506020898101356101c881610342565b975060408a01356101d881610342565b965060608a01356101e881610342565b955060808a01356101f881610342565b945060a08a0135801515811461020c578485fd5b935060df8a018b1361021c578283fd5b604051610140810181811067ffffffffffffffff8211171561023a57fe5b6040528060c08c01848d018e1015610250578586fd5b8594505b600a851015610273578035825260019490940193908301908301610254565b505080935050505092959891949750929550565b6001600160a01b0393841681529183166020830152909116604082015260600190565b6001600160a01b0384168152821515602080830191909152610180820190604083018460005b600a8110156102ed578151835291830191908301906001016102d0565b50505050949350505050565b6001600160a01b039190911681526040602082018190526017908201527f496e666f726d6174696f6e616c566f74654d6f64756c65000000000000000000606082015260800190565b6001600160a01b038116811461035757600080fd5b5056fe60806040523480156200001157600080fd5b506040516200219f3803806200219f83398101604081905262000034916200009d565b600080546001600160a01b039485166001600160a01b0319918216179091556002805460018054958716959093169490941790915592166001600160a81b0319909116179055620000e6565b80516001600160a01b03811681146200009857600080fd5b919050565b600080600060608486031215620000b2578283fd5b620000bd8462000080565b9250620000cd6020850162000080565b9150620000dd6040850162000080565b90509250925092565b6120a980620000f66000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063478eadbe11610066578063478eadbe146100fe578063743812131461011357806385b4bb531461011b578063d6055ae814610130578063e1faaae81461014357610093565b8063083964b1146100985780630c09135b146100ad578063158ef93e146100c05780634541c853146100de575b600080fd5b6100ab6100a63660046117f7565b61014b565b005b6100ab6100bb366004611743565b610615565b6100c861099a565b6040516100d59190611ab1565b60405180910390f35b6100f16100ec366004611505565b6109aa565b6040516100d59190611fb9565b610106610c95565b6040516100d59190611a49565b610106610ca4565b610123610cb3565b6040516100d59190611f97565b6100ab61013e36600461143f565b610cc8565b610106610e27565b610153611169565b61015b610e36565b90506101678382610ebf565b61018c5760405162461bcd60e51b815260040161018390611ef6565b60405180910390fd5b6101946111ec565b61019e8483610f4b565b60a0810151909150156101c35760405162461bcd60e51b815260040161018390611acf565b80608001516101e45760405162461bcd60e51b815260040161018390611c61565b6101ed81610fd9565b6102095760405162461bcd60e51b815260040161018390611c61565b600383106102295760405162461bcd60e51b815260040161018390611d60565b6020810151604051633e174aaf60e01b81526000906001600160a01b03831690633e174aaf9061025d903390600401611a49565b60206040518083038186803b15801561027557600080fd5b505afa158015610289573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ad919061172b565b61028084015160405163046deee960e01b81529192506000916001600160a01b0385169163046deee9916102e5913391600401611a5d565b60206040518083038186803b1580156102fd57600080fd5b505afa158015610311573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610335919061172b565b905081811015610343578091505b8184610160015110156103595783610160015191505b856103785761036d846102a0015183611062565b6102a08501526103af565b856001141561039b57610390846101e0015183611062565b6101e08501526103af565b6103a98460e0015183611062565b60e08501525b60006103d26103c8866102a00151876101e00151611062565b8660e00151611062565b90506000846001600160a01b03166378b61f226040518163ffffffff1660e01b815260040160206040518083038186803b15801561040f57600080fd5b505afa158015610423573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610447919061172b565b9050600061045a82886102200151611087565b905080831061046b57600160608801525b600061047c83896101000151611087565b905080841061048d57600160a08901525b6104956112b9565b338152608081018a905260a081018990526040808201889052606082018c9052600054905163ccaf715d60e01b81526001600160a01b039091169063ccaf715d906104e4908490600401611f2d565b600060405180830381600087803b1580156104fe57600080fd5b505af1158015610512573d6000803e3d6000fd5b50506002546040516368f0460f60e01b81526001600160a01b0390911692506368f0460f9150610546908c90600401611fa6565b600060405180830381600087803b15801561056057600080fd5b505af1158015610574573d6000803e3d6000fd5b50505050876001600160a01b031663528c198a336105978a8d6102600151611087565b6040518363ffffffff1660e01b81526004016105b4929190611a5d565b602060405180830381600087803b1580156105ce57600080fd5b505af11580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060691906114e9565b50505050505050505050505050565b61061d611169565b610625610e36565b90506106318382610ebf565b61064d5760405162461bcd60e51b815260040161018390611ef6565b6106556111ec565b61065f8483610f4b565b60a0810151909150156106845760405162461bcd60e51b815260040161018390611dcd565b6080810151156106a65760405162461bcd60e51b815260040161018390611eab565b6060810151156106c85760405162461bcd60e51b815260040161018390611bb8565b80604001516106e95760405162461bcd60e51b815260040161018390611d1b565b6000805460208301516001600160a01b03909116915b855181101561099157826001600160a01b031663e2ff8d6687838151811061072357fe5b602002602001015187876040518463ffffffff1660e01b815260040161074b93929190611a76565b60206040518083038186803b15801561076357600080fd5b505afa158015610777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079b91906114e9565b61097f576107a76112b9565b8682815181106107b357fe5b6020908102919091018101516001600160a01b0390811683526080830188905260a0830187905260019183019190915287516000916108819190861690633e174aaf908b908790811061080257fe5b60200260200101516040518263ffffffff1660e01b81526004016108269190611a49565b60206040518083038186803b15801561083e57600080fd5b505afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610876919061172b565b876102000151611087565b60408084018290525163ccaf715d60e01b81529091506001600160a01b0386169063ccaf715d906108b6908590600401611f2d565b600060405180830381600087803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b50505050836001600160a01b031663ee7a7c0489858151811061090357fe5b6020026020010151836040518363ffffffff1660e01b8152600401610929929190611a5d565b602060405180830381600087803b15801561094357600080fd5b505af1158015610957573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097b91906114e9565b5050505b61098a816001611062565b90506106ff565b50505050505050565b600254600160a01b900460ff1681565b600254600090600160a01b900460ff166109d65760405162461bcd60e51b815260040161018390611b2c565b6109de611169565b6109e6610e36565b6020810151610140820151604051633e174aaf60e01b815292935090916001600160a01b03831690633e174aaf90610a22903390600401611a49565b60206040518083038186803b158015610a3a57600080fd5b505afa158015610a4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a72919061172b565b1015610a905760405162461bcd60e51b815260040161018390611c15565b8160e00151610a9f85436110bc565b1015610abd5760405162461bcd60e51b815260040161018390611e5d565b6002546001600160a01b0316610ad16111ec565b6102c08101849052338152604080850151151581830152600060608301819052600160808085019190915260a080850183905260c08086018c905260e08601849052610100860184905261012086018b9052918801516101408601528701516101608086019190915290870151610180808601919091526101e08501839052908701516102008501528601516102208401526101a0860151610260840152436102808401526020808701516001600160a01b03908116918501919091526102a084019190915290516368f0460f60e01b8152908316906368f0460f90610bbb908490600401611fa6565b600060405180830381600087803b158015610bd557600080fd5b505af1158015610be9573d6000803e3d6000fd5b505060015460405163e5910ae760e01b81526001600160a01b03909116925063e5910ae79150610c1d903090600401611a49565b600060405180830381600087803b158015610c3757600080fd5b505af1158015610c4b573d6000803e3d6000fd5b505050507f460e77e3c8455201c4722742a8a654c959331ac344ab1b2ecefdb2b500f129c8816101400151604051610c839190611fb9565b60405180910390a15050505092915050565b6001546001600160a01b031681565b6000546001600160a01b031681565b610cbb611169565b610cc3610e36565b905090565b600254600160a01b900460ff1615610cf25760405162461bcd60e51b815260040161018390611cbe565b6001546001600160a01b0316610d06611169565b3081526001600160a01b038516602082015283151560408201528260006020020151606082015260006080820152826001602002015160a0820152826002602002015160c0820152826003602002015160e08201528260046020020151610100820152826005602002015161012082015282600660200201516101408201528260076020020151610160820152826008602002015161018082015282600960200201516101a082015260405163e416649960e01b81526001600160a01b0383169063e416649990610ddb908490600401611f97565b600060405180830381600087803b158015610df557600080fd5b505af1158015610e09573d6000803e3d6000fd5b50506002805460ff60a01b1916600160a01b17905550505050505050565b6002546001600160a01b031681565b610e3e611169565b60015460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990610e6e903090600401611a49565b6101c06040518083038186803b158015610e8757600080fd5b505afa158015610e9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc39190611581565b600254604051634a52ae5960e01b81526000916001600160a01b031690634a52ae5990610ef29086908690600401611fc2565b60206040518083038186803b158015610f0a57600080fd5b505afa158015610f1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4291906114e9565b90505b92915050565b610f536111ec565b600254604051631d97355360e21b81526001600160a01b039091169063765cd54c90610f859086908690600401611fc2565b60006040518083038186803b158015610f9d57600080fd5b505afa158015610fb1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f42919081019061159d565b6000438261012001511161105957600060808301526002546040516368f0460f60e01b81526001600160a01b03909116906368f0460f9061101e908590600401611fa6565b600060405180830381600087803b15801561103857600080fd5b505af115801561104c573d6000803e3d6000fd5b505050506000905061105d565b5060015b919050565b600082820183811015610f425760405162461bcd60e51b815260040161018390611b81565b6000670de0b6b3a76400006110ad61109f85856110fe565b6706f05b59d3b20000611062565b816110b457fe5b049392505050565b6000610f4283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611138565b60008261110d57506000610f45565b8282028284828161111a57fe5b0414610f425760405162461bcd60e51b815260040161018390611e1c565b6000818484111561115c5760405162461bcd60e51b81526004016101839190611abc565b50508183035b9392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806102e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600015158152602001600015158152602001600015158152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016112b4611169565b905290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160008152602001600081526020016112f3611169565b81526020016112b46111ec565b803561105d8161204d565b805161105d8161204d565b805161105d81612065565b600082601f830112611331578081fd5b815161134461133f82611ffb565b611fd7565b915080825283602082850101111561135b57600080fd5b61136c81602084016020860161201d565b5092915050565b60006101c0808385031215611386578182fd5b61138f81611fd7565b91505061139b8261130b565b81526113a96020830161130b565b60208201526113ba60408301611316565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b6000806000610180808587031215611455578384fd5b84356114608161204d565b935060208581013561147181612065565b9350605f86018713611481578283fd5b604051610140810181811067ffffffffffffffff8211171561149f57fe5b8060405250806040880189858a0111156114b7578586fd5b8594505b600a8510156114da5780358252600194909401939083019083016114bb565b50508093505050509250925092565b6000602082840312156114fa578081fd5b8151610f4281612065565b60008060408385031215611517578182fd5b823567ffffffffffffffff81111561152d578283fd5b8301601f8101851361153d578283fd5b803561154b61133f82611ffb565b81815286602083850101111561155f578485fd5b8160208401602083013790810160209081019490945295939092013593505050565b60006101c08284031215611593578081fd5b610f428383611373565b6000602082840312156115ae578081fd5b815167ffffffffffffffff808211156115c5578283fd5b9083019061048082860312156115d9578283fd5b6115e46102e0611fd7565b6115ed8361130b565b81526115fb6020840161130b565b602082015261160c60408401611316565b604082015261161d60608401611316565b606082015261162e60808401611316565b608082015261163f60a08401611316565b60a082015260c083015182811115611655578485fd5b61166187828601611321565b60c08301525060e08381015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e08084015190820152610200808401519082015261022080840151908201526102408084015190820152610260808401519082015261028080840151908201526102a080840151908201526102c0915061171c86838501611373565b91810191909152949350505050565b60006020828403121561173c578081fd5b5051919050565b60008060408385031215611755578182fd5b8235915060208084013567ffffffffffffffff80821115611774578384fd5b818601915086601f830112611787578384fd5b81358181111561179357fe5b83810291506117a3848301611fd7565b8181528481019084860184860187018b10156117bd578788fd5b8795505b838610156117e6576117d281611300565b8352600195909501949186019186016117c1565b508096505050505050509250929050565b60008060408385031215611809578182fd5b50508035926020909101359150565b6001600160a01b03169052565b15159052565b6000815180845261184381602086016020860161201d565b601f01601f19169290920160200192915050565b611862828251611818565b60208101516118746020840182611818565b5060408101516118876040840182611825565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b600061048061190d848451611818565b602083015161191f6020860182611818565b5060408301516119326040860182611825565b5060608301516119456060860182611825565b5060808301516119586080860182611825565b5060a083015161196b60a0860182611825565b5060c08301518160c08601526119838286018261182b565b60e08581015190870152610100808601519087015261012080860151908701526101408086015190870152610160808601519087015261018080860151908701526101a080860151908701526101c080860151908701526101e08086015190870152610200808601519087015261022080860151908701526102408086015190870152610260808601519087015261028080860151908701526102a080860151908701526102c0808601519193509150611a3f82870182611857565b5090949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03841681526000610200611a946020840186611857565b806101e0840152611aa7818401856118fd565b9695505050505050565b901515815260200190565b600060208252610f42602083018461182b565b60208082526038908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520686160408201527f7320616c7265616479206265656e20617070726f7665642e0000000000000000606082015260800190565b60208082526035908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f7465204d616040820152741b9859d95c881b9bdd081a5b9a5d1a585b1a5e9959605a1b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252603b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201527f746520746861742068617320726561636865642071756f72756d2e0000000000606082015260800190565b6020808252602c908201527f456c617374696344414f3a204e6f7420656e6f7567682073686172657320746f60408201526b2063726561746520766f746560a01b606082015260800190565b60208082526039908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520697360408201527f206e6f7420616374697665206f722068617320656e6465642e00000000000000606082015260800190565b6020808252603b908201527f456c617374696344414f3a20496e666f726d6174696f6e616c20566f7465204d60408201527f616e6167657220616c726561647920696e697469616c697a65642e0000000000606082015260800190565b60208082526025908201527f456c617374696344414f3a205468697320766f746520686173206e6f2070656e60408201526430b63a3c9760d91b606082015260800190565b60208082526047908201527f456c617374696344414f3a20496e76616c6964205f796e612076616c75652e2060408201527f557365203020666f72207965732c203120666f72206e6f2c203220666f7220616060820152663139ba30b4b71760c91b608082015260a00190565b6020808252602f908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201526e3a32903a3430ba103830b9b9b2b21760891b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602e908201527f456c617374696344414f3a20496e666f726d6174696f6e616c566f746520706560408201526d1c9a5bd9081d1bdbc81cda1bdc9d60921b606082015260800190565b6020808252602b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a6520616e206160408201526a31ba34bb32903b37ba329760a91b606082015260800190565b6020808252601c908201527f456c617374696344414f3a20496e76616c696420766f74652069642e00000000604082015260600190565b60006020825260018060a01b03835116602083015260208301511515604083015260408301516060830152606083015160808301526080830151611f7460a0840182611857565b5060a083015161026083810152611f8f6102808401826118fd565b949350505050565b6101c08101610f458284611857565b600060208252610f4260208301846118fd565b90815260200190565b8281526101e081016111626020830184611857565b60405181810167ffffffffffffffff81118282101715611ff357fe5b604052919050565b600067ffffffffffffffff82111561200f57fe5b50601f01601f191660200190565b60005b83811015612038578181015183820152602001612020565b83811115612047576000848401525b50505050565b6001600160a01b038116811461206257600080fd5b50565b801515811461206257600080fdfea2646970667358221220c0f44117f511920d15c9c9e32d5e564f6b72a18e3b9cf7bec464756ffa116a6264736f6c63430007020033a264697066735822122059b1d38efae6847d3681d6b362353e7d198d384756f2fb885548ee193508978364736f6c63430007020033";
  var linkReferences$d = {
  };
  var deployedLinkReferences$d = {
  };
  var InformationalVoteFactoryContract = {
  	_format: _format$d,
  	contractName: contractName$d,
  	sourceName: sourceName$d,
  	abi: abi$d,
  	bytecode: bytecode$d,
  	deployedBytecode: deployedBytecode$d,
  	linkReferences: linkReferences$d,
  	deployedLinkReferences: deployedLinkReferences$d
  };

  const prefix$c = '@elastic-dao/sdk - InformationalVoteManager';

  class InformationalVoteManager extends Base {
    constructor(sdk, address) {
      super(sdk);
      utils$1.validateIsAddress(address, { prefix: prefix$c });
      this.address = address;
    }

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$c });
      return sdk.contract({ abi: InformationalVoteManagerContract.abi, address });
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    async applyPenalty(index, addressesToPenalize, overrides = {}) {
      utils$1.validateIsNumber(index, { prefix: prefix$c });

      for (let i = 0; i < addressesToPenalize.length; i += 1) {
        utils$1.validateIsAddress(addressesToPenalize[i], { prefix: prefix$c });
      }

      const manager = await this.contract();
      await manager.applyPenalty(
        index,
        addressesToPenalize,
        this.sanitizeOverrides(overrides),
      );

      return true;
    }

    async ballotModelAddress() {
      const manager = await this.contract;
      return manager.ballotModelAddress();
    }

    async castBallot(index, yna, overrides = {}) {
      utils$1.validateIsNumber(index, { prefix: prefix$c });
      utils$1.validateIsNumber(yna, { prefix: prefix$c });

      const manager = await this.contract;
      await manager.castBallot(index, yna, this.sanitizeOverrides(overrides));
      return true; // TODO: Return ballot model
    }

    async createVote(proposal, endOnBlock, overrides = {}) {
      utils$1.validateIsString(proposal, { prefix: prefix$c });
      utils$1.validateIsNumber(endOnBlock, { prefix: prefix$c });

      const manager = await this.contract;
      await manager.createVote(
        proposal,
        endOnBlock,
        this.sanitizeOverrides(overrides),
      );
      return true; // TODO: Return vote model
    }

    async getSettings() {
      return InformationalVoteSettings.deserialize(this);
    }

    async settingsModelAddress() {
      const manager = await this.contract;
      return manager.settingsModelAddress();
    }

    async voteModelAddress() {
      const manager = await this.contract;
      return manager.voteModelAddress();
    }
  }

  const prefix$d = '@elastic-dao/sdk - InformationalVoteFactory';

  class InformationalVoteFactory extends Base {
    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$d });
      return sdk.contract({ abi: InformationalVoteFactoryContract.abi, address });
    }

    get address() {
      return this.sdk.env.elasticDAO.modules.informationalVote.factoryAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    async deployManager(
      ballotModelAddress,
      elasticDAOAddress,
      settingsModelAddress,
      voteModelAddress,
      votingTokenAddress,
      hasPenalty,
      [
        approval,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
      ],
      overrides = {},
    ) {
      utils$1.validateIsAddress(ballotModelAddress, { prefix: prefix$d });
      utils$1.validateIsAddress(elasticDAOAddress, { prefix: prefix$d });
      utils$1.validateIsAddress(settingsModelAddress, { prefix: prefix$d });
      utils$1.validateIsAddress(voteModelAddress, { prefix: prefix$d });
      utils$1.validateIsAddress(votingTokenAddress, { prefix: prefix$d });

      const payload = [
        ballotModelAddress,
        elasticDAOAddress,
        settingsModelAddress,
        voteModelAddress,
        votingTokenAddress,
        hasPenalty,
        [
          this.toEthersBigNumber(approval, 18),
          this.toEthersBigNumber(maxSharesPerTokenHolder, 18),
          this.toEthersBigNumber(minBlocksForPenalty),
          this.toEthersBigNumber(minDurationInBlocks),
          this.toEthersBigNumber(minPenaltyInShares, 18),
          this.toEthersBigNumber(minRewardInShares, 18),
          this.toEthersBigNumber(minSharesToCreate, 18),
          this.toEthersBigNumber(penalty, 18),
          this.toEthersBigNumber(quorum, 18),
          this.toEthersBigNumber(reward, 18),
        ],
      ];
      const factory = await this.contract;

      const managerDeployedFilter = factory.filters.ManagerDeployed();
      const managerDeployedFilterPromise = new Promise(
        async (resolve, reject) => {
          let tx = {};

          const handler = ({ transactionHash, topics }) => {
            if (transactionHash === tx.hash) {
              this.sdk.provider.off(managerDeployedFilter, handler);
              resolve(`0x${topics[1].substring(26)}`);
            }
          };

          this.sdk.provider.on(managerDeployedFilter, handler);

          tx = await factory.deployManager(
            ...payload,
            this.sanitizeOverrides(overrides),
          );

          await tx.wait(2);
          reject();
        },
      );

      return new InformationalVoteManager(await managerDeployedFilterPromise);
    }
  }

  const InformationalVote$1 = InformationalVote;
  const InformationalVoteBallot$1 = InformationalVoteBallot;
  const InformationalVoteFactory$1 = InformationalVoteFactory;
  const InformationalVoteManager$1 = InformationalVoteManager;
  const InformationalVoteSettings$1 = InformationalVoteSettings;

  class Models extends Base {
    get InformationalVote() {
      return {
        contract: (...args) => InformationalVote$1.contract(this.sdk, ...args),
        deserialize: (...args) =>
          InformationalVote$1.deserialize(this.sdk, ...args),
      };
    }

    get InformationalVoteBallot() {
      return {
        contract: (...args) =>
          InformationalVoteBallot$1.contract(this.sdk, ...args),
        deserialize: (...args) =>
          InformationalVoteBallot$1.deserialize(this.sdk, ...args),
      };
    }

    get InformationalVoteSettings() {
      return {
        contract: (...args) =>
          InformationalVoteSettings$1.contract(this.sdk, ...args),
        deserialize: (...args) =>
          InformationalVoteSettings$1.deserialize(this.sdk, ...args),
        managerContract: (...args) =>
          InformationalVoteSettings$1.managerContract(this.sdk, ...args),
      };
    }
  }

  class InformationalVoteModule extends Base {
    get informationalVoteFactory() {
      return new InformationalVoteFactory$1(
        this.sdk,
        this.sdk.env.elasticDAO.modules.informationalVote.factoryAddress,
      );
    }

    get informationalVoteManager() {
      return new InformationalVoteManager$1(
        this.sdk,
        this.sdk.env.elasticDAO.modules.informationalVote.managerAddress,
      );
    }

    get models() {
      return new Models(this.sdk);
    }
  }

  var _format$e = "hh-sol-artifact-1";
  var contractName$e = "TransactionalVoteManager";
  var sourceName$e = "src/modules/TransactionalVote/Manager.sol";
  var abi$e = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_ballotModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_settingsModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address payable",
  				name: "_vaultAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_voteModelAddress",
  				type: "address"
  			}
  		],
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "index",
  				type: "uint256"
  			}
  		],
  		name: "CreateVote",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "bytes32",
  				name: "txHash",
  				type: "bytes32"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "payment",
  				type: "uint256"
  			}
  		],
  		name: "ExecutionFailure",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "bytes32",
  				name: "txHash",
  				type: "bytes32"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "payment",
  				type: "uint256"
  			}
  		],
  		name: "ExecutionSuccess",
  		type: "event"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			},
  			{
  				internalType: "address[]",
  				name: "_addressesToPenalize",
  				type: "address[]"
  			}
  		],
  		name: "applyPenalty",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "ballotModelAddress",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_yna",
  				type: "uint256"
  			}
  		],
  		name: "castBallot",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_to",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "_value",
  				type: "uint256"
  			},
  			{
  				internalType: "bytes",
  				name: "_data",
  				type: "bytes"
  			},
  			{
  				internalType: "enum Operation",
  				name: "_operation",
  				type: "uint8"
  			},
  			{
  				internalType: "uint256",
  				name: "_safeTxGas",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_baseGas",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_endOnBlock",
  				type: "uint256"
  			}
  		],
  		name: "createVote",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "domainSeparator",
  		outputs: [
  			{
  				internalType: "bytes32",
  				name: "",
  				type: "bytes32"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_gasToken",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "_gasPrice",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			}
  		],
  		name: "execute",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "success",
  				type: "bool"
  			}
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "getSettings",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct TransactionalVoteSettings.Instance",
  				name: "",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_votingTokenAddress",
  				type: "address"
  			},
  			{
  				internalType: "bool",
  				name: "_hasPenalty",
  				type: "bool"
  			},
  			{
  				internalType: "uint256[10]",
  				name: "_settings",
  				type: "uint256[10]"
  			}
  		],
  		name: "initialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "initialized",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "nonce",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "settingsModelAddress",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "vaultAddress",
  		outputs: [
  			{
  				internalType: "address payable",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		name: "voteModelAddress",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	}
  ];
  var bytecode$e = "0x60806040523480156200001157600080fd5b5060405162002d3738038062002d37833981016040819052620000349162000090565b600080546001600160a01b03199081166001600160a01b03968716179091556003805460018054841696881696909617909555600280549092169386169390931790556001600160a81b03199092169190921617905562000110565b60008060008060808587031215620000a6578384fd5b8451620000b381620000f7565b6020860151909450620000c681620000f7565b6040860151909350620000d981620000f7565b6060860151909250620000ec81620000f7565b939692955090935050565b6001600160a01b03811681146200010d57600080fd5b50565b612c1780620001206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063743812131161008c578063c52ab77811610066578063c52ab7781461017c578063d6055ae81461018f578063e1faaae8146101a2578063f698da25146101aa576100cf565b8063743812131461015757806385b4bb531461015f578063affed0e014610174576100cf565b8063083964b1146100d45780630c09135b146100e9578063158ef93e146100fc57806323fc6e991461011a578063430bf08a1461013a578063478eadbe1461014f575b600080fd5b6100e76100e2366004612002565b6101b2565b005b6100e76100f7366004611f4e565b61067f565b610104610a06565b604051610111919061238c565b60405180910390f35b61012d610128366004611c00565b610a16565b6040516101119190612397565b610142610dd4565b6040516101119190612324565b610142610de3565b610142610df2565b610167610e01565b6040516101119190612b01565b61012d610e16565b61010461018a366004611cbb565b610e1c565b6100e761019d366004611b56565b610f5c565b61014261110a565b61012d611119565b6101ba611823565b6101c261111f565b90506101ce83826111a8565b6101f35760405162461bcd60e51b81526004016101ea906129b1565b60405180910390fd5b6101fb6118a6565b6102058483611234565b60c08101519091501561022a5760405162461bcd60e51b81526004016101ea906129e8565b8060a0015161024b5760405162461bcd60e51b81526004016101ea90612909565b610254816112c2565b6102705760405162461bcd60e51b81526004016101ea90612909565b600383106102905760405162461bcd60e51b81526004016101ea906127d5565b6040808201519051633e174aaf60e01b81526000906001600160a01b03831690633e174aaf906102c4903390600401612324565b60206040518083038186803b1580156102dc57600080fd5b505afa1580156102f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103149190611f36565b61032084015160405163046deee960e01b81529192506000916001600160a01b0385169163046deee99161034c913391600401612338565b60206040518083038186803b15801561036457600080fd5b505afa158015610378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039c9190611f36565b9050818110156103aa578091505b81846101e0015110156103c057836101e0015191505b856103df576103d48461036001518361134b565b610360850152610418565b8560011415610402576103f78461026001518361134b565b610260850152610418565b6104118461014001518361134b565b6101408501525b600061043c61043186610360015187610260015161134b565b86610140015161134b565b90506000846001600160a01b03166378b61f226040518163ffffffff1660e01b815260040160206040518083038186803b15801561047957600080fd5b505afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b19190611f36565b905060006104c482886102a00151611370565b90508083106104d557600160808801525b60006104e683896101600151611370565b90508084106104f757600160c08901525b6104ff6119ba565b608081018a905260a081018990523381526040808201889052606082018c90526000549051633fd6d5d960e11b81526001600160a01b0390911690637fadabb29061054e908490600401612a97565b600060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b5050600354604051630428f64760e31b81526001600160a01b039091169250632147b23891506105b0908c90600401612b10565b600060405180830381600087803b1580156105ca57600080fd5b505af11580156105de573d6000803e3d6000fd5b50505050876001600160a01b031663528c198a336106018a8d6102e00151611370565b6040518363ffffffff1660e01b815260040161061e929190612338565b602060405180830381600087803b15801561063857600080fd5b505af115801561064c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106709190611cef565b50505050505050505050505050565b610687611823565b61068f61111f565b905061069b83826111a8565b6106b75760405162461bcd60e51b81526004016101ea906129b1565b6106bf6118a6565b6106c98483611234565b60c0810151909150156106ee5760405162461bcd60e51b81526004016101ea90612842565b60a0810151156107105760405162461bcd60e51b81526004016101ea90612966565b6080810151156107325760405162461bcd60e51b81526004016101ea90612522565b80606001516107535760405162461bcd60e51b81526004016101ea90612790565b6000805460408301516001600160a01b03909116915b85518110156109fd57826001600160a01b031663c28ad14487838151811061078d57fe5b602002602001015187876040518463ffffffff1660e01b81526004016107b593929190612351565b60206040518083038186803b1580156107cd57600080fd5b505afa1580156107e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108059190611cef565b6109eb576108116119ba565b6080810186905260a08101859052865187908390811061082d57fe5b6020908102919091018101516001600160a01b03908116835260019183019190915287516000916108ed9190861690633e174aaf908b908790811061086e57fe5b60200260200101516040518263ffffffff1660e01b81526004016108929190612324565b60206040518083038186803b1580156108aa57600080fd5b505afa1580156108be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e29190611f36565b876102800151611370565b604080840182905251633fd6d5d960e11b81529091506001600160a01b03861690637fadabb290610922908590600401612a97565b600060405180830381600087803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b50505050836001600160a01b031663ee7a7c0489858151811061096f57fe5b6020026020010151836040518363ffffffff1660e01b8152600401610995929190612338565b602060405180830381600087803b1580156109af57600080fd5b505af11580156109c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e79190611cef565b5050505b6109f681600161134b565b9050610769565b50505050505050565b600354600160a01b900460ff1681565b600354600090600160a01b900460ff16610a425760405162461bcd60e51b81526004016101ea90612447565b610a4a611823565b610a5261111f565b6020810151610140820151604051633e174aaf60e01b815292935090916001600160a01b03831690633e174aaf90610a8e903390600401612324565b60206040518083038186803b158015610aa657600080fd5b505afa158015610aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ade9190611f36565b1015610afc5760405162461bcd60e51b81526004016101ea906125f9565b8160e00151610b0b85436113a5565b1015610b295760405162461bcd60e51b81526004016101ea9061269b565b606060008a11610b4b5760405162461bcd60e51b81526004016101ea9061257f565b80604051602001610b5c9190612308565b6040516020818303038152906040528051906020012089604051602001610b839190612308565b604051602081830303815290604052805190602001201415610bb75760405162461bcd60e51b81526004016101ea9061257f565b6003546001600160a01b0316610bcb6118a6565b6103a08101859052600061014082018190526101608201819052338252610180820189905261010082018c90526101a0820188905260408601511515606083015260808083018290528601516101c0830152600160a080840182905260c0808501849052908801516101e08501528701516102008401526102608301919091526103808201908b90811115610c5c57fe5b90816001811115610c6957fe5b9052506101608501516102808201526101808501516102a08201526101a08501516102e08201526103008101899052436103208201526001600160a01b03808e1660208084019190915261034083018e90528601518116604080840191909152600061036084015251630428f64760e31b815290831690632147b23890610cf4908490600401612b10565b600060405180830381600087803b158015610d0e57600080fd5b505af1158015610d22573d6000803e3d6000fd5b505060015460405163e5910ae760e01b81526001600160a01b03909116925063e5910ae79150610d56903090600401612324565b600060405180830381600087803b158015610d7057600080fd5b505af1158015610d84573d6000803e3d6000fd5b505050507f460e77e3c8455201c4722742a8a654c959331ac344ab1b2ecefdb2b500f129c8816101c00151604051610dbc9190612397565b60405180910390a15050505050979650505050505050565b6002546001600160a01b031681565b6001546001600160a01b031681565b6000546001600160a01b031681565b610e09611823565b610e1161111f565b905090565b60045481565b6000610e26611823565b610e2e61111f565b9050610e386118a6565b610e428483611234565b90508060e0015115610e665760405162461bcd60e51b81526004016101ea906126e9565b8060c00151610e875760405162461bcd60e51b81526004016101ea90612a45565b600160e0820152600354604051630428f64760e31b81526001600160a01b03909116908190632147b23890610ec0908590600401612b10565b600060405180830381600087803b158015610eda57600080fd5b505af1158015610eee573d6000803e3d6000fd5b5050506020830151610340840151610100850151610380860151610300870151610180880151600254610f2e97508d908f906001600160a01b03166113e7565b935083610f4d5760405162461bcd60e51b81526004016101ea906128d2565b600193505050505b9392505050565b600354600160a01b900460ff1615610f865760405162461bcd60e51b81526004016101ea90612733565b6001546001600160a01b0316610f9a611823565b3081526001600160a01b038516602082015283151560408201528260006020020151606082015260006080820152826001602002015160a0820152826002602002015160c0820152826003602002015160e082015282600460200201516101008201528260056020020151610120820152826006602002015161014082015282600760200201516101608201528260086020020151610180820152826009602090810291909101516101a0830152604051611079917f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d47499130910161240f565b60408051601f1981840301815290829052805160209091012060055563e416649960e01b81526001600160a01b0383169063e4166499906110be908490600401612b01565b600060405180830381600087803b1580156110d857600080fd5b505af11580156110ec573d6000803e3d6000fd5b50506003805460ff60a01b1916600160a01b17905550505050505050565b6003546001600160a01b031681565b60055481565b611127611823565b60015460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990611157903090600401612324565b6101c06040518083038186803b15801561117057600080fd5b505afa158015611184573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e119190611d0b565b600354604051634a52ae5960e01b81526000916001600160a01b031690634a52ae59906111db9086908690600401612b23565b60206040518083038186803b1580156111f357600080fd5b505afa158015611207573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122b9190611cef565b90505b92915050565b61123c6118a6565b600354604051631d97355360e21b81526001600160a01b039091169063765cd54c9061126e9086908690600401612b23565b60006040518083038186803b15801561128657600080fd5b505afa15801561129a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261122b9190810190611d27565b600043826101a001511161134257600060a0830152600354604051630428f64760e31b81526001600160a01b0390911690632147b23890611307908590600401612b10565b600060405180830381600087803b15801561132157600080fd5b505af1158015611335573d6000803e3d6000fd5b5050505060009050611346565b5060015b919050565b60008282018381101561122b5760405162461bcd60e51b81526004016101ea906124eb565b6000670de0b6b3a76400006113966113888585611521565b6706f05b59d3b2000061134b565b8161139d57fe5b049392505050565b600061122b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061155b565b60008060606113fd8c8c8c8c8c8c8c8c8c611587565b905061140c600454600161134b565b508051602090910120905061142b603f6040890204610bb88901611633565b5a101561144a5760405162461bcd60e51b81526004016101ea90612645565b60005a905061146d8c8c8c8c8a15611462578c611468565b6109c45a035b61164a565b9250611479815a6113a5565b90506000861561149357611490828989898961169e565b90505b83156114d7577f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e83826040516114ca929190612426565b60405180910390a1611511565b7f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d238382604051611508929190612426565b60405180910390a15b5050509998505050505050505050565b6000826115305750600061122e565b8282028284828161153d57fe5b041461122b5760405162461bcd60e51b81526004016101ea90612891565b6000818484111561157f5760405162461bcd60e51b81526004016101ea9190612434565b505050900390565b606060007fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d860001b8b8b8b805190602001208b8b8b8b8b8b6004546040516020016115dc9b9a999897969594939291906123a0565b60408051601f1981840301815290829052805160209182012060055490935061161492601960f81b92600160f81b92918691016122de565b6040516020818303038152906040529150509998505050505050505050565b600081831015611643578161122b565b5090919050565b60008083600181111561165957fe5b14156116725761166b8686868561175f565b9050611695565b600183600181111561168057fe5b14156116915761166b868584611777565b5060005b95945050505050565b6000806001600160a01b038316156116b657826116b8565b325b90506001600160a01b038416611732576116e96116d5888861134b565b3a87106116e2573a6116e4565b865b611521565b6040519092506001600160a01b0382169083156108fc029084906000818181858888f1935050505061172d5760405162461bcd60e51b81526004016101ea9061249c565b611755565b61173f6116e2888861134b565b915061174c84828461178d565b61175557600080fd5b5095945050505050565b6000806000845160208601878987f195945050505050565b60008060008451602086018786f4949350505050565b6000606083836040516024016117a4929190612338565b60408051601f198184030181529190526020810180516001600160e01b031663a9059cbb60e01b1781528151919250600091829182896127105a03f16040513d81016040523d6000823e3d8015611806576020811461180e5760009450611818565b829450611818565b8151158315171594505b505050509392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806103c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000151581526020016000151581526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600060018111156119a857fe5b81526020016119b5611823565b905290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160008152602001600081526020016119f4611823565b81526020016119b56118a6565b803561134681612bae565b805161134681612bae565b805161134681612bc6565b600082601f830112611a32578081fd5b8151611a45611a4082612b5c565b612b38565b9150808252836020828501011115611a5c57600080fd5b611a6d816020840160208601612b7e565b5092915050565b803561134681612bd4565b805161134681612bd4565b60006101c0808385031215611a9d578182fd5b611aa681612b38565b915050611ab282611a0c565b8152611ac060208301611a0c565b6020820152611ad160408301611a17565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b6000806000610180808587031215611b6c578384fd5b8435611b7781612bae565b9350602085810135611b8881612bc6565b9350605f86018713611b98578283fd5b604051610140810181811067ffffffffffffffff82111715611bb657fe5b8060405250806040880189858a011115611bce578586fd5b8594505b600a851015611bf1578035825260019490940193908301908301611bd2565b50508093505050509250925092565b600080600080600080600060e0888a031215611c1a578485fd5b8735611c2581612bae565b965060208801359550604088013567ffffffffffffffff811115611c47578586fd5b8801601f81018a13611c57578586fd5b8035611c65611a4082612b5c565b8181528b6020838501011115611c79578788fd5b816020840160208301379081016020019690965250611c9a60608901611a74565b9699959850939660808101359560a0820135955060c0909101359350915050565b600080600060608486031215611ccf578081fd5b8335611cda81612bae565b95602085013595506040909401359392505050565b600060208284031215611d00578081fd5b815161122b81612bc6565b60006101c08284031215611d1d578081fd5b61122b8383611a8a565b600060208284031215611d38578081fd5b815167ffffffffffffffff80821115611d4f578283fd5b908301906105608286031215611d63578283fd5b611d6e6103c0612b38565b611d7783611a0c565b8152611d8560208401611a0c565b6020820152611d9660408401611a0c565b6040820152611da760608401611a17565b6060820152611db860808401611a17565b6080820152611dc960a08401611a17565b60a0820152611dda60c08401611a17565b60c0820152611deb60e08401611a17565b60e08201526101008084015183811115611e03578586fd5b611e0f88828701611a22565b8284015250506101208084015183811115611e28578586fd5b611e3488828701611a22565b91830191909152506101408381015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e08084015190820152610200808401519082015261022080840151908201526102408084015190820152610260808401519082015261028080840151908201526102a080840151908201526102c080840151908201526102e0808401519082015261030080840151908201526103208084015190820152610340808401519082015261036080840151908201526103809150611f12828401611a7f565b828201526103a09150611f2786838501611a8a565b91810191909152949350505050565b600060208284031215611f47578081fd5b5051919050565b60008060408385031215611f60578182fd5b8235915060208084013567ffffffffffffffff80821115611f7f578384fd5b818601915086601f830112611f92578384fd5b813581811115611f9e57fe5b8381029150611fae848301612b38565b8181528481019084860184860187018b1015611fc8578788fd5b8795505b83861015611ff157611fdd81611a01565b835260019590950194918601918601611fcc565b508096505050505050509250929050565b60008060408385031215612014578182fd5b50508035926020909101359150565b6001600160a01b03169052565b15159052565b6000815180845261204e816020860160208601612b7e565b601f01601f19169290920160200192915050565b6002811061206c57fe5b9052565b61207b828251612023565b602081015161208d6020840182612023565b5060408101516120a06040840182612030565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6000610560612126848451612023565b60208301516121386020860182612023565b50604083015161214b6040860182612023565b50606083015161215e6060860182612030565b5060808301516121716080860182612030565b5060a083015161218460a0860182612030565b5060c083015161219760c0860182612030565b5060e08301516121aa60e0860182612030565b506101008084015182828701526121c383870182612036565b9250505061012080840151858303828701526121df8382612036565b6101408681015190880152610160808701519088015261018080870151908801526101a080870151908801526101c080870151908801526101e08087015190880152610200808701519088015261022080870151908801526102408087015190880152610260808701519088015261028080870151908801526102a080870151908801526102c080870151908801526102e08087015190880152610300808701519088015261032080870151908801526103408087015190880152610360808701519088015261038080870151919450925090506122bf82870182612062565b50506103a0808401516122d482870182612070565b5090949350505050565b6001600160f81b031994851681529290931660018301526002820152602281019190915260420190565b6000825161231a818460208701612b7e565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0384168152600061020061236f6020840186612070565b806101e084015261238281840185612116565b9695505050505050565b901515815260200190565b90815260200190565b8b81526001600160a01b038b81166020830152604082018b9052606082018a90526101608201906123d4608084018b612062565b60a083019890985260c082019690965260e0810194909452918516610100840152909316610120820152610140019190915295945050505050565b9182526001600160a01b0316602082015260400190565b918252602082015260400190565b60006020825261122b6020830184612036565b60208082526035908201527f456c617374696344414f3a205472616e73616374696f6e616c566f7465204d616040820152741b9859d95c881b9bdd081a5b9a5d1a585b1a5e9959605a1b606082015260800190565b6020808252602f908201527f456c61737469632044414f3a20436f756c64206e6f742070617920676173206360408201526e37b9ba39903bb4ba34103a37b5b2b760891b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252603b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201527f746520746861742068617320726561636865642071756f72756d2e0000000000606082015260800190565b60208082526054908201527f456c617374696344414f3a205472616e73616374696f6e206d7573742065697460408201527f686572207472616e736665722076616c7565206f722063616c6c20616e6f746860608201527332b91031b7b73a3930b1ba10333ab731ba34b7b760611b608082015260a00190565b6020808252602c908201527f456c617374696344414f3a204e6f7420656e6f7567682073686172657320746f60408201526b2063726561746520766f746560a01b606082015260800190565b60208082526036908201527f456c617374696344414f3a204e6f7420656e6f7567682067617320746f20657860408201527532b1baba329039b0b332903a3930b739b0b1ba34b7b760511b606082015260800190565b6020808252602e908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520706560408201526d1c9a5bd9081d1bdbc81cda1bdc9d60921b606082015260800190565b6020808252602a908201527f456c617374696344414f3a20566f74652068617320616c7265616479206265656040820152691b88195e1958dd5d195960b21b606082015260800190565b6020808252603b908201527f456c617374696344414f3a205472616e73616374696f6e616c20566f7465204d60408201527f616e6167657220616c726561647920696e697469616c697a65642e0000000000606082015260800190565b60208082526025908201527f456c617374696344414f3a205468697320766f746520686173206e6f2070656e60408201526430b63a3c9760d91b606082015260800190565b60208082526047908201527f456c617374696344414f3a20496e76616c6964205f796e612076616c75652e2060408201527f557365203020666f72207965732c203120666f72206e6f2c203220666f7220616060820152663139ba30b4b71760c91b608082015260a00190565b6020808252602f908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201526e3a32903a3430ba103830b9b9b2b21760891b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252601e908201527f456c617374696344414f3a205472616e73616374696f6e204661696c65640000604082015260600190565b60208082526039908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520697360408201527f206e6f7420616374697665206f722068617320656e6465642e00000000000000606082015260800190565b6020808252602b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a6520616e206160408201526a31ba34bb32903b37ba329760a91b606082015260800190565b6020808252601c908201527f456c617374696344414f3a20496e76616c696420766f74652069642e00000000604082015260600190565b60208082526038908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520686160408201527f7320616c7265616479206265656e20617070726f7665642e0000000000000000606082015260800190565b60208082526032908201527f456c617374696344414f3a2043616e206e6f742063616c6c20756e6c657373206040820152711d9bdd19481a5cc81cdd58d8d95cdcd99d5b60721b606082015260800190565b60006020825260018060a01b03835116602083015260208301511515604083015260408301516060830152606083015160808301526080830151612ade60a0840182612070565b5060a083015161026083810152612af9610280840182612116565b949350505050565b6101c0810161122e8284612070565b60006020825261122b6020830184612116565b8281526101e08101610f556020830184612070565b60405181810167ffffffffffffffff81118282101715612b5457fe5b604052919050565b600067ffffffffffffffff821115612b7057fe5b50601f01601f191660200190565b60005b83811015612b99578181015183820152602001612b81565b83811115612ba8576000848401525b50505050565b6001600160a01b0381168114612bc357600080fd5b50565b8015158114612bc357600080fd5b60028110612bc357600080fdfea2646970667358221220938ba14a2c2f7adb9289b78e2e599aaa1ab6124dc639fe6592b2a503df90774b64736f6c63430007020033";
  var deployedBytecode$e = "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063743812131161008c578063c52ab77811610066578063c52ab7781461017c578063d6055ae81461018f578063e1faaae8146101a2578063f698da25146101aa576100cf565b8063743812131461015757806385b4bb531461015f578063affed0e014610174576100cf565b8063083964b1146100d45780630c09135b146100e9578063158ef93e146100fc57806323fc6e991461011a578063430bf08a1461013a578063478eadbe1461014f575b600080fd5b6100e76100e2366004612002565b6101b2565b005b6100e76100f7366004611f4e565b61067f565b610104610a06565b604051610111919061238c565b60405180910390f35b61012d610128366004611c00565b610a16565b6040516101119190612397565b610142610dd4565b6040516101119190612324565b610142610de3565b610142610df2565b610167610e01565b6040516101119190612b01565b61012d610e16565b61010461018a366004611cbb565b610e1c565b6100e761019d366004611b56565b610f5c565b61014261110a565b61012d611119565b6101ba611823565b6101c261111f565b90506101ce83826111a8565b6101f35760405162461bcd60e51b81526004016101ea906129b1565b60405180910390fd5b6101fb6118a6565b6102058483611234565b60c08101519091501561022a5760405162461bcd60e51b81526004016101ea906129e8565b8060a0015161024b5760405162461bcd60e51b81526004016101ea90612909565b610254816112c2565b6102705760405162461bcd60e51b81526004016101ea90612909565b600383106102905760405162461bcd60e51b81526004016101ea906127d5565b6040808201519051633e174aaf60e01b81526000906001600160a01b03831690633e174aaf906102c4903390600401612324565b60206040518083038186803b1580156102dc57600080fd5b505afa1580156102f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103149190611f36565b61032084015160405163046deee960e01b81529192506000916001600160a01b0385169163046deee99161034c913391600401612338565b60206040518083038186803b15801561036457600080fd5b505afa158015610378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039c9190611f36565b9050818110156103aa578091505b81846101e0015110156103c057836101e0015191505b856103df576103d48461036001518361134b565b610360850152610418565b8560011415610402576103f78461026001518361134b565b610260850152610418565b6104118461014001518361134b565b6101408501525b600061043c61043186610360015187610260015161134b565b86610140015161134b565b90506000846001600160a01b03166378b61f226040518163ffffffff1660e01b815260040160206040518083038186803b15801561047957600080fd5b505afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b19190611f36565b905060006104c482886102a00151611370565b90508083106104d557600160808801525b60006104e683896101600151611370565b90508084106104f757600160c08901525b6104ff6119ba565b608081018a905260a081018990523381526040808201889052606082018c90526000549051633fd6d5d960e11b81526001600160a01b0390911690637fadabb29061054e908490600401612a97565b600060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b5050600354604051630428f64760e31b81526001600160a01b039091169250632147b23891506105b0908c90600401612b10565b600060405180830381600087803b1580156105ca57600080fd5b505af11580156105de573d6000803e3d6000fd5b50505050876001600160a01b031663528c198a336106018a8d6102e00151611370565b6040518363ffffffff1660e01b815260040161061e929190612338565b602060405180830381600087803b15801561063857600080fd5b505af115801561064c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106709190611cef565b50505050505050505050505050565b610687611823565b61068f61111f565b905061069b83826111a8565b6106b75760405162461bcd60e51b81526004016101ea906129b1565b6106bf6118a6565b6106c98483611234565b60c0810151909150156106ee5760405162461bcd60e51b81526004016101ea90612842565b60a0810151156107105760405162461bcd60e51b81526004016101ea90612966565b6080810151156107325760405162461bcd60e51b81526004016101ea90612522565b80606001516107535760405162461bcd60e51b81526004016101ea90612790565b6000805460408301516001600160a01b03909116915b85518110156109fd57826001600160a01b031663c28ad14487838151811061078d57fe5b602002602001015187876040518463ffffffff1660e01b81526004016107b593929190612351565b60206040518083038186803b1580156107cd57600080fd5b505afa1580156107e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108059190611cef565b6109eb576108116119ba565b6080810186905260a08101859052865187908390811061082d57fe5b6020908102919091018101516001600160a01b03908116835260019183019190915287516000916108ed9190861690633e174aaf908b908790811061086e57fe5b60200260200101516040518263ffffffff1660e01b81526004016108929190612324565b60206040518083038186803b1580156108aa57600080fd5b505afa1580156108be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e29190611f36565b876102800151611370565b604080840182905251633fd6d5d960e11b81529091506001600160a01b03861690637fadabb290610922908590600401612a97565b600060405180830381600087803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b50505050836001600160a01b031663ee7a7c0489858151811061096f57fe5b6020026020010151836040518363ffffffff1660e01b8152600401610995929190612338565b602060405180830381600087803b1580156109af57600080fd5b505af11580156109c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e79190611cef565b5050505b6109f681600161134b565b9050610769565b50505050505050565b600354600160a01b900460ff1681565b600354600090600160a01b900460ff16610a425760405162461bcd60e51b81526004016101ea90612447565b610a4a611823565b610a5261111f565b6020810151610140820151604051633e174aaf60e01b815292935090916001600160a01b03831690633e174aaf90610a8e903390600401612324565b60206040518083038186803b158015610aa657600080fd5b505afa158015610aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ade9190611f36565b1015610afc5760405162461bcd60e51b81526004016101ea906125f9565b8160e00151610b0b85436113a5565b1015610b295760405162461bcd60e51b81526004016101ea9061269b565b606060008a11610b4b5760405162461bcd60e51b81526004016101ea9061257f565b80604051602001610b5c9190612308565b6040516020818303038152906040528051906020012089604051602001610b839190612308565b604051602081830303815290604052805190602001201415610bb75760405162461bcd60e51b81526004016101ea9061257f565b6003546001600160a01b0316610bcb6118a6565b6103a08101859052600061014082018190526101608201819052338252610180820189905261010082018c90526101a0820188905260408601511515606083015260808083018290528601516101c0830152600160a080840182905260c0808501849052908801516101e08501528701516102008401526102608301919091526103808201908b90811115610c5c57fe5b90816001811115610c6957fe5b9052506101608501516102808201526101808501516102a08201526101a08501516102e08201526103008101899052436103208201526001600160a01b03808e1660208084019190915261034083018e90528601518116604080840191909152600061036084015251630428f64760e31b815290831690632147b23890610cf4908490600401612b10565b600060405180830381600087803b158015610d0e57600080fd5b505af1158015610d22573d6000803e3d6000fd5b505060015460405163e5910ae760e01b81526001600160a01b03909116925063e5910ae79150610d56903090600401612324565b600060405180830381600087803b158015610d7057600080fd5b505af1158015610d84573d6000803e3d6000fd5b505050507f460e77e3c8455201c4722742a8a654c959331ac344ab1b2ecefdb2b500f129c8816101c00151604051610dbc9190612397565b60405180910390a15050505050979650505050505050565b6002546001600160a01b031681565b6001546001600160a01b031681565b6000546001600160a01b031681565b610e09611823565b610e1161111f565b905090565b60045481565b6000610e26611823565b610e2e61111f565b9050610e386118a6565b610e428483611234565b90508060e0015115610e665760405162461bcd60e51b81526004016101ea906126e9565b8060c00151610e875760405162461bcd60e51b81526004016101ea90612a45565b600160e0820152600354604051630428f64760e31b81526001600160a01b03909116908190632147b23890610ec0908590600401612b10565b600060405180830381600087803b158015610eda57600080fd5b505af1158015610eee573d6000803e3d6000fd5b5050506020830151610340840151610100850151610380860151610300870151610180880151600254610f2e97508d908f906001600160a01b03166113e7565b935083610f4d5760405162461bcd60e51b81526004016101ea906128d2565b600193505050505b9392505050565b600354600160a01b900460ff1615610f865760405162461bcd60e51b81526004016101ea90612733565b6001546001600160a01b0316610f9a611823565b3081526001600160a01b038516602082015283151560408201528260006020020151606082015260006080820152826001602002015160a0820152826002602002015160c0820152826003602002015160e082015282600460200201516101008201528260056020020151610120820152826006602002015161014082015282600760200201516101608201528260086020020151610180820152826009602090810291909101516101a0830152604051611079917f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d47499130910161240f565b60408051601f1981840301815290829052805160209091012060055563e416649960e01b81526001600160a01b0383169063e4166499906110be908490600401612b01565b600060405180830381600087803b1580156110d857600080fd5b505af11580156110ec573d6000803e3d6000fd5b50506003805460ff60a01b1916600160a01b17905550505050505050565b6003546001600160a01b031681565b60055481565b611127611823565b60015460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990611157903090600401612324565b6101c06040518083038186803b15801561117057600080fd5b505afa158015611184573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e119190611d0b565b600354604051634a52ae5960e01b81526000916001600160a01b031690634a52ae59906111db9086908690600401612b23565b60206040518083038186803b1580156111f357600080fd5b505afa158015611207573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122b9190611cef565b90505b92915050565b61123c6118a6565b600354604051631d97355360e21b81526001600160a01b039091169063765cd54c9061126e9086908690600401612b23565b60006040518083038186803b15801561128657600080fd5b505afa15801561129a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261122b9190810190611d27565b600043826101a001511161134257600060a0830152600354604051630428f64760e31b81526001600160a01b0390911690632147b23890611307908590600401612b10565b600060405180830381600087803b15801561132157600080fd5b505af1158015611335573d6000803e3d6000fd5b5050505060009050611346565b5060015b919050565b60008282018381101561122b5760405162461bcd60e51b81526004016101ea906124eb565b6000670de0b6b3a76400006113966113888585611521565b6706f05b59d3b2000061134b565b8161139d57fe5b049392505050565b600061122b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061155b565b60008060606113fd8c8c8c8c8c8c8c8c8c611587565b905061140c600454600161134b565b508051602090910120905061142b603f6040890204610bb88901611633565b5a101561144a5760405162461bcd60e51b81526004016101ea90612645565b60005a905061146d8c8c8c8c8a15611462578c611468565b6109c45a035b61164a565b9250611479815a6113a5565b90506000861561149357611490828989898961169e565b90505b83156114d7577f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e83826040516114ca929190612426565b60405180910390a1611511565b7f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d238382604051611508929190612426565b60405180910390a15b5050509998505050505050505050565b6000826115305750600061122e565b8282028284828161153d57fe5b041461122b5760405162461bcd60e51b81526004016101ea90612891565b6000818484111561157f5760405162461bcd60e51b81526004016101ea9190612434565b505050900390565b606060007fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d860001b8b8b8b805190602001208b8b8b8b8b8b6004546040516020016115dc9b9a999897969594939291906123a0565b60408051601f1981840301815290829052805160209182012060055490935061161492601960f81b92600160f81b92918691016122de565b6040516020818303038152906040529150509998505050505050505050565b600081831015611643578161122b565b5090919050565b60008083600181111561165957fe5b14156116725761166b8686868561175f565b9050611695565b600183600181111561168057fe5b14156116915761166b868584611777565b5060005b95945050505050565b6000806001600160a01b038316156116b657826116b8565b325b90506001600160a01b038416611732576116e96116d5888861134b565b3a87106116e2573a6116e4565b865b611521565b6040519092506001600160a01b0382169083156108fc029084906000818181858888f1935050505061172d5760405162461bcd60e51b81526004016101ea9061249c565b611755565b61173f6116e2888861134b565b915061174c84828461178d565b61175557600080fd5b5095945050505050565b6000806000845160208601878987f195945050505050565b60008060008451602086018786f4949350505050565b6000606083836040516024016117a4929190612338565b60408051601f198184030181529190526020810180516001600160e01b031663a9059cbb60e01b1781528151919250600091829182896127105a03f16040513d81016040523d6000823e3d8015611806576020811461180e5760009450611818565b829450611818565b8151158315171594505b505050509392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806103c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000151581526020016000151581526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600060018111156119a857fe5b81526020016119b5611823565b905290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160008152602001600081526020016119f4611823565b81526020016119b56118a6565b803561134681612bae565b805161134681612bae565b805161134681612bc6565b600082601f830112611a32578081fd5b8151611a45611a4082612b5c565b612b38565b9150808252836020828501011115611a5c57600080fd5b611a6d816020840160208601612b7e565b5092915050565b803561134681612bd4565b805161134681612bd4565b60006101c0808385031215611a9d578182fd5b611aa681612b38565b915050611ab282611a0c565b8152611ac060208301611a0c565b6020820152611ad160408301611a17565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b6000806000610180808587031215611b6c578384fd5b8435611b7781612bae565b9350602085810135611b8881612bc6565b9350605f86018713611b98578283fd5b604051610140810181811067ffffffffffffffff82111715611bb657fe5b8060405250806040880189858a011115611bce578586fd5b8594505b600a851015611bf1578035825260019490940193908301908301611bd2565b50508093505050509250925092565b600080600080600080600060e0888a031215611c1a578485fd5b8735611c2581612bae565b965060208801359550604088013567ffffffffffffffff811115611c47578586fd5b8801601f81018a13611c57578586fd5b8035611c65611a4082612b5c565b8181528b6020838501011115611c79578788fd5b816020840160208301379081016020019690965250611c9a60608901611a74565b9699959850939660808101359560a0820135955060c0909101359350915050565b600080600060608486031215611ccf578081fd5b8335611cda81612bae565b95602085013595506040909401359392505050565b600060208284031215611d00578081fd5b815161122b81612bc6565b60006101c08284031215611d1d578081fd5b61122b8383611a8a565b600060208284031215611d38578081fd5b815167ffffffffffffffff80821115611d4f578283fd5b908301906105608286031215611d63578283fd5b611d6e6103c0612b38565b611d7783611a0c565b8152611d8560208401611a0c565b6020820152611d9660408401611a0c565b6040820152611da760608401611a17565b6060820152611db860808401611a17565b6080820152611dc960a08401611a17565b60a0820152611dda60c08401611a17565b60c0820152611deb60e08401611a17565b60e08201526101008084015183811115611e03578586fd5b611e0f88828701611a22565b8284015250506101208084015183811115611e28578586fd5b611e3488828701611a22565b91830191909152506101408381015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e08084015190820152610200808401519082015261022080840151908201526102408084015190820152610260808401519082015261028080840151908201526102a080840151908201526102c080840151908201526102e0808401519082015261030080840151908201526103208084015190820152610340808401519082015261036080840151908201526103809150611f12828401611a7f565b828201526103a09150611f2786838501611a8a565b91810191909152949350505050565b600060208284031215611f47578081fd5b5051919050565b60008060408385031215611f60578182fd5b8235915060208084013567ffffffffffffffff80821115611f7f578384fd5b818601915086601f830112611f92578384fd5b813581811115611f9e57fe5b8381029150611fae848301612b38565b8181528481019084860184860187018b1015611fc8578788fd5b8795505b83861015611ff157611fdd81611a01565b835260019590950194918601918601611fcc565b508096505050505050509250929050565b60008060408385031215612014578182fd5b50508035926020909101359150565b6001600160a01b03169052565b15159052565b6000815180845261204e816020860160208601612b7e565b601f01601f19169290920160200192915050565b6002811061206c57fe5b9052565b61207b828251612023565b602081015161208d6020840182612023565b5060408101516120a06040840182612030565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6000610560612126848451612023565b60208301516121386020860182612023565b50604083015161214b6040860182612023565b50606083015161215e6060860182612030565b5060808301516121716080860182612030565b5060a083015161218460a0860182612030565b5060c083015161219760c0860182612030565b5060e08301516121aa60e0860182612030565b506101008084015182828701526121c383870182612036565b9250505061012080840151858303828701526121df8382612036565b6101408681015190880152610160808701519088015261018080870151908801526101a080870151908801526101c080870151908801526101e08087015190880152610200808701519088015261022080870151908801526102408087015190880152610260808701519088015261028080870151908801526102a080870151908801526102c080870151908801526102e08087015190880152610300808701519088015261032080870151908801526103408087015190880152610360808701519088015261038080870151919450925090506122bf82870182612062565b50506103a0808401516122d482870182612070565b5090949350505050565b6001600160f81b031994851681529290931660018301526002820152602281019190915260420190565b6000825161231a818460208701612b7e565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0384168152600061020061236f6020840186612070565b806101e084015261238281840185612116565b9695505050505050565b901515815260200190565b90815260200190565b8b81526001600160a01b038b81166020830152604082018b9052606082018a90526101608201906123d4608084018b612062565b60a083019890985260c082019690965260e0810194909452918516610100840152909316610120820152610140019190915295945050505050565b9182526001600160a01b0316602082015260400190565b918252602082015260400190565b60006020825261122b6020830184612036565b60208082526035908201527f456c617374696344414f3a205472616e73616374696f6e616c566f7465204d616040820152741b9859d95c881b9bdd081a5b9a5d1a585b1a5e9959605a1b606082015260800190565b6020808252602f908201527f456c61737469632044414f3a20436f756c64206e6f742070617920676173206360408201526e37b9ba39903bb4ba34103a37b5b2b760891b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252603b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201527f746520746861742068617320726561636865642071756f72756d2e0000000000606082015260800190565b60208082526054908201527f456c617374696344414f3a205472616e73616374696f6e206d7573742065697460408201527f686572207472616e736665722076616c7565206f722063616c6c20616e6f746860608201527332b91031b7b73a3930b1ba10333ab731ba34b7b760611b608082015260a00190565b6020808252602c908201527f456c617374696344414f3a204e6f7420656e6f7567682073686172657320746f60408201526b2063726561746520766f746560a01b606082015260800190565b60208082526036908201527f456c617374696344414f3a204e6f7420656e6f7567682067617320746f20657860408201527532b1baba329039b0b332903a3930b739b0b1ba34b7b760511b606082015260800190565b6020808252602e908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520706560408201526d1c9a5bd9081d1bdbc81cda1bdc9d60921b606082015260800190565b6020808252602a908201527f456c617374696344414f3a20566f74652068617320616c7265616479206265656040820152691b88195e1958dd5d195960b21b606082015260800190565b6020808252603b908201527f456c617374696344414f3a205472616e73616374696f6e616c20566f7465204d60408201527f616e6167657220616c726561647920696e697469616c697a65642e0000000000606082015260800190565b60208082526025908201527f456c617374696344414f3a205468697320766f746520686173206e6f2070656e60408201526430b63a3c9760d91b606082015260800190565b60208082526047908201527f456c617374696344414f3a20496e76616c6964205f796e612076616c75652e2060408201527f557365203020666f72207965732c203120666f72206e6f2c203220666f7220616060820152663139ba30b4b71760c91b608082015260a00190565b6020808252602f908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201526e3a32903a3430ba103830b9b9b2b21760891b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252601e908201527f456c617374696344414f3a205472616e73616374696f6e204661696c65640000604082015260600190565b60208082526039908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520697360408201527f206e6f7420616374697665206f722068617320656e6465642e00000000000000606082015260800190565b6020808252602b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a6520616e206160408201526a31ba34bb32903b37ba329760a91b606082015260800190565b6020808252601c908201527f456c617374696344414f3a20496e76616c696420766f74652069642e00000000604082015260600190565b60208082526038908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520686160408201527f7320616c7265616479206265656e20617070726f7665642e0000000000000000606082015260800190565b60208082526032908201527f456c617374696344414f3a2043616e206e6f742063616c6c20756e6c657373206040820152711d9bdd19481a5cc81cdd58d8d95cdcd99d5b60721b606082015260800190565b60006020825260018060a01b03835116602083015260208301511515604083015260408301516060830152606083015160808301526080830151612ade60a0840182612070565b5060a083015161026083810152612af9610280840182612116565b949350505050565b6101c0810161122e8284612070565b60006020825261122b6020830184612116565b8281526101e08101610f556020830184612070565b60405181810167ffffffffffffffff81118282101715612b5457fe5b604052919050565b600067ffffffffffffffff821115612b7057fe5b50601f01601f191660200190565b60005b83811015612b99578181015183820152602001612b81565b83811115612ba8576000848401525b50505050565b6001600160a01b0381168114612bc357600080fd5b50565b8015158114612bc357600080fd5b60028110612bc357600080fdfea2646970667358221220938ba14a2c2f7adb9289b78e2e599aaa1ab6124dc639fe6592b2a503df90774b64736f6c63430007020033";
  var linkReferences$e = {
  };
  var deployedLinkReferences$e = {
  };
  var TransactionalVoteManagerContract = {
  	_format: _format$e,
  	contractName: contractName$e,
  	sourceName: sourceName$e,
  	abi: abi$e,
  	bytecode: bytecode$e,
  	deployedBytecode: deployedBytecode$e,
  	linkReferences: linkReferences$e,
  	deployedLinkReferences: deployedLinkReferences$e
  };

  var _format$f = "hh-sol-artifact-1";
  var contractName$f = "TransactionalVoteSettings";
  var sourceName$f = "src/modules/TransactionalVote/models/Settings.sol";
  var abi$f = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_managerAddress",
  				type: "address"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct TransactionalVoteSettings.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_managerAddress",
  				type: "address"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_managerAddress",
  				type: "address"
  			}
  		],
  		name: "incrementCounter",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct TransactionalVoteSettings.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$f = "0x608060405234801561001057600080fd5b50610cee806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063332a4d0914610051578063e41664991461007a578063e5910ae71461008f578063f6a3d24e146100a2575b600080fd5b61006461005f366004610780565b6100c2565b6040516100719190610bda565b60405180910390f35b61008d61008836600461079a565b61029f565b005b61008d61009d366004610780565b61058b565b6100b56100b0366004610780565b6105d8565b6040516100719190610b98565b6100ca6106d6565b6001600160a01b03821681526100df826105e9565b1561029a57610113826040516020016100f89190610add565b604051602081830303815290604052805190602001206105ff565b606082015260405161012d906100f89084906020016108d9565b608082015260405161016290610147908490602001610aa7565b60405160208183030381529060405280519060200120610611565b151560408083019190915251610180906100f8908490602001610b4f565b60a082015260405161019a906100f8908490602001610a68565b60c08201526040516101b4906100f89084906020016109ae565b60e08201526040516101ce906100f890849060200161093e565b6101408201526040516101e9906100f8908490602001610b11565b610100820152604051610204906100f8908490602001610a2b565b61012082015260405161021f906100f890849060200161097b565b61016082015260405161023a906100f89084906020016108a7565b610180820152604051610255906100f890849060200161090c565b6101a082015260405161028b906102709084906020016109ed565b60405160208183030381529060405280519060200120610626565b6001600160a01b031660208201525b919050565b80516040516102d4916102b491602001610aa7565b604051602081830303815290604052805190602001208260400151610641565b8051604051610309916102e991602001610add565b604051602081830303815290604052805190602001208260600151610661565b805160405161033e9161031e916020016108d9565b604051602081830303815290604052805190602001208260800151610661565b80516040516103739161035391602001610b4f565b604051602081830303815290604052805190602001208260a00151610661565b80516040516103a89161038891602001610a68565b604051602081830303815290604052805190602001208260c00151610661565b80516040516103dd916103bd916020016109ae565b604051602081830303815290604052805190602001208260e00151610661565b8051604051610413916103f291602001610b11565b60405160208183030381529060405280519060200120826101000151610661565b80516040516104499161042891602001610a2b565b60405160208183030381529060405280519060200120826101200151610661565b805160405161047f9161045e9160200161093e565b60405160208183030381529060405280519060200120826101400151610661565b80516040516104b5916104949160200161097b565b60405160208183030381529060405280519060200120826101600151610661565b80516040516104eb916104ca916020016108a7565b60405160208183030381529060405280519060200120826101800151610661565b8051604051610521916105009160200161090c565b60405160208183030381529060405280519060200120826101a00151610661565b805160405161055691610536916020016109ed565b604051602081830303815290604052805190602001208260200151610673565b80516040516105889161056b91602001610875565b604051602081830303815290604052805190602001206001610641565b50565b6105888160405160200161059f91906108d9565b604051602081830303815290604052805190602001206105d36105cc846040516020016100f891906108d9565b60016106a1565b610661565b60006105e3826105e9565b92915050565b60006105e3826040516020016101479190610875565b60009081526005602052604090205490565b60009081526001602052604090205460ff1690565b6000908152602081905260409020546001600160a01b031690565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526005602052604090912055565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000828201838110156106cf5760405162461bcd60e51b81526004016106c690610ba3565b60405180910390fd5b9392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b80356001600160a01b038116811461029a57600080fd5b8035801515811461029a57600080fd5b600060208284031215610791578081fd5b6106cf82610759565b60006101c08083850312156107ad578182fd5b6107b681610c94565b90506107c183610759565b81526107cf60208401610759565b60208201526107e060408401610770565b6040820152606083810135908201526080808401359082015260a0808401359082015260c0808401359082015260e08084013590820152610100808401359082015261012080840135908201526101408084013590820152610160808401359082015261018080840135908201526101a0928301359281019290925250919050565b6001600160a01b03169052565b15159052565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b039190911681526040602082018190526006908201526571756f72756d60d01b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526631b7bab73a32b960c91b606082015260800190565b6001600160a01b03919091168152604060208201819052600690820152651c995dd85c9960d21b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d696e536861726573546f43726561746560781b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526670656e616c747960c81b606082015260800190565b6001600160a01b03919091168152604060208201819052601390820152726d696e4475726174696f6e496e426c6f636b7360681b606082015260800190565b6001600160a01b0391909116815260406020820181905260129082015271766f74696e67546f6b656e4164647265737360701b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d696e526577617264496e53686172657360781b606082015260800190565b6001600160a01b03919091168152604060208201819052601390820152726d696e426c6f636b73466f7250656e616c747960681b606082015260800190565b6001600160a01b03919091168152604060208201819052600a908201526968617350656e616c747960b01b606082015260800190565b6001600160a01b0391909116815260406020820181905260089082015267185c1c1c9bdd985b60c21b606082015260800190565b6001600160a01b03919091168152604060208201819052601290820152716d696e50656e616c7479496e53686172657360701b606082015260800190565b6001600160a01b039190911681526040602082018190526017908201527f6d6178536861726573506572546f6b656e486f6c646572000000000000000000606082015260800190565b901515815260200190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60006101c082019050610bee828451610862565b6020830151610c006020840182610862565b506040830151610c13604084018261086f565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015181840152506101808084015181840152506101a080840151818401525092915050565b60405181810167ffffffffffffffff81118282101715610cb057fe5b60405291905056fea26469706673582212208cd2b4ef3afefba5f9579b770668b34ff7b4808f18bc7150c696e9fc2b41fc5764736f6c63430007020033";
  var deployedBytecode$f = "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063332a4d0914610051578063e41664991461007a578063e5910ae71461008f578063f6a3d24e146100a2575b600080fd5b61006461005f366004610780565b6100c2565b6040516100719190610bda565b60405180910390f35b61008d61008836600461079a565b61029f565b005b61008d61009d366004610780565b61058b565b6100b56100b0366004610780565b6105d8565b6040516100719190610b98565b6100ca6106d6565b6001600160a01b03821681526100df826105e9565b1561029a57610113826040516020016100f89190610add565b604051602081830303815290604052805190602001206105ff565b606082015260405161012d906100f89084906020016108d9565b608082015260405161016290610147908490602001610aa7565b60405160208183030381529060405280519060200120610611565b151560408083019190915251610180906100f8908490602001610b4f565b60a082015260405161019a906100f8908490602001610a68565b60c08201526040516101b4906100f89084906020016109ae565b60e08201526040516101ce906100f890849060200161093e565b6101408201526040516101e9906100f8908490602001610b11565b610100820152604051610204906100f8908490602001610a2b565b61012082015260405161021f906100f890849060200161097b565b61016082015260405161023a906100f89084906020016108a7565b610180820152604051610255906100f890849060200161090c565b6101a082015260405161028b906102709084906020016109ed565b60405160208183030381529060405280519060200120610626565b6001600160a01b031660208201525b919050565b80516040516102d4916102b491602001610aa7565b604051602081830303815290604052805190602001208260400151610641565b8051604051610309916102e991602001610add565b604051602081830303815290604052805190602001208260600151610661565b805160405161033e9161031e916020016108d9565b604051602081830303815290604052805190602001208260800151610661565b80516040516103739161035391602001610b4f565b604051602081830303815290604052805190602001208260a00151610661565b80516040516103a89161038891602001610a68565b604051602081830303815290604052805190602001208260c00151610661565b80516040516103dd916103bd916020016109ae565b604051602081830303815290604052805190602001208260e00151610661565b8051604051610413916103f291602001610b11565b60405160208183030381529060405280519060200120826101000151610661565b80516040516104499161042891602001610a2b565b60405160208183030381529060405280519060200120826101200151610661565b805160405161047f9161045e9160200161093e565b60405160208183030381529060405280519060200120826101400151610661565b80516040516104b5916104949160200161097b565b60405160208183030381529060405280519060200120826101600151610661565b80516040516104eb916104ca916020016108a7565b60405160208183030381529060405280519060200120826101800151610661565b8051604051610521916105009160200161090c565b60405160208183030381529060405280519060200120826101a00151610661565b805160405161055691610536916020016109ed565b604051602081830303815290604052805190602001208260200151610673565b80516040516105889161056b91602001610875565b604051602081830303815290604052805190602001206001610641565b50565b6105888160405160200161059f91906108d9565b604051602081830303815290604052805190602001206105d36105cc846040516020016100f891906108d9565b60016106a1565b610661565b60006105e3826105e9565b92915050565b60006105e3826040516020016101479190610875565b60009081526005602052604090205490565b60009081526001602052604090205460ff1690565b6000908152602081905260409020546001600160a01b031690565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526005602052604090912055565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000828201838110156106cf5760405162461bcd60e51b81526004016106c690610ba3565b60405180910390fd5b9392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b80356001600160a01b038116811461029a57600080fd5b8035801515811461029a57600080fd5b600060208284031215610791578081fd5b6106cf82610759565b60006101c08083850312156107ad578182fd5b6107b681610c94565b90506107c183610759565b81526107cf60208401610759565b60208201526107e060408401610770565b6040820152606083810135908201526080808401359082015260a0808401359082015260c0808401359082015260e08084013590820152610100808401359082015261012080840135908201526101408084013590820152610160808401359082015261018080840135908201526101a0928301359281019290925250919050565b6001600160a01b03169052565b15159052565b6001600160a01b039190911681526040602082018190526006908201526565786973747360d01b606082015260800190565b6001600160a01b039190911681526040602082018190526006908201526571756f72756d60d01b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526631b7bab73a32b960c91b606082015260800190565b6001600160a01b03919091168152604060208201819052600690820152651c995dd85c9960d21b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d696e536861726573546f43726561746560781b606082015260800190565b6001600160a01b039190911681526040602082018190526007908201526670656e616c747960c81b606082015260800190565b6001600160a01b03919091168152604060208201819052601390820152726d696e4475726174696f6e496e426c6f636b7360681b606082015260800190565b6001600160a01b0391909116815260406020820181905260129082015271766f74696e67546f6b656e4164647265737360701b606082015260800190565b6001600160a01b03919091168152604060208201819052601190820152706d696e526577617264496e53686172657360781b606082015260800190565b6001600160a01b03919091168152604060208201819052601390820152726d696e426c6f636b73466f7250656e616c747960681b606082015260800190565b6001600160a01b03919091168152604060208201819052600a908201526968617350656e616c747960b01b606082015260800190565b6001600160a01b0391909116815260406020820181905260089082015267185c1c1c9bdd985b60c21b606082015260800190565b6001600160a01b03919091168152604060208201819052601290820152716d696e50656e616c7479496e53686172657360701b606082015260800190565b6001600160a01b039190911681526040602082018190526017908201527f6d6178536861726573506572546f6b656e486f6c646572000000000000000000606082015260800190565b901515815260200190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60006101c082019050610bee828451610862565b6020830151610c006020840182610862565b506040830151610c13604084018261086f565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015181840152506101808084015181840152506101a080840151818401525092915050565b60405181810167ffffffffffffffff81118282101715610cb057fe5b60405291905056fea26469706673582212208cd2b4ef3afefba5f9579b770668b34ff7b4808f18bc7150c696e9fc2b41fc5764736f6c63430007020033";
  var linkReferences$f = {
  };
  var deployedLinkReferences$f = {
  };
  var TransactionalVoteSettingsContract = {
  	_format: _format$f,
  	contractName: contractName$f,
  	sourceName: sourceName$f,
  	abi: abi$f,
  	bytecode: bytecode$f,
  	deployedBytecode: deployedBytecode$f,
  	linkReferences: linkReferences$f,
  	deployedLinkReferences: deployedLinkReferences$f
  };

  const cache$a = {};
  const prefix$e = '@elastic-dao/sdk - TransactionalVoteSettings';

  const isTransactionalVoteSettings = (thing) =>
    thing &&
    typeof thing === 'object' &&
    thing instanceof TransactionalVoteSettings;
  const validateIsTransactionalVoteSettings = (thing) => {
    const message = 'not an TransactionalVoteSettings';
    validate(isTransactionalVoteSettings(thing), { message, prefix: prefix$e });
  };

  class TransactionalVoteSettings extends ElasticModel {
    constructor(
      sdk,
      {
        approval,
        counter,
        hasPenalty,
        managerAddress,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
        settingsModelAddress,
        votingTokenAddress,
      },
    ) {
      super(sdk);
      this.id = managerAddress.toLowerCase();
      cache$a[this.id] = {
        approval,
        counter,
        hasPenalty,
        managerAddress,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
        settingsModelAddress,
        votingTokenAddress,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$e });
      return sdk.contract({
        abi: TransactionalVoteSettingsContract.abi,
        address,
      });
    }

    static async deserialize(sdk, managerAddress) {
      utils$1.validateIsAddress(managerAddress, { prefix: prefix$e });
      const manager = this.managerContract(sdk, managerAddress);

      const settingsModelAddress = await manager.settingsModelAddress();
      const transactionalVoteSettingsModel = this.contract(
        sdk,
        settingsModelAddress,
      );

      const {
        approval,
        counter,
        hasPenalty,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
        votingTokenAddress,
      } = await transactionalVoteSettingsModel.deserialize(managerAddress);

      return new TransactionalVoteSettings({
        approval,
        counter,
        hasPenalty,
        managerAddress,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
        settingsModelAddress,
        votingTokenAddress,
      });
    }

    static managerContract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$e });
      return sdk.contract({
        abi: TransactionalVoteManagerContract.abi,
        address,
      });
    }

    // Getters

    get address() {
      return cache$a[this.id].settingsModelAddress;
    }

    get approval() {
      return this.toBigNumber(cache$a[this.id].approval, 18);
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get counter() {
      return this.toNumber(cache$a[this.id].counter);
    }

    get hasPenalty() {
      return cache$a[this.id].hasPenalty;
    }

    get manager() {
      return this.constructor.managerContract(this.sdk, this.managerAddress);
    }

    get managerAddress() {
      return cache$a[this.id].managerAddress;
    }

    get maxSharesPerTokenHolder() {
      return this.toBigNumber(cache$a[this.id].maxSharesPerTokenHolder, 18);
    }

    get minBlocksForPenalty() {
      return this.toNumber(cache$a[this.id].minBlocksForPenalty);
    }

    get minDurationInBlocks() {
      return this.toNumber(cache$a[this.id].minDurationInBlocks);
    }

    get minPenaltyInShares() {
      return this.toBigNumber(cache$a[this.id].minPenaltyInShares, 18);
    }

    get minRewardInShares() {
      return this.toBigNumber(cache$a[this.id].minRewardInShares, 18);
    }

    get minSharesToCreate() {
      return this.toBigNumber(cache$a[this.id].minSharesToCreate, 18);
    }

    get penalty() {
      return this.toBigNumber(cache$a[this.id].penalty, 18);
    }

    get quorum() {
      return this.toBigNumber(cache$a[this.id].quorum, 18);
    }

    get reward() {
      return this.toBigNumber(cache$a[this.id].reward, 18);
    }

    get votingTokenAddress() {
      return cache$a[this.id].votingTokenAddress;
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(this.sdk, this.managerAddress);
    }

    toObject() {
      const { id } = this;

      const obj = {
        ...cache$a[id],
        id,
      };

      delete obj.settingsModelAddress;

      return this.sanitize(obj);
    }
  }

  var _format$g = "hh-sol-artifact-1";
  var contractName$g = "TransactionalVote";
  var sourceName$g = "src/modules/TransactionalVote/models/Vote.sol";
  var abi$g = [
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct TransactionalVoteSettings.Instance",
  				name: "_settings",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "author",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "to",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "hasReachedQuorum",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isActive",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isApproved",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isExecuted",
  						type: "bool"
  					},
  					{
  						internalType: "bytes",
  						name: "data",
  						type: "bytes"
  					},
  					{
  						internalType: "string",
  						name: "proposal",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "abstainLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "baseGas",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "endOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "noLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorumLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "safeTxGas",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "startOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "value",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yesLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "enum Operation",
  						name: "operation",
  						type: "uint8"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct TransactionalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TransactionalVote.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "_index",
  				type: "uint256"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct TransactionalVoteSettings.Instance",
  				name: "_settings",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "author",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "to",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "hasReachedQuorum",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isActive",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isApproved",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isExecuted",
  						type: "bool"
  					},
  					{
  						internalType: "bytes",
  						name: "data",
  						type: "bytes"
  					},
  					{
  						internalType: "string",
  						name: "proposal",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "abstainLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "baseGas",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "endOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "noLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorumLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "safeTxGas",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "startOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "value",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yesLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "enum Operation",
  						name: "operation",
  						type: "uint8"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct TransactionalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TransactionalVote.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$g = "0x608060405234801561001057600080fd5b50611e2c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632147b238146100465780634a52ae591461005b578063765cd54c14610084575b600080fd5b610059610054366004611203565b6100a4565b005b61006e610069366004611412565b6107ef565b60405161007b9190611551565b60405180910390f35b610097610092366004611412565b610804565b60405161007b9190611593565b6101c08101516103a0820151516040516100e6926100c692909160200161197d565b604051602081830303815290604052805190602001208260000151610c02565b6101c08101516103a0820151516040516101289261010892909160200161182d565b604051602081830303815290604052805190602001208260200151610c02565b6101c08101516103a08201515160405161016a9261014a929091602001611bd9565b604051602081830303815290604052805190602001208260400151610c02565b6101c08101516103a0820151516040516101ac9261018c929091602001611cd5565b604051602081830303815290604052805190602001208260600151610c30565b6101c08101516103a0820151516040516101ee926101ce92909160200161193e565b604051602081830303815290604052805190602001208260800151610c30565b6101c08101516103a08201515160405161023092610210929091602001611907565b604051602081830303815290604052805190602001208260a00151610c30565b6101c08101516103a08201515160405161027292610252929091602001611a8d565b604051602081830303815290604052805190602001208260c00151610c30565b6101c08101516103a0820151516040516102b4926102949290916020016117be565b604051602081830303815290604052805190602001208260e00151610c30565b6101c08101516103a0820151516040516102f7926102d6929091602001611b67565b60405160208183030381529060405280519060200120826101200151610c50565b6101c08101516103a08201515160405161033a92610319929091602001611b34565b60405160208183030381529060405280519060200120826101000151610c74565b6101c08101516103a08201515160405161037d9261035c929091602001611896565b60405160208183030381529060405280519060200120826101400151610c93565b6101c08101516103a0820151516040516103c09261039f929091602001611d0e565b60405160208183030381529060405280519060200120826101600151610c93565b6101c08101516103a082015151604051610403926103e29290916020016117f7565b60405160208183030381529060405280519060200120826101800151610c93565b6101c08101516103a08201515160405161044692610425929091602001611c9c565b60405160208183030381529060405280519060200120826101a00151610c93565b6101c08101516103a08201515160405161048992610468929091602001611d86565b60405160208183030381529060405280519060200120826101e00151610c93565b6101c08101516103a0820151516040516104cc926104ab929091602001611c5a565b60405160208183030381529060405280519060200120826102000151610c93565b6101c08101516103a08201515160405161050f926104ee929091602001611d45565b60405160208183030381529060405280519060200120826102200151610c93565b6101c08101516103a08201515160405161055292610531929091602001611c1a565b60405160208183030381529060405280519060200120826102400151610c93565b6101c08101516103a08201515160405161059592610574929091602001611a22565b60405160208183030381529060405280519060200120826102600151610c93565b6101c08101516103a0820151516040516105d8926105b7929091602001611ac6565b60405160208183030381529060405280519060200120826102800151610c93565b6101c08101516103a08201515160405161061b926105fa9290916020016118d2565b60405160208183030381529060405280519060200120826102a00151610c93565b6101c08101516103a08201515160405161065e9261063d929091602001611b9e565b60405160208183030381529060405280519060200120826102c00151610c93565b6101c08101516103a0820151516040516106a1926106809290916020016119b2565b60405160208183030381529060405280519060200120826102e00151610c93565b6101c08101516103a0820151516040516106e4926106c3929091602001611afc565b60405160208183030381529060405280519060200120826103000151610c93565b6101c08101516103a082015151604051610727926107069290916020016119e7565b60405160208183030381529060405280519060200120826103200151610c93565b6101c08101516103a08201515160405161076a92610749929091602001611a59565b60405160208183030381529060405280519060200120826103400151610c93565b6101c08101516103a0820151516040516107ad9261078c92909160200161185e565b60405160208183030381529060405280519060200120826103600151610c93565b6101c08101516103a0820151516040516107ec926107cf929091602001611789565b604051602081830303815290604052805190602001206001610c30565b50565b60006107fb8383610ca5565b90505b92915050565b61080c610e70565b6101c081018390526103a081018290526108268383610ca5565b156107fe57815160405161085e9161084391869190602001611896565b60405160208183030381529060405280519060200120610cbf565b610140820152815160405161087c9161084391869190602001611d0e565b61016082015281516040516108b59161089a9186919060200161197d565b60405160208183030381529060405280519060200120610cd4565b6001600160a01b0316815281516040516108d891610843918691906020016117f7565b6101808201528151604051610911916108f691869190602001611b34565b60405160208183030381529060405280519060200120610cef565b610100820152815160405161092f9161084391869190602001611c9c565b6101a082015281516040516109689161094d91869190602001611cd5565b60405160208183030381529060405280519060200120610dc4565b1515606082015281516040516109879161094d9186919060200161193e565b1515608082015281516040516109a69161094d91869190602001611907565b151560a082015281516040516109c59161094d91869190602001611a8d565b151560c082015281516040516109e49161094d918691906020016117be565b151560e08201528151604051610a039161084391869190602001611d86565b6101e08201528151604051610a219161084391869190602001611c5a565b6102008201528151604051610a3f9161084391869190602001611d45565b6102208201528151604051610a5d9161084391869190602001611c1a565b6102408201528151604051610a7b9161084391869190602001611a22565b6102608201528151604051610a999161084391869190602001611ac6565b6102808201528151604051610ad291610ab791869190602001611b67565b60405160208183030381529060405280519060200120610dd9565b6101208201528151604051610af091610843918691906020016118d2565b6102a08201528151604051610b0e9161084391869190602001611b9e565b6102c08201528151604051610b2c91610843918691906020016119b2565b6102e08201528151604051610b4a9161084391869190602001611afc565b6103008201528151604051610b6891610843918691906020016119e7565b6103208201528151604051610b869161089a9186919060200161182d565b6001600160a01b03166020808301919091528251604051610baf92610843928792909101611a59565b6103408201528151604051610bcd9161089a91869190602001611bd9565b6001600160a01b031660408083019190915282519051610bf6916108439186919060200161185e565b61036082015292915050565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b600091825260016020526040909120805460ff1916911515919091179055565b60008281526004602090815260409091208251610c6f92840190610f84565b505050565b60008281526002602090815260409091208251610c6f92840190610f84565b60009182526005602052604090912055565b80516040516000916107fb9161094d918691602001611789565b6000818152600560205260409020545b919050565b6000908152602081905260409020546001600160a01b031690565b60608160001a60f81b6001600160f81b031916610d275760405162461bcd60e51b8152600401610d1e9061155c565b60405180910390fd5b600082815260026020818152604092839020805484516001821615610100026000190190911693909304601f8101839004830284018301909452838352919290830182828015610db85780601f10610d8d57610100808354040283529160200191610db8565b820191906000526020600020905b815481529060010190602001808311610d9b57829003601f168201915b50505050509050919050565b60009081526001602052604090205460ff1690565b60608160001a60f81b6001600160f81b031916610e085760405162461bcd60e51b8152600401610d1e9061155c565b60008281526004602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084529091830182828015610db85780601f10610d8d57610100808354040283529160200191610db8565b604051806103c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600015158152602001600015158152602001600015158152602001600015158152602001606081526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001811115610f7257fe5b8152602001610f7f611002565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610fc557805160ff1916838001178555610ff2565b82800160010185558215610ff2579182015b82811115610ff2578251825591602001919060010190610fd7565b50610ffe929150611085565b5090565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115610ffe5760008155600101611086565b80356001600160a01b0381168114610ccf57600080fd5b80358015158114610ccf57600080fd5b600082601f8301126110d1578081fd5b813567ffffffffffffffff8111156110e557fe5b6110f8601f8201601f1916602001611dd2565b915080825283602082850101111561110f57600080fd5b8060208401602084013760009082016020015292915050565b803560028110610ccf57600080fd5b60006101c080838503121561114a578182fd5b61115381611dd2565b91505061115f8261109a565b815261116d6020830161109a565b602082015261117e604083016110b1565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b600060208284031215611214578081fd5b813567ffffffffffffffff8082111561122b578283fd5b90830190610560828603121561123f578283fd5b61124a6103c0611dd2565b6112538361109a565b81526112616020840161109a565b60208201526112726040840161109a565b6040820152611283606084016110b1565b6060820152611294608084016110b1565b60808201526112a560a084016110b1565b60a08201526112b660c084016110b1565b60c08201526112c760e084016110b1565b60e082015261010080840135838111156112df578586fd5b6112eb888287016110c1565b8284015250506101208084013583811115611304578586fd5b611310888287016110c1565b91830191909152506101408381013590820152610160808401359082015261018080840135908201526101a080840135908201526101c080840135908201526101e08084013590820152610200808401359082015261022080840135908201526102408084013590820152610260808401359082015261028080840135908201526102a080840135908201526102c080840135908201526102e08084013590820152610300808401359082015261032080840135908201526103408084013590820152610360808401359082015261038091506113ee828401611128565b828201526103a0915061140386838501611137565b91810191909152949350505050565b6000806101e08385031215611425578081fd5b823591506114368460208501611137565b90509250929050565b6001600160a01b03169052565b15159052565b60008151808452815b818110156114775760208185018101518683018201520161145b565b818111156114885782602083870101525b50601f01601f19169290920160200192915050565b600281106114a757fe5b9052565b6114b682825161143f565b60208101516114c8602084018261143f565b5060408101516114db604084018261144c565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b901515815260200190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b6000602082526115a760208301845161143f565b60208301516115b9604084018261143f565b5060408301516115cc606084018261143f565b5060608301516115df608084018261144c565b5060808301516115f260a084018261144c565b5060a083015161160560c084018261144c565b5060c083015161161860e084018261144c565b5060e083015161010061162d8185018361144c565b808501519150506101206105608185015261164c610580850183611452565b9150808501519050610140601f19858403018186015261166c8383611452565b9086015161016086810191909152860151610180808701919091528601516101a0808701919091528601516101c0808701919091528601516101e08087019190915286015161020080870191909152860151610220808701919091528601516102408087019190915286015161026080870191909152860151610280808701919091528601516102a0808701919091528601516102c0808701919091528601516102e080870191909152860151610300808701919091528601516103208087019190915286015161034080870191909152860151610360808701919091528601516103808087019190915286015190925090506103a061176e8186018361149d565b85015190506117816103c08501826114ab565b509392505050565b9182526001600160a01b031660208201526060604082018190526006908201526565786973747360d01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600a90820152691a5cd15e1958dd5d195960b21b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600790820152666261736547617360c81b608082015260a00190565b9182526001600160a01b0316602082015260606040820181905260029082015261746f60f01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600990820152687965734c616d62646160b81b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600d908201526c6162737461696e4c616d62646160981b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526006908201526571756f72756d60d01b608082015260a00190565b9182526001600160a01b0316602082015260606040820181905260089082015267697341637469766560c01b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526010908201526f6861735265616368656451756f72756d60801b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526006908201526530baba3437b960d11b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600690820152651c995dd85c9960d21b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600c908201526b73746172744f6e426c6f636b60a01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600890820152676e6f4c616d62646160c01b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526005908201526476616c756560d81b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600a90820152691a5cd05c1c1c9bdd995960b21b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526007908201526670656e616c747960c81b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526009908201526873616665547847617360b81b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600490820152636461746160e01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600890820152671c1c9bdc1bdcd85b60c21b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600c908201526b71756f72756d4c616d62646160a01b608082015260a00190565b9182526001600160a01b0316602082015260606040820181905260129082015271766f74696e67546f6b656e4164647265737360701b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052601190820152706d696e526577617264496e53686172657360781b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052601390820152726d696e426c6f636b73466f7250656e616c747960681b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600a9082015269656e644f6e426c6f636b60b01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600a908201526968617350656e616c747960b01b608082015260a00190565b9182526001600160a01b0316602082015260606040820181905260089082015267185c1c1c9bdd985b60c21b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052601290820152716d696e50656e616c7479496e53686172657360701b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526017908201527f6d6178536861726573506572546f6b656e486f6c646572000000000000000000608082015260a00190565b60405181810167ffffffffffffffff81118282101715611dee57fe5b60405291905056fea26469706673582212204ba553bd8aa3d8223b6cd5d4cd52f8c3a7a19fb937d33c9d011353cf2b63661064736f6c63430007020033";
  var deployedBytecode$g = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80632147b238146100465780634a52ae591461005b578063765cd54c14610084575b600080fd5b610059610054366004611203565b6100a4565b005b61006e610069366004611412565b6107ef565b60405161007b9190611551565b60405180910390f35b610097610092366004611412565b610804565b60405161007b9190611593565b6101c08101516103a0820151516040516100e6926100c692909160200161197d565b604051602081830303815290604052805190602001208260000151610c02565b6101c08101516103a0820151516040516101289261010892909160200161182d565b604051602081830303815290604052805190602001208260200151610c02565b6101c08101516103a08201515160405161016a9261014a929091602001611bd9565b604051602081830303815290604052805190602001208260400151610c02565b6101c08101516103a0820151516040516101ac9261018c929091602001611cd5565b604051602081830303815290604052805190602001208260600151610c30565b6101c08101516103a0820151516040516101ee926101ce92909160200161193e565b604051602081830303815290604052805190602001208260800151610c30565b6101c08101516103a08201515160405161023092610210929091602001611907565b604051602081830303815290604052805190602001208260a00151610c30565b6101c08101516103a08201515160405161027292610252929091602001611a8d565b604051602081830303815290604052805190602001208260c00151610c30565b6101c08101516103a0820151516040516102b4926102949290916020016117be565b604051602081830303815290604052805190602001208260e00151610c30565b6101c08101516103a0820151516040516102f7926102d6929091602001611b67565b60405160208183030381529060405280519060200120826101200151610c50565b6101c08101516103a08201515160405161033a92610319929091602001611b34565b60405160208183030381529060405280519060200120826101000151610c74565b6101c08101516103a08201515160405161037d9261035c929091602001611896565b60405160208183030381529060405280519060200120826101400151610c93565b6101c08101516103a0820151516040516103c09261039f929091602001611d0e565b60405160208183030381529060405280519060200120826101600151610c93565b6101c08101516103a082015151604051610403926103e29290916020016117f7565b60405160208183030381529060405280519060200120826101800151610c93565b6101c08101516103a08201515160405161044692610425929091602001611c9c565b60405160208183030381529060405280519060200120826101a00151610c93565b6101c08101516103a08201515160405161048992610468929091602001611d86565b60405160208183030381529060405280519060200120826101e00151610c93565b6101c08101516103a0820151516040516104cc926104ab929091602001611c5a565b60405160208183030381529060405280519060200120826102000151610c93565b6101c08101516103a08201515160405161050f926104ee929091602001611d45565b60405160208183030381529060405280519060200120826102200151610c93565b6101c08101516103a08201515160405161055292610531929091602001611c1a565b60405160208183030381529060405280519060200120826102400151610c93565b6101c08101516103a08201515160405161059592610574929091602001611a22565b60405160208183030381529060405280519060200120826102600151610c93565b6101c08101516103a0820151516040516105d8926105b7929091602001611ac6565b60405160208183030381529060405280519060200120826102800151610c93565b6101c08101516103a08201515160405161061b926105fa9290916020016118d2565b60405160208183030381529060405280519060200120826102a00151610c93565b6101c08101516103a08201515160405161065e9261063d929091602001611b9e565b60405160208183030381529060405280519060200120826102c00151610c93565b6101c08101516103a0820151516040516106a1926106809290916020016119b2565b60405160208183030381529060405280519060200120826102e00151610c93565b6101c08101516103a0820151516040516106e4926106c3929091602001611afc565b60405160208183030381529060405280519060200120826103000151610c93565b6101c08101516103a082015151604051610727926107069290916020016119e7565b60405160208183030381529060405280519060200120826103200151610c93565b6101c08101516103a08201515160405161076a92610749929091602001611a59565b60405160208183030381529060405280519060200120826103400151610c93565b6101c08101516103a0820151516040516107ad9261078c92909160200161185e565b60405160208183030381529060405280519060200120826103600151610c93565b6101c08101516103a0820151516040516107ec926107cf929091602001611789565b604051602081830303815290604052805190602001206001610c30565b50565b60006107fb8383610ca5565b90505b92915050565b61080c610e70565b6101c081018390526103a081018290526108268383610ca5565b156107fe57815160405161085e9161084391869190602001611896565b60405160208183030381529060405280519060200120610cbf565b610140820152815160405161087c9161084391869190602001611d0e565b61016082015281516040516108b59161089a9186919060200161197d565b60405160208183030381529060405280519060200120610cd4565b6001600160a01b0316815281516040516108d891610843918691906020016117f7565b6101808201528151604051610911916108f691869190602001611b34565b60405160208183030381529060405280519060200120610cef565b610100820152815160405161092f9161084391869190602001611c9c565b6101a082015281516040516109689161094d91869190602001611cd5565b60405160208183030381529060405280519060200120610dc4565b1515606082015281516040516109879161094d9186919060200161193e565b1515608082015281516040516109a69161094d91869190602001611907565b151560a082015281516040516109c59161094d91869190602001611a8d565b151560c082015281516040516109e49161094d918691906020016117be565b151560e08201528151604051610a039161084391869190602001611d86565b6101e08201528151604051610a219161084391869190602001611c5a565b6102008201528151604051610a3f9161084391869190602001611d45565b6102208201528151604051610a5d9161084391869190602001611c1a565b6102408201528151604051610a7b9161084391869190602001611a22565b6102608201528151604051610a999161084391869190602001611ac6565b6102808201528151604051610ad291610ab791869190602001611b67565b60405160208183030381529060405280519060200120610dd9565b6101208201528151604051610af091610843918691906020016118d2565b6102a08201528151604051610b0e9161084391869190602001611b9e565b6102c08201528151604051610b2c91610843918691906020016119b2565b6102e08201528151604051610b4a9161084391869190602001611afc565b6103008201528151604051610b6891610843918691906020016119e7565b6103208201528151604051610b869161089a9186919060200161182d565b6001600160a01b03166020808301919091528251604051610baf92610843928792909101611a59565b6103408201528151604051610bcd9161089a91869190602001611bd9565b6001600160a01b031660408083019190915282519051610bf6916108439186919060200161185e565b61036082015292915050565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b600091825260016020526040909120805460ff1916911515919091179055565b60008281526004602090815260409091208251610c6f92840190610f84565b505050565b60008281526002602090815260409091208251610c6f92840190610f84565b60009182526005602052604090912055565b80516040516000916107fb9161094d918691602001611789565b6000818152600560205260409020545b919050565b6000908152602081905260409020546001600160a01b031690565b60608160001a60f81b6001600160f81b031916610d275760405162461bcd60e51b8152600401610d1e9061155c565b60405180910390fd5b600082815260026020818152604092839020805484516001821615610100026000190190911693909304601f8101839004830284018301909452838352919290830182828015610db85780601f10610d8d57610100808354040283529160200191610db8565b820191906000526020600020905b815481529060010190602001808311610d9b57829003601f168201915b50505050509050919050565b60009081526001602052604090205460ff1690565b60608160001a60f81b6001600160f81b031916610e085760405162461bcd60e51b8152600401610d1e9061155c565b60008281526004602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084529091830182828015610db85780601f10610d8d57610100808354040283529160200191610db8565b604051806103c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600015158152602001600015158152602001600015158152602001600015158152602001606081526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001811115610f7257fe5b8152602001610f7f611002565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610fc557805160ff1916838001178555610ff2565b82800160010185558215610ff2579182015b82811115610ff2578251825591602001919060010190610fd7565b50610ffe929150611085565b5090565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115610ffe5760008155600101611086565b80356001600160a01b0381168114610ccf57600080fd5b80358015158114610ccf57600080fd5b600082601f8301126110d1578081fd5b813567ffffffffffffffff8111156110e557fe5b6110f8601f8201601f1916602001611dd2565b915080825283602082850101111561110f57600080fd5b8060208401602084013760009082016020015292915050565b803560028110610ccf57600080fd5b60006101c080838503121561114a578182fd5b61115381611dd2565b91505061115f8261109a565b815261116d6020830161109a565b602082015261117e604083016110b1565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b600060208284031215611214578081fd5b813567ffffffffffffffff8082111561122b578283fd5b90830190610560828603121561123f578283fd5b61124a6103c0611dd2565b6112538361109a565b81526112616020840161109a565b60208201526112726040840161109a565b6040820152611283606084016110b1565b6060820152611294608084016110b1565b60808201526112a560a084016110b1565b60a08201526112b660c084016110b1565b60c08201526112c760e084016110b1565b60e082015261010080840135838111156112df578586fd5b6112eb888287016110c1565b8284015250506101208084013583811115611304578586fd5b611310888287016110c1565b91830191909152506101408381013590820152610160808401359082015261018080840135908201526101a080840135908201526101c080840135908201526101e08084013590820152610200808401359082015261022080840135908201526102408084013590820152610260808401359082015261028080840135908201526102a080840135908201526102c080840135908201526102e08084013590820152610300808401359082015261032080840135908201526103408084013590820152610360808401359082015261038091506113ee828401611128565b828201526103a0915061140386838501611137565b91810191909152949350505050565b6000806101e08385031215611425578081fd5b823591506114368460208501611137565b90509250929050565b6001600160a01b03169052565b15159052565b60008151808452815b818110156114775760208185018101518683018201520161145b565b818111156114885782602083870101525b50601f01601f19169290920160200192915050565b600281106114a757fe5b9052565b6114b682825161143f565b60208101516114c8602084018261143f565b5060408101516114db604084018261144c565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b901515815260200190565b60208082526018908201527f456c617374696344414f3a205a65726f20416464726573730000000000000000604082015260600190565b6000602082526115a760208301845161143f565b60208301516115b9604084018261143f565b5060408301516115cc606084018261143f565b5060608301516115df608084018261144c565b5060808301516115f260a084018261144c565b5060a083015161160560c084018261144c565b5060c083015161161860e084018261144c565b5060e083015161010061162d8185018361144c565b808501519150506101206105608185015261164c610580850183611452565b9150808501519050610140601f19858403018186015261166c8383611452565b9086015161016086810191909152860151610180808701919091528601516101a0808701919091528601516101c0808701919091528601516101e08087019190915286015161020080870191909152860151610220808701919091528601516102408087019190915286015161026080870191909152860151610280808701919091528601516102a0808701919091528601516102c0808701919091528601516102e080870191909152860151610300808701919091528601516103208087019190915286015161034080870191909152860151610360808701919091528601516103808087019190915286015190925090506103a061176e8186018361149d565b85015190506117816103c08501826114ab565b509392505050565b9182526001600160a01b031660208201526060604082018190526006908201526565786973747360d01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600a90820152691a5cd15e1958dd5d195960b21b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600790820152666261736547617360c81b608082015260a00190565b9182526001600160a01b0316602082015260606040820181905260029082015261746f60f01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600990820152687965734c616d62646160b81b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600d908201526c6162737461696e4c616d62646160981b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526006908201526571756f72756d60d01b608082015260a00190565b9182526001600160a01b0316602082015260606040820181905260089082015267697341637469766560c01b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526010908201526f6861735265616368656451756f72756d60801b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526006908201526530baba3437b960d11b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600690820152651c995dd85c9960d21b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600c908201526b73746172744f6e426c6f636b60a01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600890820152676e6f4c616d62646160c01b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526005908201526476616c756560d81b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600a90820152691a5cd05c1c1c9bdd995960b21b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526007908201526670656e616c747960c81b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526009908201526873616665547847617360b81b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600490820152636461746160e01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600890820152671c1c9bdc1bdcd85b60c21b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600c908201526b71756f72756d4c616d62646160a01b608082015260a00190565b9182526001600160a01b0316602082015260606040820181905260129082015271766f74696e67546f6b656e4164647265737360701b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052601190820152706d696e526577617264496e53686172657360781b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052601390820152726d696e426c6f636b73466f7250656e616c747960681b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600a9082015269656e644f6e426c6f636b60b01b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052600a908201526968617350656e616c747960b01b608082015260a00190565b9182526001600160a01b0316602082015260606040820181905260089082015267185c1c1c9bdd985b60c21b608082015260a00190565b9182526001600160a01b03166020820152606060408201819052601290820152716d696e50656e616c7479496e53686172657360701b608082015260a00190565b9182526001600160a01b031660208201526060604082018190526017908201527f6d6178536861726573506572546f6b656e486f6c646572000000000000000000608082015260a00190565b60405181810167ffffffffffffffff81118282101715611dee57fe5b60405291905056fea26469706673582212204ba553bd8aa3d8223b6cd5d4cd52f8c3a7a19fb937d33c9d011353cf2b63661064736f6c63430007020033";
  var linkReferences$g = {
  };
  var deployedLinkReferences$g = {
  };
  var TransactionalVoteContract = {
  	_format: _format$g,
  	contractName: contractName$g,
  	sourceName: sourceName$g,
  	abi: abi$g,
  	bytecode: bytecode$g,
  	deployedBytecode: deployedBytecode$g,
  	linkReferences: linkReferences$g,
  	deployedLinkReferences: deployedLinkReferences$g
  };

  const cache$b = {};
  const prefix$f = '@elastic-dao/sdk - TransactionalVote';

  const isTransactionalVote = (thing) =>
    thing && typeof thing === 'object' && thing instanceof TransactionalVote;
  const validateIsTransactionalVote = (thing) => {
    const message = 'not an TransactionalVote';
    validate(isTransactionalVote(thing), { message, prefix: prefix$f });
  };

  class TransactionalVote extends ElasticModel {
    constructor(
      sdk,
      {
        uuid,
        author,
        to,
        votingToken,
        hasPenalty,
        hasReachedQuorum,
        isActive,
        isApproved,
        isExecuted,
        data,
        proposal,
        abstainLambda,
        approval,
        baseGas,
        endOnBlock,
        index,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minPenaltyInShares,
        minRewardsInShares,
        noLambda,
        penalty,
        quorum,
        quorumLambda,
        reward,
        safeTxGas,
        settings,
        startOnBlock,
        value,
        voteModelAddress,
        yesLambda,
        operation,
      },
    ) {
      super(sdk);
      this.id = `${settings.uuid}|${index}`.toLowerCase();
      cache$b[this.id] = {
        uuid,
        author,
        to,
        votingToken,
        hasPenalty,
        hasReachedQuorum,
        isActive,
        isApproved,
        isExecuted,
        data,
        proposal,
        abstainLambda,
        approval,
        baseGas,
        endOnBlock,
        index,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minPenaltyInShares,
        minRewardsInShares,
        noLambda,
        penalty,
        quorum,
        quorumLambda,
        reward,
        safeTxGas,
        settings,
        startOnBlock,
        value,
        voteModelAddress,
        yesLambda,
        operation,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$f });
      return sdk.contract({ abi: TransactionalVoteContract.abi, address });
    }

    static async deserialize(sdk, index, settings) {
      utils$1.validateIsNumber(index, { prefix: prefix$f });
      validateIsTransactionalVoteSettings(settings);

      const voteModelAddress = await settings.manager.voteModelAddress();
      const transactionalVoteModel = await this.contract(sdk, voteModelAddress);

      const {
        uuid,
        author,
        to,
        votingToken,
        hasPenalty,
        hasReachedQuorum,
        isActive,
        isApproved,
        isExecuted,
        data,
        proposal,
        abstainLambda,
        approval,
        baseGas,
        endOnBlock,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minPenaltyInShares,
        minRewardsInShares,
        noLambda,
        penalty,
        quorum,
        quorumLambda,
        reward,
        safeTxGas,
        startOnBlock,
        value,
        yesLambda,
        operation,
      } = await transactionalVoteModel.deserialize(
        index,
        settings.toObject(false),
      );

      return new TransactionalVote({
        uuid,
        author,
        to,
        votingToken,
        hasPenalty,
        hasReachedQuorum,
        isActive,
        isApproved,
        isExecuted,
        data,
        proposal,
        abstainLambda,
        approval,
        baseGas,
        endOnBlock,
        index,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minPenaltyInShares,
        minRewardsInShares,
        noLambda,
        penalty,
        quorum,
        quorumLambda,
        reward,
        safeTxGas,
        settings,
        startOnBlock,
        value,
        voteModelAddress,
        yesLambda,
        operation,
      });
    }

    // Getters

    get abstainLambda() {
      return this.toBigNumber(cache$b[this.id].abstainLambda, 18);
    }

    get address() {
      return cache$b[this.id].voteModelAddress;
    }

    get approval() {
      return this.toBigNumber(cache$b[this.id].approval, 18);
    }

    get author() {
      return cache$b[this.id].author;
    }

    get baseGas() {
      return this.toBigNumber(cache$b[this.id].baseGas, 18);
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get data() {
      return cache$b[this.id].data;
    }

    get endOnBlock() {
      return this.toNumber(cache$b[this.id].endOnBlock);
    }

    get hasPenalty() {
      return cache$b[this.id].hasPenalty;
    }

    get hasReachedQuorum() {
      return cache$b[this.id].hasReachedQuorum;
    }

    get index() {
      return this.toNumber(cache$b[this.id].index);
    }

    get isActive() {
      return cache$b[this.id].isActive;
    }

    get isApproved() {
      return cache$b[this.id].isApproved;
    }

    get isExecuted() {
      return cache$b[this.id].isExecuted;
    }

    get maxSharesPerTokenHolder() {
      return this.toBigNumber(cache$b[this.id].maxSharesPerTokenHolder, 18);
    }

    get minBlocksForPenalty() {
      return this.toNumber(cache$b[this.id].minBlocksForPenalty);
    }

    get minPenaltyInShares() {
      return this.toBigNumber(cache$b[this.id].minPenaltyInShares, 18);
    }

    get minRewardInShares() {
      return this.toBigNumber(cache$b[this.id].minRewardInShares, 18);
    }

    get noLambda() {
      return this.toBigNumber(cache$b[this.id].noLambda, 18);
    }

    get operation() {
      return cache$b[this.id].operation;
    }

    get penalty() {
      return this.toBigNumber(cache$b[this.id].penalty, 18);
    }

    get proposal() {
      return cache$b[this.id].proposal;
    }

    get quorum() {
      return this.toBigNumber(cache$b[this.id].quorum, 18);
    }

    get quorumLambda() {
      return this.toBigNumber(cache$b[this.id].quorumLambda, 18);
    }

    get reward() {
      return this.toBigNumber(cache$b[this.id].reward, 18);
    }

    get safeTxGas() {
      return this.toBigNumber(cache$b[this.id].safeTransactionGas);
    }

    get settings() {
      return cache$b[this.id].settings;
    }

    get startOnBlock() {
      return this.toNumber(cache$b[this.id].startOnBlock);
    }

    get to() {
      return cache$b[this.id].to;
    }

    get value() {
      return this.toBigNumber(cache$b[this.id].value, 18);
    }

    get votingToken() {
      return cache$b[this.id].votingToken;
    }

    get yesLambda() {
      return this.toBigNumber(cache$b[this.id].yesLambda, 18);
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(this.sdk, this.index, this.settings);
    }

    toObject(includeNested = true) {
      const { id, settings } = this;

      const obj = {
        ...cache$b[id],
        id,
        settings: settings.toObject(false),
      };

      if (includeNested === false) {
        delete obj.settings;
      }

      return this.sanitize(obj);
    }
  }

  var _format$h = "hh-sol-artifact-1";
  var contractName$h = "TransactionalVoteBallot";
  var sourceName$h = "src/modules/TransactionalVote/models/Ballot.sol";
  var abi$h = [
  	{
  		inputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_voter",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct TransactionalVoteSettings.Instance",
  				name: "_settings",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "author",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "to",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "hasReachedQuorum",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isActive",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isApproved",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isExecuted",
  						type: "bool"
  					},
  					{
  						internalType: "bytes",
  						name: "data",
  						type: "bytes"
  					},
  					{
  						internalType: "string",
  						name: "proposal",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "abstainLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "baseGas",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "endOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "noLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorumLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "safeTxGas",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "startOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "value",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yesLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "enum Operation",
  						name: "operation",
  						type: "uint8"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct TransactionalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TransactionalVote.Instance",
  				name: "_vote",
  				type: "tuple"
  			}
  		],
  		name: "deserialize",
  		outputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "voter",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "wasPenalized",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yna",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct TransactionalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "author",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "to",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "hasReachedQuorum",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isActive",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isApproved",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isExecuted",
  								type: "bool"
  							},
  							{
  								internalType: "bytes",
  								name: "data",
  								type: "bytes"
  							},
  							{
  								internalType: "string",
  								name: "proposal",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "abstainLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "baseGas",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "endOnBlock",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "index",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "noLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorumLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "safeTxGas",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "startOnBlock",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "value",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "yesLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "enum Operation",
  								name: "operation",
  								type: "uint8"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "managerAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "votingTokenAddress",
  										type: "address"
  									},
  									{
  										internalType: "bool",
  										name: "hasPenalty",
  										type: "bool"
  									},
  									{
  										internalType: "uint256",
  										name: "approval",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "counter",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "maxSharesPerTokenHolder",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minBlocksForPenalty",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minDurationInBlocks",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minPenaltyInShares",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minRewardInShares",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minSharesToCreate",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "penalty",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "quorum",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "reward",
  										type: "uint256"
  									}
  								],
  								internalType: "struct TransactionalVoteSettings.Instance",
  								name: "settings",
  								type: "tuple"
  							}
  						],
  						internalType: "struct TransactionalVote.Instance",
  						name: "vote",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TransactionalVoteBallot.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_voter",
  				type: "address"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "managerAddress",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "counter",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minDurationInBlocks",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minSharesToCreate",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					}
  				],
  				internalType: "struct TransactionalVoteSettings.Instance",
  				name: "_settings",
  				type: "tuple"
  			},
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "author",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "to",
  						type: "address"
  					},
  					{
  						internalType: "address",
  						name: "votingTokenAddress",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "hasPenalty",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "hasReachedQuorum",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isActive",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isApproved",
  						type: "bool"
  					},
  					{
  						internalType: "bool",
  						name: "isExecuted",
  						type: "bool"
  					},
  					{
  						internalType: "bytes",
  						name: "data",
  						type: "bytes"
  					},
  					{
  						internalType: "string",
  						name: "proposal",
  						type: "string"
  					},
  					{
  						internalType: "uint256",
  						name: "abstainLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "approval",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "baseGas",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "endOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "index",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "maxSharesPerTokenHolder",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minBlocksForPenalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minPenaltyInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "minRewardInShares",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "noLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "penalty",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorum",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "quorumLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "reward",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "safeTxGas",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "startOnBlock",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "value",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yesLambda",
  						type: "uint256"
  					},
  					{
  						internalType: "enum Operation",
  						name: "operation",
  						type: "uint8"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct TransactionalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TransactionalVote.Instance",
  				name: "_vote",
  				type: "tuple"
  			}
  		],
  		name: "exists",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "recordExists",
  				type: "bool"
  			}
  		],
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "voter",
  						type: "address"
  					},
  					{
  						internalType: "bool",
  						name: "wasPenalized",
  						type: "bool"
  					},
  					{
  						internalType: "uint256",
  						name: "lambda",
  						type: "uint256"
  					},
  					{
  						internalType: "uint256",
  						name: "yna",
  						type: "uint256"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "managerAddress",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "counter",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minDurationInBlocks",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minSharesToCreate",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							}
  						],
  						internalType: "struct TransactionalVoteSettings.Instance",
  						name: "settings",
  						type: "tuple"
  					},
  					{
  						components: [
  							{
  								internalType: "address",
  								name: "author",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "to",
  								type: "address"
  							},
  							{
  								internalType: "address",
  								name: "votingTokenAddress",
  								type: "address"
  							},
  							{
  								internalType: "bool",
  								name: "hasPenalty",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "hasReachedQuorum",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isActive",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isApproved",
  								type: "bool"
  							},
  							{
  								internalType: "bool",
  								name: "isExecuted",
  								type: "bool"
  							},
  							{
  								internalType: "bytes",
  								name: "data",
  								type: "bytes"
  							},
  							{
  								internalType: "string",
  								name: "proposal",
  								type: "string"
  							},
  							{
  								internalType: "uint256",
  								name: "abstainLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "approval",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "baseGas",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "endOnBlock",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "index",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "maxSharesPerTokenHolder",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minBlocksForPenalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minPenaltyInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "minRewardInShares",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "noLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "penalty",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorum",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "quorumLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "reward",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "safeTxGas",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "startOnBlock",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "value",
  								type: "uint256"
  							},
  							{
  								internalType: "uint256",
  								name: "yesLambda",
  								type: "uint256"
  							},
  							{
  								internalType: "enum Operation",
  								name: "operation",
  								type: "uint8"
  							},
  							{
  								components: [
  									{
  										internalType: "address",
  										name: "managerAddress",
  										type: "address"
  									},
  									{
  										internalType: "address",
  										name: "votingTokenAddress",
  										type: "address"
  									},
  									{
  										internalType: "bool",
  										name: "hasPenalty",
  										type: "bool"
  									},
  									{
  										internalType: "uint256",
  										name: "approval",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "counter",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "maxSharesPerTokenHolder",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minBlocksForPenalty",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minDurationInBlocks",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minPenaltyInShares",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minRewardInShares",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "minSharesToCreate",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "penalty",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "quorum",
  										type: "uint256"
  									},
  									{
  										internalType: "uint256",
  										name: "reward",
  										type: "uint256"
  									}
  								],
  								internalType: "struct TransactionalVoteSettings.Instance",
  								name: "settings",
  								type: "tuple"
  							}
  						],
  						internalType: "struct TransactionalVote.Instance",
  						name: "vote",
  						type: "tuple"
  					}
  				],
  				internalType: "struct TransactionalVoteBallot.Instance",
  				name: "record",
  				type: "tuple"
  			}
  		],
  		name: "serialize",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$h = "0x608060405234801561001057600080fd5b50610e51806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637fadabb214610046578063c28ad1441461005b578063c4e683da14610084575b600080fd5b6100596100543660046108ce565b6100a4565b005b61006e61006936600461086f565b6101c8565b60405161007b9190610baa565b60405180910390f35b61009761009236600461086f565b6101df565b60405161007b9190610bb5565b60808101515160a08201516101c0015182516040516100ed936100cd9390929091602001610b63565b6040516020818303038152906040528051906020012082602001516102c0565b60808101515160a08201516101c001518251604051610136936101169390929091602001610ae4565b6040516020818303038152906040528051906020012082604001516102e0565b60808101515160a08201516101c00151825160405161017f9361015f9390929091602001610b25565b6040516020818303038152906040528051906020012082606001516102e0565b60808101515160a08201516101c0015182516040516101c5936101a89390929091602001610aa3565b6040516020818303038152906040528051906020012060016102c0565b50565b60006101d58484846102f2565b90505b9392505050565b6101e761033c565b6001600160a01b03841681526080810183905260a0810182905261020c8484846102f2565b156101d85782516101c083015160405161024b926102309290918890602001610ae4565b60405160208183030381529060405280519060200120610312565b60408083019190915283516101c0840151915161028c9261027192918890602001610b63565b60405160208183030381529060405280519060200120610327565b151560208083019190915283516101c08401516040516102b493610230939291899101610b25565b60608201529392505050565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526005602052604090912055565b81516101c08201516040516000926101d592610271928890602001610aa3565b6000818152600560205260409020545b919050565b60009081526001602052604090205460ff1690565b6040518060c0016040528060006001600160a01b031681526020016000151581526020016000815260200160008152602001610376610388565b815260200161038361040b565b905290565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806103c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160001515815260200160001515815260200160001515815260200160001515815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000600181111561050d57fe5b8152602001610383610388565b80356001600160a01b038116811461032257600080fd5b8035801515811461032257600080fd5b600082601f830112610551578081fd5b813567ffffffffffffffff81111561056557fe5b610578601f8201601f1916602001610df7565b915080825283602082850101111561058f57600080fd5b8060208401602084013760009082016020015292915050565b80356002811061032257600080fd5b60006101c08083850312156105ca578182fd5b6105d381610df7565b9150506105df8261051a565b81526105ed6020830161051a565b60208201526105fe60408301610531565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b60006105608284031215610695578081fd5b6106a06103c0610df7565b90506106ab8261051a565b81526106b96020830161051a565b60208201526106ca6040830161051a565b60408201526106db60608301610531565b60608201526106ec60808301610531565b60808201526106fd60a08301610531565b60a082015261070e60c08301610531565b60c082015261071f60e08301610531565b60e08201526101008083013567ffffffffffffffff8082111561074157600080fd5b61074d86838701610541565b8385015261012092508285013591508082111561076957600080fd5b5061077685828601610541565b91830191909152506101408281013590820152610160808301359082015261018080830135908201526101a080830135908201526101c080830135908201526101e08083013590820152610200808301359082015261022080830135908201526102408083013590820152610260808301359082015261028080830135908201526102a080830135908201526102c080830135908201526102e0808301359082015261030080830135908201526103208083013590820152610340808301359082015261036080830135908201526103806108528184016105a8565b908201526103a0610865848483016105b7565b9082015292915050565b60008060006102008486031215610884578283fd5b61088d8461051a565b925061089c85602086016105b7565b91506101e084013567ffffffffffffffff8111156108b8578182fd5b6108c486828701610683565b9150509250925092565b6000602082840312156108df578081fd5b813567ffffffffffffffff808211156108f6578283fd5b90830190610260828603121561090a578283fd5b60405160c08101818110838211171561091f57fe5b60405261092b8361051a565b815261093960208401610531565b6020820152604083013560408201526060830135606082015261095f86608085016105b7565b608082015261024083013582811115610976578485fd5b61098287828601610683565b60a08301525095945050505050565b6001600160a01b03169052565b15159052565b60008151808452815b818110156109c9576020818501810151868301820152016109ad565b818111156109da5782602083870101525b50601f01601f19169290920160200192915050565b600281106109f957fe5b9052565b610a08828251610991565b6020810151610a1a6020840182610991565b506040810151610a2d604084018261099e565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6001600160a01b039384168152602081019290925290911660408201526080606082018190526006908201526565786973747360d01b60a082015260c00190565b6001600160a01b03938416815260208101929092529091166040820152608060608201819052600690820152656c616d62646160d01b60a082015260c00190565b6001600160a01b0393841681526020810192909252909116604082015260806060820181905260039082015262796e6160e81b60a082015260c00190565b6001600160a01b03938416815260208101929092529091166040820152608060608201819052600c908201526b1dd85cd4195b985b1a5e995960a21b60a082015260c00190565b901515815260200190565b60006020825261028060018060a01b03845116602084015260208401511515604084015260408401516060840152606084015160808401526080840151610bff60a08501826109fd565b5060a08401516102608081860152610c1a8386018351610991565b60208201516102a0610c2e81880183610991565b604084015191506102c0610c4481890184610991565b606085015192506102e0610c5a818a018561099e565b60808601519350610300610c70818b018661099e565b60a08701519450610320610c86818c018761099e565b60c08801519550610c9b6103408c018761099e565b60e08801519550610cb06103608c018761099e565b6101008801519550610380610560818d0152610cd06107e08d01886109a4565b96506101208901516103a061027f198e8a0301818f0152610cf189836109a4565b98506101408b01516103c08f01526101608b01516103e08f01526101808b01516104008f01526101a08b01516104208f01526101c08b01516104408f01526101e08b01516104608f01526102008b01516104808f01526102208b01516104a08f01526102408b01516104c08f0152898b01516104e08f01528b8b01516105008f0152878b01516105208f0152868b01516105408f0152858b01516105608f0152848b01516105808f0152838b01516105a08f01526103408b01516105c08f01526103608b01516105e08f0152828b01519b50610dd16106008f018d6109ef565b808b01519b505050505050505050610ded6106208701856109fd565b9695505050505050565b60405181810167ffffffffffffffff81118282101715610e1357fe5b60405291905056fea264697066735822122019c1e7d10c34cc5b5786e07b34d693c9405f10a50be6ad2c5f55f0eb5cc9016c64736f6c63430007020033";
  var deployedBytecode$h = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80637fadabb214610046578063c28ad1441461005b578063c4e683da14610084575b600080fd5b6100596100543660046108ce565b6100a4565b005b61006e61006936600461086f565b6101c8565b60405161007b9190610baa565b60405180910390f35b61009761009236600461086f565b6101df565b60405161007b9190610bb5565b60808101515160a08201516101c0015182516040516100ed936100cd9390929091602001610b63565b6040516020818303038152906040528051906020012082602001516102c0565b60808101515160a08201516101c001518251604051610136936101169390929091602001610ae4565b6040516020818303038152906040528051906020012082604001516102e0565b60808101515160a08201516101c00151825160405161017f9361015f9390929091602001610b25565b6040516020818303038152906040528051906020012082606001516102e0565b60808101515160a08201516101c0015182516040516101c5936101a89390929091602001610aa3565b6040516020818303038152906040528051906020012060016102c0565b50565b60006101d58484846102f2565b90505b9392505050565b6101e761033c565b6001600160a01b03841681526080810183905260a0810182905261020c8484846102f2565b156101d85782516101c083015160405161024b926102309290918890602001610ae4565b60405160208183030381529060405280519060200120610312565b60408083019190915283516101c0840151915161028c9261027192918890602001610b63565b60405160208183030381529060405280519060200120610327565b151560208083019190915283516101c08401516040516102b493610230939291899101610b25565b60608201529392505050565b600091825260016020526040909120805460ff1916911515919091179055565b60009182526005602052604090912055565b81516101c08201516040516000926101d592610271928890602001610aa3565b6000818152600560205260409020545b919050565b60009081526001602052604090205460ff1690565b6040518060c0016040528060006001600160a01b031681526020016000151581526020016000815260200160008152602001610376610388565b815260200161038361040b565b905290565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806103c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160001515815260200160001515815260200160001515815260200160001515815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000600181111561050d57fe5b8152602001610383610388565b80356001600160a01b038116811461032257600080fd5b8035801515811461032257600080fd5b600082601f830112610551578081fd5b813567ffffffffffffffff81111561056557fe5b610578601f8201601f1916602001610df7565b915080825283602082850101111561058f57600080fd5b8060208401602084013760009082016020015292915050565b80356002811061032257600080fd5b60006101c08083850312156105ca578182fd5b6105d381610df7565b9150506105df8261051a565b81526105ed6020830161051a565b60208201526105fe60408301610531565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b60006105608284031215610695578081fd5b6106a06103c0610df7565b90506106ab8261051a565b81526106b96020830161051a565b60208201526106ca6040830161051a565b60408201526106db60608301610531565b60608201526106ec60808301610531565b60808201526106fd60a08301610531565b60a082015261070e60c08301610531565b60c082015261071f60e08301610531565b60e08201526101008083013567ffffffffffffffff8082111561074157600080fd5b61074d86838701610541565b8385015261012092508285013591508082111561076957600080fd5b5061077685828601610541565b91830191909152506101408281013590820152610160808301359082015261018080830135908201526101a080830135908201526101c080830135908201526101e08083013590820152610200808301359082015261022080830135908201526102408083013590820152610260808301359082015261028080830135908201526102a080830135908201526102c080830135908201526102e0808301359082015261030080830135908201526103208083013590820152610340808301359082015261036080830135908201526103806108528184016105a8565b908201526103a0610865848483016105b7565b9082015292915050565b60008060006102008486031215610884578283fd5b61088d8461051a565b925061089c85602086016105b7565b91506101e084013567ffffffffffffffff8111156108b8578182fd5b6108c486828701610683565b9150509250925092565b6000602082840312156108df578081fd5b813567ffffffffffffffff808211156108f6578283fd5b90830190610260828603121561090a578283fd5b60405160c08101818110838211171561091f57fe5b60405261092b8361051a565b815261093960208401610531565b6020820152604083013560408201526060830135606082015261095f86608085016105b7565b608082015261024083013582811115610976578485fd5b61098287828601610683565b60a08301525095945050505050565b6001600160a01b03169052565b15159052565b60008151808452815b818110156109c9576020818501810151868301820152016109ad565b818111156109da5782602083870101525b50601f01601f19169290920160200192915050565b600281106109f957fe5b9052565b610a08828251610991565b6020810151610a1a6020840182610991565b506040810151610a2d604084018261099e565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6001600160a01b039384168152602081019290925290911660408201526080606082018190526006908201526565786973747360d01b60a082015260c00190565b6001600160a01b03938416815260208101929092529091166040820152608060608201819052600690820152656c616d62646160d01b60a082015260c00190565b6001600160a01b0393841681526020810192909252909116604082015260806060820181905260039082015262796e6160e81b60a082015260c00190565b6001600160a01b03938416815260208101929092529091166040820152608060608201819052600c908201526b1dd85cd4195b985b1a5e995960a21b60a082015260c00190565b901515815260200190565b60006020825261028060018060a01b03845116602084015260208401511515604084015260408401516060840152606084015160808401526080840151610bff60a08501826109fd565b5060a08401516102608081860152610c1a8386018351610991565b60208201516102a0610c2e81880183610991565b604084015191506102c0610c4481890184610991565b606085015192506102e0610c5a818a018561099e565b60808601519350610300610c70818b018661099e565b60a08701519450610320610c86818c018761099e565b60c08801519550610c9b6103408c018761099e565b60e08801519550610cb06103608c018761099e565b6101008801519550610380610560818d0152610cd06107e08d01886109a4565b96506101208901516103a061027f198e8a0301818f0152610cf189836109a4565b98506101408b01516103c08f01526101608b01516103e08f01526101808b01516104008f01526101a08b01516104208f01526101c08b01516104408f01526101e08b01516104608f01526102008b01516104808f01526102208b01516104a08f01526102408b01516104c08f0152898b01516104e08f01528b8b01516105008f0152878b01516105208f0152868b01516105408f0152858b01516105608f0152848b01516105808f0152838b01516105a08f01526103408b01516105c08f01526103608b01516105e08f0152828b01519b50610dd16106008f018d6109ef565b808b01519b505050505050505050610ded6106208701856109fd565b9695505050505050565b60405181810167ffffffffffffffff81118282101715610e1357fe5b60405291905056fea264697066735822122019c1e7d10c34cc5b5786e07b34d693c9405f10a50be6ad2c5f55f0eb5cc9016c64736f6c63430007020033";
  var linkReferences$h = {
  };
  var deployedLinkReferences$h = {
  };
  var TransactionalVoteBallotContract = {
  	_format: _format$h,
  	contractName: contractName$h,
  	sourceName: sourceName$h,
  	abi: abi$h,
  	bytecode: bytecode$h,
  	deployedBytecode: deployedBytecode$h,
  	linkReferences: linkReferences$h,
  	deployedLinkReferences: deployedLinkReferences$h
  };

  const cache$c = {};
  const prefix$g = '@elastic-dao/sdk - TransactionalVoteBallot';

  class TransactionalVoteBallot extends ElasticModel {
    constructor(
      sdk,
      { ballotModelAddress, lambda, settings, vote, voter, wasPenalized, yna },
    ) {
      super(sdk);
      this.id = `${settings.uuid}|${vote.index}|${voter}`.toLowerCase();
      cache$c[this.id] = {
        ballotModelAddress,
        lambda,
        settings,
        vote,
        voter,
        wasPenalized,
        yna,
      };
    }

    // Class functions

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$g });
      return sdk.contract({ abi: TransactionalVoteBallotContract.abi, address });
    }

    static async deserialize(sdk, voter, settings, vote) {
      utils$1.validateIsAddress(voter, { prefix: prefix$g });
      validateIsTransactionalVoteSettings(settings);
      validateIsTransactionalVote(vote);

      const ballotModelAddress = await settings.manager.ballotModelAddress();
      const transactionalVoteBallotModel = this.contract(sdk, ballotModelAddress);

      const {
        lambda,
        wasPenalized,
        yna,
      } = await transactionalVoteBallotModel.deserialize(
        voter,
        settings.toObject(false),
        vote.toObject(false),
      );

      return new TransactionalVoteBallot({
        ballotModelAddress,
        lambda,
        settings,
        vote,
        voter,
        wasPenalized,
        yna,
      });
    }

    // Getters

    get address() {
      return cache$c[this.id].ballotModelAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    get lambda() {
      return this.toBigNumber(cache$c[this.id].lambda);
    }

    get settings() {
      return cache$c[this.id].settings;
    }

    get vote() {
      return cache$c[this.id].vote;
    }

    get voter() {
      return cache$c[this.id].voter;
    }

    get wasPenalized() {
      return cache$c[this.id].wasPenalized;
    }

    get yna() {
      return this.toNumber(cache$c[this.id].yna);
    }

    // Instance functions

    async refresh() {
      return this.constructor.deserialize(
        this.sdk,
        this.voter,
        this.settings,
        this.vote,
      );
    }

    toObject(includeNested = true) {
      const { id, settings, vote } = this;

      const obj = {
        ...cache$c[id],
        id,
        settings: settings.toObject(false),
        vote: vote.toObject(false),
      };

      delete obj.ballotModelAddress;

      if (includeNested === false) {
        delete obj.settings;
        delete obj.vote;
      }

      return this.sanitize(obj);
    }
  }

  var _format$i = "hh-sol-artifact-1";
  var contractName$i = "TransactionalVoteFactory";
  var sourceName$i = "src/modules/TransactionalVote/Factory.sol";
  var abi$i = [
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "address",
  				name: "managerAddress",
  				type: "address"
  			}
  		],
  		name: "ManagerDeployed",
  		type: "event"
  	},
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_ballotModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address payable",
  				name: "_elasticDAOAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_settingsModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address payable",
  				name: "_vaultAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_voteModelAddress",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_votingTokenAddress",
  				type: "address"
  			},
  			{
  				internalType: "bool",
  				name: "_hasPenalty",
  				type: "bool"
  			},
  			{
  				internalType: "uint256[10]",
  				name: "_settings",
  				type: "uint256[10]"
  			}
  		],
  		name: "deployManager",
  		outputs: [
  		],
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];
  var bytecode$i = "0x608060405234801561001057600080fd5b506130e4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635844fa0414610030575b600080fd5b61004361003e366004610193565b610045565b005b60008887878760405161005790610186565b610064949392919061029c565b604051809103906000f080158015610080573d6000803e3d6000fd5b50604051631ac0ab5d60e31b81529091506001600160a01b0382169063d6055ae8906100b4908790879087906004016102c7565b600060405180830381600087803b1580156100ce57600080fd5b505af11580156100e2573d6000803e3d6000fd5b5050604051630181bb0b60e01b81528a92506001600160a01b0383169150630181bb0b90610114908590600401610316565b600060405180830381600087803b15801561012e57600080fd5b505af1158015610142573d6000803e3d6000fd5b50506040516001600160a01b03851692507f5caf3d7ccd76ce2fb019663b95a98e88bcc4fe4330e687c78ea5882daccab9ff9150600090a250505050505050505050565b612d378061037883390190565b600080600080600080600080610220808a8c0312156101b0578485fd5b89356101bb8161035f565b985060208a8101356101cc8161035f565b985060408b01356101dc8161035f565b975060608b01356101ec8161035f565b965060808b01356101fc8161035f565b955060a08b013561020c8161035f565b945060c08b01358015158114610220578485fd5b935060ff8b018c13610230578283fd5b604051610140810181811067ffffffffffffffff8211171561024e57fe5b6040528060e08d01848e018f1015610264578586fd5b8594505b600a851015610287578035825260019490940193908301908301610268565b50508093505050509295985092959890939650565b6001600160a01b03948516815292841660208401529083166040830152909116606082015260800190565b6001600160a01b0384168152821515602080830191909152610180820190604083018460005b600a81101561030a578151835291830191908301906001016102ed565b50505050949350505050565b6001600160a01b039190911681526040602082018190526017908201527f5472616e73616374696f6e616c566f74654d6f64756c65000000000000000000606082015260800190565b6001600160a01b038116811461037457600080fd5b5056fe60806040523480156200001157600080fd5b5060405162002d3738038062002d37833981016040819052620000349162000090565b600080546001600160a01b03199081166001600160a01b03968716179091556003805460018054841696881696909617909555600280549092169386169390931790556001600160a81b03199092169190921617905562000110565b60008060008060808587031215620000a6578384fd5b8451620000b381620000f7565b6020860151909450620000c681620000f7565b6040860151909350620000d981620000f7565b6060860151909250620000ec81620000f7565b939692955090935050565b6001600160a01b03811681146200010d57600080fd5b50565b612c1780620001206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063743812131161008c578063c52ab77811610066578063c52ab7781461017c578063d6055ae81461018f578063e1faaae8146101a2578063f698da25146101aa576100cf565b8063743812131461015757806385b4bb531461015f578063affed0e014610174576100cf565b8063083964b1146100d45780630c09135b146100e9578063158ef93e146100fc57806323fc6e991461011a578063430bf08a1461013a578063478eadbe1461014f575b600080fd5b6100e76100e2366004612002565b6101b2565b005b6100e76100f7366004611f4e565b61067f565b610104610a06565b604051610111919061238c565b60405180910390f35b61012d610128366004611c00565b610a16565b6040516101119190612397565b610142610dd4565b6040516101119190612324565b610142610de3565b610142610df2565b610167610e01565b6040516101119190612b01565b61012d610e16565b61010461018a366004611cbb565b610e1c565b6100e761019d366004611b56565b610f5c565b61014261110a565b61012d611119565b6101ba611823565b6101c261111f565b90506101ce83826111a8565b6101f35760405162461bcd60e51b81526004016101ea906129b1565b60405180910390fd5b6101fb6118a6565b6102058483611234565b60c08101519091501561022a5760405162461bcd60e51b81526004016101ea906129e8565b8060a0015161024b5760405162461bcd60e51b81526004016101ea90612909565b610254816112c2565b6102705760405162461bcd60e51b81526004016101ea90612909565b600383106102905760405162461bcd60e51b81526004016101ea906127d5565b6040808201519051633e174aaf60e01b81526000906001600160a01b03831690633e174aaf906102c4903390600401612324565b60206040518083038186803b1580156102dc57600080fd5b505afa1580156102f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103149190611f36565b61032084015160405163046deee960e01b81529192506000916001600160a01b0385169163046deee99161034c913391600401612338565b60206040518083038186803b15801561036457600080fd5b505afa158015610378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039c9190611f36565b9050818110156103aa578091505b81846101e0015110156103c057836101e0015191505b856103df576103d48461036001518361134b565b610360850152610418565b8560011415610402576103f78461026001518361134b565b610260850152610418565b6104118461014001518361134b565b6101408501525b600061043c61043186610360015187610260015161134b565b86610140015161134b565b90506000846001600160a01b03166378b61f226040518163ffffffff1660e01b815260040160206040518083038186803b15801561047957600080fd5b505afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b19190611f36565b905060006104c482886102a00151611370565b90508083106104d557600160808801525b60006104e683896101600151611370565b90508084106104f757600160c08901525b6104ff6119ba565b608081018a905260a081018990523381526040808201889052606082018c90526000549051633fd6d5d960e11b81526001600160a01b0390911690637fadabb29061054e908490600401612a97565b600060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b5050600354604051630428f64760e31b81526001600160a01b039091169250632147b23891506105b0908c90600401612b10565b600060405180830381600087803b1580156105ca57600080fd5b505af11580156105de573d6000803e3d6000fd5b50505050876001600160a01b031663528c198a336106018a8d6102e00151611370565b6040518363ffffffff1660e01b815260040161061e929190612338565b602060405180830381600087803b15801561063857600080fd5b505af115801561064c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106709190611cef565b50505050505050505050505050565b610687611823565b61068f61111f565b905061069b83826111a8565b6106b75760405162461bcd60e51b81526004016101ea906129b1565b6106bf6118a6565b6106c98483611234565b60c0810151909150156106ee5760405162461bcd60e51b81526004016101ea90612842565b60a0810151156107105760405162461bcd60e51b81526004016101ea90612966565b6080810151156107325760405162461bcd60e51b81526004016101ea90612522565b80606001516107535760405162461bcd60e51b81526004016101ea90612790565b6000805460408301516001600160a01b03909116915b85518110156109fd57826001600160a01b031663c28ad14487838151811061078d57fe5b602002602001015187876040518463ffffffff1660e01b81526004016107b593929190612351565b60206040518083038186803b1580156107cd57600080fd5b505afa1580156107e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108059190611cef565b6109eb576108116119ba565b6080810186905260a08101859052865187908390811061082d57fe5b6020908102919091018101516001600160a01b03908116835260019183019190915287516000916108ed9190861690633e174aaf908b908790811061086e57fe5b60200260200101516040518263ffffffff1660e01b81526004016108929190612324565b60206040518083038186803b1580156108aa57600080fd5b505afa1580156108be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e29190611f36565b876102800151611370565b604080840182905251633fd6d5d960e11b81529091506001600160a01b03861690637fadabb290610922908590600401612a97565b600060405180830381600087803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b50505050836001600160a01b031663ee7a7c0489858151811061096f57fe5b6020026020010151836040518363ffffffff1660e01b8152600401610995929190612338565b602060405180830381600087803b1580156109af57600080fd5b505af11580156109c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e79190611cef565b5050505b6109f681600161134b565b9050610769565b50505050505050565b600354600160a01b900460ff1681565b600354600090600160a01b900460ff16610a425760405162461bcd60e51b81526004016101ea90612447565b610a4a611823565b610a5261111f565b6020810151610140820151604051633e174aaf60e01b815292935090916001600160a01b03831690633e174aaf90610a8e903390600401612324565b60206040518083038186803b158015610aa657600080fd5b505afa158015610aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ade9190611f36565b1015610afc5760405162461bcd60e51b81526004016101ea906125f9565b8160e00151610b0b85436113a5565b1015610b295760405162461bcd60e51b81526004016101ea9061269b565b606060008a11610b4b5760405162461bcd60e51b81526004016101ea9061257f565b80604051602001610b5c9190612308565b6040516020818303038152906040528051906020012089604051602001610b839190612308565b604051602081830303815290604052805190602001201415610bb75760405162461bcd60e51b81526004016101ea9061257f565b6003546001600160a01b0316610bcb6118a6565b6103a08101859052600061014082018190526101608201819052338252610180820189905261010082018c90526101a0820188905260408601511515606083015260808083018290528601516101c0830152600160a080840182905260c0808501849052908801516101e08501528701516102008401526102608301919091526103808201908b90811115610c5c57fe5b90816001811115610c6957fe5b9052506101608501516102808201526101808501516102a08201526101a08501516102e08201526103008101899052436103208201526001600160a01b03808e1660208084019190915261034083018e90528601518116604080840191909152600061036084015251630428f64760e31b815290831690632147b23890610cf4908490600401612b10565b600060405180830381600087803b158015610d0e57600080fd5b505af1158015610d22573d6000803e3d6000fd5b505060015460405163e5910ae760e01b81526001600160a01b03909116925063e5910ae79150610d56903090600401612324565b600060405180830381600087803b158015610d7057600080fd5b505af1158015610d84573d6000803e3d6000fd5b505050507f460e77e3c8455201c4722742a8a654c959331ac344ab1b2ecefdb2b500f129c8816101c00151604051610dbc9190612397565b60405180910390a15050505050979650505050505050565b6002546001600160a01b031681565b6001546001600160a01b031681565b6000546001600160a01b031681565b610e09611823565b610e1161111f565b905090565b60045481565b6000610e26611823565b610e2e61111f565b9050610e386118a6565b610e428483611234565b90508060e0015115610e665760405162461bcd60e51b81526004016101ea906126e9565b8060c00151610e875760405162461bcd60e51b81526004016101ea90612a45565b600160e0820152600354604051630428f64760e31b81526001600160a01b03909116908190632147b23890610ec0908590600401612b10565b600060405180830381600087803b158015610eda57600080fd5b505af1158015610eee573d6000803e3d6000fd5b5050506020830151610340840151610100850151610380860151610300870151610180880151600254610f2e97508d908f906001600160a01b03166113e7565b935083610f4d5760405162461bcd60e51b81526004016101ea906128d2565b600193505050505b9392505050565b600354600160a01b900460ff1615610f865760405162461bcd60e51b81526004016101ea90612733565b6001546001600160a01b0316610f9a611823565b3081526001600160a01b038516602082015283151560408201528260006020020151606082015260006080820152826001602002015160a0820152826002602002015160c0820152826003602002015160e082015282600460200201516101008201528260056020020151610120820152826006602002015161014082015282600760200201516101608201528260086020020151610180820152826009602090810291909101516101a0830152604051611079917f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d47499130910161240f565b60408051601f1981840301815290829052805160209091012060055563e416649960e01b81526001600160a01b0383169063e4166499906110be908490600401612b01565b600060405180830381600087803b1580156110d857600080fd5b505af11580156110ec573d6000803e3d6000fd5b50506003805460ff60a01b1916600160a01b17905550505050505050565b6003546001600160a01b031681565b60055481565b611127611823565b60015460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990611157903090600401612324565b6101c06040518083038186803b15801561117057600080fd5b505afa158015611184573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e119190611d0b565b600354604051634a52ae5960e01b81526000916001600160a01b031690634a52ae59906111db9086908690600401612b23565b60206040518083038186803b1580156111f357600080fd5b505afa158015611207573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122b9190611cef565b90505b92915050565b61123c6118a6565b600354604051631d97355360e21b81526001600160a01b039091169063765cd54c9061126e9086908690600401612b23565b60006040518083038186803b15801561128657600080fd5b505afa15801561129a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261122b9190810190611d27565b600043826101a001511161134257600060a0830152600354604051630428f64760e31b81526001600160a01b0390911690632147b23890611307908590600401612b10565b600060405180830381600087803b15801561132157600080fd5b505af1158015611335573d6000803e3d6000fd5b5050505060009050611346565b5060015b919050565b60008282018381101561122b5760405162461bcd60e51b81526004016101ea906124eb565b6000670de0b6b3a76400006113966113888585611521565b6706f05b59d3b2000061134b565b8161139d57fe5b049392505050565b600061122b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061155b565b60008060606113fd8c8c8c8c8c8c8c8c8c611587565b905061140c600454600161134b565b508051602090910120905061142b603f6040890204610bb88901611633565b5a101561144a5760405162461bcd60e51b81526004016101ea90612645565b60005a905061146d8c8c8c8c8a15611462578c611468565b6109c45a035b61164a565b9250611479815a6113a5565b90506000861561149357611490828989898961169e565b90505b83156114d7577f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e83826040516114ca929190612426565b60405180910390a1611511565b7f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d238382604051611508929190612426565b60405180910390a15b5050509998505050505050505050565b6000826115305750600061122e565b8282028284828161153d57fe5b041461122b5760405162461bcd60e51b81526004016101ea90612891565b6000818484111561157f5760405162461bcd60e51b81526004016101ea9190612434565b505050900390565b606060007fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d860001b8b8b8b805190602001208b8b8b8b8b8b6004546040516020016115dc9b9a999897969594939291906123a0565b60408051601f1981840301815290829052805160209182012060055490935061161492601960f81b92600160f81b92918691016122de565b6040516020818303038152906040529150509998505050505050505050565b600081831015611643578161122b565b5090919050565b60008083600181111561165957fe5b14156116725761166b8686868561175f565b9050611695565b600183600181111561168057fe5b14156116915761166b868584611777565b5060005b95945050505050565b6000806001600160a01b038316156116b657826116b8565b325b90506001600160a01b038416611732576116e96116d5888861134b565b3a87106116e2573a6116e4565b865b611521565b6040519092506001600160a01b0382169083156108fc029084906000818181858888f1935050505061172d5760405162461bcd60e51b81526004016101ea9061249c565b611755565b61173f6116e2888861134b565b915061174c84828461178d565b61175557600080fd5b5095945050505050565b6000806000845160208601878987f195945050505050565b60008060008451602086018786f4949350505050565b6000606083836040516024016117a4929190612338565b60408051601f198184030181529190526020810180516001600160e01b031663a9059cbb60e01b1781528151919250600091829182896127105a03f16040513d81016040523d6000823e3d8015611806576020811461180e5760009450611818565b829450611818565b8151158315171594505b505050509392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806103c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000151581526020016000151581526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600060018111156119a857fe5b81526020016119b5611823565b905290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160008152602001600081526020016119f4611823565b81526020016119b56118a6565b803561134681612bae565b805161134681612bae565b805161134681612bc6565b600082601f830112611a32578081fd5b8151611a45611a4082612b5c565b612b38565b9150808252836020828501011115611a5c57600080fd5b611a6d816020840160208601612b7e565b5092915050565b803561134681612bd4565b805161134681612bd4565b60006101c0808385031215611a9d578182fd5b611aa681612b38565b915050611ab282611a0c565b8152611ac060208301611a0c565b6020820152611ad160408301611a17565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b6000806000610180808587031215611b6c578384fd5b8435611b7781612bae565b9350602085810135611b8881612bc6565b9350605f86018713611b98578283fd5b604051610140810181811067ffffffffffffffff82111715611bb657fe5b8060405250806040880189858a011115611bce578586fd5b8594505b600a851015611bf1578035825260019490940193908301908301611bd2565b50508093505050509250925092565b600080600080600080600060e0888a031215611c1a578485fd5b8735611c2581612bae565b965060208801359550604088013567ffffffffffffffff811115611c47578586fd5b8801601f81018a13611c57578586fd5b8035611c65611a4082612b5c565b8181528b6020838501011115611c79578788fd5b816020840160208301379081016020019690965250611c9a60608901611a74565b9699959850939660808101359560a0820135955060c0909101359350915050565b600080600060608486031215611ccf578081fd5b8335611cda81612bae565b95602085013595506040909401359392505050565b600060208284031215611d00578081fd5b815161122b81612bc6565b60006101c08284031215611d1d578081fd5b61122b8383611a8a565b600060208284031215611d38578081fd5b815167ffffffffffffffff80821115611d4f578283fd5b908301906105608286031215611d63578283fd5b611d6e6103c0612b38565b611d7783611a0c565b8152611d8560208401611a0c565b6020820152611d9660408401611a0c565b6040820152611da760608401611a17565b6060820152611db860808401611a17565b6080820152611dc960a08401611a17565b60a0820152611dda60c08401611a17565b60c0820152611deb60e08401611a17565b60e08201526101008084015183811115611e03578586fd5b611e0f88828701611a22565b8284015250506101208084015183811115611e28578586fd5b611e3488828701611a22565b91830191909152506101408381015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e08084015190820152610200808401519082015261022080840151908201526102408084015190820152610260808401519082015261028080840151908201526102a080840151908201526102c080840151908201526102e0808401519082015261030080840151908201526103208084015190820152610340808401519082015261036080840151908201526103809150611f12828401611a7f565b828201526103a09150611f2786838501611a8a565b91810191909152949350505050565b600060208284031215611f47578081fd5b5051919050565b60008060408385031215611f60578182fd5b8235915060208084013567ffffffffffffffff80821115611f7f578384fd5b818601915086601f830112611f92578384fd5b813581811115611f9e57fe5b8381029150611fae848301612b38565b8181528481019084860184860187018b1015611fc8578788fd5b8795505b83861015611ff157611fdd81611a01565b835260019590950194918601918601611fcc565b508096505050505050509250929050565b60008060408385031215612014578182fd5b50508035926020909101359150565b6001600160a01b03169052565b15159052565b6000815180845261204e816020860160208601612b7e565b601f01601f19169290920160200192915050565b6002811061206c57fe5b9052565b61207b828251612023565b602081015161208d6020840182612023565b5060408101516120a06040840182612030565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6000610560612126848451612023565b60208301516121386020860182612023565b50604083015161214b6040860182612023565b50606083015161215e6060860182612030565b5060808301516121716080860182612030565b5060a083015161218460a0860182612030565b5060c083015161219760c0860182612030565b5060e08301516121aa60e0860182612030565b506101008084015182828701526121c383870182612036565b9250505061012080840151858303828701526121df8382612036565b6101408681015190880152610160808701519088015261018080870151908801526101a080870151908801526101c080870151908801526101e08087015190880152610200808701519088015261022080870151908801526102408087015190880152610260808701519088015261028080870151908801526102a080870151908801526102c080870151908801526102e08087015190880152610300808701519088015261032080870151908801526103408087015190880152610360808701519088015261038080870151919450925090506122bf82870182612062565b50506103a0808401516122d482870182612070565b5090949350505050565b6001600160f81b031994851681529290931660018301526002820152602281019190915260420190565b6000825161231a818460208701612b7e565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0384168152600061020061236f6020840186612070565b806101e084015261238281840185612116565b9695505050505050565b901515815260200190565b90815260200190565b8b81526001600160a01b038b81166020830152604082018b9052606082018a90526101608201906123d4608084018b612062565b60a083019890985260c082019690965260e0810194909452918516610100840152909316610120820152610140019190915295945050505050565b9182526001600160a01b0316602082015260400190565b918252602082015260400190565b60006020825261122b6020830184612036565b60208082526035908201527f456c617374696344414f3a205472616e73616374696f6e616c566f7465204d616040820152741b9859d95c881b9bdd081a5b9a5d1a585b1a5e9959605a1b606082015260800190565b6020808252602f908201527f456c61737469632044414f3a20436f756c64206e6f742070617920676173206360408201526e37b9ba39903bb4ba34103a37b5b2b760891b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252603b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201527f746520746861742068617320726561636865642071756f72756d2e0000000000606082015260800190565b60208082526054908201527f456c617374696344414f3a205472616e73616374696f6e206d7573742065697460408201527f686572207472616e736665722076616c7565206f722063616c6c20616e6f746860608201527332b91031b7b73a3930b1ba10333ab731ba34b7b760611b608082015260a00190565b6020808252602c908201527f456c617374696344414f3a204e6f7420656e6f7567682073686172657320746f60408201526b2063726561746520766f746560a01b606082015260800190565b60208082526036908201527f456c617374696344414f3a204e6f7420656e6f7567682067617320746f20657860408201527532b1baba329039b0b332903a3930b739b0b1ba34b7b760511b606082015260800190565b6020808252602e908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520706560408201526d1c9a5bd9081d1bdbc81cda1bdc9d60921b606082015260800190565b6020808252602a908201527f456c617374696344414f3a20566f74652068617320616c7265616479206265656040820152691b88195e1958dd5d195960b21b606082015260800190565b6020808252603b908201527f456c617374696344414f3a205472616e73616374696f6e616c20566f7465204d60408201527f616e6167657220616c726561647920696e697469616c697a65642e0000000000606082015260800190565b60208082526025908201527f456c617374696344414f3a205468697320766f746520686173206e6f2070656e60408201526430b63a3c9760d91b606082015260800190565b60208082526047908201527f456c617374696344414f3a20496e76616c6964205f796e612076616c75652e2060408201527f557365203020666f72207965732c203120666f72206e6f2c203220666f7220616060820152663139ba30b4b71760c91b608082015260a00190565b6020808252602f908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201526e3a32903a3430ba103830b9b9b2b21760891b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252601e908201527f456c617374696344414f3a205472616e73616374696f6e204661696c65640000604082015260600190565b60208082526039908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520697360408201527f206e6f7420616374697665206f722068617320656e6465642e00000000000000606082015260800190565b6020808252602b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a6520616e206160408201526a31ba34bb32903b37ba329760a91b606082015260800190565b6020808252601c908201527f456c617374696344414f3a20496e76616c696420766f74652069642e00000000604082015260600190565b60208082526038908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520686160408201527f7320616c7265616479206265656e20617070726f7665642e0000000000000000606082015260800190565b60208082526032908201527f456c617374696344414f3a2043616e206e6f742063616c6c20756e6c657373206040820152711d9bdd19481a5cc81cdd58d8d95cdcd99d5b60721b606082015260800190565b60006020825260018060a01b03835116602083015260208301511515604083015260408301516060830152606083015160808301526080830151612ade60a0840182612070565b5060a083015161026083810152612af9610280840182612116565b949350505050565b6101c0810161122e8284612070565b60006020825261122b6020830184612116565b8281526101e08101610f556020830184612070565b60405181810167ffffffffffffffff81118282101715612b5457fe5b604052919050565b600067ffffffffffffffff821115612b7057fe5b50601f01601f191660200190565b60005b83811015612b99578181015183820152602001612b81565b83811115612ba8576000848401525b50505050565b6001600160a01b0381168114612bc357600080fd5b50565b8015158114612bc357600080fd5b60028110612bc357600080fdfea2646970667358221220938ba14a2c2f7adb9289b78e2e599aaa1ab6124dc639fe6592b2a503df90774b64736f6c63430007020033a2646970667358221220b347b23c33c9c77154b0dc18fe88ec3d55a9f3e5949d10cc6e3765c89de6b37964736f6c63430007020033";
  var deployedBytecode$i = "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80635844fa0414610030575b600080fd5b61004361003e366004610193565b610045565b005b60008887878760405161005790610186565b610064949392919061029c565b604051809103906000f080158015610080573d6000803e3d6000fd5b50604051631ac0ab5d60e31b81529091506001600160a01b0382169063d6055ae8906100b4908790879087906004016102c7565b600060405180830381600087803b1580156100ce57600080fd5b505af11580156100e2573d6000803e3d6000fd5b5050604051630181bb0b60e01b81528a92506001600160a01b0383169150630181bb0b90610114908590600401610316565b600060405180830381600087803b15801561012e57600080fd5b505af1158015610142573d6000803e3d6000fd5b50506040516001600160a01b03851692507f5caf3d7ccd76ce2fb019663b95a98e88bcc4fe4330e687c78ea5882daccab9ff9150600090a250505050505050505050565b612d378061037883390190565b600080600080600080600080610220808a8c0312156101b0578485fd5b89356101bb8161035f565b985060208a8101356101cc8161035f565b985060408b01356101dc8161035f565b975060608b01356101ec8161035f565b965060808b01356101fc8161035f565b955060a08b013561020c8161035f565b945060c08b01358015158114610220578485fd5b935060ff8b018c13610230578283fd5b604051610140810181811067ffffffffffffffff8211171561024e57fe5b6040528060e08d01848e018f1015610264578586fd5b8594505b600a851015610287578035825260019490940193908301908301610268565b50508093505050509295985092959890939650565b6001600160a01b03948516815292841660208401529083166040830152909116606082015260800190565b6001600160a01b0384168152821515602080830191909152610180820190604083018460005b600a81101561030a578151835291830191908301906001016102ed565b50505050949350505050565b6001600160a01b039190911681526040602082018190526017908201527f5472616e73616374696f6e616c566f74654d6f64756c65000000000000000000606082015260800190565b6001600160a01b038116811461037457600080fd5b5056fe60806040523480156200001157600080fd5b5060405162002d3738038062002d37833981016040819052620000349162000090565b600080546001600160a01b03199081166001600160a01b03968716179091556003805460018054841696881696909617909555600280549092169386169390931790556001600160a81b03199092169190921617905562000110565b60008060008060808587031215620000a6578384fd5b8451620000b381620000f7565b6020860151909450620000c681620000f7565b6040860151909350620000d981620000f7565b6060860151909250620000ec81620000f7565b939692955090935050565b6001600160a01b03811681146200010d57600080fd5b50565b612c1780620001206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063743812131161008c578063c52ab77811610066578063c52ab7781461017c578063d6055ae81461018f578063e1faaae8146101a2578063f698da25146101aa576100cf565b8063743812131461015757806385b4bb531461015f578063affed0e014610174576100cf565b8063083964b1146100d45780630c09135b146100e9578063158ef93e146100fc57806323fc6e991461011a578063430bf08a1461013a578063478eadbe1461014f575b600080fd5b6100e76100e2366004612002565b6101b2565b005b6100e76100f7366004611f4e565b61067f565b610104610a06565b604051610111919061238c565b60405180910390f35b61012d610128366004611c00565b610a16565b6040516101119190612397565b610142610dd4565b6040516101119190612324565b610142610de3565b610142610df2565b610167610e01565b6040516101119190612b01565b61012d610e16565b61010461018a366004611cbb565b610e1c565b6100e761019d366004611b56565b610f5c565b61014261110a565b61012d611119565b6101ba611823565b6101c261111f565b90506101ce83826111a8565b6101f35760405162461bcd60e51b81526004016101ea906129b1565b60405180910390fd5b6101fb6118a6565b6102058483611234565b60c08101519091501561022a5760405162461bcd60e51b81526004016101ea906129e8565b8060a0015161024b5760405162461bcd60e51b81526004016101ea90612909565b610254816112c2565b6102705760405162461bcd60e51b81526004016101ea90612909565b600383106102905760405162461bcd60e51b81526004016101ea906127d5565b6040808201519051633e174aaf60e01b81526000906001600160a01b03831690633e174aaf906102c4903390600401612324565b60206040518083038186803b1580156102dc57600080fd5b505afa1580156102f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103149190611f36565b61032084015160405163046deee960e01b81529192506000916001600160a01b0385169163046deee99161034c913391600401612338565b60206040518083038186803b15801561036457600080fd5b505afa158015610378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039c9190611f36565b9050818110156103aa578091505b81846101e0015110156103c057836101e0015191505b856103df576103d48461036001518361134b565b610360850152610418565b8560011415610402576103f78461026001518361134b565b610260850152610418565b6104118461014001518361134b565b6101408501525b600061043c61043186610360015187610260015161134b565b86610140015161134b565b90506000846001600160a01b03166378b61f226040518163ffffffff1660e01b815260040160206040518083038186803b15801561047957600080fd5b505afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b19190611f36565b905060006104c482886102a00151611370565b90508083106104d557600160808801525b60006104e683896101600151611370565b90508084106104f757600160c08901525b6104ff6119ba565b608081018a905260a081018990523381526040808201889052606082018c90526000549051633fd6d5d960e11b81526001600160a01b0390911690637fadabb29061054e908490600401612a97565b600060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b5050600354604051630428f64760e31b81526001600160a01b039091169250632147b23891506105b0908c90600401612b10565b600060405180830381600087803b1580156105ca57600080fd5b505af11580156105de573d6000803e3d6000fd5b50505050876001600160a01b031663528c198a336106018a8d6102e00151611370565b6040518363ffffffff1660e01b815260040161061e929190612338565b602060405180830381600087803b15801561063857600080fd5b505af115801561064c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106709190611cef565b50505050505050505050505050565b610687611823565b61068f61111f565b905061069b83826111a8565b6106b75760405162461bcd60e51b81526004016101ea906129b1565b6106bf6118a6565b6106c98483611234565b60c0810151909150156106ee5760405162461bcd60e51b81526004016101ea90612842565b60a0810151156107105760405162461bcd60e51b81526004016101ea90612966565b6080810151156107325760405162461bcd60e51b81526004016101ea90612522565b80606001516107535760405162461bcd60e51b81526004016101ea90612790565b6000805460408301516001600160a01b03909116915b85518110156109fd57826001600160a01b031663c28ad14487838151811061078d57fe5b602002602001015187876040518463ffffffff1660e01b81526004016107b593929190612351565b60206040518083038186803b1580156107cd57600080fd5b505afa1580156107e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108059190611cef565b6109eb576108116119ba565b6080810186905260a08101859052865187908390811061082d57fe5b6020908102919091018101516001600160a01b03908116835260019183019190915287516000916108ed9190861690633e174aaf908b908790811061086e57fe5b60200260200101516040518263ffffffff1660e01b81526004016108929190612324565b60206040518083038186803b1580156108aa57600080fd5b505afa1580156108be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e29190611f36565b876102800151611370565b604080840182905251633fd6d5d960e11b81529091506001600160a01b03861690637fadabb290610922908590600401612a97565b600060405180830381600087803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b50505050836001600160a01b031663ee7a7c0489858151811061096f57fe5b6020026020010151836040518363ffffffff1660e01b8152600401610995929190612338565b602060405180830381600087803b1580156109af57600080fd5b505af11580156109c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e79190611cef565b5050505b6109f681600161134b565b9050610769565b50505050505050565b600354600160a01b900460ff1681565b600354600090600160a01b900460ff16610a425760405162461bcd60e51b81526004016101ea90612447565b610a4a611823565b610a5261111f565b6020810151610140820151604051633e174aaf60e01b815292935090916001600160a01b03831690633e174aaf90610a8e903390600401612324565b60206040518083038186803b158015610aa657600080fd5b505afa158015610aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ade9190611f36565b1015610afc5760405162461bcd60e51b81526004016101ea906125f9565b8160e00151610b0b85436113a5565b1015610b295760405162461bcd60e51b81526004016101ea9061269b565b606060008a11610b4b5760405162461bcd60e51b81526004016101ea9061257f565b80604051602001610b5c9190612308565b6040516020818303038152906040528051906020012089604051602001610b839190612308565b604051602081830303815290604052805190602001201415610bb75760405162461bcd60e51b81526004016101ea9061257f565b6003546001600160a01b0316610bcb6118a6565b6103a08101859052600061014082018190526101608201819052338252610180820189905261010082018c90526101a0820188905260408601511515606083015260808083018290528601516101c0830152600160a080840182905260c0808501849052908801516101e08501528701516102008401526102608301919091526103808201908b90811115610c5c57fe5b90816001811115610c6957fe5b9052506101608501516102808201526101808501516102a08201526101a08501516102e08201526103008101899052436103208201526001600160a01b03808e1660208084019190915261034083018e90528601518116604080840191909152600061036084015251630428f64760e31b815290831690632147b23890610cf4908490600401612b10565b600060405180830381600087803b158015610d0e57600080fd5b505af1158015610d22573d6000803e3d6000fd5b505060015460405163e5910ae760e01b81526001600160a01b03909116925063e5910ae79150610d56903090600401612324565b600060405180830381600087803b158015610d7057600080fd5b505af1158015610d84573d6000803e3d6000fd5b505050507f460e77e3c8455201c4722742a8a654c959331ac344ab1b2ecefdb2b500f129c8816101c00151604051610dbc9190612397565b60405180910390a15050505050979650505050505050565b6002546001600160a01b031681565b6001546001600160a01b031681565b6000546001600160a01b031681565b610e09611823565b610e1161111f565b905090565b60045481565b6000610e26611823565b610e2e61111f565b9050610e386118a6565b610e428483611234565b90508060e0015115610e665760405162461bcd60e51b81526004016101ea906126e9565b8060c00151610e875760405162461bcd60e51b81526004016101ea90612a45565b600160e0820152600354604051630428f64760e31b81526001600160a01b03909116908190632147b23890610ec0908590600401612b10565b600060405180830381600087803b158015610eda57600080fd5b505af1158015610eee573d6000803e3d6000fd5b5050506020830151610340840151610100850151610380860151610300870151610180880151600254610f2e97508d908f906001600160a01b03166113e7565b935083610f4d5760405162461bcd60e51b81526004016101ea906128d2565b600193505050505b9392505050565b600354600160a01b900460ff1615610f865760405162461bcd60e51b81526004016101ea90612733565b6001546001600160a01b0316610f9a611823565b3081526001600160a01b038516602082015283151560408201528260006020020151606082015260006080820152826001602002015160a0820152826002602002015160c0820152826003602002015160e082015282600460200201516101008201528260056020020151610120820152826006602002015161014082015282600760200201516101608201528260086020020151610180820152826009602090810291909101516101a0830152604051611079917f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d47499130910161240f565b60408051601f1981840301815290829052805160209091012060055563e416649960e01b81526001600160a01b0383169063e4166499906110be908490600401612b01565b600060405180830381600087803b1580156110d857600080fd5b505af11580156110ec573d6000803e3d6000fd5b50506003805460ff60a01b1916600160a01b17905550505050505050565b6003546001600160a01b031681565b60055481565b611127611823565b60015460405163332a4d0960e01b81526001600160a01b039091169063332a4d0990611157903090600401612324565b6101c06040518083038186803b15801561117057600080fd5b505afa158015611184573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e119190611d0b565b600354604051634a52ae5960e01b81526000916001600160a01b031690634a52ae59906111db9086908690600401612b23565b60206040518083038186803b1580156111f357600080fd5b505afa158015611207573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122b9190611cef565b90505b92915050565b61123c6118a6565b600354604051631d97355360e21b81526001600160a01b039091169063765cd54c9061126e9086908690600401612b23565b60006040518083038186803b15801561128657600080fd5b505afa15801561129a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261122b9190810190611d27565b600043826101a001511161134257600060a0830152600354604051630428f64760e31b81526001600160a01b0390911690632147b23890611307908590600401612b10565b600060405180830381600087803b15801561132157600080fd5b505af1158015611335573d6000803e3d6000fd5b5050505060009050611346565b5060015b919050565b60008282018381101561122b5760405162461bcd60e51b81526004016101ea906124eb565b6000670de0b6b3a76400006113966113888585611521565b6706f05b59d3b2000061134b565b8161139d57fe5b049392505050565b600061122b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061155b565b60008060606113fd8c8c8c8c8c8c8c8c8c611587565b905061140c600454600161134b565b508051602090910120905061142b603f6040890204610bb88901611633565b5a101561144a5760405162461bcd60e51b81526004016101ea90612645565b60005a905061146d8c8c8c8c8a15611462578c611468565b6109c45a035b61164a565b9250611479815a6113a5565b90506000861561149357611490828989898961169e565b90505b83156114d7577f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e83826040516114ca929190612426565b60405180910390a1611511565b7f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d238382604051611508929190612426565b60405180910390a15b5050509998505050505050505050565b6000826115305750600061122e565b8282028284828161153d57fe5b041461122b5760405162461bcd60e51b81526004016101ea90612891565b6000818484111561157f5760405162461bcd60e51b81526004016101ea9190612434565b505050900390565b606060007fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d860001b8b8b8b805190602001208b8b8b8b8b8b6004546040516020016115dc9b9a999897969594939291906123a0565b60408051601f1981840301815290829052805160209182012060055490935061161492601960f81b92600160f81b92918691016122de565b6040516020818303038152906040529150509998505050505050505050565b600081831015611643578161122b565b5090919050565b60008083600181111561165957fe5b14156116725761166b8686868561175f565b9050611695565b600183600181111561168057fe5b14156116915761166b868584611777565b5060005b95945050505050565b6000806001600160a01b038316156116b657826116b8565b325b90506001600160a01b038416611732576116e96116d5888861134b565b3a87106116e2573a6116e4565b865b611521565b6040519092506001600160a01b0382169083156108fc029084906000818181858888f1935050505061172d5760405162461bcd60e51b81526004016101ea9061249c565b611755565b61173f6116e2888861134b565b915061174c84828461178d565b61175557600080fd5b5095945050505050565b6000806000845160208601878987f195945050505050565b60008060008451602086018786f4949350505050565b6000606083836040516024016117a4929190612338565b60408051601f198184030181529190526020810180516001600160e01b031663a9059cbb60e01b1781528151919250600091829182896127105a03f16040513d81016040523d6000823e3d8015611806576020811461180e5760009450611818565b829450611818565b8151158315171594505b505050509392505050565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806103c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000151581526020016000151581526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600060018111156119a857fe5b81526020016119b5611823565b905290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160008152602001600081526020016119f4611823565b81526020016119b56118a6565b803561134681612bae565b805161134681612bae565b805161134681612bc6565b600082601f830112611a32578081fd5b8151611a45611a4082612b5c565b612b38565b9150808252836020828501011115611a5c57600080fd5b611a6d816020840160208601612b7e565b5092915050565b803561134681612bd4565b805161134681612bd4565b60006101c0808385031215611a9d578182fd5b611aa681612b38565b915050611ab282611a0c565b8152611ac060208301611a0c565b6020820152611ad160408301611a17565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b6000806000610180808587031215611b6c578384fd5b8435611b7781612bae565b9350602085810135611b8881612bc6565b9350605f86018713611b98578283fd5b604051610140810181811067ffffffffffffffff82111715611bb657fe5b8060405250806040880189858a011115611bce578586fd5b8594505b600a851015611bf1578035825260019490940193908301908301611bd2565b50508093505050509250925092565b600080600080600080600060e0888a031215611c1a578485fd5b8735611c2581612bae565b965060208801359550604088013567ffffffffffffffff811115611c47578586fd5b8801601f81018a13611c57578586fd5b8035611c65611a4082612b5c565b8181528b6020838501011115611c79578788fd5b816020840160208301379081016020019690965250611c9a60608901611a74565b9699959850939660808101359560a0820135955060c0909101359350915050565b600080600060608486031215611ccf578081fd5b8335611cda81612bae565b95602085013595506040909401359392505050565b600060208284031215611d00578081fd5b815161122b81612bc6565b60006101c08284031215611d1d578081fd5b61122b8383611a8a565b600060208284031215611d38578081fd5b815167ffffffffffffffff80821115611d4f578283fd5b908301906105608286031215611d63578283fd5b611d6e6103c0612b38565b611d7783611a0c565b8152611d8560208401611a0c565b6020820152611d9660408401611a0c565b6040820152611da760608401611a17565b6060820152611db860808401611a17565b6080820152611dc960a08401611a17565b60a0820152611dda60c08401611a17565b60c0820152611deb60e08401611a17565b60e08201526101008084015183811115611e03578586fd5b611e0f88828701611a22565b8284015250506101208084015183811115611e28578586fd5b611e3488828701611a22565b91830191909152506101408381015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e08084015190820152610200808401519082015261022080840151908201526102408084015190820152610260808401519082015261028080840151908201526102a080840151908201526102c080840151908201526102e0808401519082015261030080840151908201526103208084015190820152610340808401519082015261036080840151908201526103809150611f12828401611a7f565b828201526103a09150611f2786838501611a8a565b91810191909152949350505050565b600060208284031215611f47578081fd5b5051919050565b60008060408385031215611f60578182fd5b8235915060208084013567ffffffffffffffff80821115611f7f578384fd5b818601915086601f830112611f92578384fd5b813581811115611f9e57fe5b8381029150611fae848301612b38565b8181528481019084860184860187018b1015611fc8578788fd5b8795505b83861015611ff157611fdd81611a01565b835260019590950194918601918601611fcc565b508096505050505050509250929050565b60008060408385031215612014578182fd5b50508035926020909101359150565b6001600160a01b03169052565b15159052565b6000815180845261204e816020860160208601612b7e565b601f01601f19169290920160200192915050565b6002811061206c57fe5b9052565b61207b828251612023565b602081015161208d6020840182612023565b5060408101516120a06040840182612030565b50606081810151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b6000610560612126848451612023565b60208301516121386020860182612023565b50604083015161214b6040860182612023565b50606083015161215e6060860182612030565b5060808301516121716080860182612030565b5060a083015161218460a0860182612030565b5060c083015161219760c0860182612030565b5060e08301516121aa60e0860182612030565b506101008084015182828701526121c383870182612036565b9250505061012080840151858303828701526121df8382612036565b6101408681015190880152610160808701519088015261018080870151908801526101a080870151908801526101c080870151908801526101e08087015190880152610200808701519088015261022080870151908801526102408087015190880152610260808701519088015261028080870151908801526102a080870151908801526102c080870151908801526102e08087015190880152610300808701519088015261032080870151908801526103408087015190880152610360808701519088015261038080870151919450925090506122bf82870182612062565b50506103a0808401516122d482870182612070565b5090949350505050565b6001600160f81b031994851681529290931660018301526002820152602281019190915260420190565b6000825161231a818460208701612b7e565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0384168152600061020061236f6020840186612070565b806101e084015261238281840185612116565b9695505050505050565b901515815260200190565b90815260200190565b8b81526001600160a01b038b81166020830152604082018b9052606082018a90526101608201906123d4608084018b612062565b60a083019890985260c082019690965260e0810194909452918516610100840152909316610120820152610140019190915295945050505050565b9182526001600160a01b0316602082015260400190565b918252602082015260400190565b60006020825261122b6020830184612036565b60208082526035908201527f456c617374696344414f3a205472616e73616374696f6e616c566f7465204d616040820152741b9859d95c881b9bdd081a5b9a5d1a585b1a5e9959605a1b606082015260800190565b6020808252602f908201527f456c61737469632044414f3a20436f756c64206e6f742070617920676173206360408201526e37b9ba39903bb4ba34103a37b5b2b760891b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252603b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201527f746520746861742068617320726561636865642071756f72756d2e0000000000606082015260800190565b60208082526054908201527f456c617374696344414f3a205472616e73616374696f6e206d7573742065697460408201527f686572207472616e736665722076616c7565206f722063616c6c20616e6f746860608201527332b91031b7b73a3930b1ba10333ab731ba34b7b760611b608082015260a00190565b6020808252602c908201527f456c617374696344414f3a204e6f7420656e6f7567682073686172657320746f60408201526b2063726561746520766f746560a01b606082015260800190565b60208082526036908201527f456c617374696344414f3a204e6f7420656e6f7567682067617320746f20657860408201527532b1baba329039b0b332903a3930b739b0b1ba34b7b760511b606082015260800190565b6020808252602e908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520706560408201526d1c9a5bd9081d1bdbc81cda1bdc9d60921b606082015260800190565b6020808252602a908201527f456c617374696344414f3a20566f74652068617320616c7265616479206265656040820152691b88195e1958dd5d195960b21b606082015260800190565b6020808252603b908201527f456c617374696344414f3a205472616e73616374696f6e616c20566f7465204d60408201527f616e6167657220616c726561647920696e697469616c697a65642e0000000000606082015260800190565b60208082526025908201527f456c617374696344414f3a205468697320766f746520686173206e6f2070656e60408201526430b63a3c9760d91b606082015260800190565b60208082526047908201527f456c617374696344414f3a20496e76616c6964205f796e612076616c75652e2060408201527f557365203020666f72207965732c203120666f72206e6f2c203220666f7220616060820152663139ba30b4b71760c91b608082015260a00190565b6020808252602f908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a65206120766f60408201526e3a32903a3430ba103830b9b9b2b21760891b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252601e908201527f456c617374696344414f3a205472616e73616374696f6e204661696c65640000604082015260600190565b60208082526039908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520697360408201527f206e6f7420616374697665206f722068617320656e6465642e00000000000000606082015260800190565b6020808252602b908201527f456c617374696344414f3a2043616e6e6f742070656e616c697a6520616e206160408201526a31ba34bb32903b37ba329760a91b606082015260800190565b6020808252601c908201527f456c617374696344414f3a20496e76616c696420766f74652069642e00000000604082015260600190565b60208082526038908201527f456c617374696344414f3a205472616e73616374696f6e616c566f746520686160408201527f7320616c7265616479206265656e20617070726f7665642e0000000000000000606082015260800190565b60208082526032908201527f456c617374696344414f3a2043616e206e6f742063616c6c20756e6c657373206040820152711d9bdd19481a5cc81cdd58d8d95cdcd99d5b60721b606082015260800190565b60006020825260018060a01b03835116602083015260208301511515604083015260408301516060830152606083015160808301526080830151612ade60a0840182612070565b5060a083015161026083810152612af9610280840182612116565b949350505050565b6101c0810161122e8284612070565b60006020825261122b6020830184612116565b8281526101e08101610f556020830184612070565b60405181810167ffffffffffffffff81118282101715612b5457fe5b604052919050565b600067ffffffffffffffff821115612b7057fe5b50601f01601f191660200190565b60005b83811015612b99578181015183820152602001612b81565b83811115612ba8576000848401525b50505050565b6001600160a01b0381168114612bc357600080fd5b50565b8015158114612bc357600080fd5b60028110612bc357600080fdfea2646970667358221220938ba14a2c2f7adb9289b78e2e599aaa1ab6124dc639fe6592b2a503df90774b64736f6c63430007020033a2646970667358221220b347b23c33c9c77154b0dc18fe88ec3d55a9f3e5949d10cc6e3765c89de6b37964736f6c63430007020033";
  var linkReferences$i = {
  };
  var deployedLinkReferences$i = {
  };
  var TransactionalVoteFactoryContract = {
  	_format: _format$i,
  	contractName: contractName$i,
  	sourceName: sourceName$i,
  	abi: abi$i,
  	bytecode: bytecode$i,
  	deployedBytecode: deployedBytecode$i,
  	linkReferences: linkReferences$i,
  	deployedLinkReferences: deployedLinkReferences$i
  };

  const prefix$h = '@elastic-dao/sdk - TransactionalVoteManager';

  class TransactionalVoteManager extends Base {
    constructor(sdk, address) {
      super(sdk);
      utils$1.validateIsAddress(address, { prefix: prefix$h });
      this.address = address;
    }

    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$h });
      return sdk.contract({ abi: TransactionalVoteManagerContract.abi, address });
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    async applyPenalty(index, addressesToPenalize, overrides = {}) {
      utils$1.validateIsNumber(index, { prefix: prefix$h });

      for (let i = 0; i < addressesToPenalize.length; i += 1) {
        utils$1.validateIsAddress(addressesToPenalize[i], { prefix: prefix$h });
      }

      const manager = await this.contract();
      await manager.applyPenalty(
        index,
        addressesToPenalize,
        this.sanitizeOverrides(overrides),
      );

      return true;
    }

    async ballotModelAddress() {
      const manager = await this.contract;
      return manager.ballotModelAddress();
    }

    async castBallot(index, yna, overrides = {}) {
      utils$1.validateIsNumber(index, { prefix: prefix$h });
      utils$1.validateIsNumber(yna, { prefix: prefix$h });

      const manager = await this.contract;
      await manager.castBallot(index, yna, this.sanitizeOverrides(overrides));
      return true; // TODO: Return ballot model
    }

    async createVote(
      to,
      value,
      data,
      operation,
      safeTxGas,
      baseGas,
      endOnBlock,
      overrides = {},
    ) {
      utils$1.validateIsBigNumber(value, { prefix: prefix$h });
      utils$1.validateIsNumber(safeTxGas, { prefix: prefix$h });
      utils$1.validateIsNumber(baseGas, { prefix: prefix$h });
      utils$1.validateIsNumber(endOnBlock, { prefix: prefix$h });
      utils$1.validateIsString(operation, { prefix: prefix$h });

      const manager = await this.contract;
      await manager.createVote(
        to,
        this.toEthersBigNumber(value, 18),
        data,
        operation,
        safeTxGas,
        baseGas,
        endOnBlock,
        this.sanitizeOverrides(overrides),
      );
      return true; // TODO: Return vote model
    }

    async domainSeparator() {
      const manager = await this.contract;
      return manager.domainSeparator();
    }

    async execute(gasToken, gasPrice, index, overrides = {}) {
      const manager = await this.contract;

      utils$1.validateIsAddress(gasToken, { prefix: prefix$h });
      utils$1.validateIsNumber(gasPrice, { prefix: prefix$h });
      utils$1.validateIsNumber(index, { prefix: prefix$h });

      return manager.execute(
        gasToken,
        gasPrice,
        index,
        this.sanitizeOverrides(overrides),
      );
    }

    async getSettings() {
      return TransactionalVoteSettings.deserialize(this);
    }

    async initialized() {
      const manager = await this.contract;
      return manager.initialized();
    }

    async nonce() {
      const manager = await this.contract;
      return manager.nonce();
    }

    async settingsModelAddress() {
      const manager = await this.contract;
      return manager.settingsModelAddress();
    }

    async vaultAddress() {
      const manager = await this.contract;
      return manager.vaultAddress();
    }

    async voteModelAddress() {
      const manager = await this.contract;
      return manager.voteModelAddress();
    }
  }

  const prefix$i = '@elastic-dao/sdk - TransactionalVoteFactory';

  class TransactionalVoteFactory extends Base {
    static contract(sdk, address) {
      utils$1.validateIsAddress(address, { prefix: prefix$i });
      return sdk.contract({ abi: TransactionalVoteFactoryContract.abi, address });
    }

    get address() {
      return this.sdk.env.elasticDAO.modules.transactionalVote.factoryAddress;
    }

    get contract() {
      return this.constructor.contract(this.sdk, this.address);
    }

    async deployManager(
      ballotModelAddress,
      elasticDAOAddress,
      settingsModelAddress,
      vaultAddress,
      voteModelAddress,
      votingTokenAddress,
      hasPenalty,
      [
        approval,
        maxSharesPerTokenHolder,
        minBlocksForPenalty,
        minDurationInBlocks,
        minPenaltyInShares,
        minRewardInShares,
        minSharesToCreate,
        penalty,
        quorum,
        reward,
      ],
      overrides = {},
    ) {
      utils$1.validateIsAddress(ballotModelAddress, { prefix: prefix$i });
      utils$1.validateIsAddress(elasticDAOAddress, { prefix: prefix$i });
      utils$1.validateIsAddress(settingsModelAddress, { prefix: prefix$i });
      utils$1.validateIsAddress(vaultAddress, { prefix: prefix$i });
      utils$1.validateIsAddress(voteModelAddress, { prefix: prefix$i });
      utils$1.validateIsAddress(votingTokenAddress, { prefix: prefix$i });

      const payload = [
        ballotModelAddress,
        elasticDAOAddress,
        settingsModelAddress,
        vaultAddress,
        voteModelAddress,
        votingTokenAddress,
        hasPenalty,
        [
          this.toEthersBigNumber(approval, 18),
          this.toEthersBigNumber(maxSharesPerTokenHolder, 18),
          this.toEthersBigNumber(minBlocksForPenalty),
          this.toEthersBigNumber(minDurationInBlocks),
          this.toEthersBigNumber(minPenaltyInShares, 18),
          this.toEthersBigNumber(minRewardInShares, 18),
          this.toEthersBigNumber(minSharesToCreate, 18),
          this.toEthersBigNumber(penalty, 18),
          this.toEthersBigNumber(quorum, 18),
          this.toEthersBigNumber(reward, 18),
        ],
      ];

      const factory = await this.contract;

      const managerDeployedFilter = factory.filters.ManagerDeployed();
      const managerDeployedFilterPromise = new Promise(
        async (resolve, reject) => {
          let tx = {};

          const handler = ({ transactionHash, topics }) => {
            if (transactionHash === tx.hash) {
              this.sdk.provider.off(managerDeployedFilter, handler);
              resolve(`0x${topics[1].substring(26)}`);
            }
          };

          this.sdk.provider.on(managerDeployedFilter, handler);

          tx = await factory.deployManager(
            ...payload,
            this.sanitizeOverrides(overrides),
          );

          await tx.wait(2);
          reject();
        },
      );

      return new TransactionalVoteManager(await managerDeployedFilterPromise);
    }
  }

  const TransactionalVote$1 = TransactionalVote;
  const TransactionalVoteBallot$1 = TransactionalVoteBallot;
  const TransactionalVoteFactory$1 = TransactionalVoteFactory;
  const TransactionalVoteManager$1 = TransactionalVoteManager;
  const TransactionalVoteSettings$1 = TransactionalVoteSettings;

  class Models$1 extends Base {
    get TransactionalVote() {
      return {
        contract: (...args) => TransactionalVote$1.contract(this.sdk, ...args),
        deserialize: (...args) =>
          TransactionalVote$1.deserialize(this.sdk, ...args),
      };
    }

    get TransactionalVoteBallot() {
      return {
        contract: (...args) =>
          TransactionalVoteBallot$1.contract(this.sdk, ...args),
        deserialize: (...args) =>
          TransactionalVoteBallot$1.deserialize(this.sdk, ...args),
      };
    }

    get TransactionalVoteSettings() {
      return {
        contract: (...args) =>
          TransactionalVoteSettings$1.contract(this.sdk, ...args),
        deserialize: (...args) =>
          TransactionalVoteSettings$1.deserialize(this.sdk, ...args),
        managerContract: (...args) =>
          TransactionalVoteSettings$1.managerContract(this.sdk, ...args),
      };
    }
  }

  class TransactionalVoteModule extends Base {
    get transactionalVoteFactory() {
      return new TransactionalVoteFactory$1(
        this.sdk,
        this.sdk.env.elasticDAO.modules.transactionalVote.factoryAddress,
      );
    }

    get transactionalVoteManager() {
      return new TransactionalVoteManager$1(
        this.sdk,
        this.sdk.env.elasticDAO.modules.transactionalVote.managerAddress,
      );
    }

    get models() {
      return new Models$1(this.sdk);
    }
  }

  class ModulesClass extends Base {
    get informationalVote() {
      return new InformationalVoteModule(this.sdk);
    }

    get transactionalVote() {
      return new TransactionalVoteModule(this.sdk);
    }
  }

  const Balance$1 = Balance;
  const BalanceMultipliers$1 = BalanceMultipliers;
  const DAO$1 = DAO;
  const Ecosystem$1 = Ecosystem;
  const ElasticDAO$1 = ElasticDAO;
  const ElasticDAOFactory$1 = ElasticDAOFactory;
  const ElasticModule$1 = ElasticModule;
  const Modules = ModulesClass;
  const Token$1 = Token;
  const TokenHolder$1 = TokenHolder;

  const utils = {
    buildError,
    upTo,
    validate,
  };

  class Models$2 extends Base {
    get Balance() {
      return {
        contract: (...args) => Balance$1.contract(this.sdk, ...args),
        deserialize: (...args) => Balance$1.deserialize(this.sdk, ...args),
      };
    }

    get BalanceMultipliers() {
      return {
        contract: (...args) => BalanceMultipliers$1.contract(this.sdk, ...args),
        deserialize: (...args) =>
          BalanceMultipliers$1.deserialize(this.sdk, ...args),
      };
    }

    get DAO() {
      return {
        contract: (...args) => DAO$1.contract(this.sdk, ...args),
        deserialize: (...args) => DAO$1.deserialize(this.sdk, ...args),
      };
    }

    get Ecosystem() {
      return {
        contract: (...args) => Ecosystem$1.contract(this.sdk, ...args),
        deserialize: (...args) => Ecosystem$1.deserialize(this.sdk, ...args),
      };
    }

    get ElasticModule() {
      return {
        contract: (...args) => ElasticModule$1.contract(this.sdk, ...args),
        deserialize: (...args) => ElasticModule$1.deserialize(this.sdk, ...args),
        deserializeByName: (...args) =>
          ElasticModule$1.deserializeByName(this.sdk, ...args),
      };
    }

    get Token() {
      return {
        contract: (...args) => Token$1.contract(this.sdk, ...args),
        deserialize: (...args) => Token$1.deserialize(this.sdk, ...args),
      };
    }

    get TokenHolder() {
      return {
        contract: (...args) => TokenHolder$1.contract(this.sdk, ...args),
        deserialize: (...args) => TokenHolder$1.deserialize(this.sdk, ...args),
      };
    }
  }

  class SDK {
    constructor({ account, contract, env, provider, signer }) {
      this.account = account;
      this.contract = contract;
      this.env = env;
      this.provider = provider;
      this.signer = signer;
    }

    get models() {
      return new Models$2(this);
    }

    get modules() {
      return new Modules(this);
    }
  }

  var index = ({ account, contract, env, provider, signer }) =>
    new SDK({ account, contract, env, provider, signer });

  exports.Balance = Balance$1;
  exports.BalanceMultipliers = BalanceMultipliers$1;
  exports.DAO = DAO$1;
  exports.Ecosystem = Ecosystem$1;
  exports.ElasticDAO = ElasticDAO$1;
  exports.ElasticDAOFactory = ElasticDAOFactory$1;
  exports.ElasticModule = ElasticModule$1;
  exports.InformationalVote = InformationalVote$1;
  exports.InformationalVoteBallot = InformationalVoteBallot$1;
  exports.InformationalVoteFactory = InformationalVoteFactory$1;
  exports.InformationalVoteManager = InformationalVoteManager$1;
  exports.InformationalVoteSettings = InformationalVoteSettings$1;
  exports.Models = Models$2;
  exports.Modules = Modules;
  exports.SDK = SDK;
  exports.Token = Token$1;
  exports.TokenHolder = TokenHolder$1;
  exports.default = index;
  exports.isBalance = isBalance;
  exports.isBalanceMultipliers = isBalanceMultipliers;
  exports.isDAO = isDAO;
  exports.isEcosystem = isEcosystem;
  exports.isElasticModule = isElasticModule;
  exports.isInformationalVote = isInformationalVote;
  exports.isInformationalVoteBallot = isInformationalVoteBallot;
  exports.isInformationalVoteSettings = isInformationalVoteSettings;
  exports.isToken = isToken;
  exports.isTokenHolder = isTokenHolder;
  exports.utils = utils;
  exports.validateIsBalance = validateIsBalance;
  exports.validateIsBalanceMultipliers = validateIsBalanceMultipliers;
  exports.validateIsDAO = validateIsDAO;
  exports.validateIsEcosystem = validateIsEcosystem;
  exports.validateIsElasticModule = validateIsElasticModule;
  exports.validateIsInformationalVote = validateIsInformationalVote;
  exports.validateIsInformationalVoteBallot = validateIsInformationalVoteBallot;
  exports.validateIsInformationalVoteSettings = validateIsInformationalVoteSettings;
  exports.validateIsToken = validateIsToken;
  exports.validateIsTokenHolder = validateIsTokenHolder;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}, utils$1, ethers, BigNumber));
//# sourceMappingURL=index.js.map
