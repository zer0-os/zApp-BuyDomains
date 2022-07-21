import React from 'react';
import { DefaultDomainImg } from './DefaultDomainImg';
import styles from '../BuyDomainModal.module.scss';

type SuccessProps = {
	domainName: string;
};

export const Success: React.FC<SuccessProps> = ({ domainName }) => {
	return (
		<div className={styles.WizardContent}>
			<DefaultDomainImg />
			<h2>Success</h2>
		</div>
	);
};
