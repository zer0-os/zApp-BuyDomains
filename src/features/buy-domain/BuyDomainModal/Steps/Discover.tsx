import type { FC } from 'react';

import {
	useUserBalanceForPaymentTokenByDomain,
	useWeb3,
} from '../../../../lib/hooks';

import { DomainSearch } from '../../DomainSearch';
import { DefaultDomainMedia } from '../../../ui';

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
