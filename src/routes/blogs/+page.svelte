<script lang="ts">
	import Breadcrumb from '../../components/breadcrumb.svelte';
	import { BLOGS_TREE } from './constants/blogs-tree';
	import FileTree from '../../components/fe/file-tree.svelte';
	import { base } from '$app/paths';

	const blogsTree = BLOGS_TREE;
	const _breadcrumbs = [
		{ link: `/${base}`, label: 'home' },
		{ link: `/${base}/blogs`, label: 'blogs' }
	];
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<Breadcrumb breadcrumbs={_breadcrumbs} />
<FileTree tree={blogsTree} />
