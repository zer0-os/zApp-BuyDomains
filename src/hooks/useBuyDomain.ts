import { useContext } from 'react';
import { BuyDomainContext } from '../providers';

export const useBuyDomain = () => {
	const context = useContext(BuyDomainContext);

	return context;
};
