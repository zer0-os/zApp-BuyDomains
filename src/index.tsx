import { QueryClient, QueryClientProvider } from 'react-query';
import LegacyAdapter from './util/legacy-adapter';
import ChainGate from './util/ChainGate';
import { ZnsSdkProvider } from './providers/ZnsSdkProvider';
import { LegacyAppProps } from './types';
import { BuyDomains } from './pages';
import { DEFAULT_NETWORK } from './constants/network';

const queryClient = new QueryClient();

const App = ({ isLegacyApp, provider, web3, route }: LegacyAppProps) => {
	// @TODO: do the below in a more dynamic way

	/**
	 * Wrap the app in the legacy adapter if we're
	 * deploying to the legacy container (zNS-dapp)
	 */
	if (isLegacyApp) {
		return (
			<LegacyAdapter>
				<ChainGate chainId={web3.chainId ?? DEFAULT_NETWORK}>
					<ZnsSdkProvider chainId={web3.chainId} provider={provider}>
						<QueryClientProvider client={queryClient}>
							<BuyDomains provider={provider} web3={web3} route={route} />
						</QueryClientProvider>
					</ZnsSdkProvider>
				</ChainGate>
			</LegacyAdapter>
		);
	}

	return (
		<ChainGate chainId={web3.chainId ?? DEFAULT_NETWORK}>
			<ZnsSdkProvider chainId={web3.chainId} provider={provider}>
				<QueryClientProvider client={queryClient}>
					<BuyDomains provider={provider} web3={web3} route={route} />
				</QueryClientProvider>
			</ZnsSdkProvider>
		</ChainGate>
	);
};

export default App;
