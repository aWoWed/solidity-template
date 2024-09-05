import { expect } from 'chai';
import { subtask, task, types } from 'hardhat/config';

import { SUBTASK_CHECK_GREETER, TASK_CHECK_PARAMS } from './task-names';

import { getAddresses } from '../common/addresses/network-file';
import { GREETING } from '../common/deployParams';

task(TASK_CHECK_PARAMS).setAction(async (params, hre) => {
  const [greeter] = getAddresses(hre.network.name);

  await hre.run(SUBTASK_CHECK_GREETER, {
    greeter: greeter,
  });
});

subtask(SUBTASK_CHECK_GREETER)
  .addParam('greeter', 'greeter address', '', types.string)
  .setAction(async (params, hre) => {
    const [owner] = await hre.ethers.getSigners();
    const greeter = await hre.ethers.getContractAt(
      'Greeter',
      params.greeter,
      owner,
    );

    const ownerAddr = await greeter.owner();
    const greeting = await greeter.getGreeting();

    expect(ownerAddr.toString().toLowerCase()).equals(
      params.owner.toString().toLowerCase(),
    );
    expect(greeting).equals(GREETING);
  });
