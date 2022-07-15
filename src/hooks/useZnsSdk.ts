import { useContext } from 'react';
import { ZnsSdkContext } from '../providers/ZnsSdkProvider';

/**
 * Wraps useContext in a more specific wrapper.
 * This is mainly just for DX.
 * @returns context from zns SDK provider
 */
export const useZnsSdk = () => {
	return useContext(ZnsSdkContext);
};

export default useZnsSdk;
