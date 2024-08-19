<script lang="ts">
	import { type FsNode } from './entity';
	import DirIcon from '../../assets/icons/dir-open.svg';
	import ChevronIcon from '../../assets/icons/chevron.svg';
	import File from './file.svelte';

	export let dir: FsNode;
	let collaped: boolean = false;

	function toggle() {
		collaped = !collaped;
	}
</script>

<button class="flex flex-col gap-1" on:click={toggle}>
	<div class="flex gap-1 items-center">
		<img
			class="w-2 h-2 {collaped ? '-rotate-90' : 'rotate-0'}"
			src={ChevronIcon}
			alt={collaped ? 'chevron icon right' : 'chevron icon down'}
		/>
		<img class="w-3 h-3" src={DirIcon} alt="dir open icon" />
		<p class="font-semibold">{dir.label}</p>
	</div>

	{#if !collaped}
		<div class="flex flex-col gap-1 ml-4">
			{#if dir?.leaf}
				{#each dir.leaf as file}
					<File {file} />
				{/each}
			{/if}
		</div>
	{/if}
</button>
