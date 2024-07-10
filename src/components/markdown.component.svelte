<script lang="ts">
	import { browser } from '$app/environment';
	import { markdownParser } from '$lib/markdown-parser';
	import '../assets/css/shade-of-purple.css';

	export let content: string;

	const REGEX = /(`{3}\w{1})/g;
	let markdownValue = '';
	let showAlert = false;

	function parseOperation(value: string) {
		if (!value) return;
		const isCodeSyntax = REGEX.test(value.slice(-4));
		if (isCodeSyntax) return;
		markdownParser(value)
			.then((v) => {
				markdownValue = String(v).replaceAll(/"(\d{1})"/g, (v) => {
					return `0${v.replaceAll('"', '')}`;
				});
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
		btnEle.innerText = 'copy';
		btnEle.className =
			'absolute text-sm top-4 right-4 p-1 rounded-md hover:bg-gray-900 bg-gray-700';
		btnEle.value = value;
		btnEle.addEventListener('click', (e) => {
			copyToClipboard((<HTMLInputElement>e.target).value);
		});
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

	$: {
		parseOperation(content);
	}
</script>

{@html markdownValue}

{#if showAlert}
	<p class="text-sm p-2 rounded-md fixed bottom-4 right-4">copied to clipboard</p>
{/if}
