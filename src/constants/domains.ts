export const MIN_DOMAIN_NAME_LENGTH = 4;

export enum BuyDomainSteps {
	Discover = 'Discover',
	Approve = 'Approve',
	Mint = 'Mint',
	Success = 'Success',
}

export const BUY_DOMAIN_STEP_TITLES: Record<BuyDomainSteps, string> = {
	[BuyDomainSteps.Discover]: '1/4 Discover',
	[BuyDomainSteps.Approve]: '2/4 Approve',
	[BuyDomainSteps.Mint]: '3/4 Mint',
	[BuyDomainSteps.Success]: '4/4 Success',
};
