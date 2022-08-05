'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var network_1 = require('../constants/network');
var ChainGate = function (_a) {
	var chainId = _a.chainId,
		children = _a.children;
	var isSupportedNetwork = Object.values(network_1.Network).includes(chainId);
	if (!isSupportedNetwork) {
		return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
			children:
				'Buy Domains is not supported on this chain! Please switch to mainnet or Rinkeby',
		});
	}
	return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
};
exports.default = ChainGate;
