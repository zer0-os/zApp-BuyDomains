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
exports.BuyDomain = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var components_1 = require('../../components');
var BuyDomain_module_scss_1 = __importDefault(
	require('./BuyDomain.module.scss'),
);
var BuyDomain = function (_a) {
	var user = _a.user,
		provider = _a.provider;
	var _b = (0, react_1.useState)({
			isOpen: false,
			domainName: '',
		}),
		buyDomainModal = _b[0],
		setBuyDomainModal = _b[1];
	var handleOnBuyButtonClick = function (domainName) {
		setBuyDomainModal({
			isOpen: true,
			domainName: domainName,
		});
	};
	var handleOnModalClose = function () {
		setBuyDomainModal(
			__assign(__assign({}, buyDomainModal), { isOpen: false }),
		);
	};
	return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
		children: [
			(0, jsx_runtime_1.jsx)(
				'div',
				__assign(
					{ className: BuyDomain_module_scss_1.default.Container },
					{
						children: (0, jsx_runtime_1.jsxs)(
							'div',
							__assign(
								{ className: BuyDomain_module_scss_1.default.Wrapper },
								{
									children: [
										(0, jsx_runtime_1.jsxs)(
											'div',
											__assign(
												{ className: BuyDomain_module_scss_1.default.Header },
												{
													children: [
														(0, jsx_runtime_1.jsx)(components_1.IconZero, {}),
														(0, jsx_runtime_1.jsx)('h1', {
															children: 'Buy Your Domain',
														}),
													],
												},
											),
										),
										(0, jsx_runtime_1.jsx)(
											'div',
											__assign(
												{ className: BuyDomain_module_scss_1.default.Content },
												{
													children: (0, jsx_runtime_1.jsx)(
														components_1.DomainSearch,
														{ onBuyButtonClick: handleOnBuyButtonClick },
													),
												},
											),
										),
									],
								},
							),
						),
					},
				),
			),
			buyDomainModal.isOpen &&
				(0, jsx_runtime_1.jsx)(components_1.BuyDomainModal, {
					user: user,
					provider: provider,
					onClose: handleOnModalClose,
				}),
		],
	});
};
exports.BuyDomain = BuyDomain;
exports.default = exports.BuyDomain;
