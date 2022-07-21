import React from 'react';
import classNames from 'classnames/bind';
import Input from 'zero-ui/src/components/Input';
import Button from 'zero-ui/src/components/Button';
import { DEFAULT_NETWORK_PROTOCAL } from '../../constants/network';
import { useDomainAvailability } from '../../hooks/useDomainAvailability';
import styles from './DomainSearch.module.scss';

const cx = classNames.bind(styles);

type DomainSearchTypes = 'default' | 'alternative';

type DomainSearchProps = {
	initialDomainName?: string;
	type?: DomainSearchTypes;
	onBuyButtonClick: (domainName: string) => void;
};

export const DomainSearch: React.FC<DomainSearchProps> = ({
	initialDomainName = '',
	type = 'default',
	onBuyButtonClick,
}) => {
	const {
		domainName,
		setDomainName,
		isLoading,
		isDomainAvailable,
		isDomainSearchEnabled,
	} = useDomainAvailability(initialDomainName);

	const handleOnChange = (value: string) => {
		let correctValue = value;
		if (DEFAULT_NETWORK_PROTOCAL.startsWith(value)) {
			correctValue = '';
		}
		correctValue = correctValue
			.replace(DEFAULT_NETWORK_PROTOCAL, '')
			.replace(/[^a-zA-Z0-9]/g, '')
			.replace(/\s+/g, '');

		setDomainName(correctValue);
	};

	const handleOnBuyButtonClick = () => {
		onBuyButtonClick(domainName);
	};

	const buyDomainButton = () => (
		<div
			className={cx(styles.BuyButton, {
				Alternative: type === 'alternative',
			})}
		>
			<Button
				isLoading={isLoading}
				isDisabled={!isDomainSearchEnabled || !isDomainAvailable}
				onPress={handleOnBuyButtonClick}
			>
				Buy
			</Button>
		</div>
	);

	return (
		<div className={styles.Container}>
			<div className={styles.Section}>
				<Input
					className={styles.Input}
					label=""
					placeholder="Search for your domain..."
					value={DEFAULT_NETWORK_PROTOCAL + domainName}
					onChange={handleOnChange}
				/>
				{type === 'default' && buyDomainButton()}
			</div>

			{isDomainSearchEnabled && (
				<div
					className={cx(styles.Section, styles.DescriptionSection, {
						Invalid: !isDomainAvailable,
						Valid: isDomainAvailable,
					})}
				>
					{isDomainAvailable
						? 'Domain available for 10,000 ZERO. No renewall fee, ever.'
						: 'Someone already explored that part of the universe, try again...'}
				</div>
			)}

			{type === 'alternative' && buyDomainButton()}
		</div>
	);
};

export default DomainSearch;
