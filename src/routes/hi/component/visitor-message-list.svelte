<script lang="ts">
	import type { VisitorMessages } from '../models/visitor-message';

	export let visitorMessages: VisitorMessages | null;
</script>

{#if visitorMessages}
	<div class="max-h-56 flex flex-col gap-3 items-start mt-4 overflow-y-scroll visitor-wrapper">
		{#each visitorMessages as vm}
			<div class="flex items-center gap-2">
				<span class="font-bold italic text-xl">"{vm.message}"</span>
				<span>by</span>
				<span class="font-bold text-base">{vm.visitor_name}</span>
				<span>|</span>
				<span class="text-white/50">{vm.created_at}</span>
			</div>
		{/each}
	</div>
{:else}
	<p class="mt-4 text-center">loading...</p>
{/if}

<style>
	.visitor-wrapper {
		scrollbar-width: thin;
	}

	.visitor-wrapper::-webkit-scrollbar {
		width: 10px;
		border-radius: 8px;
	}
	.visitor-wrapper::-webkit-scrollbar-track {
		background-color: rgb(99, 172, 4);
	}

	.visitor-wrapper::-webkit-scrollbar-thumb {
		background-color: rgba(255, 255, 255);
	}
</style>
