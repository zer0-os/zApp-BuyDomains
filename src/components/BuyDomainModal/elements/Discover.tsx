import React from 'react';
import { DefaultDomainImg } from './DefaultDomainImg';
import { DomainSearch } from '../../DomainSearch';
import styles from '../BuyDomainModal.module.scss';

type DiscoverProps = {
	domainName: string;
	onNextStep: () => void;
};

export const Discover: React.FC<DiscoverProps> = ({
	domainName,
	onNextStep,
}) => {
	const handleOnNextStep = () => {
		console.log('Next Step => Approve');

		onNextStep();
	};

	return (
		<div className={styles.WizardContent}>
			<DefaultDomainImg />
			<DomainSearch
				type="alternative"
				initialDomainName={domainName}
				onBuyButtonClick={handleOnNextStep}
			/>
		</div>
	);
};
