'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DOMAIN_TWEET_OPTION =
	exports.BUY_DOMAIN_STEPS =
	exports.BuyDomainStep =
	exports.MIN_DOMAIN_NAME_LENGTH =
		void 0;
exports.MIN_DOMAIN_NAME_LENGTH = 4;
var BuyDomainStep;
(function (BuyDomainStep) {
	BuyDomainStep['Discover'] = 'Discover';
	BuyDomainStep['Approve'] = 'Approve';
	BuyDomainStep['Mint'] = 'Mint';
	BuyDomainStep['Success'] = 'Success';
})((BuyDomainStep = exports.BuyDomainStep || (exports.BuyDomainStep = {})));
exports.BUY_DOMAIN_STEPS = [
	{ id: BuyDomainStep.Discover, title: '1/4 Discover' },
	{ id: BuyDomainStep.Approve, title: '2/4 Approve' },
	{ id: BuyDomainStep.Mint, title: '3/4 Mint' },
	{ id: BuyDomainStep.Success, title: '4/4 Success' },
];
exports.DOMAIN_TWEET_OPTION = {
	URL: 'https://twitter.com/share?url=DOMAIN_URL',
	OPTIONS:
		'menubar=no,toolbar=no,resizable=no,scrollbars=no,personalbar=no,height=575,width=500',
};
