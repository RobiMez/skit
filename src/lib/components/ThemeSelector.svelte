<script lang="ts">
	import { browser } from '$app/environment';
	import { AppWindow, MoonStars, SunHorizon } from 'phosphor-svelte';
	import { preferences } from '$lib/stores/dark-mode-store';

	let systemPeek = $state(false);
	let isDarkMode = $state($preferences.theme === 'dark');

	function toggleDarkMode() {
		const newTheme = isDarkMode ? 'light' : 'dark';
		preferences.set({ theme: newTheme });
	}

	function setSystemTheme() {
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		preferences.set({ theme: systemTheme });
	}

	// Subscribe to theme changes
	$effect(() => {
		if (!browser) return;
		isDarkMode = $preferences.theme === 'dark';
		document.documentElement.classList.toggle('dark', isDarkMode);
		document.documentElement.classList.toggle('light', !isDarkMode);
	});
</script>

{#if browser}
	<!-- Container -->
	<div
		class="	border-light-400 dark:border-dark-600
		opacity-10 fixed right-3 top-3 
		z-50 flex flex-row items-center justify-center
		gap-2 rounded-sm border px-2 py-1 text-sm transition-all
		duration-300 group-hover:opacity-100
		"
	>
		<!-- Toggle Button -->
		<button
			onclick={() => {
				if (systemPeek) return;
				toggleDarkMode();
			}}
		>
			{#if isDarkMode}
				<MoonStars size={18} weight="duotone" />
			{:else}
				<SunHorizon size={18} weight="duotone" />
			{/if}
		</button>
		<!-- System Button -->
		<button
			onmouseover={() => {
				systemPeek = true;
			}}
			onfocus={() => {
				systemPeek = true;
			}}
			onmouseout={() => {
				systemPeek = false;
			}}
			onblur={() => {
				systemPeek = false;
			}}
			onclick={setSystemTheme}
		>
			<AppWindow size={18} weight="duotone" />
		</button>
	</div>
{/if}
