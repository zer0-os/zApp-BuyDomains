import type { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';

import { DefaultDomainMedia } from '.';
import { QuestionButton } from '../../../ui/QuestionButton';
import { Wizard, Tooltip } from '@zero-tech/zui/components';

import { useZnsSdk, useWeb3 } from '../../../../lib/hooks';

import styles from '../BuyDomainModal.module.scss';

enum ApproveStep {
	Checking = 'Checking',
	UnApproved = 'UnApproved',
	ApproveConfirm = 'ApproveConfirm',
	Approving = 'Approving',
}

type ApproveProps = {
	onPrevStep: () => void;
	onNextStep: () => void;
};

export const Approve: FC<ApproveProps> = ({ onPrevStep, onNextStep }) => {
	const { account, provider } = useWeb3();
	const sdk = useZnsSdk();

	const [step, setStep] = useState<ApproveStep>(ApproveStep.Checking);
	const [error, setError] = useState<string>();

	const checkSpendTokens = useCallback(async () => {
		setStep(ApproveStep.Checking);

		// Set delay to show checking
		// because SDK promise took too short
		await new Promise((res) => setTimeout(res, 1000));

		try {
			const isApproved = await sdk.minting.isMinterApprovedToSpendTokens(
				account,
			);

			if (isApproved) {
				onNextStep();
			} else {
				setStep(ApproveStep.UnApproved);
			}
		} catch (e: any) {
			setError(e.message);
			setStep(ApproveStep.UnApproved);
		}
	}, [account, sdk, setStep, onNextStep]);

	const approveSpendTokens = useCallback(async () => {
		setStep(ApproveStep.ApproveConfirm);
		setError(undefined);

		try {
			const tx = await sdk.minting.approveMinterToSpendTokens(
				provider.getSigner(),
			);

			try {
				setStep(ApproveStep.Approving);
				await tx.wait();
				onNextStep();
			} catch (e: any) {
				setError(e.message);
				setStep(ApproveStep.UnApproved);
			}
		} catch (e: any) {
			setError(e.code === 4001 ? 'Approval rejected by wallet.' : e.message);
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
							message={
								<>
									<p>
										Before you mint this domain, you must approve ZERO spending
										in your wallet. This costs gas, you will only need to it
										once.
									</p>
									<p>Please approve in your wallet...</p>
								</>
							}
						/>
					</div>
				)}

				{step === ApproveStep.Approving && (
					<div className={styles.Loading}>
						<Wizard.Loading
							message={
								<>
									Approving ZERO spending, please wait...{'  '}
									<Tooltip content="This may take up to 20 minutes depending on the state of the Ethereum network.">
										<QuestionButton />
									</Tooltip>
								</>
							}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
