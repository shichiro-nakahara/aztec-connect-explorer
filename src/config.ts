import { BlockchainStatus, getRollupProviderStatus } from '@aztec/sdk';

const config = {
  deployTag: '',
  rollupHost: 'http://136.244.98.226:8081',
  networkName: 'Mumbai',
  blockExplorerUrl: 'https://mumbai.polygonscan.com',
};

export const ACCEPTABLE_DEPLOY_TAGS = [
  'aztec-connect-prod',
  'aztec-connect-dev',
  'aztec-connect-stage',
  'aztec-connect-testnet',
  'localhost',
];

export interface Network {
  deployTag: string;
  name: string;
  baseUrl: string;
  endpoint: string;
  etherscanUrl: string;
  blockchainStatus: BlockchainStatus;
}

export async function getNetwork(): Promise<Network> {
  const rollupProviderUrl = 'http://136.244.98.226:8081';
  const endpoint = `${rollupProviderUrl}`;
  const { blockchainStatus } = await getRollupProviderStatus(rollupProviderUrl);

  return {
    deployTag: config.deployTag,
    name: config.networkName,
    baseUrl: '',
    endpoint,
    etherscanUrl: config.blockExplorerUrl,
    blockchainStatus,
  };
}

export const POLL_INTERVAL = 5000;
