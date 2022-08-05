import type { FC } from 'react';
import type { BuyDomainModalProps } from '../BuyDomainModal';
declare type ApproveProps = Pick<BuyDomainModalProps, 'user' | 'provider'> & {
	onPrevStep: () => void;
	onNextStep: () => void;
};
export declare const Approve: FC<ApproveProps>;
export {};
