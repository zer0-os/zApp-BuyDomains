import type { FC } from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from '@zero-tech/zui/components';
import { DefaultDomainMedia } from './DefaultDomainMedia';
import { useBuyDomain } from '../../../hooks';
import { DOMAIN_TWEET_OPTION } from '../../../constants/domains';
import { DEFAULT_NETWORK_PROTOCAL } from '../../../constants/network';
import styles from '../BuyDomainModal.module.scss';

export const Success: FC = () => {
	const history = useHistory();

	const { domainName } = useBuyDomain();

	const handleOnTweet = () => {
		// TODO: Should handle sharing on Twitter with zOS
		const shareURL = location.origin + '/' + domainName;

		window.open(
			DOMAIN_TWEET_OPTION.URL.replace(/DOMAIN_URL/g, shareURL),
			'',
			DOMAIN_TWEET_OPTION.OPTIONS,
		);
	};

	const handleOnViewDomain = () => {
		// TODO: Should handle redirecting to domain with zOS
		const pathname = '/' + domainName;
		history.push(pathname);
	};

	return (
		<div className={styles.WizardContent}>
			<DefaultDomainMedia />

			<div className={styles.WizardContentSection}>
				<div className={styles.DomainName}>
					<span>{DEFAULT_NETWORK_PROTOCAL}</span>
					{domainName}
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
