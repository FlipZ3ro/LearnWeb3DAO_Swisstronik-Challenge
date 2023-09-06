# LearnWeb3DAO <> Swisstronik Challenge

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## Task 
Deploy a smart contract using Hardhat

## Usage
```
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox
npx hardhat compile
npx hardhat run scripts/deploy.js --network swisstronik
```

## Contract Deployed
```
EVM : 0x7093D0e0b1aAdBd543C37c248b8d3A7D4CaE06A5
```

## Tx Deploy
```
https://explorer-evm.testnet.swisstronik.com/tx/0xf12314c712bb1b0525d59ae560eeff59e41ac2b6b61dac5898f83f1f8e45cedf
```

## Function Deploy code : scripts/deploy.js
```
const contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik!!"]);
```
Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
