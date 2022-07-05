import { Network, DEFAULT_NETWORK, NETWORK_TYPES } from '../constants/network';

export const getEtherscanUri = (networkType: NETWORK_TYPES): string => {
	let prefix = '';
	switch (networkType) {
		case NETWORK_TYPES.ROPSTEN:
			prefix = 'ropsten.';
			break;
		case NETWORK_TYPES.RINKEBY:
			prefix = 'rinkeby.';
			break;
		case NETWORK_TYPES.KOVAN:
			prefix = 'kovan.';
	}
	const uri = `https://${prefix}etherscan.io/`;

	return uri;
};

export const chainIdToNetworkType = (chainId?: Network): NETWORK_TYPES => {
	if (!chainId) {
		chainId = DEFAULT_NETWORK;
	}
	switch (chainId) {
		case 1:
			return NETWORK_TYPES.MAINNET;
		case 3:
			return NETWORK_TYPES.ROPSTEN;
		case 4:
			return NETWORK_TYPES.RINKEBY;
		case 42:
			return NETWORK_TYPES.KOVAN;
		default:
			return NETWORK_TYPES.LOCAL;
	}
};
