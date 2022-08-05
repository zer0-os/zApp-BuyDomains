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
exports.IconZero = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconZero = function () {
	return (0, jsx_runtime_1.jsxs)(
		'svg',
		__assign(
			{
				width: '36',
				height: '36',
				viewBox: '0 0 36 36',
				fill: 'none',
				xmlns: 'http://www.w3.org/2000/svg',
			},
			{
				children: [
					(0, jsx_runtime_1.jsxs)(
						'g',
						__assign(
							{ filter: 'url(#filter0_d_8233_90083)' },
							{
								children: [
									(0, jsx_runtime_1.jsx)('path', {
										d: 'M6.3959 6.39595C0.156648 12.6353 0.608863 22.8936 7.43521 28.5651C2.56054 22.7247 2.83596 13.9205 8.37818 8.37826C13.9204 2.83597 22.7245 2.55942 28.5648 7.43527C22.8934 0.608848 12.6352 0.156624 6.3959 6.39595Z',
										fill: 'white',
									}),
									(0, jsx_runtime_1.jsx)('path', {
										d: 'M29.6041 29.6044C35.8434 23.3651 35.3911 13.1068 28.5648 7.43527C33.4395 13.2756 33.164 22.0798 27.6218 27.6221C22.0796 33.1644 13.2755 33.441 7.43521 28.5651C13.1078 35.3904 23.366 35.8438 29.6041 29.6044Z',
										fill: 'white',
									}),
								],
							},
						),
					),
					(0, jsx_runtime_1.jsx)('defs', {
						children: (0, jsx_runtime_1.jsxs)(
							'filter',
							__assign(
								{
									id: 'filter0_d_8233_90083',
									x: '0',
									y: '0',
									width: '36',
									height: '36',
									filterUnits: 'userSpaceOnUse',
									'color-interpolation-filters': 'sRGB',
								},
								{
									children: [
										(0, jsx_runtime_1.jsx)('feFlood', {
											'flood-opacity': '0',
											result: 'BackgroundImageFix',
										}),
										(0, jsx_runtime_1.jsx)('feColorMatrix', {
											in: 'SourceAlpha',
											type: 'matrix',
											values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
											result: 'hardAlpha',
										}),
										(0, jsx_runtime_1.jsx)('feOffset', {}),
										(0, jsx_runtime_1.jsx)('feGaussianBlur', {
											stdDeviation: '1',
										}),
										(0, jsx_runtime_1.jsx)('feColorMatrix', {
											type: 'matrix',
											values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0',
										}),
										(0, jsx_runtime_1.jsx)('feBlend', {
											mode: 'normal',
											in2: 'BackgroundImageFix',
											result: 'effect1_dropShadow_8233_90083',
										}),
										(0, jsx_runtime_1.jsx)('feBlend', {
											mode: 'normal',
											in: 'SourceGraphic',
											in2: 'effect1_dropShadow_8233_90083',
											result: 'shape',
										}),
									],
								},
							),
						),
					}),
				],
			},
		),
	);
};
exports.IconZero = IconZero;
