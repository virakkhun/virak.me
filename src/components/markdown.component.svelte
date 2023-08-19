<script lang="ts">
	import '../assets/css/code-theme.css';
	import { markdownParser } from '$lib/markdown-parser';
	import { browser } from '$app/environment';

	const REGEX = /(`{3}\w{1})/g;

	export let content: string;
	let markdownValue = '';
	let showAlert = false;

	function parseOperation(value: string) {
		if (!value) return;
		const isCodeSyntax = REGEX.test(value.slice(-4));
		if (isCodeSyntax) return;
		markdownParser(value)
			.then((v) => {
				markdownValue = String(v);
			})
			.then(() => {
				if (!browser) return;
				appendBtnEleToEachPre();
				insertIdToParent();
			});
	}

	function appendBtnEleToEachPre() {
		const preEleRefs = document.querySelectorAll('pre');

		preEleRefs.forEach((el) => {
			const contentChild = [''];
			el.classList.add('relative');
			el.firstChild?.childNodes.forEach((el) => contentChild.push(el.textContent!));
			el.appendChild(getCopyEle(contentChild.join('')));
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

	function getCopyEle(value: string) {
		const btnEle = document.createElement('button');
		btnEle.innerText = 'copy';
		btnEle.className =
			'absolute text-sm top-4 right-4 p-1 rounded-md hover:bg-gray-900 bg-gray-700';
		btnEle.value = value;
		btnEle.addEventListener('click', (e) => {
			copyToClipboard((e.target as HTMLButtonElement).value);
		});
		return btnEle;
	}

	function insertIdToParent() {
		const anchors = document.querySelectorAll('a');
		anchors.forEach((a) => {
			if (a.parentElement?.nodeName === 'P') {
				a.parentElement.id = new URL(a.href).hash.replace('#', '');
			}
		});
	}

	$: {
		parseOperation(content);
	}
</script>

{@html markdownValue}

{#if showAlert}
	<span class="text-sm p-2 rounded-md fixed bottom-4 right-4 bg-black/20 backdrop-blur-md"
		>copied to clipboard</span
	>
{/if}
