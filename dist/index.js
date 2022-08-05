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
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_query_1 = require('react-query');
var ChainGate_1 = __importDefault(require('./util/ChainGate'));
var ZnsSdkProvider_1 = require('./providers/ZnsSdkProvider');
var BuyDomainProvider_1 = require('./providers/BuyDomainProvider');
var pages_1 = require('./pages');
var queryClient = new react_query_1.QueryClient();
var App = function (_a) {
	var provider = _a.provider,
		web3 = _a.web3,
		route = _a.route,
		user = _a.user;
	return (0, jsx_runtime_1.jsx)(
		ChainGate_1.default,
		__assign(
			{ chainId: web3.chainId },
			{
				children: (0, jsx_runtime_1.jsx)(
					ZnsSdkProvider_1.ZnsSdkProvider,
					__assign(
						{ chainId: web3.chainId, provider: provider },
						{
							children: (0, jsx_runtime_1.jsx)(
								react_query_1.QueryClientProvider,
								__assign(
									{ client: queryClient },
									{
										children: (0, jsx_runtime_1.jsx)(
											BuyDomainProvider_1.BuyDomainProvider,
											{
												children: (0, jsx_runtime_1.jsx)(pages_1.BuyDomain, {
													user: user,
													provider: provider,
												}),
											},
										),
									},
								),
							),
						},
					),
				),
			},
		),
	);
};
exports.default = App;
