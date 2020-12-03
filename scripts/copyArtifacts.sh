#! /bin/bash

rm -rf artifacts
mkdir -p artifacts

cp -v ../contracts/artifacts/src/core/ElasticDAO.sol/ElasticDAO.json ./artifacts
cp -v ../contracts/artifacts/src/core/ElasticDAOFactory.sol/ElasticDAOFactory.json ./artifacts
cp -v ../contracts/artifacts/src/models/Balance.sol/Balance.json ./artifacts
cp -v ../contracts/artifacts/src/models/BalanceMultipliers.sol/BalanceMultipliers.json ./artifacts
cp -v ../contracts/artifacts/src/models/DAO.sol/DAO.json ./artifacts
cp -v ../contracts/artifacts/src/models/Ecosystem.sol/Ecosystem.json ./artifacts
cp -v ../contracts/artifacts/src/models/ElasticModule.sol/ElasticModule.json ./artifacts
cp -v ../contracts/artifacts/src/models/Token.sol/Token.json ./artifacts
cp -v ../contracts/artifacts/src/models/TokenHolder.sol/TokenHolder.json ./artifacts
cp -v ../contracts/artifacts/src/modules/InformationalVote/Factory.sol/InformationalVoteFactory.json ./artifacts
cp -v ../contracts/artifacts/src/modules/InformationalVote/Manager.sol/InformationalVoteManager.json ./artifacts
cp -v ../contracts/artifacts/src/modules/InformationalVote/models/Ballot.sol/InformationalVoteBallot.json ./artifacts
cp -v ../contracts/artifacts/src/modules/InformationalVote/models/Settings.sol/InformationalVoteSettings.json ./artifacts
cp -v ../contracts/artifacts/src/modules/InformationalVote/models/Vote.sol/InformationalVote.json ./artifacts
cp -v ../contracts/artifacts/src/tokens/ElasticGovernanceToken.sol/ElasticGovernanceToken.json ./artifacts
cp -v ../contracts/artifacts/src/modules/TransactionalVote/Factory.sol/TransactionalVoteFactory.json ./artifacts
cp -v ../contracts/artifacts/src/modules/TransactionalVote/Manager.sol/TransactionalVoteManager.json ./artifacts
cp -v ../contracts/artifacts/src/modules/TransactionalVote/models/Ballot.sol/TransactionalVoteBallot.json ./artifacts
cp -v ../contracts/artifacts/src/modules/TransactionalVote/models/Settings.sol/TransactionalVoteSettings.json ./artifacts
cp -v ../contracts/artifacts/src/modules/TransactionalVote/models/Vote.sol/TransactionalVote.json ./artifacts