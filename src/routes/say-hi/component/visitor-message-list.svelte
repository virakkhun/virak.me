<script lang="ts">
	import { datetime } from '$lib/datetime';
	import type { VisitorMessages } from '../models/visitor-message';

	export let visitorMessages: VisitorMessages | null;
	$: isEmpty = visitorMessages?.length === 0;
</script>

{#if visitorMessages}
	<div class:bg-gray-800={!isEmpty} class="flex flex-col gap-2 items-start my-4 rounded-md">
		{#each visitorMessages as vm}
			<div class="flex md:items-center items-start md:gap-2 md:flex-row flex-col w-full rounded-md">
				<span class="font-bold italic text-base">"{vm.message}"</span>
				<span class="text-sm">by</span>
				<span class="text-base">{vm.visitor_name === 'virak' ? 'the author' : vm.visitor_name}</span
				>
				<span>on</span>
				<span class="text-text-secondary">{datetime.parse(vm.created_at)}</span>
			</div>
		{/each}
	</div>
{/if}
