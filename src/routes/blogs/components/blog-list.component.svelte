<script lang="ts">
	import type { Blogs } from '../models/blog';

	export let blogList: Blogs;
</script>

<div class="flex flex-col gap-4 mt-10">
	{#each blogList as blogItem}
		<a href="/blogs/{blogItem.id}" class="flex flex-col gap-2">
			<span class="font-bold text-xl">{blogItem.title}</span>
			<span class="font-semibold text-white/30 text-base">{blogItem.desc}</span>
		</a>
	{/each}
</div>
