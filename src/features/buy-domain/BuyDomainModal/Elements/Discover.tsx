import type { FC } from 'react';

import {
	useUserBalanceForPaymentTokenByDomain,
	useWeb3,
} from '../../../../lib/hooks';

import { DefaultDomainMedia } from '.';
import { DomainSearch } from '../../../domain-search/DomainSearch';

import styles from '../BuyDomainModal.module.scss';

type DiscoverProps = {
	onConfirm: () => void;
};

export const Discover: FC<DiscoverProps> = ({ onConfirm }) => {
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
				onBuyButtonClick={onConfirm}
				isLoadingBalance={isLoading}
				balance={balance}
			/>
		</div>
	);
};
