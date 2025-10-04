<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	let { data }: { data: any } = $props();
</script>

<div class="flex gap-2">
	<div class="bg-secondary border-secondary text-secondary-foreground border p-3">
		<b>Secondary</b>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consequuntur distinctio ut hic dolores
		assumenda
	</div>
	<div class="bg-primary border-primary text-primary-foreground border p-3">
		<b>Primary</b>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consequuntur distinctio ut hic dolores
		assumenda facilis
	</div>
</div>
<div class="flex gap-2">
	<div class="bg-muted border-muted-foreground text-muted-foreground border p-3">
		<b>Muted</b>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consequuntur distinctio ut hic dolores
		assumenda
	</div>
	<div class="bg-accent border-accent-foreground text-accent-foreground border p-3">
		<b>Accent</b>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consequuntur distinctio ut hic dolores
		assumenda.
	</div>
	<div class="bg-destructive border-destructive-foreground text-destructive-foreground border p-3">
		<b>Destructive</b>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consequuntur distinctio ut hic dolores
		assumenda
	</div>
</div>
<div class="flex gap-2">
	<div class="border-muted-foreground flex w-full max-w-sm flex-col gap-1.5 border p-4">
		<Label for="email-2">Email</Label>
		<Input type="email" id="email-2" placeholder="Email" />
		<p class="text-muted-foreground text-sm">Enter your email address.</p>
	</div>
</div>

<div class="flex flex-row gap-3 p-12">
	<Card.Root>
		<Card.Header>
			<Card.Title>Demo</Card.Title>
			<Card.Description>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloribus asperiores
				inventore.
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia illo impedit
				nihil quasi cum et sint libero, ut soluta accusantium mollitia magni ea repellat hic nemo
				exercitationem eveniet quia in ipsum? Modi officia provident fugiat sint facilis unde? Nam
				temporibus nemo dolorem voluptas beatae unde id quae cumque obcaecati corporis ab libero
				ullam ant sed atque ut est deleniti, at illo error. Aut placeat vel quae culpa enim fugit
				iusto ipsam suscipit commodi perferendis repudiandae veritatis, quam adipisci nam reiciendis
				praesentium sapiente quaerat voluptatem! Repellat nulla porro doloribus deleniti assumenda,
				dolor vel deserunt ipsam impedit consequatur molestias eligendi, iusto quia. Doloribus hic
				suscipit reiciendis illo ducimus!
			</p>
		</Card.Content>
		<Card.Footer>
			<p>Footer</p>
		</Card.Footer>
	</Card.Root>

	<Popover.Root>
		<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>outline</Popover.Trigger>
		<Popover.Trigger class={buttonVariants({ variant: 'default' })}>default</Popover.Trigger>
		<Popover.Trigger class={buttonVariants({ variant: 'ghost' })}>ghost</Popover.Trigger>
		<Popover.Trigger class={buttonVariants({ variant: 'secondary' })}>secondary</Popover.Trigger>
		<Popover.Content class="w-80">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="leading-none font-medium">Dimensions</h4>
					<p class="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
				</div>
				<div class="grid gap-2">
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="width">Width</Label>
						<Input id="width" value="100%" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="maxWidth">Max. width</Label>
						<Input id="maxWidth" value="300px" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="height">Height</Label>
						<Input id="height" value="25px" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="maxHeight">Max. height</Label>
						<Input id="maxHeight" value="none" class="col-span-2 h-8" />
					</div>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root>
</div>
