<script lang="ts">
	import { SimpleDialog } from '../shared/ui';
	import { readKeyMapDataFromDom } from '../shared/utils/keymap-store';
	import { browser } from '$app/environment';

	let simpleDialog: SimpleDialog;

	const keymaps = browser ? Object.entries(readKeyMapDataFromDom()) : null;
	export function close() {
		simpleDialog.close();
	}

	export function open() {
		simpleDialog.open();
	}

	export function toogle() {
		if (simpleDialog.isOpen()) close();
		else open();
	}
</script>

<SimpleDialog bind:this={simpleDialog}>
	<div class="z-50 fixed w-full bottom-0 left-0 p-4">
		<div class="flex flex-wrap gap-4 rounded-md border border-accent bg-[#fff] h-fit p-4">
			{#if keymaps}
				{#each keymaps as [k, v]}
					<div class="flex gap-2 items-center">
						<p
							class="w-10 h-10 text-sm font-bold rounded-md text-text-secondary bg-secondary flex items-center justify-center"
						>
							{k}
						</p>
						<p class="font-semibold text-text-secondary text-sm">{v.desc}</p>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</SimpleDialog>
