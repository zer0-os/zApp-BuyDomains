import type { FC } from 'react';

import { DefaultDomainImg } from './DefaultDomainImg';
import { DomainSearch } from '../../DomainSearch';
import styles from '../BuyDomainModal.module.scss';

type DiscoverProps = {
	onNextStep: () => void;
};

export const Discover: FC<DiscoverProps> = ({ onNextStep }) => {
	return (
		<div className={styles.WizardContent}>
			<DefaultDomainImg />
			<DomainSearch type="alternative" onBuyButtonClick={onNextStep} />
		</div>
	);
};
