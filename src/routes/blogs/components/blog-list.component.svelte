<script lang="ts">
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
			<a href="/blogs/{blogItem.id}" class="flex flex-col gap-2">
				<span class="font-bold text-xl">{blogItem.title}</span>
				<span class="font-semibold text-white/30 text-base">{blogItem.desc}</span>
			</a>
		{/each}
	</div>
{/if}
