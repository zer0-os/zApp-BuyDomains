import React from 'react';
import Button from 'zero-ui/src/components/Button';
import { DefaultDomainImg } from './DefaultDomainImg';
import styles from '../BuyDomainModal.module.scss';

type ApproveProps = {
	domainName: string;
	onNextStep: () => void;
};

export const Approve: React.FC<ApproveProps> = ({ domainName, onNextStep }) => {
	return (
		<div className={styles.WizardContent}>
			<DefaultDomainImg />
			<h2>Approve</h2>
			<Button onPress={onNextStep}>Next Step</Button>
		</div>
	);
};
