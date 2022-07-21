import { QueryClient, QueryClientProvider } from 'react-query';
import ChainGate from './util/ChainGate';
import { ZnsSdkProvider } from './providers/ZnsSdkProvider';
import { AppProps } from './types';
import { BuyDomains } from './pages';

const queryClient = new QueryClient();

const App = ({ provider, web3, route, user }: AppProps) => {
	return (
		<ChainGate chainId={web3.chainId}>
			<ZnsSdkProvider chainId={web3.chainId} provider={provider}>
				<QueryClientProvider client={queryClient}>
					<BuyDomains
						provider={provider}
						web3={web3}
						route={route}
						user={user}
					/>
				</QueryClientProvider>
			</ZnsSdkProvider>
		</ChainGate>
	);
};

export default App;
