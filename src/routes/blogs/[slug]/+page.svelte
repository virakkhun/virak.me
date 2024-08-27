<script lang="ts">
	import { goto } from '$app/navigation';
	import Breadcrumb from '../../../components/breadcrumb.svelte';
	import Markdown from '../../../components/markdown.svelte';
	import type { PageServerData } from '../[slug]/$types';
	import BlogDetailWrapper from './components/blog-detail-wrapper.component.svelte';

	export let data: PageServerData;
	const breadcrumbs = [
		{ link: '/', label: 'home' },
		{ link: '/blogs', label: 'blogs' }
	];

	function onKeyPress(e: KeyboardEvent) {
		eventMap[e.key]();
	}

	const eventMap: Record<string, () => void> = {
		b: () => goto('/blogs'),
		j: () => {
			window.scrollBy({
				top: 20,
				behavior: 'smooth'
			});
		},
		k: () => {
			window.scrollBy({
				top: -20,
				behavior: 'smooth'
			});
		}
	};
</script>

<svelte:head>
	<title>{data?.title}</title>
</svelte:head>

<svelte:document on:keypress={onKeyPress} />

{#if data?.content}
	<Breadcrumb
		breadcrumbs={[...breadcrumbs, { label: data?.title, link: `/blogs/${data?.title}` }]}
	/>
	<BlogDetailWrapper>
		<Markdown content={data?.content} />
	</BlogDetailWrapper>
{/if}
