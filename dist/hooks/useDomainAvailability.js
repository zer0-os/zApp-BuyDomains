'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
exports.useDomainAvailability = void 0;
var react_query_1 = require('react-query');
var useBuyDomain_1 = require('./useBuyDomain');
var useZnsSdk_1 = require('./useZnsSdk');
var domains_1 = require('../constants/domains');
var useDomainAvailability = function () {
	var sdk = (0, useZnsSdk_1.useZnsSdk)();
	var domainName = (0, useBuyDomain_1.useBuyDomain)().domainName;
	var isDomainSearchEnabled =
		domainName.length >= domains_1.MIN_DOMAIN_NAME_LENGTH;
	// Query
	var _a = (0, react_query_1.useQuery)(
			'buy-domains-search-'.concat(domainName),
			function () {
				return __awaiter(void 0, void 0, void 0, function () {
					var isDomainAvailable_1, domainPrice_1, error_1;
					return __generator(this, function (_a) {
						switch (_a.label) {
							case 0:
								_a.trys.push([0, 4, , 5]);
								return [
									4 /*yield*/,
									sdk.minting.isNetworkDomainAvailable(domainName),
								];
							case 1:
								isDomainAvailable_1 = _a.sent();
								if (!isDomainAvailable_1) return [3 /*break*/, 3];
								return [
									4 /*yield*/,
									sdk.minting.getPriceOfNetworkDomain(domainName),
								];
							case 2:
								domainPrice_1 = _a.sent();
								return [
									2 /*return*/,
									{
										isDomainAvailable: isDomainAvailable_1,
										domainPrice: domainPrice_1,
									},
								];
							case 3:
								return [
									2 /*return*/,
									{
										isDomainAvailable: isDomainAvailable_1,
										domainPrice: undefined,
									},
								];
							case 4:
								error_1 = _a.sent();
								return [
									2 /*return*/,
									{
										isDomainAvailable: false,
										domainPrice: undefined,
									},
								];
							case 5:
								return [2 /*return*/];
						}
					});
				});
			},
			{
				retry: false,
				refetchOnMount: false,
				refetchOnWindowFocus: false,
				enabled: isDomainSearchEnabled,
			},
		),
		isLoading = _a.isLoading,
		_b = _a.data,
		_c = _b === void 0 ? {} : _b,
		isDomainAvailable = _c.isDomainAvailable,
		domainPrice = _c.domainPrice;
	return {
		isLoading: isLoading,
		isDomainSearchEnabled: isDomainSearchEnabled,
		isDomainAvailable: isDomainAvailable,
		domainPrice: domainPrice,
	};
};
exports.useDomainAvailability = useDomainAvailability;
