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
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g;
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function () {
					return this;
				}),
			g
		);
		function verb(n) {
			return function (v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.');
			while (_)
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.Approve = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var Wizard_1 = __importDefault(require('zero-ui/src/components/Wizard'));
var DefaultDomainMedia_1 = require('./DefaultDomainMedia');
var useZnsSdk_1 = require('../../../hooks/useZnsSdk');
var BuyDomainModal_module_scss_1 = __importDefault(
	require('../BuyDomainModal.module.scss'),
);
var ApproveStep;
(function (ApproveStep) {
	ApproveStep['Checking'] = 'Checking';
	ApproveStep['UnApproved'] = 'UnApproved';
	ApproveStep['ApproveConfirm'] = 'ApproveConfirm';
	ApproveStep['Approving'] = 'Approving';
})(ApproveStep || (ApproveStep = {}));
var Approve = function (_a) {
	var user = _a.user,
		provider = _a.provider,
		onPrevStep = _a.onPrevStep,
		onNextStep = _a.onNextStep;
	var sdk = (0, useZnsSdk_1.useZnsSdk)();
	var _b = (0, react_1.useState)(ApproveStep.Checking),
		step = _b[0],
		setStep = _b[1];
	var _c = (0, react_1.useState)(),
		error = _c[0],
		setErrror = _c[1];
	var checkSpendTokens = (0, react_1.useCallback)(
		function () {
			return __awaiter(void 0, void 0, void 0, function () {
				var isApproved, e_1;
				return __generator(this, function (_a) {
					switch (_a.label) {
						case 0:
							setStep(ApproveStep.Checking);
							// Set delay to show checking
							// because SDK promise took too short
							return [
								4 /*yield*/,
								new Promise(function (res) {
									return setTimeout(res, 1000);
								}),
							];
						case 1:
							// Set delay to show checking
							// because SDK promise took too short
							_a.sent();
							_a.label = 2;
						case 2:
							_a.trys.push([2, 4, , 5]);
							return [
								4 /*yield*/,
								sdk.minting.isMinterApprovedToSpendTokens(user.account),
							];
						case 3:
							isApproved = _a.sent();
							if (isApproved) {
								onNextStep();
							} else {
								setStep(ApproveStep.UnApproved);
							}
							return [3 /*break*/, 5];
						case 4:
							e_1 = _a.sent();
							setErrror(e_1.message);
							setStep(ApproveStep.UnApproved);
							return [3 /*break*/, 5];
						case 5:
							return [2 /*return*/];
					}
				});
			});
		},
		[user, sdk, setStep, onNextStep],
	);
	var approveSpendTokens = (0, react_1.useCallback)(
		function () {
			return __awaiter(void 0, void 0, void 0, function () {
				var tx, e_2, e_3;
				return __generator(this, function (_a) {
					switch (_a.label) {
						case 0:
							setStep(ApproveStep.ApproveConfirm);
							setErrror(undefined);
							_a.label = 1;
						case 1:
							_a.trys.push([1, 7, , 8]);
							return [
								4 /*yield*/,
								sdk.minting.approveMinterToSpendTokens(provider.getSigner()),
							];
						case 2:
							tx = _a.sent();
							_a.label = 3;
						case 3:
							_a.trys.push([3, 5, , 6]);
							setStep(ApproveStep.Approving);
							return [4 /*yield*/, tx.wait()];
						case 4:
							_a.sent();
							onNextStep();
							return [3 /*break*/, 6];
						case 5:
							e_2 = _a.sent();
							setErrror(e_2.message);
							setStep(ApproveStep.UnApproved);
							return [3 /*break*/, 6];
						case 6:
							return [3 /*break*/, 8];
						case 7:
							e_3 = _a.sent();
							setErrror(
								e_3.code === 4001
									? 'Approval rejected by wallet.'
									: e_3.message,
							);
							setStep(ApproveStep.UnApproved);
							return [3 /*break*/, 8];
						case 8:
							return [2 /*return*/];
					}
				});
			});
		},
		[provider, sdk, setStep, onNextStep],
	);
	(0, react_1.useEffect)(function () {
		checkSpendTokens();
	}, []);
	return (0, jsx_runtime_1.jsxs)(
		'div',
		__assign(
			{ className: BuyDomainModal_module_scss_1.default.WizardContent },
			{
				children: [
					step === ApproveStep.Checking &&
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
									step === ApproveStep.Checking &&
										(0, jsx_runtime_1.jsx)(Wizard_1.default.Loading, {
											message: 'Checking status of ZERO Spending approval...',
										}),
									step === ApproveStep.UnApproved &&
										(0, jsx_runtime_1.jsx)(Wizard_1.default.Confirmation, {
											className:
												BuyDomainModal_module_scss_1.default.Confirmation,
											error: error,
											message:
												'Before you mint this domain, you must approve ZERO spending in your wallet. This costs gas, you will only need to it once.',
											primaryButtonText: 'Approve',
											isPrimaryButtonActive: true,
											isSecondaryButtonActive: true,
											onClickPrimaryButton: approveSpendTokens,
											onClickSecondaryButton: onPrevStep,
										}),
									step === ApproveStep.ApproveConfirm &&
										(0, jsx_runtime_1.jsx)(
											'div',
											__assign(
												{
													className:
														BuyDomainModal_module_scss_1.default.Loading,
												},
												{
													children: (0, jsx_runtime_1.jsx)(
														Wizard_1.default.Loading,
														{
															message: (0, jsx_runtime_1.jsxs)(
																jsx_runtime_1.Fragment,
																{
																	children: [
																		(0, jsx_runtime_1.jsx)('p', {
																			children:
																				'Before you mint this domain, you must approve ZERO spending in your wallet. This costs gas, you will only need to it once.',
																		}),
																		(0, jsx_runtime_1.jsx)('p', {
																			children:
																				'Please approve in your wallet...',
																		}),
																	],
																},
															),
														},
													),
												},
											),
										),
									step === ApproveStep.Approving &&
										(0, jsx_runtime_1.jsx)(
											'div',
											__assign(
												{
													className:
														BuyDomainModal_module_scss_1.default.Loading,
												},
												{
													children: (0, jsx_runtime_1.jsx)(
														Wizard_1.default.Loading,
														{
															message:
																'Approving ZERO spending, please wait...',
														},
													),
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
exports.Approve = Approve;
