<script lang="ts">
	import { DT } from '$lib/datetime';
	import type { VisitorMessages } from '../models/visitor-message';

	export let visitorMessages: VisitorMessages | null;
	$: isEmpty = visitorMessages?.length === 0;
</script>

{#if visitorMessages}
	<div class:bg-gray-800={!isEmpty} class="flex flex-col gap-2 items-start my-4 rounded-md p-4">
		{#each visitorMessages as vm}
			<div
				class="flex md:items-center items-start md:gap-2 md:flex-row flex-col bg-gray-500/10 p-2 w-full rounded-md"
			>
				<span class="text-white/80 text-base">{vm.visitor_name}</span>
				<span class="font-bold italic md:text-xl text-md">"{vm.message}"</span>
				<div>
					<span class="text-white/50">on {DT.parse(vm.created_at)}</span>
				</div>
			</div>
		{/each}
	</div>
{/if}
