import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

import type { Greeter } from '../typechain-types';

type Fixture<T> = () => Promise<T>;

export interface Signers {
  signer: SignerWithAddress;
}

declare module 'mocha' {
  export interface Context {
    greeter: Greeter;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}
