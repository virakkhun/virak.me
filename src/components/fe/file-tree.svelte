<script lang="ts">
	import { onMount } from 'svelte';
	import { type FsTree } from './entity';
	import FileNode from './file-node.svelte';

	export let tree: FsTree;
	let el: HTMLDivElement;
	let focusedIndex = 1;
	const detectableKeys = ['ArrowDown', 'ArrowUp', 'j', 'k'];
	const nodeEls: HTMLElement[] = [];

	function onArrowDown(e: KeyboardEvent) {
		if (!detectableKeys.includes(e.key)) return;
		const maxIndex = nodeEls?.length;

		const nextEl = nodeEls.at(focusedIndex);
		const currentEl = nodeEls.at(focusedIndex - 1);

		if (e.key === 'ArrowDown' || e.key === 'j') {
			nextEl?.focus();
			nextEl?.classList.add('focus');
			focusedIndex += 1;
			currentEl?.classList.remove('focus');
			if (maxIndex === focusedIndex) focusedIndex = 0;
		}

		if (e.key === 'ArrowUp' || e.key === 'k') {
			if (focusedIndex === 0) focusedIndex = maxIndex;
			currentEl?.focus();
			currentEl?.classList.add('focus');
			focusedIndex -= 1;
			nextEl?.classList.remove('focus');
		}
	}

	function onKeyPress(e: KeyboardEvent) {
		if (e.key !== 'o') return;
		const activeEl = nodeEls.find((el) => el.classList.contains('focus'));
		if (activeEl?.nodeName !== 'DIV') return;
		const anchorEl = activeEl?.querySelector('a');
		anchorEl && anchorEl.click();
	}

	function setFocusOnFirstNode() {
		nodeEls.at(0)?.focus({
			preventScroll: true
		});
		nodeEls.at(0)?.classList.add('focus');
	}

	onMount(() => {
		const nodeList = el.querySelectorAll<HTMLElement>('[datatype]');
		nodeList.forEach((_el) => {
			nodeEls.push(_el);
		});
		setFocusOnFirstNode();
	});
</script>

<svelte:document on:keydown={onArrowDown} on:keypress={onKeyPress} />

<div class="mt-24 pb-4">
	<div class="w-fit mt-4 flex flex-col gap-2 font-semibold" bind:this={el}>
		<FileNode node={tree} />
	</div>
</div>
