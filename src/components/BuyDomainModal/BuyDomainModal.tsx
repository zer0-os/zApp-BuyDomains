import type { FC } from 'react';

import { useState } from 'react';
import { Wizard, Modal } from '@zero-tech/zui/components';
import { StepBar } from '@zero-tech/zui/components/StepBar';
import { BuyDomainStep, BUY_DOMAIN_STEPS } from '../../constants/domains';
import { Discover, Approve, Mint, Success } from './elements';
import styles from './BuyDomainModal.module.scss';

type BuyDomainModalProps = {
	onClose: () => void;
};

export const BuyDomainModal: FC<BuyDomainModalProps> = ({ onClose }) => {
	const [step, setStep] = useState<BuyDomainStep>(BuyDomainStep.Discover);

	const header =
		step === BuyDomainStep.Approve
			? 'Approve ZERO Spending'
			: 'Buy Your Domain';

	return (
		<Modal open onOpenChange={onClose} className={styles.Modal}>
			<Wizard.Container
				header={header}
				subHeader="Secure your space on the Ethereum blockchain"
				className={styles.WizardContainer}
				sectionDivider={false}
			>
				<StepBar
					currentStepId={step}
					steps={BUY_DOMAIN_STEPS}
					onChangeStep={(s) => setStep(s.id as BuyDomainStep)}
					className={styles.StepBar}
				/>

				{step === BuyDomainStep.Discover && (
					<Discover onNextStep={() => setStep(BuyDomainStep.Approve)} />
				)}

				{step === BuyDomainStep.Approve && (
					<Approve
						onPrevStep={() => setStep(BuyDomainStep.Discover)}
						onNextStep={() => setStep(BuyDomainStep.Mint)}
					/>
				)}

				{step === BuyDomainStep.Mint && (
					<Mint onNextStep={() => setStep(BuyDomainStep.Success)} />
				)}

				{step === BuyDomainStep.Success && <Success />}
			</Wizard.Container>
		</Modal>
	);
};
