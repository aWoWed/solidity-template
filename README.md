# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
npx hardhat coverage
npx hardhat run scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Fantom_Testnet.

In order to get FTM(native token of fantomTestnet) follow this [faucet link](https://faucet.fantom.network/)

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your node URL (eg from Alchemy), and the mnemonic of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run deploy-greeter --network fantom_testnet --greeting YOUR_GREETING
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS`, also you should import your constructor value GREETING in this command:
```shell
npx hardhat verify --network fantom_testnet DEPLOYED_CONTRACT_ADDRESS 'GREETING'
```

Here is a deployed instance of the contract on [fantomTestnetScan 0xDCf95202dEB5e8915A1c967e8aDBa57df1531DA4](https://testnet.ftmscan.com/address/0xDCf95202dEB5e8915A1c967e8aDBa57df1531DA4)
