import type { FC } from 'react';

import classNames from 'classnames/bind';
import Input from 'zero-ui/src/components/Input';
import Button from 'zero-ui/src/components/Button';
import LoadingIndicator from 'zero-ui/src/components/LoadingIndicator';
import { DEFAULT_NETWORK_PROTOCAL } from '../../constants/network';
import { useBuyDomain, useDomainAvailability } from '../../hooks';
import styles from './DomainSearch.module.scss';

const cx = classNames.bind(styles);

type DomainSearchTypes = 'default' | 'alternative' | 'nobutton';

type DomainSearchProps = {
	type?: DomainSearchTypes;
	onBuyButtonClick?: (domainName: string) => void;
};

export const DomainSearch: FC<DomainSearchProps> = ({
	type = 'default',
	onBuyButtonClick,
}) => {
	const { domainName, setDomainName } = useBuyDomain();
	const { isLoading, isDomainSearchEnabled, isDomainAvailable, domainPrice } =
		useDomainAvailability();

	const handleOnChange = (value: string) => {
		let correctValue = value;
		correctValue = correctValue
			.replace(DEFAULT_NETWORK_PROTOCAL, '')
			.replace(/[^a-z0-9]/g, '')
			.replace(/\s+/g, '');

		setDomainName(correctValue);
	};

	const handleOnBuyButtonClick = () => {
		onBuyButtonClick?.(domainName);
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
					placeholder="Search for your domain..."
					value={domainName}
					onChange={handleOnChange}
					startEnhancer={
						<div className={styles.StartEnhancer}>
							{domainName.length > 0 && DEFAULT_NETWORK_PROTOCAL}
						</div>
					}
					endEnhancer={
						<div className={styles.EndEnhancer}>
							{isLoading ? (
								<LoadingIndicator text="" />
							) : type === 'default' ? (
								buyDomainButton()
							) : null}
						</div>
					}
				/>
			</div>

			{isDomainSearchEnabled && !isLoading && (
				<div
					className={cx(styles.Section, styles.DescriptionSection, {
						Invalid: !isDomainAvailable,
						Valid: isDomainAvailable,
					})}
				>
					{isDomainAvailable
						? `Domain available for ${domainPrice} ZERO. No renewal fee, ever.`
						: 'Someone already explored that part of the universe, try again...'}
				</div>
			)}

			{type === 'alternative' && buyDomainButton()}
		</div>
	);
};

export default DomainSearch;
