import type { FC } from 'react';

import { createContext, useMemo } from 'react';
import * as zns from '@zero-tech/zns-sdk';
import { DEFAULT_NETWORK, NETWORK_TYPES } from '../constants/network';
import { useWeb3 } from '../hooks';
import { chainIdToNetworkType } from '../helpers/network';

export const ZnsSdkContext = createContext({} as zns.Instance);

export const ZnsSdkProvider: FC = ({ children }) => {
	const { provider, chainId } = useWeb3();

	const sdk = useMemo(() => {
		/**
		 * Use connected wallet's provider if it exists, otherwise create
		 * a provider using the Infura URL for the selected chain
		 */
		const network = chainIdToNetworkType(chainId ?? DEFAULT_NETWORK);

		/**
		 * Configure the SDK using provider based on selected network
		 */
		switch (network) {
			case NETWORK_TYPES.MAINNET: {
				return zns.createInstance(
					zns.configuration.mainnetConfiguration(provider),
				);
			}

			case NETWORK_TYPES.RINKEBY: {
				return zns.createInstance(
					zns.configuration.rinkebyConfiguration(provider),
				);
			}

			default: {
				throw new Error('SDK isn´t available for this chainId');
			}
		}
	}, [provider, chainId]);

	return (
		<ZnsSdkContext.Provider value={sdk}>{children}</ZnsSdkContext.Provider>
	);
};
