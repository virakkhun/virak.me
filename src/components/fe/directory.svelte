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

	function registerKeyEvent(e: KeyboardEvent) {
		const isT = e.key === 't';
		isT && toggle();
	}
</script>

<svelte:document on:keypress={registerKeyEvent} />

<div class="flex flex-col gap-1">
	<button
		on:click={toggle}
		class="outline-none border-b border-b-[rgba(0,0,0,0)] flex gap-1 items-center"
		datatype="directory"
	>
		<img
			class="w-2 h-2 {collaped ? '-rotate-90' : 'rotate-0'}"
			src={ChevronIcon}
			alt={collaped ? 'chevron icon right' : 'chevron icon down'}
		/>
		<img class="w-3 h-3" src={DirIcon} alt="dir open icon" />
		<p class="font-semibold">{dir.label}</p>
	</button>

	<div class="flex flex-col gap-1 ml-4 {collaped && 'hidden'}">
		{#if dir?.leaf}
			{#each dir.leaf as file}
				<File {file} />
			{/each}
		{/if}
	</div>
</div>
