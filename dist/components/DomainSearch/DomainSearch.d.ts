import type { FC } from 'react';
declare type DomainSearchTypes = 'default' | 'alternative' | 'nobutton';
declare type DomainSearchProps = {
	type?: DomainSearchTypes;
	onBuyButtonClick?: (domainName: string) => void;
};
export declare const DomainSearch: FC<DomainSearchProps>;
export default DomainSearch;
