<script lang="ts">
	import '../code-theme.css';
	import { markdownParser } from '$lib/markdown-parser';

	export let content: string;
	markdownParser(content).then((v) => (content = String(v)));
</script>

{@html content}
