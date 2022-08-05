'use strict';
var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
		return __assign.apply(this, arguments);
	};
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (
					!desc ||
					('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
				) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, 'default', { enumerable: true, value: v });
		  }
		: function (o, v) {
				o['default'] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.ZnsSdkProvider = exports.ZnsSdkContext = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var zns = __importStar(require('@zero-tech/zns-sdk'));
var network_1 = require('../constants/network');
var network_2 = require('../helpers/network');
exports.ZnsSdkContext = (0, react_1.createContext)({});
var ZnsSdkProvider = function (_a) {
	var _b = _a.provider,
		provider = _b === void 0 ? network_1.DEFAULT_PROVIDER : _b,
		chainId = _a.chainId,
		children = _a.children;
	var sdk = (0, react_1.useMemo)(
		function () {
			/**
			 * Use connected wallet's provider if it exists, otherwise create
			 * a provider using the Infura URL for the selected chain
			 */
			var network = (0, network_2.chainIdToNetworkType)(
				chainId !== null && chainId !== void 0
					? chainId
					: network_1.DEFAULT_NETWORK,
			);
			/**
			 * Configure the SDK using provider based on selected network
			 */
			switch (network) {
				case network_1.NETWORK_TYPES.MAINNET: {
					return zns.createInstance(
						zns.configuration.mainnetConfiguration(provider),
					);
				}
				case network_1.NETWORK_TYPES.RINKEBY: {
					return zns.createInstance(
						zns.configuration.rinkebyConfiguration(provider),
					);
				}
				default: {
					throw new Error('SDK isn´t available for this chainId');
				}
			}
		},
		[provider, chainId],
	);
	return (0, jsx_runtime_1.jsx)(
		exports.ZnsSdkContext.Provider,
		__assign({ value: sdk }, { children: children }),
	);
};
exports.ZnsSdkProvider = ZnsSdkProvider;
