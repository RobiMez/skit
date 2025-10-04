import type { LayoutServerLoad } from './$types';
import { SIDEBAR_COOKIE_NAME } from '$lib/components/ui/sidebar/constants.js';

export const load: LayoutServerLoad = async ({ cookies }) => {
	try {
		// Read sidebar state from cookie to prevent layout shift
		const sidebarOpen = cookies.get(SIDEBAR_COOKIE_NAME) === 'true';

		return {
			sidebarOpen: sidebarOpen ?? true
		};
	} catch (error) {
		console.error('Error fetching data :', error);
		return {
			error: 'Failed to fetch data',
			sidebarOpen: true
		};
	}
};
