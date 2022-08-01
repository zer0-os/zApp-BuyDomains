import type { FC } from 'react';
import type { BuyDomainModalProps } from '../BuyDomainModal';

import { useState, useEffect, useCallback } from 'react';
import Wizard from 'zero-ui/src/components/Wizard';
import { DefaultDomainMedia } from './DefaultDomainMedia';
import { useZnsSdk } from '../../../hooks/useZnsSdk';
import styles from '../BuyDomainModal.module.scss';

enum ApproveStep {
	Checking = 'Checking',
	UnApproved = 'UnApproved',
	ApproveConfirm = 'ApproveConfirm',
	Approving = 'Approving',
}

type ApproveProps = Pick<BuyDomainModalProps, 'user' | 'provider'> & {
	onPrevStep: () => void;
	onNextStep: () => void;
};

export const Approve: FC<ApproveProps> = ({
	user,
	provider,
	onPrevStep,
	onNextStep,
}) => {
	const sdk = useZnsSdk();

	const [step, setStep] = useState<ApproveStep>(ApproveStep.Checking);
	const [error, setErrror] = useState<string>();

	const checkSpendTokens = useCallback(async () => {
		setStep(ApproveStep.Checking);

		// Set delay to show checking
		// because SDK promise took too short
		await new Promise((res) => setTimeout(res, 1000));

		try {
			const isApproved = await sdk.minting.isMinterApprovedToSpendTokens(
				user.account,
			);

			if (isApproved) {
				onNextStep();
			} else {
				setStep(ApproveStep.UnApproved);
			}
		} catch (e: any) {
			setErrror(e.message);
			setStep(ApproveStep.UnApproved);
		}
	}, [user, sdk, setStep, onNextStep]);

	const approveSpendTokens = useCallback(async () => {
		setStep(ApproveStep.ApproveConfirm);
		setErrror(undefined);

		try {
			const tx = await sdk.minting.approveMinterToSpendTokens(
				provider.getSigner(),
			);

			try {
				setStep(ApproveStep.Approving);
				await tx.wait();
				onNextStep();
			} catch (e: any) {
				setErrror(e.message);
				setStep(ApproveStep.UnApproved);
			}
		} catch (e: any) {
			setErrror(e.code === 4001 ? 'Approval rejected by wallet.' : e.message);
			setStep(ApproveStep.UnApproved);
		}
	}, [provider, sdk, setStep, onNextStep]);

	useEffect(() => {
		checkSpendTokens();
	}, []);

	return (
		<div className={styles.WizardContent}>
			{step === ApproveStep.Checking && <DefaultDomainMedia />}

			<div className={styles.WizardContentSection}>
				{step === ApproveStep.Checking && (
					<Wizard.Loading message="Checking status of ZERO Spending approval..." />
				)}

				{step === ApproveStep.UnApproved && (
					<Wizard.Confirmation
						className={styles.Confirmation}
						error={error}
						message="Before you mint this domain, you must approve ZERO spending in your wallet. This costs gas, you will only need to it once."
						primaryButtonText="Approve"
						isPrimaryButtonActive
						isSecondaryButtonActive
						onClickPrimaryButton={approveSpendTokens}
						onClickSecondaryButton={onPrevStep}
					/>
				)}

				{step === ApproveStep.ApproveConfirm && (
					<div className={styles.Loading}>
						<Wizard.Loading
							message="Before you mint this domain, you must approve ZERO spending in your wallet. This costs gas, you will only need to it once."
							subtext="Please approve in your wallet..."
						/>
					</div>
				)}

				{/* TODO:: Add Tooltip in zUI and implement it according design */}
				{step === ApproveStep.Approving && (
					<div className={styles.Loading}>
						<Wizard.Loading message="Approving ZERO spending, please wait..." />
					</div>
				)}
			</div>
		</div>
	);
};
