<script lang="ts">
	import {
		Dialog,
		DialogAction,
		DialogContent,
		DialogDescription,
		DialogTitle,
		VButton
	} from '@ui/virak.me';
	import Markdown from '../../../../components/markdown.component.svelte';

	export let open = false;
	export let content = '';
</script>

<Dialog isOpen={open}>
	<DialogTitle slot="title">Preview</DialogTitle>
	<DialogDescription slot="description">preview markdown content</DialogDescription>
	<DialogContent slot="content" class="w-[75vw] max-h-[75vh] overflow-y-auto"
		><Markdown {content} /></DialogContent
	>
	<DialogAction slot="action" justifyContent="justify-end">
		<VButton _size="sm" on:click>close</VButton>
	</DialogAction>
</Dialog>
