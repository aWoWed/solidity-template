import { task, types } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';

import { logDeployment, preAction, delay } from './functions';
import {
  TASK_DEPLOY_GREETER,
  TASK_GET_GREETING,
  TASK_SET_GREETING,
  TASK_THROW_GREETER_ERROR,
} from './task-names';

task(TASK_DEPLOY_GREETER)
  .addParam('greeting', 'contract greeting', 'Hello world!', types.string)
  .setAction(async (params: string, hre) => {
    await preAction(hre);
    const [deployer] = await hre.ethers.getSigners();

    const factory = await hre.ethers.getContractFactory('Greeter', deployer);
    const greeter = await (await factory.deploy(params.greeting)).deployed();

    logDeployment(
      'Greeter',
      ['Greeting', params.greeting],
      ['Address', greeter.address],
      ['Deployer', deployer.address],
    );
  });

task(TASK_GET_GREETING)
  .addParam('greeter', 'greeter contract address', '', types.string)
  .setAction(async (params: string, hre) => {
    await preAction(hre);
    const [deployer] = await hre.ethers.getSigners();

    const greeter = await hre.ethers.getContractAt(
      'Greeter',
      params.greeter,
      deployer,
    );
    const greeting: string = await greeter.getGreeting();

    console.log(`Current greeting: ${greeting}`);
  });

task(TASK_SET_GREETING)
  .addParam(
    'greeter',
    'greeter contract address',
    '0xDCf95202dEB5e8915A1c967e8aDBa57df1531DA4',
    types.string,
  )
  .addParam('greeting', 'set new greeting', 'Here is Johnny!', types.string)
  .setAction(async (params: string, hre) => {
    await preAction(hre);
    const [deployer] = await hre.ethers.getSigners();

    const greeter = await hre.ethers.getContractAt(
      'Greeter',
      params.greeter,
      deployer,
    );

    await hre.run(TASK_GET_GREETING, { greeter: params.greeter });

    await greeter.setGreeting(params.greeting);
    await delay(2000);

    await hre.run(TASK_GET_GREETING, { greeter: params.greeter });
  });

task(TASK_THROW_GREETER_ERROR)
  .addParam(
    'greeter',
    'greeter contract address',
    '0xDCf95202dEB5e8915A1c967e8aDBa57df1531DA4',
    types.string,
  )
  .setAction(async (params: string, hre) => {
    await preAction(hre);
    const [deployer] = await hre.ethers.getSigners();

    const greeter = await hre.ethers.getContractAt(
      'Greeter',
      params.greeter,
      deployer,
    );

    await greeter.throwError();
  });
