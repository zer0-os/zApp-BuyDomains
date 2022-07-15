import React, { createContext, useMemo } from 'react';
import * as zns from '@zero-tech/zns-sdk';
import { providers } from 'ethers';
import {
	DEFAULT_NETWORK,
	DEFAULT_PROVIDER,
	NETWORK_TYPES,
} from '../constants/network';
import { chainIdToNetworkType } from '../helpers/network';

type ZnsSdkProviderProps = {
	provider?: providers.Web3Provider;
	chainId?: number;
	children: React.ReactNode;
};

export const ZnsSdkContext = createContext({} as zns.Instance);

export const ZnsSdkProvider: React.FC<ZnsSdkProviderProps> = ({
	provider = DEFAULT_PROVIDER,
	chainId,
	children,
}) => {
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

			case NETWORK_TYPES.KOVAN: {
				return zns.createInstance(
					zns.configuration.kovanConfiguration(provider),
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
