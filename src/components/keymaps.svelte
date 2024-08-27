<script lang="ts">
	import { keyPressEventMap } from '../shared/constants/key-press-event-map';

	const keymaps = Object.entries(keyPressEventMap).map(([k, v]) =>
		k === 'K' ? [k, 'toggle keyboard shortcuts'] : [k, v.toString().replace('() => ', '')]
	);
</script>

<div class="fixed bottom-0 left-0 p-4 w-full h-svh flex flex-col justify-end bg-[rgba(0,0,0,0.2)]">
	<div class="flex flex-wrap gap-4 rounded-md border border-accent bg-[#fff] h-fit p-4">
		{#each keymaps as [k, v]}
			<div class="flex gap-2 items-center">
				<p class="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">{k}</p>
				<p class="font-semibold text-text-secondary">{v}</p>
			</div>
		{/each}
	</div>
</div>
