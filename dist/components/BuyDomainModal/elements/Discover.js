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
exports.Discover = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var DefaultDomainMedia_1 = require('./DefaultDomainMedia');
var DomainSearch_1 = require('../../DomainSearch');
var BuyDomainModal_module_scss_1 = __importDefault(
	require('../BuyDomainModal.module.scss'),
);
var Discover = function (_a) {
	var onNextStep = _a.onNextStep;
	return (0, jsx_runtime_1.jsxs)(
		'div',
		__assign(
			{ className: BuyDomainModal_module_scss_1.default.WizardContent },
			{
				children: [
					(0, jsx_runtime_1.jsx)(DefaultDomainMedia_1.DefaultDomainMedia, {}),
					(0, jsx_runtime_1.jsx)(DomainSearch_1.DomainSearch, {
						type: 'alternative',
						onBuyButtonClick: onNextStep,
					}),
				],
			},
		),
	);
};
exports.Discover = Discover;
