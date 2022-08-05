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
exports.IconClose = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconClose = function () {
	return (0, jsx_runtime_1.jsx)(
		'svg',
		__assign(
			{
				width: '18',
				height: '18',
				viewBox: '0 0 18 18',
				fill: 'none',
				xmlns: 'http://www.w3.org/2000/svg',
			},
			{
				children: (0, jsx_runtime_1.jsx)('path', {
					d: 'M1 1L17 17M17 1L1 17',
					stroke: 'white',
				}),
			},
		),
	);
};
exports.IconClose = IconClose;
