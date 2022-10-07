import React from 'react';

import { DomainSearchTypes } from '../DomainSearch';

import { Button } from '@zero-tech/zui/components';

import classNames from 'classnames/bind';
import styles from './BuyDomainButton.module.scss';

const cx = classNames.bind(styles);

type BuyDomainButtonProps = {
	type: DomainSearchTypes;
	isDisabled: boolean;
	isLoading: boolean;
	onClickBuy: () => void;
};

export const BuyDomainButton = ({
	type,
	isDisabled,
	isLoading,
	onClickBuy,
}: BuyDomainButtonProps) => (
	<div
		className={cx(styles.BuyButton, {
			Alternative: type === 'alternative',
		})}
	>
		<Button isLoading={isLoading} isDisabled={isDisabled} onPress={onClickBuy}>
			Buy
		</Button>
	</div>
);
