import type { FC } from 'react';
import { useState } from 'react';

import { IconZero } from '../../features/ui';
import { DomainSearch, BuyDomainModal } from '../../features/buy-domain';

import styles from './BuyDomain.module.scss';

export const BuyDomain: FC = () => {
	const [domainToPurchase, setDomainToPurchase] = useState<
		string | undefined
	>();

	const onBuyButtonClick = (domainToPurchase: string) => {
		setDomainToPurchase(domainToPurchase);
	};

	const onModalClose = () => {
		setDomainToPurchase(undefined);
	};

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
