import { useQuery } from 'react-query';

import { useZnsSdk } from './useZnsSdk';

import { useBuyDomain } from './useBuyDomain';

import { PAYMENT_TOKENS, DEFAULT_NETWORK } from '../constants/network';

import { formatEther } from '@ethersproject/units';

export type UserBalanceForPaymentTokenByDomainReturn = {
	isLoading: boolean;
	balance?: string;
};

export const useUserBalanceForPaymentTokenByDomain = (
	account: string,
	chainId: number,
): UserBalanceForPaymentTokenByDomainReturn => {
	// SDK
	const sdk = useZnsSdk();

	// Domain Name
	const { selectedDomain } = useBuyDomain();

	// Payment Token
	const paymentToken = PAYMENT_TOKENS[chainId];

	// Query
	const { isLoading, data: balance } = useQuery(
		`user-balance-token-${account}-${selectedDomain.toLowerCase()}-${paymentToken}`,
		async () => {
			try {
				const balanceBignumber =
					await sdk.zauction.getUserBalanceForPaymentToken(
						account,
						paymentToken,
					);

				return formatEther(balanceBignumber);
			} catch (error) {
				console.error(error);
				return undefined;
			}
		},
		{
			retry: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			enabled: Boolean(selectedDomain.trim()),
		},
	);

	return {
		isLoading,
		balance,
	};
};
