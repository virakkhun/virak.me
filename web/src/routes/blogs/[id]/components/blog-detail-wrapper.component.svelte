<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { updateBlogView } from '../../services/update-view.service';

	export let blogID: number;
	export let blogView: number;

	onMount(async () => {
		if (!browser) return;

		await updateBlogView(blogID, blogView);
	});
</script>

<div class="my-10 flex flex-col gap-2 code-wrapper">
	<slot />
</div>
