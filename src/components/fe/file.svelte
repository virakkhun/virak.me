<script lang="ts">
	import RssIcon from '../../assets/icons/rss.svg';
	import Directory from './directory.svelte';
	import { type FsNode, FsType } from './entity';

	export let file: FsNode;
</script>

{#if file.type === FsType.FILE}
	<div class="flex gap-1.5 border-b border-b-[rgba(0,0,0,0)] items-center" datatype="file">
		<img class="w-3 h-3" src={RssIcon} alt="rss icon" />
		<a href={file?.link} class="font-thin hover:text-text-secondary">
			{file.label}
		</a>
	</div>
{/if}
{#if file?.leaf && file?.type === FsType.DIR}
	<Directory dir={file} />
{/if}
