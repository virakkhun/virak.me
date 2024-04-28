<script lang="ts">
	import type { VisitorMessages } from '../models/visitor-message';

	export let visitorMessages: VisitorMessages | null;
	$: isEmpty = visitorMessages?.length === 0;
</script>

{#if visitorMessages}
	<div class:bg-gray-800={!isEmpty} class="flex flex-col gap-2 items-start my-4 rounded-md">
		{#each visitorMessages as vm}
      <div class="flex items-center gap-1">
        <span class="text-text-secondary text-sm">{vm.visitor_name}:</span>
        <span class="font-bold text-sm">{vm.message}</span>
      </div>
		{/each}
	</div>
{/if}
