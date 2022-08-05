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
exports.Mint = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var Wizard_1 = __importDefault(require('zero-ui/src/components/Wizard'));
var DefaultDomainMedia_1 = require('./DefaultDomainMedia');
var DomainSearch_1 = require('../../DomainSearch');
var useZnsSdk_1 = require('../../../hooks/useZnsSdk');
var hooks_1 = require('../../../hooks');
var network_1 = require('../../../constants/network');
var BuyDomainModal_module_scss_1 = __importDefault(
	require('../BuyDomainModal.module.scss'),
);
var MintStep;
(function (MintStep) {
	MintStep['MintConfirm'] = 'MintConfirm';
	MintStep['MintConfirmDenied'] = 'MintConfirmDenied';
	MintStep['Minting'] = 'Minting';
})(MintStep || (MintStep = {}));
var Mint = function (_a) {
	var provider = _a.provider,
		onNextStep = _a.onNextStep;
	var sdk = (0, useZnsSdk_1.useZnsSdk)();
	var domainName = (0, hooks_1.useBuyDomain)().domainName;
	var _b = (0, react_1.useState)(MintStep.MintConfirm),
		step = _b[0],
		setStep = _b[1];
	var _c = (0, react_1.useState)(),
		error = _c[0],
		setErrror = _c[1];
	var mintDomain = (0, react_1.useCallback)(
		function () {
			return __awaiter(void 0, void 0, void 0, function () {
				var tx, e_1, e_2;
				return __generator(this, function (_a) {
					switch (_a.label) {
						case 0:
							setStep(MintStep.MintConfirm);
							setErrror(undefined);
							_a.label = 1;
						case 1:
							_a.trys.push([1, 7, , 8]);
							return [
								4 /*yield*/,
								sdk.minting.mintNetworkDomain(domainName, provider.getSigner()),
							];
						case 2:
							tx = _a.sent();
							_a.label = 3;
						case 3:
							_a.trys.push([3, 5, , 6]);
							setStep(MintStep.Minting);
							return [4 /*yield*/, tx.wait()];
						case 4:
							_a.sent();
							onNextStep();
							return [3 /*break*/, 6];
						case 5:
							e_1 = _a.sent();
							setErrror(e_1.message);
							setStep(MintStep.MintConfirmDenied);
							return [3 /*break*/, 6];
						case 6:
							return [3 /*break*/, 8];
						case 7:
							e_2 = _a.sent();
							// TODO:: SDK does not return 4001 code for transaction reject
							setErrror(
								e_2.message === 'User rejected transaction.'
									? 'Transaction denied by wallet. Please try again...'
									: e_2.message,
							);
							setStep(MintStep.MintConfirmDenied);
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
		mintDomain();
	}, []);
	return (0, jsx_runtime_1.jsxs)(
		'div',
		__assign(
			{ className: BuyDomainModal_module_scss_1.default.WizardContent },
			{
				children: [
					(0, jsx_runtime_1.jsx)(DefaultDomainMedia_1.DefaultDomainMedia, {}),
					step !== MintStep.Minting &&
						(0, jsx_runtime_1.jsx)(DomainSearch_1.DomainSearch, {
							type: 'nobutton',
						}),
					(0, jsx_runtime_1.jsxs)(
						'div',
						__assign(
							{
								className:
									BuyDomainModal_module_scss_1.default.WizardContentSection,
							},
							{
								children: [
									step === MintStep.MintConfirm &&
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
																'Please confirm transaction in your wallet...',
														},
													),
												},
											),
										),
									step === MintStep.MintConfirmDenied &&
										(0, jsx_runtime_1.jsx)(Wizard_1.default.Confirmation, {
											className:
												BuyDomainModal_module_scss_1.default.Confirmation,
											error: error,
											message: null,
											primaryButtonText: 'Buy',
											isPrimaryButtonActive: true,
											onClickPrimaryButton: mintDomain,
										}),
									step === MintStep.Minting &&
										(0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
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
																		'Minting your domain on the blockchain...',
																},
															),
														},
													),
												),
											],
										}),
								],
							},
						),
					),
				],
			},
		),
	);
};
exports.Mint = Mint;
