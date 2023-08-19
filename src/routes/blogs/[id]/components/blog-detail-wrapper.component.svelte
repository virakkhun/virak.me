<script lang="ts">
	import { onMount } from 'svelte';
	import { updateBlogView } from '../../services/update-view.service';
	import { browser } from '$app/environment';

	export let blogID: number;
	export let blogView: number;

	onMount(async () => {
		if (!browser) return;

		await updateBlogView(blogID, blogView);
	});
</script>

<div class="mt-10 flex flex-col gap-2">
	<slot />
</div>
