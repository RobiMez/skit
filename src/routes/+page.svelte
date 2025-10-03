<script>
	import { browser } from '$app/environment';

	console.log();
</script>

<div class="border-black flex h-screen w-screen flex-grow flex-col items-center justify-center">
	<h1 class="text-4xl font-light">The Start of Something Sublime</h1>
	<p class="text-lgt-con-sec dark:text-drk-con-sec">A boilerplate for your next sideproject</p>

	{#if browser}
		<div
			class="
		gap-4 bg-lgt-base
		p-4 text-sm
		text-lgt-con transition-colors duration-300
		dark:bg-drk-base dark:text-drk-con
		"
		>
			<button
				class="rounded-sm border border-lgt-con px-2 py-1 dark:border-drk-con"
				onclick={() => {
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
				class="rounded-sm border border-lgt-con px-2 py-1 dark:border-drk-con"
				onclick={() => {
					// Whenever the user explicitly chooses to respect the OS preference
					localStorage.removeItem('theme');
					document.documentElement.classList.remove('dark');
					if (
						localStorage.theme === 'dark' ||
						(!('theme' in localStorage) &&
							window.matchMedia('(prefers-color-scheme: dark)').matches)
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
		<span class="flex flex-row gap-3">
			<a href="/themes"> Design System </a>
			<a href="https://github.com/RobiMez/skit" target="_blank"> Repo </a>
		</span>
	{/if}
</div>
