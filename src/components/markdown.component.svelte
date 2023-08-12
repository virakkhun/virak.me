<script lang="ts">
	import '../code-theme.css';
	import { markdownParser } from '$lib/markdown-parser';

	const REGEX = /(`{3}\w{1})/g;

	export let content: string;
	let markdownValue = '';

	function parseOperation(value: string) {
		const isCodeSyntax = REGEX.test(value.slice(-4));
		if (isCodeSyntax) return;
		markdownParser(value).then((v) => (markdownValue = String(v)));
	}

	$: {
		parseOperation(content);
	}
</script>

{@html markdownValue}
