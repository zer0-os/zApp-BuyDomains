import React from 'react';
import type { FC } from 'react';

import { useWeb3 } from '../../../lib/hooks';

import { Button } from '@zero-tech/zui/components';

import styles from './ConnectWallet.module.scss';

type ConnectWalletProps = {
	buttonText?: string;
	message: string;
};

export const ConnectWallet: FC<ConnectWalletProps> = ({
	buttonText,
	message,
}) => {
	const { connectWallet } = useWeb3();

	return (
		<div className={styles.Container}>
			<p>{message}</p>
			<Button onPress={connectWallet}>{buttonText ?? 'Connect Wallet'}</Button>
		</div>
	);
};
