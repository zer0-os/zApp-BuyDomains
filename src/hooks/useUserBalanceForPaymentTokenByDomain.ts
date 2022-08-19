//- React Imports
import { useQuery } from 'react-query';

//- Hooks Imports
import { useZnsSdk } from './useZnsSdk';

//- Constants Imports
import { PAYMENT_TOKENS, DEFAULT_NETWORK } from '../constants/network';

//- Hooks
import { useBuyDomain } from './useBuyDomain';

//- Utils
import { formatEther } from '@ethersproject/units';

//- Types
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
	const { domainName } = useBuyDomain();

	// Payment Token
	const paymentToken = PAYMENT_TOKENS[chainId];

	// Query
	const { isLoading, data: balance } = useQuery(
		`user-balance-token-${account}-${domainName.toLowerCase()}-${paymentToken}`,
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
			enabled: Boolean(domainName.trim()),
		},
	);

	return {
		isLoading,
		balance,
	};
};
