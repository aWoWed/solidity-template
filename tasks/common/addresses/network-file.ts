import { writeFileSync, existsSync, readFileSync } from 'fs';
import { ContractNameAddress } from '../types';

const FILE_PATH = (network: string): string =>
  `./tasks/common/addresses/${network}.ts`;

const ADDRESSES_EXAMPLE = (greeter: string): string =>
  `export const GREETER = '${greeter}';\n`;

export const writeNetworkFile = (network: string, greeter: string): void =>
  writeFileSync(FILE_PATH(network), ADDRESSES_EXAMPLE(greeter), {
    flag: 'w',
  });

const findName = (name: string): string => {
  if (name === 'GREETER') {
    return 'Greeter';
  } else {
    return '';
  }
};

export const getAddresses = (network: string): ContractNameAddress[] => {
  if (!existsSync(FILE_PATH(network))) {
    throw new Error(`Contracts not deployed on ${network}`);
  }
  const array = [];
  const str = readFileSync(FILE_PATH(network)).toString();
  const strArray = str.split('\n');
  for (let i = 0; i < strArray.length - 1; i++) {
    const elemName = strArray[i]
      .slice(strArray[i].indexOf('st') + 'st'.length, strArray[i].indexOf('='))
      .trim();
    const name = findName(elemName);
    const elemAddress = strArray[i].slice(
      strArray[i].indexOf('0'),
      strArray[i].indexOf(';') - 1,
    );
    array.push({ name: name, address: elemAddress });
  }
  console.log(array);
  return array;
};
