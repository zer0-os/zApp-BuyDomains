import type { Domain } from '@zero-tech/zns-sdk';

import { useState } from 'react';
import { useQuery } from 'react-query';
import { useZnsSdk } from './useZnsSdk';
import { getDomainId } from '../helpers/domains';
import { MIN_DOMAIN_NAME_LENGTH } from '../constants/domains';

export interface UseDomainAvailabilityReturn {
	domainName: string;
	setDomainName: (domainName: string) => void;
	isLoading: boolean;
	isDomainAvailable: boolean;
	isDomainSearchEnabled: boolean;
}

export const useDomainAvailability = (
	initialDomainName: string = '',
): UseDomainAvailabilityReturn => {
	// SDK
	const sdk = useZnsSdk();

	// State
	const [domainName, setDomainName] = useState<string>(initialDomainName);

	const isDomainSearchEnabled = domainName.length >= MIN_DOMAIN_NAME_LENGTH;

	// Query
	const { isLoading, data: exactMatch } = useQuery(
		`buy-domains-search-${domainName}`,
		async () => {
			try {
				const domainId = getDomainId(domainName);
				return await sdk.getDomainById(domainId);
			} catch (error) {
				// disable error loging in browser console
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
		isDomainAvailable:
			isDomainSearchEnabled && !isLoading && exactMatch === undefined,
		domainName,
		setDomainName,
	};
};
