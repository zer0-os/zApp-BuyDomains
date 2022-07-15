import { providers } from 'ethers';

export enum Network {
	MAINNET = 1,
	ROPSTEN = 3,
	RINKEBY = 4,
	KOVAN = 42,
}

export enum NETWORK_TYPES {
	MAINNET = 'MAINNET',
	RINKEBY = 'RINKEBY',
	ROPSTEN = 'ROPSTEN',
	LOCAL = 'LOCAL',
	KOVAN = 'KOVAN',
}

export const RPC_URLS: Partial<Record<Network, string>> = {
	[Network.MAINNET]:
		'https://mainnet.infura.io/v3/77c3d733140f4c12a77699e24cb30c27',
	[Network.RINKEBY]:
		'https://rinkeby.infura.io/v3/fa959ead3761429bafa6995a4b25397e',
	[Network.KOVAN]:
		'https://kovan.infura.io/v3/d0a982194ba740eb9dcbd9e112dc2dfb',
};

export const DEFAULT_NETWORK = Network.MAINNET;
export const DEFAULT_PROVIDER = new providers.JsonRpcProvider(
	RPC_URLS[DEFAULT_NETWORK],
);

export const DEFAULT_NETWORK_PROTOCAL = '0://';
