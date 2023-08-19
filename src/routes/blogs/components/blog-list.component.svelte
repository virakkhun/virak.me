<script lang="ts">
	import { DT } from '$lib/datetime';
	import { t } from '../../../shared/services/i18n.service';
	import type { Blogs } from '../models/blog';

	export let blogList: Blogs;
	$: isEmpty = blogList.length === 0;
</script>

{#if isEmpty}
	<p class="font-bold mt-2">{$t('blogs.message')}</p>
{/if}

{#if !isEmpty}
	<div class="flex flex-col gap-4 mt-10">
		{#each blogList as blogItem}
			<a
				href="/blogs/{blogItem.id}"
				class="flex flex-col gap-2 bg-gray-800 p-4 rounded-md filter hover:drop-shadow-3xl transition-all duration-300"
			>
				<span class="font-bold text-xl">{blogItem.title}</span>
				<span class="text-white/30 text-base">{blogItem.desc}</span>
				<div class="flex justify-between items-center">
					<div class="flex items-center gap-2">
						<span class="text-sm text-blue-500">{DT.diff(blogItem.created_at)}</span>
						<span>|</span>
						{#each blogItem.tags as tag}
							<span class="text-sm text-teal-500">#{tag}</span>
						{/each}
					</div>
					<span class="bg-blue-500 p-1 text-sm rounded">{blogItem.view} view</span>
				</div>
			</a>
		{/each}
	</div>
{/if}
