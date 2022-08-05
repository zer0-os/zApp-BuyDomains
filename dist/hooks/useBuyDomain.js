'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useBuyDomain = void 0;
var react_1 = require('react');
var BuyDomainProvider_1 = require('../providers/BuyDomainProvider');
var useBuyDomain = function () {
	var context = (0, react_1.useContext)(BuyDomainProvider_1.BuyDomainContext);
	return context;
};
exports.useBuyDomain = useBuyDomain;
