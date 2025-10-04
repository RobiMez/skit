import { persisted, type Persisted } from 'svelte-persisted-store';

interface Navigation {
	page: string | null;
	subpage: string | null;
	accounts: boolean;
}

export const navigation: Persisted<Navigation> = persisted('navigation', {
	page: null,
	subpage: null,
	accounts: false
});
