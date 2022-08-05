'use strict';
var _a;
Object.defineProperty(exports, '__esModule', { value: true });
exports.DEFAULT_NETWORK_PROTOCAL =
	exports.DEFAULT_PROVIDER =
	exports.DEFAULT_NETWORK =
	exports.RPC_URLS =
	exports.NETWORK_TYPES =
	exports.Network =
		void 0;
var ethers_1 = require('ethers');
var Network;
(function (Network) {
	Network[(Network['MAINNET'] = 1)] = 'MAINNET';
	Network[(Network['ROPSTEN'] = 3)] = 'ROPSTEN';
	Network[(Network['RINKEBY'] = 4)] = 'RINKEBY';
	Network[(Network['KOVAN'] = 42)] = 'KOVAN';
})((Network = exports.Network || (exports.Network = {})));
var NETWORK_TYPES;
(function (NETWORK_TYPES) {
	NETWORK_TYPES['MAINNET'] = 'MAINNET';
	NETWORK_TYPES['RINKEBY'] = 'RINKEBY';
	NETWORK_TYPES['ROPSTEN'] = 'ROPSTEN';
	NETWORK_TYPES['LOCAL'] = 'LOCAL';
	NETWORK_TYPES['KOVAN'] = 'KOVAN';
})((NETWORK_TYPES = exports.NETWORK_TYPES || (exports.NETWORK_TYPES = {})));
exports.RPC_URLS =
	((_a = {}),
	(_a[Network.MAINNET] =
		'https://mainnet.infura.io/v3/77c3d733140f4c12a77699e24cb30c27'),
	(_a[Network.RINKEBY] =
		'https://rinkeby.infura.io/v3/fa959ead3761429bafa6995a4b25397e'),
	_a);
exports.DEFAULT_NETWORK = Network.MAINNET;
exports.DEFAULT_PROVIDER = new ethers_1.providers.JsonRpcProvider(
	exports.RPC_URLS[exports.DEFAULT_NETWORK],
);
exports.DEFAULT_NETWORK_PROTOCAL = '0://';
