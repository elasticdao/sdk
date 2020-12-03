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
cp -v ./artifacts/src/models/ElasticModule.sol/ElasticModule.json ../
cp -v ./artifacts/src/models/Token.sol/Token.json ../
cp -v ./artifacts/src/models/TokenHolder.sol/TokenHolder.json ../
cp -v ./artifacts/src/modules/InformationalVote/Factory.sol/InformationalVoteFactory.json ../
cp -v ./artifacts/src/modules/InformationalVote/Manager.sol/InformationalVoteManager.json ../
cp -v ./artifacts/src/modules/InformationalVote/models/Ballot.sol/InformationalVoteBallot.json ../
cp -v ./artifacts/src/modules/InformationalVote/models/Settings.sol/InformationalVoteSettings.json ../
cp -v ./artifacts/src/modules/InformationalVote/models/Vote.sol/InformationalVote.json ../
cp -v ./artifacts/src/tokens/ElasticGovernanceToken.sol/ElasticGovernanceToken.json ../
cp -v ./artifacts/src/modules/TransactionalVote/Factory.sol/TransactionalVoteFactory.json ../
cp -v ./artifacts/src/modules/TransactionalVote/Manager.sol/TransactionalVoteManager.json ../
cp -v ./artifacts/src/modules/TransactionalVote/models/Ballot.sol/TransactionalVoteBallot.json ../
cp -v ./artifacts/src/modules/TransactionalVote/models/Settings.sol/TransactionalVoteSettings.json ../
cp -v ./artifacts/src/modules/TransactionalVote/models/Vote.sol/TransactionalVote.json ../

cd ../
rm -rf contracts
cd ../