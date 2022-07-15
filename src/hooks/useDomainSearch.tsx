import type { Domain } from '@zero-tech/zns-sdk';

import { useState } from 'react';
import { useQuery } from 'react-query';
import { useZnsSdk } from './useZnsSdk';
import { getDomainId } from '../helpers/domains';
import { MIN_DOMAIN_NAME_LENGTH } from '../constants/domains';

export interface UseDomainSearchReturn {
	isLoading: boolean;
	pattern: string;
	setPattern: (pattern: string) => void;
	exactMatch?: Domain;
}

export const useDomainSearch = (): UseDomainSearchReturn => {
	// SDK
	const sdk = useZnsSdk();

	// State
	const [pattern, setPattern] = useState<string>('');

	// Query
	const { isLoading, data: exactMatch } = useQuery(
		`buy-domains-search-${pattern}`,
		async () => {
			if (pattern.length >= MIN_DOMAIN_NAME_LENGTH) {
				const domainId = getDomainId(pattern);

				if (domainId) {
					try {
						return await sdk.getDomainById(domainId);
					} catch (error) {
						// handle error
					}
				}
			}

			return undefined;
		},
		{
			retry: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		},
	);

	return {
		isLoading,
		exactMatch,
		pattern,
		setPattern,
	};
};
