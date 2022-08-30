import type { FC } from 'react';

import { DefaultDomainMedia } from './DefaultDomainMedia';
import { DomainSearch } from '../../DomainSearch';
import { useUserBalanceForPaymentTokenByDomain, useWeb3 } from '../../../hooks';
import styles from '../BuyDomainModal.module.scss';

type DiscoverProps = {
	onNextStep: () => void;
};

export const Discover: FC<DiscoverProps> = ({ onNextStep }) => {
	const { account, chainId } = useWeb3();

	const { isLoading, balance } = useUserBalanceForPaymentTokenByDomain(
		account,
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
