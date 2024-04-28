<script lang="ts">
	import Breadcrumb from '../../components/breadcrumb.svelte';
import type { PageServerData } from './$types';
	import BlogList from './components/blog-list.component.svelte';
	import BlogTitle from './components/blog-title.component.svelte';

	export let data: PageServerData;
  const breadcrumbs = [{link: '/', label: 'home'}, {link: '/blogs', label: 'blogs'}]
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<Breadcrumb breadcrumbs={breadcrumbs} />
<div class="mt-24 pb-4">
	<BlogTitle />
	{#if data.blogs}
		<BlogList blogList={data.blogs} />
	{/if}
</div>
