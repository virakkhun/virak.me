<script lang="ts">
	import { datetime } from '$lib/datetime';
	import type { Blog } from '../models/blog';

	export let blog: Blog;
</script>

<a href="/blogs/{blog.slug}">
	<div class="flex justify-between items-center">
		<p class="font-semibold text-xl">{blog.title}</p>
		<p class="text-sm">{datetime.diff(blog.created_at)}</p>
	</div>
</a>
