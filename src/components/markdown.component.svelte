<script lang="ts">
	import '../assets/css/code-theme.css';
	import { markdownParser } from '$lib/markdown-parser';
	import { browser } from '$app/environment';

	const REGEX = /(`{3}\w{1})/g;

	export let content: string;
	let markdownValue = '';
	let showAlert = false;

	function parseOperation(value: string) {
		console.log(value);
		if (!value) return;
		console.log(value);
		const isCodeSyntax = REGEX.test(value.slice(-4));
		if (isCodeSyntax) return;
		markdownParser(value).then((v) => {
			markdownValue = String(v);

			if (!browser) return;

			setTimeout(() => {
				appendBtnEleToEachPre();
			});
		});
	}

	function appendBtnEleToEachPre() {
		const preEleRefs = document.querySelectorAll('pre');
		const btnEle = document.createElement('button');
		btnEle.innerText = 'copy';
		btnEle.className =
			'absolute text-sm top-4 right-4 p-1 rounded-md hover:bg-gray-900 bg-gray-700';
		btnEle.addEventListener('click', (e) => {
			copyToClipboard((e.target as HTMLButtonElement).value);
		});

		preEleRefs.forEach((el) => {
			const contentChild = [''];
			el.classList.add('relative');
			el.firstChild?.childNodes.forEach((el) => contentChild.push(el.textContent!));
			btnEle.value = contentChild.join('');
			el.appendChild(btnEle);
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
