import { useQuery } from 'react-query';
import { useBuyDomain } from './useBuyDomain';
import { useZnsSdk } from './useZnsSdk';
import { MIN_DOMAIN_NAME_LENGTH } from '../constants/domains';

export interface UseDomainAvailabilityReturn {
	isLoading: boolean;
	isDomainAvailable: boolean;
	isDomainSearchEnabled: boolean;
	domainPrice?: string;
}

export const useDomainAvailability = (): UseDomainAvailabilityReturn => {
	const sdk = useZnsSdk();
	const { selectedDomain } = useBuyDomain();

	const isDomainSearchEnabled = selectedDomain.length >= MIN_DOMAIN_NAME_LENGTH;

	// Query
	const { isLoading, data: { isDomainAvailable, domainPrice } = {} } = useQuery(
		['buy-domains-search', selectedDomain],
		async () => {
			try {
				const isDomainAvailable = await sdk.minting.isNetworkDomainAvailable(
					selectedDomain,
				);

				if (isDomainAvailable) {
					const domainPrice = await sdk.minting.getPriceOfNetworkDomain(
						selectedDomain,
					);

					return {
						isDomainAvailable,
						domainPrice,
					};
				}

				return {
					isDomainAvailable,
					domainPrice: undefined,
				};
			} catch (error) {
				return {
					isDomainAvailable: false,
					domainPrice: undefined,
				};
			}
		},
		{
			retry: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			enabled: isDomainSearchEnabled,
		},
	);

	return {
		isLoading,
		isDomainSearchEnabled,
		isDomainAvailable,
		domainPrice,
	};
};
