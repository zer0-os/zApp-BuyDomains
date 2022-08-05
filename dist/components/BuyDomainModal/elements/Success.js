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
exports.Success = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_router_dom_1 = require('react-router-dom');
var Button_1 = __importDefault(require('zero-ui/src/components/Button'));
var DefaultDomainMedia_1 = require('./DefaultDomainMedia');
var hooks_1 = require('../../../hooks');
var domains_1 = require('../../../constants/domains');
var network_1 = require('../../../constants/network');
var BuyDomainModal_module_scss_1 = __importDefault(
	require('../BuyDomainModal.module.scss'),
);
var Success = function () {
	var history = (0, react_router_dom_1.useHistory)();
	var domainName = (0, hooks_1.useBuyDomain)().domainName;
	var handleOnTweet = function () {
		// TODO: Should handle sharing on Twitter with zOS
		var shareURL = location.origin + '/' + domainName;
		window.open(
			domains_1.DOMAIN_TWEET_OPTION.URL.replace(/DOMAIN_URL/g, shareURL),
			'',
			domains_1.DOMAIN_TWEET_OPTION.OPTIONS,
		);
	};
	var handleOnViewDomain = function () {
		// TODO: Should handle redirecting to domain with zOS
		var pathname = '/' + domainName;
		history.push(pathname);
	};
	return (0, jsx_runtime_1.jsxs)(
		'div',
		__assign(
			{ className: BuyDomainModal_module_scss_1.default.WizardContent },
			{
				children: [
					(0, jsx_runtime_1.jsx)(DefaultDomainMedia_1.DefaultDomainMedia, {}),
					(0, jsx_runtime_1.jsxs)(
						'div',
						__assign(
							{
								className:
									BuyDomainModal_module_scss_1.default.WizardContentSection,
							},
							{
								children: [
									(0, jsx_runtime_1.jsxs)(
										'div',
										__assign(
											{
												className:
													BuyDomainModal_module_scss_1.default.DomainName,
											},
											{
												children: [
													(0, jsx_runtime_1.jsx)('span', {
														children: network_1.DEFAULT_NETWORK_PROTOCAL,
													}),
													domainName,
												],
											},
										),
									),
									(0, jsx_runtime_1.jsxs)(
										'div',
										__assign(
											{
												className:
													BuyDomainModal_module_scss_1.default.MintSuccess,
											},
											{
												children: [
													(0, jsx_runtime_1.jsx)('p', {
														children: 'Domain successfully minted!',
													}),
													(0, jsx_runtime_1.jsxs)(
														'div',
														__assign(
															{
																className:
																	BuyDomainModal_module_scss_1.default.Buttons,
															},
															{
																children: [
																	(0, jsx_runtime_1.jsx)(
																		Button_1.default,
																		__assign(
																			{
																				variant: 'secondary',
																				onPress: handleOnTweet,
																			},
																			{ children: 'Tweet' },
																		),
																	),
																	(0, jsx_runtime_1.jsx)(
																		Button_1.default,
																		__assign(
																			{
																				variant: 'primary',
																				onPress: handleOnViewDomain,
																			},
																			{ children: 'View Domain' },
																		),
																	),
																],
															},
														),
													),
												],
											},
										),
									),
								],
							},
						),
					),
				],
			},
		),
	);
};
exports.Success = Success;
