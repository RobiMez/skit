<script>
	import { Button } from '$lib/components/ui/button';
	import { ArrowSquareOut } from 'phosphor-svelte';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-4">
	<h1 class="text-4xl font-light">The Start of Something Sublime</h1>
	<p class="text-lgt-con-sec dark:text-drk-con-sec">A boilerplate for your next sideproject</p>

	<span class="flex flex-row gap-3">
		<Button variant="outline" href="https://github.com/RobiMez/skit">
			<ArrowSquareOut weight="duotone" />
			Repo
		</Button>
	</span>
</div>
