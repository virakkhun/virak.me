<script lang="ts">
	import type { Blog } from '../routes/blogs/models/blog';

	export let lastTwoBlogPosts: Pick<Blog, 'slug' | 'title' | 'view'>[] | null;
</script>

<p class="text-center text-2xl mt-40">my latest blog posts</p>
{#if lastTwoBlogPosts}
	<div class="flex flex-col items-center justify-center mt-4 gap-2 md:w-1/2 mx-auto w-full">
		{#each lastTwoBlogPosts as blog}
			<a
				href={`/blogs/${blog.slug}`}
				class="space-y-2 w-full p-4 rounded-md bg-green-100/10 border border-green-500 hover:border-green-300 transition-colors"
			>
				<p class="text-base font-semibold">{blog.title}</p>
				<p class="text-base text-green-500">{blog.view} views</p>
			</a>
		{/each}
	</div>
{/if}
