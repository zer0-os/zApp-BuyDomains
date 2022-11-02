import type { FC } from 'react';
import { useState } from 'react';

import { useWeb3 } from '../../lib/hooks';

import { ConnectWallet, IconZero } from '../../features/ui';
import { DomainSearch, BuyDomainModal } from '../../features/buy-domain';

import styles from './BuyDomain.module.scss';

export const BuyDomain: FC = () => {
	const { account } = useWeb3();

	const [domainToPurchase, setDomainToPurchase] = useState<
		string | undefined
	>();

	const onBuyButtonClick = (domainToPurchase: string) => {
		setDomainToPurchase(domainToPurchase);
	};

	const onModalClose = () => {
		setDomainToPurchase(undefined);
	};

	if (!account) {
		return (
			<div className={styles.Container}>
				<div className={styles.Wrapper}>
					<ConnectWallet
						message={'Connect a Web3 wallet to see your Buy Domains data.'}
					/>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className={styles.Container}>
				<div className={styles.Wrapper}>
					<div className={styles.Header}>
						<IconZero />
						<h1>Buy Your Domain</h1>
					</div>

					<div className={styles.Content}>
						<DomainSearch onBuyButtonClick={onBuyButtonClick} />
					</div>
				</div>
			</div>

			<BuyDomainModal
				open={domainToPurchase !== undefined}
				onClose={onModalClose}
			/>
		</>
	);
};
