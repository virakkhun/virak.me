<script lang="ts">
	import Breadcrumb from '../../components/breadcrumb.svelte';
	import BlogTitle from './components/blog-title.component.svelte';

	const breadcrumbs = [
		{ link: '/', label: 'home' },
		{ link: '/blogs', label: 'blogs' }
	];
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<Breadcrumb {breadcrumbs} />
<div class="mt-24 pb-4">
	<BlogTitle />
	<p class="mt-4">no blogs available</p>
</div>
