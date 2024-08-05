<script lang="ts">
	import blogs from '$lib/blogs';
	import Breadcrumb from '../../components/breadcrumb.svelte';
	import BlogTitle from './components/blog-title.component.svelte';

	const _breadcrumbs = [
		{ link: '/', label: 'home' },
		{ link: '/blogs', label: 'blogs' }
	];
	const filename = (v: string) => v.replace('.md', '');
	const _blogs = blogs.map(filename);
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<Breadcrumb breadcrumbs={_breadcrumbs} />
<div class="mt-24 pb-4">
	<BlogTitle />

	<div class="mt-4 flex flex-col gap-2 font-semibold">
		{#each _blogs as b}
			<a href="/blogs/{b}">{b}</a>
		{/each}
	</div>
</div>
