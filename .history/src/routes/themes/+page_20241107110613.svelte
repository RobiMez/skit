<script lang="ts">
	import ColorPill from './ColorPill.svelte'



	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	console.log(data);

</script>

<div class="flex w-full flex-col gap-2 p-12">
	<div class=" flex w-full flex-row items-center justify-center">
		<!-- Light mode  -->
		<div class=" flex w-full flex-col gap-4">
			<div class="flex flex-row gap-2">
				<ColorPill color="primary" label="Primary" />
				<ColorPill color="secondary" label="Secondary" />
				<ColorPill color="text" label="Text" textColor="background" />
				<ColorPill color="background" label="Background" textColor="text" />
			</div>

			<div class="flex flex-col gap-2">
				<hr />
				<small class="text-sm">font-display </small>
				<!-- <h1 class="font-display text-6xl">Display Typescale (6xl)</h1> -->
				<h1 class="font-display text-5xl">Display Typescale (5xl)</h1>
				<h1 class="font-display text-4xl">Display Typescale (4xl)</h1>
				<h1 class="font-display text-3xl">Display Typescale (3xl)</h1>

				<hr />
				<small class="text-sm">font-content </small>

				<h4 class=" text-xl">Heading Typescale (xl)</h4>
				<h5 class=" text-lg">Heading Typescale (lg)</h5>
				<p class=" text-base">Paragraphs (base)</p>
				<p class="text-sm">Captions (sm)</p>
				<small class="text-xs">Fine Print (xs)</small>

				<hr />
				<p class="font-handwriting text-xl">Handwriting (lg)</p>
			</div>
		</div>
	</div>
</div>

