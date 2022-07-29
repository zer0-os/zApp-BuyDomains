import type { FC } from 'react';
import type { BuyDomainModalProps } from '../BuyDomainModal';

import { useState, useEffect, useCallback } from 'react';
import Wizard from 'zero-ui/src/components/Wizard';
import { DefaultDomainImg } from './DefaultDomainImg';
import { DomainSearch } from '../../DomainSearch';
import { useZnsSdk } from '../../../hooks/useZnsSdk';
import { useBuyDomain } from '../../../hooks';
import { DEFAULT_NETWORK_PROTOCAL } from '../../../constants/network';
import styles from '../BuyDomainModal.module.scss';

enum MintStep {
	MintConfirm = 'MintConfirm',
	MintConfirmDenied = 'MintConfirmDenied',
	Minting = 'Minting',
}

type MintProps = Pick<BuyDomainModalProps, 'provider'> & {
	onNextStep: () => void;
};

export const Mint: FC<MintProps> = ({ provider, onNextStep }) => {
	const sdk = useZnsSdk();
	const { domainName } = useBuyDomain();

	const [step, setStep] = useState<MintStep>(MintStep.MintConfirm);
	const [error, setErrror] = useState<string>();

	const mintDomain = useCallback(async () => {
		setStep(MintStep.MintConfirm);
		setErrror(undefined);

		try {
			const tx = await sdk.minting.mintNetworkDomain(
				domainName,
				provider.getSigner(),
			);

			try {
				setStep(MintStep.Minting);
				await tx.wait();
				onNextStep();
			} catch (e: any) {
				setErrror(e.message);
				setStep(MintStep.MintConfirmDenied);
			}
		} catch (e: any) {
			// TODO:: SDK does not return 4001 code for transaction reject
			setErrror(
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
			<DefaultDomainImg />

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

				{/* TODO:: Add Tooltip in zUI and implement it according design */}
				{step === MintStep.Minting && (
					<>
						<div className={styles.DomainName}>
							<span>{DEFAULT_NETWORK_PROTOCAL}</span>
							{domainName}
						</div>
						<div className={styles.Loading}>
							<Wizard.Loading message="Minting your domain on the blockchain..." />
						</div>
					</>
				)}
			</div>
		</div>
	);
};
