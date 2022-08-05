import type { FC } from 'react';
import * as zns from '@zero-tech/zns-sdk';
import { providers } from 'ethers';
declare type ZnsSdkProviderProps = {
	provider?: providers.Web3Provider;
	chainId?: number;
};
export declare const ZnsSdkContext: import('react').Context<zns.Instance>;
export declare const ZnsSdkProvider: FC<ZnsSdkProviderProps>;
export {};
