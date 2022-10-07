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

export const PAYMENT_TOKENS: Partial<Record<Network, string>> = {
	[Network.MAINNET]: '0x0ec78ed49c2d27b315d462d43b5bab94d2c79bf8',
	[Network.RINKEBY]: '0x3Ae5d499cfb8FB645708CC6DA599C90e64b33A79',
};

export const RPC_URLS: Partial<Record<Network, string>> = {
	[Network.MAINNET]:
		'https://mainnet.infura.io/v3/77c3d733140f4c12a77699e24cb30c27',
	[Network.RINKEBY]:
		'https://rinkeby.infura.io/v3/fa959ead3761429bafa6995a4b25397e',
};

export const DEFAULT_NETWORK = Network.MAINNET;
export const DEFAULT_PROVIDER = new providers.JsonRpcProvider(
	RPC_URLS[DEFAULT_NETWORK],
);

export const DEFAULT_NETWORK_PROTOCAL = '0://';
