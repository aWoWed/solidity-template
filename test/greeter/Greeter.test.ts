import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';

import { shouldBehaveLikeGreeter } from './Greeter.behavior';
import { deployGreeterFixture } from './Greeter.fixture';

import type { Signers } from '../types';

describe('Unit tests', function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.signer = signers[0];

    this.loadFixture = loadFixture;
  });

  describe('Greeter', function () {
    beforeEach(async function () {
      const { greeter } = await this.loadFixture(deployGreeterFixture);
      this.greeter = greeter;
    });

    shouldBehaveLikeGreeter();
  });
});
