import type { FC } from 'react';
import type { BuyDomainModalProps } from '../BuyDomainModal';

import { DefaultDomainMedia } from './DefaultDomainMedia';
import { DomainSearch } from '../../DomainSearch';
import { useUserBalanceForPaymentTokenByDomain } from '../../../hooks';
import styles from '../BuyDomainModal.module.scss';

type DiscoverProps = Pick<BuyDomainModalProps, 'user' | 'chainId'> & {
	onNextStep: () => void;
};

export const Discover: FC<DiscoverProps> = ({ user, chainId, onNextStep }) => {
	const { isLoading, balance } = useUserBalanceForPaymentTokenByDomain(
		user.account,
		chainId,
	);

	return (
		<div className={styles.WizardContent}>
			<DefaultDomainMedia />
			<DomainSearch
				type="alternative"
				onBuyButtonClick={onNextStep}
				isLoadingBalance={isLoading}
				balance={balance}
			/>
		</div>
	);
};
