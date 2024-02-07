<script lang="ts">
	import { t } from '../../../shared/services/i18n.service';
	import type { Blogs } from '../models/blog';
	import BlogItem from './blog-item.component.svelte';

	export let blogList: Blogs;
	$: isEmpty = blogList.length === 0;
</script>

{#if isEmpty}
	<p class="font-bold mt-2">{$t('blogs.message')}</p>
{/if}

{#if !isEmpty}
	<div class="flex flex-col gap-4 mt-10">
		{#each blogList as blogItem}
			<BlogItem blog={blogItem} />
		{/each}
	</div>
{/if}
