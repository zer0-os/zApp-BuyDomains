import type { FC } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useBuyDomain } from '../../../../lib/hooks';
import { DOMAIN_TWEET_OPTION } from '../../../../lib/constants/domains';
import { DEFAULT_NETWORK_PROTOCAL } from '../../../../lib/constants/network';

import { DefaultDomainMedia } from '.';
import { Button } from '@zero-tech/zui/components';

import styles from '../BuyDomainModal.module.scss';

export const Success: FC = () => {
	const history = useHistory();

	const { selectedDomain, selectDomain } = useBuyDomain();

	useEffect(() => {
		return () => {
			// reset domain
			selectDomain('');
		};
	}, []);

	const handleOnTweet = () => {
		// TODO: Should handle sharing on Twitter with zOS
		const shareURL = location.origin + '/' + selectedDomain;

		window.open(
			DOMAIN_TWEET_OPTION.URL.replace(/DOMAIN_URL/g, shareURL),
			'',
			DOMAIN_TWEET_OPTION.OPTIONS,
		);
	};

	const handleOnViewDomain = () => {
		// TODO: Should handle redirecting to domain with zOS
		const pathname = '/' + selectedDomain;
		history.push(pathname);
	};

	return (
		<div className={styles.WizardContent}>
			<DefaultDomainMedia />

			<div className={styles.WizardContentSection}>
				<div className={styles.DomainName}>
					<span>{DEFAULT_NETWORK_PROTOCAL}</span>
					{selectedDomain}
				</div>
				<div className={styles.MintSuccess}>
					<p>Domain successfully minted!</p>
					<div className={styles.Buttons}>
						<Button variant="secondary" onPress={handleOnTweet}>
							Tweet
						</Button>
						<Button variant="primary" onPress={handleOnViewDomain}>
							View Domain
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
