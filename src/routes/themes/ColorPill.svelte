<script>
	/** @type {{color: any, label: any, textColor?: any}} */
	let { color, label, textColor = null } = $props();

	let textClass = $derived(textColor ? `text-${textColor}` : '');
</script>

{#if true}
	<div
		class="pill relative {textClass} "
		style="
			{color == 'background'
			? `background-color: hsl(var(--${color}));`
			: `color: hsl(var(--background)); background-color: hsl(var(--${color}));`}
		"
	>
		{label}
		{#each Array(10) as _, i}
			<div
				class="absolute -bottom-3 h-2 w-2"
				style="left: {i}0%; background-color: hsl(var(--{color}) / {i}0%);"
			></div>
		{/each}
	</div>
{/if}

<style lang="postcss">
	.pill {
		@apply flex w-32 items-center justify-center rounded-full border border-black py-2;
		border-radius: var(--radius);
	}
</style>
