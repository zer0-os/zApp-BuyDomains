import type { FC } from 'react';
import type { AppProps } from '../../types';

import { useState } from 'react';
import Wizard from 'zero-ui/src/components/Wizard';
import Modal from 'zero-ui/src/components/Modal';
import { StepBar } from 'zero-ui/src/components/StepBar';
import { BuyDomainStep, BUY_DOMAIN_STEPS } from '../../constants/domains';
import { Discover, Approve, Mint, Success } from './elements';
import styles from './BuyDomainModal.module.scss';

export type BuyDomainModalProps = Pick<AppProps, 'user' | 'provider'> & {
	onClose: () => void;
};

export const BuyDomainModal: FC<BuyDomainModalProps> = ({
	user,
	provider,
	onClose,
}) => {
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
						user={user}
						provider={provider}
						onPrevStep={() => setStep(BuyDomainStep.Discover)}
						onNextStep={() => setStep(BuyDomainStep.Mint)}
					/>
				)}

				{step === BuyDomainStep.Mint && (
					<Mint
						provider={provider}
						onNextStep={() => setStep(BuyDomainStep.Success)}
					/>
				)}

				{step === BuyDomainStep.Success && <Success />}
			</Wizard.Container>
		</Modal>
	);
};

export default BuyDomainModal;
