import type { FC } from 'react';
import type { BuyDomainModalProps } from '../BuyDomainModal';
declare type MintProps = Pick<BuyDomainModalProps, 'provider'> & {
	onNextStep: () => void;
};
export declare const Mint: FC<MintProps>;
export {};
