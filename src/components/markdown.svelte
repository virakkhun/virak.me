<script lang="ts">
	import { onMount } from 'svelte';
	import '../assets/css/shade-of-purple.css';
	import CopyIcon from '../assets/icons/copy.svg';

	export let content: string;

	const REGEX = /(`{3}\w{1})/g;
	let markdownValue = '';
	let showAlert = false;

	function parseOperation(value: string) {
		if (!value) return;
		const isCodeSyntax = REGEX.test(value.slice(-4));
		if (isCodeSyntax) return;
		markdownValue = String(value).replaceAll(/"(\d{1})"/g, (v) => {
			return `' ${v.replaceAll('"', '')}'`;
		});
	}

	function appendBtnEleToEachPre() {
		const preEleRefs = document.querySelectorAll('pre');

		preEleRefs.forEach((el) => {
			const contentChild = [''];
			el.classList.add('relative');
			el.firstChild?.childNodes.forEach((el) => contentChild.push(el.textContent!));
			el.appendChild(getCopyEle(contentChild.join('')));
			el.appendChild(getLineNumberIndicatorEle());
		});
	}

	function copyToClipboard(value: string) {
		navigator.clipboard.writeText(value).then(() => {
			showAlert = !showAlert;
			setTimeout(() => {
				showAlert = !showAlert;
			}, 2000);
		});
	}

	function getLineNumberIndicatorEle() {
		const divEle = document.createElement('div');
		divEle.classList.add('absolute', 'top-0', 'left-0', 'w-12', 'bg-[#1e243e]', 'h-full', '-z-10');
		return divEle;
	}

	function getCopyEle(value: string) {
		const btnEle = document.createElement('button');
		btnEle.className =
			'absolute text-sm top-4 right-4 p-2 rounded-md bg-primary hover:bg-secondary transition-all duratiion-200';
		btnEle.value = value;
		btnEle.addEventListener('click', (e) => {
			copyToClipboard((<HTMLInputElement>e.target).value);
		});
		btnEle.appendChild(getCopyImgSrc());
		return btnEle;
	}

	function insertIdToParent() {
		const anchors = document.querySelectorAll('a');
		anchors.forEach((a) => {
			if (a.parentElement?.nodeName === 'P') {
				a.parentElement.id = new URL(a.href).hash.replace('#', '');
				a.parentElement.className = 'section';
			}
		});
	}

	function getCopyImgSrc() {
		const imgEle = document.createElement('img');
		imgEle.src = CopyIcon;
		imgEle.width = 16;
		imgEle.height = 16;
		imgEle.alt = 'copy icon';
		return imgEle;
	}

	$: {
		parseOperation(content);
	}

	onMount(() => {
		insertIdToParent();
		appendBtnEleToEachPre();
	});
</script>

<div class="code-wrapper">
	{@html markdownValue}
</div>

{#if showAlert}
	<p class="text-sm p-2 rounded-md fixed bottom-4 right-4 bg-primary text-background">
		copied to clipboard
	</p>
{/if}
