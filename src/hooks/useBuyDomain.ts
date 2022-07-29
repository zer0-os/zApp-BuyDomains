import { useContext } from 'react';
import { BuyDomainContext } from '../providers/BuyDomainProvider';

export const useBuyDomain = () => {
	const context = useContext(BuyDomainContext);

	return context;
};
