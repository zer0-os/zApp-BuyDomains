import { ethers } from 'ethers';

export const getDomainId = (name?: string): string => {
	let hashReturn = ethers.constants.HashZero;

	if (!name?.length) {
		return hashReturn;
	}

	const domains = name.split('.');
	for (let i = 0; i < domains.length; i++) {
		hashReturn = ethers.utils.keccak256(
			ethers.utils.defaultAbiCoder.encode(
				['bytes32', 'bytes32'],
				[
					ethers.utils.arrayify(hashReturn),
					ethers.utils.arrayify(ethers.utils.id(domains[i])),
				],
			),
		);
	}
	return hashReturn;
};
