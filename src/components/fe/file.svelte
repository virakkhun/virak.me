<script lang="ts">
	import RssIcon from '../../assets/icons/rss.svg';
	import Directory from './directory.svelte';
	import { type FsNode, FsType } from './entity';

	export let file: FsNode;
</script>

<div class="flex gap-1.5 items-center">
	{#if file.type === FsType.FILE}
		<img class="w-3 h-3" src={RssIcon} alt="rss icon" />
		<a href={file?.link} class="font-thin hover:text-text-secondary">
			{file.label}
		</a>
	{/if}
	{#if file?.leaf && file?.type === FsType.DIR}
		<Directory dir={file} />
	{/if}
</div>
