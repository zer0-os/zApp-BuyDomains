import type { FC } from 'react';

import { createContext, useState } from 'react';

export const BuyDomainContext = createContext({
	selectedDomain: '',
	selectDomain: (selectedDomain: string) => {},
});

export const BuyDomainProvider: FC = ({ children }) => {
	const [selectedDomain, selectDomain] = useState<string>('');

	const contextValue = {
		selectedDomain,
		selectDomain,
	};

	return (
		<BuyDomainContext.Provider value={contextValue}>
			{children}
		</BuyDomainContext.Provider>
	);
};
