<script lang="ts">
	import { base } from '$app/paths';
	import Breadcrumb from '../../../components/breadcrumb.svelte';
	import Markdown from '../../../components/markdown.svelte';
	import type { PageServerData } from '../[slug]/$types';
	import BlogDetailWrapper from './components/blog-detail-wrapper.component.svelte';

	export let data: PageServerData;
	const breadcrumbs = [
		{ link: `${base}/`, label: 'home' },
		{ link: `${base}/blogs`, label: 'blogs' }
	];
</script>

<svelte:head>
	<title>{data?.title}</title>
</svelte:head>

{#if data?.content}
	<Breadcrumb
		breadcrumbs={[...breadcrumbs, { label: data?.title, link: `${base}/blogs/${data?.title}` }]}
	/>
	<BlogDetailWrapper>
		<Markdown content={data?.content} />
	</BlogDetailWrapper>
{/if}
