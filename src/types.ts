import { providers } from 'ethers';

export interface AppProps {
	provider?: providers.Web3Provider;
	chainId?: number;
	route: string;
	web3: {
		chainId?: number;
		address: string | null | undefined;
	};
}

export interface LegacyAppProps extends AppProps {
	isLegacyApp?: boolean;
}
