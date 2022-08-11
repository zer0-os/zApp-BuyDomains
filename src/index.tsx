import { QueryClient, QueryClientProvider } from 'react-query';
import ZUIProvider from 'zero-ui/src/ZUIProvider';
import ChainGate from './util/ChainGate';
import { ZnsSdkProvider } from './providers/ZnsSdkProvider';
import { BuyDomainProvider } from './providers/BuyDomainProvider';
import { AppProps } from './types';
import { BuyDomain } from './pages';

const queryClient = new QueryClient();

const App = ({ provider, web3, route, user }: AppProps) => {
	return (
		<ChainGate chainId={web3.chainId}>
			<ZnsSdkProvider chainId={web3.chainId} provider={provider}>
				<QueryClientProvider client={queryClient}>
					<ZUIProvider>
						<BuyDomainProvider>
							<BuyDomain user={user} provider={provider} />
						</BuyDomainProvider>
					</ZUIProvider>
				</QueryClientProvider>
			</ZnsSdkProvider>
		</ChainGate>
	);
};

export default App;
