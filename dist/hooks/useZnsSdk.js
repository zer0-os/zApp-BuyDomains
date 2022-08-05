'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useZnsSdk = void 0;
var react_1 = require('react');
var ZnsSdkProvider_1 = require('../providers/ZnsSdkProvider');
/**
 * Wraps useContext in a more specific wrapper.
 * This is mainly just for DX.
 * @returns context from zns SDK provider
 */
var useZnsSdk = function () {
	return (0, react_1.useContext)(ZnsSdkProvider_1.ZnsSdkContext);
};
exports.useZnsSdk = useZnsSdk;
exports.default = exports.useZnsSdk;
