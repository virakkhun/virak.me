<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { updateBlogView } from '../../services/update-view.service';

	export let blogID: number | string;
	export let blogView: number;

	onMount(async () => {
		if (!browser) return;
		const blogId = typeof blogID === 'number' ? blogID : parseInt(blogID);
		await updateBlogView(blogId ?? 0, blogView);
	});
</script>

<div class="mt-20 mb-10 flex flex-col gap-2 code-wrapper">
	<slot />
</div>
