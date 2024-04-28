<script lang="ts">
	import Breadcrumb from '../../../components/breadcrumb.svelte';
import Markdown from '../../../components/markdown.component.svelte';
	import type { PageServerData } from '../[slug]/$types';
	import BlogDetailAuthor from './components/blog-detail-author.component.svelte';
	import BlogDetailTitle from './components/blog-detail-title.component.svelte';
	import BlogDetailWrapper from './components/blog-detail-wrapper.component.svelte';

	export let data: PageServerData;
  const breadcrumbs = [{link: '/', label: 'home'}, {link: '/blogs', label: 'blogs'}]
</script>

<svelte:head>
	<title>{data?.blogDetail?.title}</title>
	<meta name="description" content={data?.blogDetail?.desc} />
</svelte:head>

<Breadcrumb breadcrumbs={[...breadcrumbs, {label: data?.blogDetail?.title, link: `/blogs/${data?.blogDetail?.id}`}]} />
{#if data.blogDetail}
	<BlogDetailWrapper blogID={data.blogDetail.id} blogView={data.blogDetail.view}>
		<BlogDetailTitle title={data.blogDetail.title} />
		<BlogDetailAuthor
			authorName={data.blogDetail.author}
			publishedDate={data.blogDetail.created_at}
		/>
		<Markdown content={data.blogDetail.content} />
	</BlogDetailWrapper>
{/if}
