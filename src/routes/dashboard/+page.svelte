<script lang="ts">
	import Divider from './components/divider.svelte';
	import Nav from './components/nav.svelte';
</script>

<div class="grid grid-cols-12 w-full">
	<div class="col-span-2">
		<Nav />
	</div>
	<div class="col-span-10">
		<div class="flex flex-col items-start p-6 gap-4">
			<p class="rounded-md py-4 text-2xl font-bold">Hello Virak</p>
			<Divider />

			<div class="flex flex-col gap-2">
				<p>Quick actions</p>
				<div class="flex items-center gap-2">
					<a href="/dashboard/blogs" class="border border-primary rounded-md p-4"> go to blogs </a>
					<a href="/dashboard/blogs/create" class="border border-primary rounded-md p-4">
						create blog
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
