'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.chainIdToNetworkType = void 0;
var network_1 = require('../constants/network');
var chainIdToNetworkType = function (chainId) {
	if (!chainId) {
		chainId = network_1.DEFAULT_NETWORK;
	}
	switch (chainId) {
		case 1:
			return network_1.NETWORK_TYPES.MAINNET;
		case 3:
			return network_1.NETWORK_TYPES.ROPSTEN;
		case 4:
			return network_1.NETWORK_TYPES.RINKEBY;
		case 42:
			return network_1.NETWORK_TYPES.KOVAN;
		default:
			return network_1.NETWORK_TYPES.LOCAL;
	}
};
exports.chainIdToNetworkType = chainIdToNetworkType;
