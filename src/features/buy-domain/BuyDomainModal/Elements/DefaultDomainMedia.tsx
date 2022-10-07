import type { FC } from 'react';

import DefaultDomainImage from '../../../../assets/default_domain_image.jpeg';
import DefaultDomainVideo from '../../../../assets/default_domain_video.webm';
import styles from '../BuyDomainModal.module.scss';

export const DefaultDomainMedia: FC = () => {
	return (
		<div className={styles.DefaultDomainMedia}>
			<video
				autoPlay
				loop
				muted
				playsInline
				poster={DefaultDomainImage}
				src={DefaultDomainVideo}
			/>
		</div>
	);
};
