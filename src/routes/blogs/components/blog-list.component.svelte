<script lang="ts">
	import type { Blogs } from '../models/blog';

	export let blogList: Blogs;
	$: isEmpty = blogList.length === 0;
</script>

<div class="flex flex-col gap-4 mt-10">
	{#each blogList as blogItem}
		<a href="/blogs/{blogItem.id}" class="flex flex-col gap-2">
			<span class="font-bold text-xl">{blogItem.title}</span>
			<span class="font-semibold text-white/30 text-base">{blogItem.desc}</span>
		</a>
	{/each}
</div>

{#if isEmpty}
	<p
		class="text-3xl font-bold text-indigo-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed"
	>
		There are some blogs in the future... 😁
	</p>
{/if}
