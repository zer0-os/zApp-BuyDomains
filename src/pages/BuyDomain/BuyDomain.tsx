import type { FC } from 'react';
import type { AppProps } from '../../types';

import { useState } from 'react';
import { IconZero, DomainSearch, BuyDomainModal } from '../../components';
import styles from './BuyDomain.module.scss';

type BuyDomainProps = Pick<AppProps, 'user' | 'provider'> &
	Pick<AppProps['web3'], 'chainId'>;

export const BuyDomain: FC<BuyDomainProps> = ({ user, provider, chainId }) => {
	const [buyDomainModal, setBuyDomainModal] = useState<{
		isOpen;
		domainName;
	}>({
		isOpen: false,
		domainName: '',
	});

	const handleOnBuyButtonClick = (domainName) => {
		setBuyDomainModal({
			isOpen: true,
			domainName,
		});
	};

	const handleOnModalClose = () => {
		setBuyDomainModal({
			...buyDomainModal,
			isOpen: false,
		});
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
						<DomainSearch onBuyButtonClick={handleOnBuyButtonClick} />
					</div>
				</div>
			</div>

			{buyDomainModal.isOpen && (
				<BuyDomainModal
					user={user}
					provider={provider}
					chainId={chainId}
					onClose={handleOnModalClose}
				/>
			)}
		</>
	);
};

export default BuyDomain;
