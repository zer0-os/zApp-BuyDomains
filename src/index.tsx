import { QueryClient, QueryClientProvider } from 'react-query';
import ZUIProvider from '@zero-tech/zui/ZUIProvider';
import { ChainGate } from './util/ChainGate';
import { ZnsSdkProvider, BuyDomainProvider, Web3Provider } from './providers';
import { AppProps } from './types';
import { BuyDomain } from './pages';

const queryClient = new QueryClient();

export const App = ({ provider, web3 }: AppProps) => {
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
								<BuyDomain />
							</BuyDomainProvider>
						</ZUIProvider>
					</ZnsSdkProvider>
				</ChainGate>
			</Web3Provider>
		</QueryClientProvider>
	);
};
