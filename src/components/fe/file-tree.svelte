<script lang="ts">
	import { onMount } from 'svelte';
	import { type FsTree } from './entity';
	import FileNode from './file-node.svelte';
	import { goto } from '$app/navigation';

	export let tree: FsTree;
	let el: HTMLDivElement;
	let focusedIndex = 1;
	const nodeEls: HTMLElement[] = [];

	function move(direction: 'up' | 'down') {
		const forward = direction === 'down';
		const maxIndex = nodeEls?.length;

		const nextEl = nodeEls.at(focusedIndex);
		const currentEl = nodeEls.at(focusedIndex - 1);
		if (forward) {
			nextEl?.focus();
			nextEl?.classList.add('focus');
			focusedIndex += 1;
			currentEl?.classList.remove('focus');
			if (maxIndex === focusedIndex) focusedIndex = 0;
			return;
		}

		if (focusedIndex === 0) focusedIndex = maxIndex;
		currentEl?.focus();
		currentEl?.classList.add('focus');
		focusedIndex -= 1;
		nextEl?.classList.remove('focus');
	}

	function onKeyPress(e: KeyboardEvent) {
		const func = keyPressEventMap[e.key];
		func && func();
	}

	function onKeyDown(e: KeyboardEvent) {
		const func = keyDownEventMap[e.key];
		func && func();
	}

	function setFocusOnFirstNode() {
		nodeEls.at(0)?.focus();
		nodeEls.at(0)?.classList.add('focus');
	}

	const keyPressEventMap: Record<string, () => void> = {
		o: () => {
			const activeEl = nodeEls.find((el) => el.classList.contains('focus'));
			if (activeEl?.nodeName !== 'DIV') return;
			const anchorEl = activeEl?.querySelector('a');
			anchorEl && anchorEl.click();
		},
		b: () => {
			goto('/');
		}
	};

	const keyDownEventMap: Record<string, () => void> = {
		ArrowUp: () => move('down'),
		ArrowDown: () => move('up'),
		j: () => move('down'),
		k: () => move('up')
	};

	onMount(() => {
		const nodeList = el.querySelectorAll<HTMLElement>('[datatype]');
		nodeList.forEach((_el) => {
			nodeEls.push(_el);
		});
		setFocusOnFirstNode();
	});
</script>

<svelte:document on:keydown={onKeyDown} on:keypress={onKeyPress} />

<div class="mt-24 pb-4">
	<div class="w-fit mt-4 flex flex-col gap-2 font-semibold" bind:this={el}>
		<FileNode node={tree} />
	</div>
</div>
