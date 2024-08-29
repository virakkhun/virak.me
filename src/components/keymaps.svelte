<script lang="ts">
	import { keyPressEventMap } from '../shared/constants/key-press-event-map';
	import { SimpleDialog } from '../shared/ui';

	let simpleDialog: SimpleDialog;

	const keymaps = Object.entries(keyPressEventMap).map(([k, v]) => [
		k,
		v.toString().replace('() => ', '')
	]);

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
			{#each keymaps as [k, v]}
				<div class="flex gap-2 items-center">
					<p class="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">{k}</p>
					<p class="font-semibold text-text-secondary">{v}</p>
				</div>
			{/each}
		</div>
	</div>
</SimpleDialog>
