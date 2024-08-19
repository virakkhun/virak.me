<script lang="ts">
	import { type FsTree } from './entity';
	import FileNode from './file-node.svelte';

	export let tree: FsTree;
</script>

<div class="mt-24 pb-4">
	<div class="mt-4 flex flex-col gap-2 font-semibold">
		<FileNode node={tree} />
	</div>
</div>
