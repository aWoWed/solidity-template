import { EnvVariables } from './types';

export const getEnvVariables = (): EnvVariables => ({
  INFURA_API_KEY: process.env.INFURA_API_KEY || '',
  MNEMONIC:
    process.env.MNEMONIC ||
    'story lemon benefit fix decline axis purchase ribbon tattoo aim suggest diagram',
  MNEMONIC_DEV:
    process.env.MNEMONIC_DEV ||
    'story lemon benefit fix decline axis purchase ribbon tattoo aim suggest diagram',
  PRIVATE_KEY:
    process.env.PRIVATE_KEY ||
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  FORKING_NETWORK: process.env.FORKING_NETWORK || 'ethereum',
  ARBISCAN_API_KEY: process.env.ARBISCAN_API_KEY || '',
  BSCSCAN_API_KEY: process.env.BSCSCAN_API_KEY || '',
  ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY || '',
  FANTOMSCAN_API_KEY: process.env.FANTOMSCAN_API_KEY || '',
  OPTIMISM_API_KEY: process.env.OPTIMISM_API_KEY || '',
  POLYGONSCAN_API_KEY: process.env.POLYGONSCAN_API_KEY || '',
  SNOWTRACE_API_KEY: process.env.SNOWTRACE_API_KEY || '',
});
