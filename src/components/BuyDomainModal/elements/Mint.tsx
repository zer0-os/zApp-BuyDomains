import React from 'react';
import Button from 'zero-ui/src/components/Button';
import { DefaultDomainImg } from './DefaultDomainImg';
import styles from '../BuyDomainModal.module.scss';

type MintProps = {
	domainName: string;
	onNextStep: () => void;
};

export const Mint: React.FC<MintProps> = ({ domainName, onNextStep }) => {
	return (
		<div className={styles.WizardContent}>
			<DefaultDomainImg />
			<h2>Mint</h2>
			<Button onPress={onNextStep}>Next Step</Button>
		</div>
	);
};
