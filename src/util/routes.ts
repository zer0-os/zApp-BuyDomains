export const parseRoute = (route: string): { page: string; zna?: string } => {
	const split = route.split('/');
	const page = split[0];
	const zna = split[1];

	return { page, zna };
};
