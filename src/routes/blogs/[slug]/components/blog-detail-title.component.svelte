<script lang="ts">
	import { base } from '$app/paths';

	export let title: string;
</script>

<div class="flex md:items-center justify-start gap-2 md:flex-row flex-col">
	<a href="{base}/blogs" class="text-accent underline hover:text-primary">blogs</a>
	<span class="md:block hidden">/</span>
	<p class="font-bold md:text-2xl text-xl">{title}</p>
</div>
