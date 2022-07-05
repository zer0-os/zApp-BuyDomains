import React, { useEffect, useMemo } from 'react';
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

export const ZnsSdkContext = React.createContext({
	sdk: {} as zns.Instance,
});

export const ZnsSdkProvider: React.FC<ZnsSdkProviderProps> = ({
	provider = DEFAULT_PROVIDER,
	chainId,
	children,
}) => {
	const instance = useMemo(() => {
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

	useEffect(() => {
		const keys = Object.keys(instance).filter((k) => k.includes('get'));
		const s: any = {};
		keys.forEach((key) => {
			s[key] = (instance as any)[key];
		});
		(global as any).sdk = s;
	}, [instance]);

	const contextValue = {
		sdk: instance,
	};

	return (
		<ZnsSdkContext.Provider value={contextValue}>
			{children}
		</ZnsSdkContext.Provider>
	);
};
