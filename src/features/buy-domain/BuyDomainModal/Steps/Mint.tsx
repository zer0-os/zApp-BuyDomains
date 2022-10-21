import type { FC } from 'react';

import { useState, useEffect, useCallback } from 'react';

import { useBuyDomain, useWeb3, useZnsSdk } from '../../../../lib/hooks';
import { DEFAULT_NETWORK_PROTOCAL } from '../../../../lib/constants/network';

import { Wizard } from '@zero-tech/zui/components';
import { InfoTooltip } from '@zero-tech/zui/components/InfoTooltip';
import { DomainSearch } from '../../DomainSearch';
import { DefaultDomainMedia } from '../../../ui';

import styles from '../BuyDomainModal.module.scss';

enum MintStep {
	MintConfirm,
	MintConfirmDenied,
	Minting,
}

type MintProps = {
	onNextStep: () => void;
};

export const Mint: FC<MintProps> = ({ onNextStep }) => {
	const { provider } = useWeb3();
	const sdk = useZnsSdk();
	const { selectedDomain } = useBuyDomain();

	const [step, setStep] = useState<MintStep>(MintStep.MintConfirm);
	const [error, setError] = useState<string>();

	const mintDomain = useCallback(async () => {
		setStep(MintStep.MintConfirm);
		setError(undefined);

		try {
			const tx = await sdk.minting.mintNetworkDomain(
				selectedDomain,
				provider.getSigner(),
			);

			try {
				setStep(MintStep.Minting);
				await tx.wait();
				onNextStep();
			} catch (e: any) {
				setError(e.message);
				setStep(MintStep.MintConfirmDenied);
			}
		} catch (e: any) {
			// TODO:: SDK does not return 4001 code for transaction reject
			setError(
				e.message === 'User rejected transaction.'
					? 'Transaction denied by wallet. Please try again...'
					: e.message,
			);
			setStep(MintStep.MintConfirmDenied);
		}
	}, [provider, sdk, setStep, onNextStep]);

	useEffect(() => {
		mintDomain();
	}, []);

	return (
		<div className={styles.WizardContent}>
			<DefaultDomainMedia />

			{step !== MintStep.Minting && <DomainSearch type="nobutton" />}

			<div className={styles.WizardContentSection}>
				{step === MintStep.MintConfirm && (
					<div className={styles.Loading}>
						<Wizard.Loading message="Please confirm transaction in your wallet..." />
					</div>
				)}

				{step === MintStep.MintConfirmDenied && (
					<Wizard.Confirmation
						className={styles.Confirmation}
						error={error}
						message={null}
						primaryButtonText="Buy"
						isPrimaryButtonActive
						onClickPrimaryButton={mintDomain}
					/>
				)}

				{step === MintStep.Minting && (
					<>
						<div className={styles.DomainName}>
							<span>{DEFAULT_NETWORK_PROTOCAL}</span>
							{selectedDomain}
						</div>
						<div className={styles.Loading}>
							<Wizard.Loading
								message={
									<>
										Minting your domain on the blockchain... {'  '}
										<InfoTooltip content="This may take up to 20 mintutes depending on the state of the Ethereum blockchain. Please wait..." />
									</>
								}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
