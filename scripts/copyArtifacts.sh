#! /bin/bash

rm -rf artifacts
mkdir -p artifacts

cp -v ../contracts/artifacts/src/core/ElasticDAO.sol/ElasticDAO.json ./artifacts
cp -v ../contracts/artifacts/src/core/ElasticDAOFactory.sol/ElasticDAOFactory.json ./artifacts
cp -v ../contracts/artifacts/src/models/Balance.sol/Balance.json ./artifacts
cp -v ../contracts/artifacts/src/models/BalanceMultipliers.sol/BalanceMultipliers.json ./artifacts
cp -v ../contracts/artifacts/src/models/DAO.sol/DAO.json ./artifacts
cp -v ../contracts/artifacts/src/models/Ecosystem.sol/Ecosystem.json ./artifacts
cp -v ../contracts/artifacts/src/models/Token.sol/Token.json ./artifacts
cp -v ../contracts/artifacts/src/models/TokenHolder.sol/TokenHolder.json ./artifacts
cp -v ../contracts/artifacts/src/tokens/ElasticGovernanceToken.sol/ElasticGovernanceToken.json ./artifacts
