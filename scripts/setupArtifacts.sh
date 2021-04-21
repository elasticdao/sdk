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
cp -v ./artifacts/src/models/DAO.sol/DAO.json ../
cp -v ./artifacts/src/models/Ecosystem.sol/Ecosystem.json ../
cp -v ./artifacts/src/models/Token.sol/Token.json ../
cp -v ./artifacts/src/models/TokenHolder.sol/TokenHolder.json ../
cp -v ./artifacts/src/tokens/ElasticGovernanceToken.sol/ElasticGovernanceToken.json ../

cd ../
rm -rf contracts
cd ../
