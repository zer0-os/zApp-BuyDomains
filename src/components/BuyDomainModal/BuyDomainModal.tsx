import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Wizard from 'zero-ui/src/components/Wizard';
import Modal from 'zero-ui/src/components/Modal';
import { StepBar } from 'zero-ui/src/components/ProgressIndicators';
import {
	BuyDomainSteps,
	BUY_DOMAIN_STEP_TITLES,
} from '../../constants/domains';
import { Discover, Approve, Mint, Success } from './elements';
import styles from './BuyDomainModal.module.scss';

const cx = classNames.bind(styles);

type BuyDomainModalProps = {
	domainName: string;
	onClose: () => void;
};

export const BuyDomainModal: React.FC<BuyDomainModalProps> = ({
	domainName,
	onClose,
}) => {
	const [step, setStep] = useState<BuyDomainSteps>(BuyDomainSteps.Discover);

	console.log(
		Object.values(BuyDomainSteps),
		Object.values(BuyDomainSteps).indexOf(step) + 1,
	);
	return (
		<Modal open onOpenChange={onClose} className={styles.Modal}>
			<Wizard.Container
				header="Buy Your Domain"
				subHeader="Secure your space on the Ethereum blockchain"
				className={styles.WizardContainer}
				sectionDivider={false}
			>
				<StepBar
					step={Object.values(BuyDomainSteps).indexOf(step) + 1}
					steps={Object.values(BuyDomainSteps)}
					stepFormatter="CURRENT_STEP_INDEX/TOTAL_STEP_COUNT CURRENT_STEP_NAME"
					onNavigate={(i: number) =>
						setStep(Object.values(BuyDomainSteps)[i - 1])
					}
					className={styles.StepBar}
				/>

				{step === BuyDomainSteps.Discover && (
					<Discover
						domainName={domainName}
						onNextStep={() => setStep(BuyDomainSteps.Approve)}
					/>
				)}

				{step === BuyDomainSteps.Approve && (
					<Approve
						domainName={domainName}
						onNextStep={() => setStep(BuyDomainSteps.Mint)}
					/>
				)}

				{step === BuyDomainSteps.Mint && (
					<Mint
						domainName={domainName}
						onNextStep={() => setStep(BuyDomainSteps.Success)}
					/>
				)}

				{step === BuyDomainSteps.Success && <Success domainName={domainName} />}
			</Wizard.Container>
		</Modal>
	);
};

export default BuyDomainModal;
