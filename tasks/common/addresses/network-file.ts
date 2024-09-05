import { writeFileSync, existsSync, readFileSync } from 'fs';

const FILE_PATH = (network: string): string =>
  `./tasks/common/addresses/${network}.ts`;

const ADDRESSES_EXAMPLE = (greeter: string): string =>
  `export const GREETER = '${greeter}';\n`;

export const writeNetworkFile = (network: string, greeter: string): void =>
  writeFileSync(FILE_PATH(network), ADDRESSES_EXAMPLE(greeter), {
    flag: 'w',
  });

export const getAddresses = (network: string): string[] => {
  if (!existsSync(FILE_PATH(network))) {
    throw new Error(`Contracts not deployed on ${network}`);
  }
  const array = [];
  const str = readFileSync(FILE_PATH(network)).toString();
  const strArray = str.split('\n');
  for (let i = 0; i < strArray.length - 1; i++) {
    const elem = strArray[i].slice(
      strArray[i].indexOf('0'),
      strArray[i].indexOf(';') - 1,
    );
    array.push(elem);
  }
  console.log(array);
  return array;
};
