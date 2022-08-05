import { providers } from 'ethers';
export declare enum Network {
	MAINNET = 1,
	ROPSTEN = 3,
	RINKEBY = 4,
	KOVAN = 42,
}
export declare enum NETWORK_TYPES {
	MAINNET = 'MAINNET',
	RINKEBY = 'RINKEBY',
	ROPSTEN = 'ROPSTEN',
	LOCAL = 'LOCAL',
	KOVAN = 'KOVAN',
}
export declare const RPC_URLS: Partial<Record<Network, string>>;
export declare const DEFAULT_NETWORK = Network.MAINNET;
export declare const DEFAULT_PROVIDER: providers.JsonRpcProvider;
export declare const DEFAULT_NETWORK_PROTOCAL = '0://';
