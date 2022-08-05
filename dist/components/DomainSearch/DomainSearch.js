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
exports.DomainSearch = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var bind_1 = __importDefault(require('classnames/bind'));
var Input_1 = __importDefault(require('zero-ui/src/components/Input'));
var Button_1 = __importDefault(require('zero-ui/src/components/Button'));
var LoadingIndicator_1 = __importDefault(
	require('zero-ui/src/components/LoadingIndicator'),
);
var network_1 = require('../../constants/network');
var hooks_1 = require('../../hooks');
var DomainSearch_module_scss_1 = __importDefault(
	require('./DomainSearch.module.scss'),
);
var cx = bind_1.default.bind(DomainSearch_module_scss_1.default);
var DomainSearch = function (_a) {
	var _b = _a.type,
		type = _b === void 0 ? 'default' : _b,
		onBuyButtonClick = _a.onBuyButtonClick;
	var _c = (0, hooks_1.useBuyDomain)(),
		domainName = _c.domainName,
		setDomainName = _c.setDomainName;
	var _d = (0, hooks_1.useDomainAvailability)(),
		isLoading = _d.isLoading,
		isDomainSearchEnabled = _d.isDomainSearchEnabled,
		isDomainAvailable = _d.isDomainAvailable,
		domainPrice = _d.domainPrice;
	var handleOnChange = function (value) {
		var correctValue = value;
		correctValue = correctValue
			.replace(network_1.DEFAULT_NETWORK_PROTOCAL, '')
			.replace(/[^a-z0-9]/g, '')
			.replace(/\s+/g, '');
		setDomainName(correctValue);
	};
	var handleOnBuyButtonClick = function () {
		onBuyButtonClick === null || onBuyButtonClick === void 0
			? void 0
			: onBuyButtonClick(domainName);
	};
	var buyDomainButton = function () {
		return (0, jsx_runtime_1.jsx)(
			'div',
			__assign(
				{
					className: cx(DomainSearch_module_scss_1.default.BuyButton, {
						Alternative: type === 'alternative',
					}),
				},
				{
					children: (0, jsx_runtime_1.jsx)(
						Button_1.default,
						__assign(
							{
								isLoading: isLoading,
								isDisabled: !isDomainSearchEnabled || !isDomainAvailable,
								onPress: handleOnBuyButtonClick,
							},
							{ children: 'Buy' },
						),
					),
				},
			),
		);
	};
	return (0, jsx_runtime_1.jsxs)(
		'div',
		__assign(
			{ className: DomainSearch_module_scss_1.default.Container },
			{
				children: [
					(0, jsx_runtime_1.jsx)(
						'div',
						__assign(
							{ className: DomainSearch_module_scss_1.default.Section },
							{
								children: (0, jsx_runtime_1.jsx)(Input_1.default, {
									className: DomainSearch_module_scss_1.default.Input,
									placeholder: 'Search for your domain...',
									value: domainName,
									onChange: handleOnChange,
									startEnhancer: (0, jsx_runtime_1.jsx)(
										'div',
										__assign(
											{
												className:
													DomainSearch_module_scss_1.default.StartEnhancer,
											},
											{
												children:
													domainName.length > 0 &&
													network_1.DEFAULT_NETWORK_PROTOCAL,
											},
										),
									),
									endEnhancer: (0, jsx_runtime_1.jsx)(
										'div',
										__assign(
											{
												className:
													DomainSearch_module_scss_1.default.EndEnhancer,
											},
											{
												children: isLoading
													? (0, jsx_runtime_1.jsx)(LoadingIndicator_1.default, {
															text: '',
													  })
													: type === 'default'
													? buyDomainButton()
													: null,
											},
										),
									),
								}),
							},
						),
					),
					isDomainSearchEnabled &&
						!isLoading &&
						(0, jsx_runtime_1.jsx)(
							'div',
							__assign(
								{
									className: cx(
										DomainSearch_module_scss_1.default.Section,
										DomainSearch_module_scss_1.default.DescriptionSection,
										{
											Invalid: !isDomainAvailable,
											Valid: isDomainAvailable,
										},
									),
								},
								{
									children: isDomainAvailable
										? 'Domain available for '.concat(
												domainPrice,
												' ZERO. No renewal fee, ever.',
										  )
										: 'Someone already explored that part of the universe, try again...',
								},
							),
						),
					type === 'alternative' && buyDomainButton(),
				],
			},
		),
	);
};
exports.DomainSearch = DomainSearch;
exports.default = exports.DomainSearch;
