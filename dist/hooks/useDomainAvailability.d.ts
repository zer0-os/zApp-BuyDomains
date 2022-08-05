export interface UseDomainAvailabilityReturn {
	isLoading: boolean;
	isDomainAvailable: boolean;
	isDomainSearchEnabled: boolean;
	domainPrice?: string;
}
export declare const useDomainAvailability: () => UseDomainAvailabilityReturn;
