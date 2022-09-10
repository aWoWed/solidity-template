import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';

import type { Greeter, Greeter__factory } from '../typechain-types';

export async function deployGreeterFixture(): Promise<{ greeter: Greeter }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const signer: SignerWithAddress = signers[0];

  const greeting = 'Hello, world!';
  const greeterFactory: Greeter__factory = <Greeter__factory>(
    await ethers.getContractFactory('Greeter')
  );
  const greeter: Greeter = <Greeter>(
    await greeterFactory.connect(signer).deploy(greeting)
  );
  await greeter.deployed();

  return { greeter };
}
