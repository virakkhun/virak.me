<script lang="ts">
	import type { PageServerData } from './$types';
	import Markdown from '../../../components/markdown.component.svelte';
	import BlogDetailAuthor from './components/blog-detail-author.component.svelte';
	import BlogDetailTitle from './components/blog-detail-title.component.svelte';
	import BlogDetailWrapper from './components/blog-detail-wrapper.component.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{data?.blogDetail?.title}</title>
	<meta name="description" content={data?.blogDetail?.desc} />
</svelte:head>

{#if data.blogDetail}
	<BlogDetailWrapper>
		<BlogDetailTitle title={data.blogDetail.title} />
		<BlogDetailAuthor authorName={data.blogDetail.author} />
		<Markdown content={data.blogDetail.content} />
	</BlogDetailWrapper>
{/if}
