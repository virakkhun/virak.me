<script>
	import { base } from '$app/paths';
	import { getStores } from '$app/stores';

	const { page } = getStores();
</script>

{#if $page.error}
	<div class="mt-20 flex flex-col gap-10 justify-center items-center">
		<p class="text-2xl font-bold text-green-500">{$page.status}</p>
		<p>--</p>
		<p class="text-base font-bold">Page {$page.error.message}</p>
		<a href="${base}/" class="rounded-md px-6 py-2 bg-blue-400 text-blue-50">back</a>
	</div>
{/if}
