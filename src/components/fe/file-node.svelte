<script lang="ts">
	import Directory from './directory.svelte';
	import { type FsNode, FsType } from './entity';
	import File from './file.svelte';

	export let node: FsNode;
</script>

{#if node.type === FsType.FILE}
	<File file={node} />
{/if}

{#if node.type === FsType.DIR}
	<Directory dir={node} />
{/if}
