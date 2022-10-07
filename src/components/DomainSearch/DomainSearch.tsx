import type { FC } from 'react';

import { useState } from 'react';
import classNames from 'classnames/bind';
import { Input, Button, LoadingIndicator } from '@zero-tech/zui/components';
import { DEFAULT_NETWORK_PROTOCAL } from '../../constants/network';
import { URLS } from '../../constants/urls';
import { useBuyDomain, useDomainAvailability } from '../../hooks';
import styles from './DomainSearch.module.scss';

const cx = classNames.bind(styles);

type DomainSearchTypes = 'default' | 'alternative' | 'nobutton';

type DomainSearchProps = {
	type?: DomainSearchTypes;
	isLoadingBalance?: boolean;
	balance?: string;
	onBuyButtonClick?: (domainName: string) => void;
};

export const DomainSearch: FC<DomainSearchProps> = ({
	type = 'default',
	isLoadingBalance,
	balance,
	onBuyButtonClick,
}) => {
	const [focused, setFocused] = useState<boolean>(false);

	const { domainName, setDomainName } = useBuyDomain();

	const showStartEnhancer = focused || domainName.length > 0;

	const {
		isLoading: isCheckingDomainAvailability,
		isDomainSearchEnabled,
		isDomainAvailable,
		domainPrice,
	} = useDomainAvailability();

	const isDomainPriceExpensive =
		isDomainSearchEnabled &&
		domainPrice &&
		balance &&
		Number(domainPrice) > Number(balance);

	const isLoading =
		isCheckingDomainAvailability || (isLoadingBalance && !balance);

	const handleOnChange = (value: string) => {
		let correctValue = value;
		correctValue = correctValue
			.toLowerCase()
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
				isDisabled={
					!isDomainSearchEnabled || !isDomainAvailable || isDomainPriceExpensive
				}
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
					className={cx(styles.Input, {
						ShowStartEnhancer: showStartEnhancer,
					})}
					// @TODO: !showStartEnhancer &&  caused error
					placeholder={'Search for your domain...'}
					value={domainName}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					onChange={handleOnChange}
					startEnhancer={
						<div className={styles.StartEnhancer}>
							{showStartEnhancer && DEFAULT_NETWORK_PROTOCAL}
						</div>
					}
					endEnhancer={
						<div className={styles.EndEnhancer}>
							{isLoading ? (
								<LoadingIndicator />
							) : type === 'default' ? (
								buyDomainButton()
							) : null}
						</div>
					}
				/>
			</div>

			<div
				className={cx(styles.Section, styles.DescriptionSection, {
					Invalid: !isDomainAvailable,
					Valid: isDomainAvailable,
				})}
			>
				{isDomainSearchEnabled &&
					!isLoading &&
					(isDomainAvailable
						? `Domain available for ${domainPrice} ZERO. No renewal fee, ever.`
						: 'Someone already explored that part of the universe, try again...')}
			</div>

			{isDomainPriceExpensive && (
				<div className={cx(styles.Section, styles.BalanceWarningSection)}>
					You just need to
					<a href={URLS.UNI_SWAP_ZERO} target="_blank">
						Buy $ZERO
					</a>
					to secure this domain
				</div>
			)}

			{type === 'alternative' && buyDomainButton()}
		</div>
	);
};
