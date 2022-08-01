import type { FC } from 'react';

import { createContext, useState } from 'react';

export const BuyDomainContext = createContext({
	domainName: '',
	setDomainName: (domainName: string) => {},
});

export const BuyDomainProvider: FC = ({ children }) => {
	const [domainName, setDomainName] = useState<string>('');

	const contextValue = {
		domainName,
		setDomainName,
	};

	return (
		<BuyDomainContext.Provider value={contextValue}>
			{children}
		</BuyDomainContext.Provider>
	);
};
