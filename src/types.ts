import { ethers } from 'ethers';

export interface AppProps {
	provider: any;
	route: string;
	web3: {
		chainId: number;
		address: string;
	};
	user: {
		account: string;
	};
}
