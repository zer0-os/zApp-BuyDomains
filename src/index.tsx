import { QueryClient, QueryClientProvider } from 'react-query';
import ZUIProvider from '@zero-tech/zui/ZUIProvider';
import { ChainGate } from './lib/util/ChainGate';
import {
	ZnsSdkProvider,
	BuyDomainProvider,
	Web3Provider,
} from './lib/providers';

import { App } from './App';

import { AppProps } from './lib/types/app';

const queryClient = new QueryClient();

export const BuyDomainsZApp = ({ provider, route, web3 }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Web3Provider
				provider={provider}
				account={web3.address}
				chainId={web3.chainId}
				connectWallet={web3.connectWallet}
			>
				<ChainGate>
					<ZnsSdkProvider>
						<ZUIProvider>
							<BuyDomainProvider>
								<App provider={provider} route={route} web3={web3} />
							</BuyDomainProvider>
						</ZUIProvider>
					</ZnsSdkProvider>
				</ChainGate>
			</Web3Provider>
		</QueryClientProvider>
	);
};
