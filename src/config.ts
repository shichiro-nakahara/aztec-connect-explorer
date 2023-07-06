import { BlockchainStatus, getRollupProviderStatus } from '@aztec/sdk';

const config = {
  deployTag: '',
  rollupHost: 'https://falafel.natanetwork.io',
  networkName: 'Polygon',
  blockExplorerUrl: 'https://polygonscan.com',
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
  const { blockchainStatus } = await getRollupProviderStatus(config.rollupHost);

  return {
    deployTag: config.deployTag,
    name: config.networkName,
    baseUrl: '',
    endpoint: config.rollupHost,
    etherscanUrl: config.blockExplorerUrl,
    blockchainStatus,
  };
}

export const POLL_INTERVAL = 5000;
