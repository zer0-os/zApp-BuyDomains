import { FC, useMemo } from 'react';
import classNames from 'classnames/bind';
import TextInput from 'zero-ui/src/components/Input/TextInput';
import Button from 'zero-ui/src/components/Button';
import { AppProps } from '../../types';
import { IconZero } from '../../components';
import { DEFAULT_NETWORK_PROTOCAL } from '../../constants/network';
import { MIN_DOMAIN_NAME_LENGTH } from '../../constants/domains';
import { useDomainSearch } from '../../hooks/useDomainSearch';
import styles from './BuyDomains.module.scss';

const cx = classNames.bind(styles);

export const BuyDomains: FC<AppProps> = ({ provider, route }) => {
	const domainSearch = useDomainSearch();

	const handleOnChange = (value: string) => {
		let correctValue = value;
		if (DEFAULT_NETWORK_PROTOCAL.startsWith(value)) {
			correctValue = '';
		}
		correctValue = correctValue
			.replace(DEFAULT_NETWORK_PROTOCAL, '')
			.replace(/[^a-zA-Z0-9]/g, '')
			.replace(/\s+/g, '');
		domainSearch.setPattern(correctValue);
	};

	const status = useMemo(() => {
		const isReady =
			domainSearch.pattern.length >= MIN_DOMAIN_NAME_LENGTH &&
			!domainSearch.isLoading;
		const isValid = isReady && !domainSearch.exactMatch;
		const isInvalid = isReady && Boolean(domainSearch.exactMatch);

		return {
			isReady,
			isValid,
			isInvalid,
		};
	}, [domainSearch]);

	return (
		<div className={styles.BuyDomains__Page_Container}>
			<div className={styles.BuyDomains__Container}>
				<div className={styles.BuyDomains__Header}>
					<IconZero />
					<h1>Buy Your Domain</h1>
				</div>

				<div className={styles.BuyDomains__Content}>
					<div className={styles.BuyDomains__Content_Section}>
						<TextInput
							className={styles.BuyDomains__Content_Section_Input}
							label=""
							placeholderText="Search for your domain..."
							value={DEFAULT_NETWORK_PROTOCAL + domainSearch.pattern}
							onChange={handleOnChange}
						/>
						<Button
							isLoading={domainSearch.isLoading}
							isDisabled={!status.isReady || status.isInvalid}
						>
							Buy
						</Button>
					</div>

					<div
						className={cx(
							styles.BuyDomains__Content_Section,
							styles.Description_Section,
							{
								Invalid: status.isInvalid,
								Valid: status.isValid,
							},
						)}
					>
						{status.isInvalid &&
							'Someone already explored that part of the universe, try again...'}
						{status.isValid &&
							'Domain available for 10,000 ZERO. No renewall fee, ever.'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyDomains;
