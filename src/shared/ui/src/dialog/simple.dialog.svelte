<script lang="ts">
	import { linear } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let _isOpen = false;

	export function open() {
		_isOpen = true;
	}

	export function close() {
		_isOpen = false;
	}

	export function isOpen() {
		return _isOpen;
	}
</script>

{#if _isOpen}
	<slot />

	<div
		class="fixed z-10 top-0 right-0 bg-[#000]/50 w-full h-full"
		transition:fade={{ duration: 50, easing: linear }}
	/>
{/if}
