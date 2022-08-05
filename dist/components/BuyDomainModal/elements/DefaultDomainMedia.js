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
exports.DefaultDomainMedia = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var default_domain_image_jpeg_1 = __importDefault(
	require('../../../assets/default_domain_image.jpeg'),
);
var default_domain_video_webm_1 = __importDefault(
	require('../../../assets/default_domain_video.webm'),
);
var BuyDomainModal_module_scss_1 = __importDefault(
	require('../BuyDomainModal.module.scss'),
);
var DefaultDomainMedia = function () {
	return (0, jsx_runtime_1.jsx)(
		'div',
		__assign(
			{ className: BuyDomainModal_module_scss_1.default.DefaultDomainMedia },
			{
				children: (0, jsx_runtime_1.jsx)('video', {
					autoPlay: true,
					loop: true,
					muted: true,
					playsInline: true,
					poster: default_domain_image_jpeg_1.default,
					src: default_domain_video_webm_1.default,
				}),
			},
		),
	);
};
exports.DefaultDomainMedia = DefaultDomainMedia;
