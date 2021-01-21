#! /bin/bash

rm -rf artifacts
mkdir -p artifacts
cd artifacts
git clone https://edao-workflows:0192837465Gh@github.com/elasticdao/contracts
cd contracts
yarn
yarn compile

cp -v ./artifacts/src/core/ElasticDAO.sol/ElasticDAO.json ../
cp -v ./artifacts/src/core/ElasticDAOFactory.sol/ElasticDAOFactory.json ../
cp -v ./artifacts/src/models/Balance.sol/Balance.json ../
cp -v ./artifacts/src/models/BalanceMultipliers.sol/BalanceMultipliers.json ../
cp -v ./artifacts/src/models/DAO.sol/DAO.json ../
cp -v ./artifacts/src/models/Ecosystem.sol/Ecosystem.json ../
cp -v ./artifacts/src/models/Token.sol/Token.json ../
cp -v ./artifacts/src/models/TokenHolder.sol/TokenHolder.json ../
cp -v ./artifacts/src/tokens/ElasticGovernanceToken.sol/ElasticGovernanceToken.json ../

cd ../
rm -rf contracts
cd ../


{
  "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "decimals": 18,
  "symbol": "DAI",
  "args": ["%{address}", "0x0a68fA3eFe271Ce098553480BF5969A4fA4b663B"],
  "methodABI":   {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
}