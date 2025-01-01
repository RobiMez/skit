import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			"$lib": "src/lib",
			"$lib/*": "src/lib/*",

			"$src": "src/",
			"$src/*": "src/*",

			"$stores": "src/stores",
			"$stores/*": "src/stores/*",

			"$utils": "src/utils",
			"$utils/*": "src/utils/*",

			"$components": "src/lib/components",
			"$components/*": "src/lib/components/*",

			"$icons": "src/lib/icons",
			"$icons/*": "src/lib/icons/*",

			"$constants": "src/lib/constants",
			"$constants/*": "src/lib/constants/*",

			"$debug": "src/routes/debug",
			"$debug/*": "src/routes/debug/*"
		}
	}
};

export default config;
