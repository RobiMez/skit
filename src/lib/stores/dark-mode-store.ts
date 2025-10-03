import { persisted } from 'svelte-persisted-store';
import type { Writable } from 'svelte/store';

// Get initial theme from localStorage or system preference
let initialTheme = 'dark';
if (typeof window !== 'undefined') {
	try {
		const stored = localStorage.getItem('preferences');
		if (stored) {
			const preferences = JSON.parse(stored);
			initialTheme = preferences.theme;
		} else {
			// If no stored preference, use system preference
			initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
	} catch (e) {
		// Fallback to system preference if localStorage fails
		initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
}

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const preferences = persisted('preferences', {
	theme: initialTheme
});

export const dataSharing = persisted('dataSharing', true);

export const dataStorage: Writable<'local' | 'remote'> = persisted('dataStorage', 'local');

// export const lastUsedAuthMethod = persisted('lastUsedAuthMethod', null);
