<script lang="ts">
	import { onMount } from 'svelte';
	import { type FsTree } from './entity';
	import FileNode from './file-node.svelte';
	import { type KeyPressEvent } from '../../shared/constants/key-press-event-map';
	import KeymapStore from '../keymap-store.svelte';

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
		keyPressEventMap[e.key] && keyPressEventMap[e.key].func();
	}

	function onKeyDown(e: KeyboardEvent) {
		const func = keyDownEventMap[e.key];
		func && func.func();
	}

	function setFocusOnFirstNode() {
		nodeEls.at(0)?.focus();
		nodeEls.at(0)?.classList.add('focus');
	}

	const keyPressEventMap: KeyPressEvent = {
		o: {
			desc: 'go blog detail',
			func: () => {
				const activeEl = nodeEls.find((el) => el.classList.contains('focus'));
				if (activeEl?.nodeName !== 'DIV') return;
				const anchorEl = activeEl?.querySelector('a');
				anchorEl && anchorEl.click();
			},
			type: 'naviation'
		}
	};

	const keyDownEventMap: KeyPressEvent = {
		j: {
			func: () => move('down'),
			desc: 'move down',
			type: 'movement'
		},
		k: {
			func: () => move('up'),
			desc: 'move up',
			type: 'movement'
		}
	};

	onMount(() => {
		const nodeList = el.querySelectorAll<HTMLElement>('[datatype]');
		nodeList.forEach((_el) => {
			nodeEls.push(_el);
		});
		setFocusOnFirstNode();

		return () => {
			document.querySelector("[data-key='local']")?.remove();
		};
	});
</script>

<svelte:document on:keydown={onKeyDown} on:keypress={onKeyPress} />

<div class="mt-24 pb-4">
	<div class="w-fit mt-4 flex flex-col gap-2 font-semibold" bind:this={el}>
		<FileNode node={tree} />
	</div>
</div>

<KeymapStore key="local" keymaps={{ ...keyPressEventMap, ...keyDownEventMap }} />
