import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	try {
		return {};
	} catch (error) {
		console.error('Error fetching data at /home:', error);
		return {
			messages: [],
			error: 'Failed to fetch data at /home'
		};
	}
};
