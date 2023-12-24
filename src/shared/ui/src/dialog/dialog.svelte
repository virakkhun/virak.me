<script lang="ts">
	import { linear } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let isOpen = false;
</script>

{#if isOpen}
	<div class="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
		<div class="w-fit rounded-md bg-gray-700 border border-black/20 flex flex-col">
			<slot name="title" />
			<slot name="description" />
			<div class="w-full h-[1px] bg-black/10" />
			<slot name="content" />
			<div class="w-full h-[1px] bg-black/10" />
			<slot name="action" />
		</div>
	</div>

	<div
		class="fixed z-10 top-0 right-0 bg-black/50 w-full h-full"
		transition:fade={{ duration: 50, easing: linear }}
	/>
{/if}
