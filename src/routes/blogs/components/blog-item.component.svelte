<script lang="ts">
	import { datetime } from '$lib/datetime';
	import type { Blog } from '../models/blog';

	export let blog: Blog;
</script>

<a
	href="/blogs/{blog.slug}"
	class="flex flex-col gap-2 bg-gray-800 p-4 rounded-md filter hover:drop-shadow-3xl transition-all duration-300 border border-secondary"
>
	<span class="font-bold text-xl">{blog.title}</span>
	<span class="text-base">{blog.desc}</span>
	<div class="flex justify-between items-center">
		<div class="flex items-center gap-2">
			<span class="text-sm">{datetime.diff(blog.created_at)}</span>
			<span>|</span>
			{#each blog.tags as tag}
				<span class="text-sm px-1 py-0.5 bg-accent rounded-lg">#{tag}</span>
			{/each}
		</div>
		<span class="text-sm">{blog.view} views</span>
	</div>
</a>
