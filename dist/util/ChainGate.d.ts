import { FC, ReactNode } from 'react';
interface ChainGateProps {
	chainId: number;
	children: ReactNode;
}
declare const ChainGate: FC<ChainGateProps>;
export default ChainGate;
