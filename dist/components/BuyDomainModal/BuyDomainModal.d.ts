import type { FC } from 'react';
import type { AppProps } from '../../types';
export declare type BuyDomainModalProps = Pick<
	AppProps,
	'user' | 'provider'
> & {
	onClose: () => void;
};
export declare const BuyDomainModal: FC<BuyDomainModalProps>;
export default BuyDomainModal;
