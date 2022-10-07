export const MIN_DOMAIN_NAME_LENGTH = 4;

export enum BuyDomainStep {
	Discover = 'Discover',
	Approve = 'Approve',
	Mint = 'Mint',
	Success = 'Success',
}

export const BUY_DOMAIN_STEPS = [
	{ id: BuyDomainStep.Discover, title: '1/4 Discover' },
	{ id: BuyDomainStep.Approve, title: '2/4 Approve' },
	{ id: BuyDomainStep.Mint, title: '3/4 Mint' },
	{ id: BuyDomainStep.Success, title: '4/4 Success' },
];

export const DOMAIN_TWEET_OPTION = {
	URL: 'https://twitter.com/share?url=DOMAIN_URL',
	OPTIONS:
		'menubar=no,toolbar=no,resizable=no,scrollbars=no,personalbar=no,height=575,width=500',
};
