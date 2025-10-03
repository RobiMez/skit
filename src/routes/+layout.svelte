<script lang="ts">
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
	import '../global.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div
	class=" group fixed
top-[8px] right-[8px] z-50 flex flex-row items-center gap-2 px-[53px] py-[17px]"
>
	<ThemeSelector />
</div>
{@render children?.()}
