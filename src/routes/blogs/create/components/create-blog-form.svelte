<script lang="ts">
	import { enhance } from '$app/forms';
	import { VInput, VTextArea, VButton } from '@ui/virak.me';
	import PreviewDialog from './preview-dialog.svelte';
	import { goto } from '$app/navigation';

	let content = '';
	let openDialog = false;
</script>

<form
	method="POST"
	use:enhance={() => {
		return () => {
			goto('/blogs');
		};
	}}
>
	<div class="border border-white/20 flex flex-col gap-2 p-4 mt-4">
		<div class="grid grid-cols-3 gap-2">
			<VInput type="text" name="title" placeholder="Title" required />
			<VInput type="text" name="author" placeholder="Author" required />
			<VInput type="text" name="tags" placeholder="Tags" required />
		</div>
		<VInput type="text" name="desc" placeholder="Description" required />
		<div class="relative">
			<VTextArea name="content" required placeholder="Content" bind:value={content} />
			<VButton
				type="button"
				class="absolute top-3 right-2"
				_size="xs"
				on:click={() => (openDialog = true)}
			>
				preview
			</VButton>
		</div>
		<VButton type="submit" _size="sm">Submit</VButton>
	</div>
</form>

<PreviewDialog {content} open={openDialog} on:click={() => (openDialog = false)} />
