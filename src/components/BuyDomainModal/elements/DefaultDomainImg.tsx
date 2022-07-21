import React from 'react';
import DomainImage from '../../../assets/default_domain_image.jpeg';
import styles from '../BuyDomainModal.module.scss';

export const DefaultDomainImg = () => {
	return (
		<div className={styles.DefaultDomainImg}>
			<img src={DomainImage} alt="Domain Image" />
		</div>
	);
};
