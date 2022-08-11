import type { FC } from 'react';

import React from 'react';
import classNames from 'classnames/bind';
import questionIcon from './assets/question.svg';
import styles from './QuestionButton.module.scss';

const cx = classNames.bind(styles);

type QuestionButtonProps = {
	className?: string;
	size?: 'small' | 'large';
};

export const QuestionButton: FC<QuestionButtonProps> = ({
	className,
	size = 'small',
}) => {
	return (
		<button
			className={cx(styles.QuestionButton, className, {
				Large: size === 'large',
			})}
		>
			<img alt="Have a question?" src={questionIcon} />
		</button>
	);
};

export default QuestionButton;
