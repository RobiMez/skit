<script>
	import { browser } from '$app/environment';
</script>

<!-- Theme toggle   -->
{#if browser}
	<div
		class="
		bg-lgt-base dark:bg-drk-base
		text-lgt-con dark:text-drk-con
		gap-4 p-4 text-sm
		transition-colors duration-300
		"
	>
		<button
			class="border-lgt-con dark:border-drk-con rounded-sm border px-2 py-1"
			on:click={() => {
				document.documentElement.classList.toggle('dark');
				if (document.documentElement.classList.contains('dark')) {
					localStorage.theme = 'dark';
				} else {
					localStorage.theme = 'light';
				}
			}}
		>
			Toggle Theme
		</button>

		<button
			class="border-lgt-con dark:border-drk-con rounded-sm border px-2 py-1"
			on:click={() => {
				// Whenever the user explicitly chooses to respect the OS preference
				localStorage.removeItem('theme');
				document.documentElement.classList.remove('dark');
				if (
					localStorage.theme === 'dark' ||
					(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
				) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}}
		>
			System pref
		</button>
	</div>
{/if}

<slot />
