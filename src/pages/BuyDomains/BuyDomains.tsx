import { FC, useState } from 'react';
import { AppProps } from '../../types';
import { IconZero, DomainSearch, BuyDomainModal } from '../../components';
import styles from './BuyDomains.module.scss';

export const BuyDomains: FC<AppProps> = ({ provider, route }) => {
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

	const handleOnWizardClose = () => {
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
					domainName={buyDomainModal.domainName}
					onClose={handleOnWizardClose}
				/>
			)}
		</>
	);
};

export default BuyDomains;
