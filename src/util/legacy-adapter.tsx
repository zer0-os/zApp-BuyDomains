import { FC } from 'react';

type LegacyAdapterProps = {
	children: React.ReactNode;
};

/**
 * Provides access to what was available in legacy apps by
 * adjusting the
 */
const LegacyAdapter: FC<LegacyAdapterProps> = ({ children }) => {
	return <>{children}</>;
};

export default LegacyAdapter;
