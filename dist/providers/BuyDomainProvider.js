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
Object.defineProperty(exports, '__esModule', { value: true });
exports.BuyDomainProvider = exports.BuyDomainContext = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
exports.BuyDomainContext = (0, react_1.createContext)({
	domainName: '',
	setDomainName: function (domainName) {},
});
var BuyDomainProvider = function (_a) {
	var children = _a.children;
	var _b = (0, react_1.useState)(''),
		domainName = _b[0],
		setDomainName = _b[1];
	var contextValue = {
		domainName: domainName,
		setDomainName: setDomainName,
	};
	return (0, jsx_runtime_1.jsx)(
		exports.BuyDomainContext.Provider,
		__assign({ value: contextValue }, { children: children }),
	);
};
exports.BuyDomainProvider = BuyDomainProvider;
