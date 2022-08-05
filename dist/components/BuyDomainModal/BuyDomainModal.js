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
exports.BuyDomainModal = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var Wizard_1 = __importDefault(require('zero-ui/src/components/Wizard'));
var Modal_1 = __importDefault(require('zero-ui/src/components/Modal'));
var StepBar_1 = require('zero-ui/src/components/StepBar');
var domains_1 = require('../../constants/domains');
var elements_1 = require('./elements');
var BuyDomainModal_module_scss_1 = __importDefault(
	require('./BuyDomainModal.module.scss'),
);
var BuyDomainModal = function (_a) {
	var user = _a.user,
		provider = _a.provider,
		onClose = _a.onClose;
	var _b = (0, react_1.useState)(domains_1.BuyDomainStep.Discover),
		step = _b[0],
		setStep = _b[1];
	var header =
		step === domains_1.BuyDomainStep.Approve
			? 'Approve ZERO Spending'
			: 'Buy Your Domain';
	return (0, jsx_runtime_1.jsx)(
		Modal_1.default,
		__assign(
			{
				open: true,
				onOpenChange: onClose,
				className: BuyDomainModal_module_scss_1.default.Modal,
			},
			{
				children: (0, jsx_runtime_1.jsxs)(
					Wizard_1.default.Container,
					__assign(
						{
							header: header,
							subHeader: 'Secure your space on the Ethereum blockchain',
							className: BuyDomainModal_module_scss_1.default.WizardContainer,
							sectionDivider: false,
						},
						{
							children: [
								(0, jsx_runtime_1.jsx)(StepBar_1.StepBar, {
									currentStepId: step,
									steps: domains_1.BUY_DOMAIN_STEPS,
									onChangeStep: function (s) {
										return setStep(s.id);
									},
									className: BuyDomainModal_module_scss_1.default.StepBar,
								}),
								step === domains_1.BuyDomainStep.Discover &&
									(0, jsx_runtime_1.jsx)(elements_1.Discover, {
										onNextStep: function () {
											return setStep(domains_1.BuyDomainStep.Approve);
										},
									}),
								step === domains_1.BuyDomainStep.Approve &&
									(0, jsx_runtime_1.jsx)(elements_1.Approve, {
										user: user,
										provider: provider,
										onPrevStep: function () {
											return setStep(domains_1.BuyDomainStep.Discover);
										},
										onNextStep: function () {
											return setStep(domains_1.BuyDomainStep.Mint);
										},
									}),
								step === domains_1.BuyDomainStep.Mint &&
									(0, jsx_runtime_1.jsx)(elements_1.Mint, {
										provider: provider,
										onNextStep: function () {
											return setStep(domains_1.BuyDomainStep.Success);
										},
									}),
								step === domains_1.BuyDomainStep.Success &&
									(0, jsx_runtime_1.jsx)(elements_1.Success, {}),
							],
						},
					),
				),
			},
		),
	);
};
exports.BuyDomainModal = BuyDomainModal;
exports.default = exports.BuyDomainModal;
