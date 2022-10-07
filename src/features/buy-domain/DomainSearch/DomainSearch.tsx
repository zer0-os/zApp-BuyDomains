import type { FC } from 'react';
import { useState } from 'react';

import { useBuyDomain, useDomainAvailability } from '../../../lib/hooks';
import { DEFAULT_NETWORK_PROTOCAL } from '../../../lib/constants/network';
import { URLS } from '../../../lib/constants/urls';

import { Input, Button, LoadingIndicator } from '@zero-tech/zui/components';

import classNames from 'classnames/bind';
import styles from './DomainSearch.module.scss';
import { BuyDomainButton } from '../BuyDomainButton';

const cx = classNames.bind(styles);

export type DomainSearchTypes = 'default' | 'alternative' | 'nobutton';

type DomainSearchProps = {
	type?: DomainSearchTypes;
	isLoadingBalance?: boolean;
	balance?: string;
	onBuyButtonClick?: (selectedDomain: string) => void;
};

export const DomainSearch: FC<DomainSearchProps> = ({
	type = 'default',
	isLoadingBalance,
	balance,
	onBuyButtonClick,
}) => {
	const [focused, setFocused] = useState<boolean>(false);

	const { selectedDomain, selectDomain } = useBuyDomain();

	const showStartEnhancer = focused || selectedDomain.length > 0;

	const {
		isLoading: isCheckingDomainAvailability,
		isDomainSearchEnabled,
		isDomainAvailable,
		domainPrice,
	} = useDomainAvailability();

	const isInsufficientBalance =
		isDomainSearchEnabled &&
		domainPrice &&
		balance &&
		Number(domainPrice) > Number(balance);

	const isLoading =
		isCheckingDomainAvailability || (isLoadingBalance && !balance);

	const isDisabled =
		!isDomainSearchEnabled || !isDomainAvailable || isInsufficientBalance;

	const onChange = (value: string) => {
		let correctValue = value;
		correctValue = correctValue
			.toLowerCase()
			.replace(/[^a-z0-9]/g, '')
			.replace(/\s+/g, '');

		selectDomain(correctValue);
	};

	const onClickBuy = () => {
		onBuyButtonClick?.(selectedDomain);
	};

	return (
		<div className={styles.Container}>
			<div className={styles.Section}>
				<Input
					className={cx(styles.Input, {
						ShowStartEnhancer: showStartEnhancer,
					})}
					// @TODO: !showStartEnhancer &&  caused error
					placeholder={'Search for your domain...'}
					value={selectedDomain}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					onChange={onChange}
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
								<BuyDomainButton
									type={type}
									isDisabled={isDisabled}
									isLoading={isLoading}
									onClickBuy={onClickBuy}
								/>
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

			{isInsufficientBalance && (
				<div className={cx(styles.Section, styles.BalanceWarningSection)}>
					You just need to
					<a href={URLS.UNI_SWAP_ZERO} target="_blank">
						Buy $ZERO
					</a>
					to secure this domain
				</div>
			)}

			{type === 'alternative' && (
				<BuyDomainButton
					type={type}
					isDisabled={isDisabled}
					isLoading={isLoading}
					onClickBuy={onClickBuy}
				/>
			)}
		</div>
	);
};
