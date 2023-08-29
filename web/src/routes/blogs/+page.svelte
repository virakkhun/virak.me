<script lang="ts">
	import type { PageServerData } from './$types';
	import BlogList from './components/blog-list.component.svelte';
	import BlogTitle from './components/blog-title.component.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<div class="mt-10">
	<BlogTitle />
	{#if data.blogs}
		<BlogList blogList={data.blogs} />
	{/if}
</div>
