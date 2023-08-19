<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { Input } from '@ui/virak.me/src/input';
	import { TextArea } from '@ui/virak.me/src/textarea';
	import { Button } from '@ui/virak.me/src/button';
	import PreviewDialog from './preview-dialog.svelte';

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
			<Input type="text" name="title" placeholder="Title" required />
			<Input type="text" name="author" placeholder="Author" required />
			<Input type="text" name="tags" placeholder="Tags" required />
		</div>
		<Input type="text" name="desc" placeholder="Description" required />
		<div class="relative">
			<TextArea name="content" required placeholder="Content" bind:value={content} />
			<Button
				type="button"
				class="absolute top-3 right-2"
				_size="xs"
				on:click={() => (openDialog = true)}
			>
				preview
			</Button>
		</div>
		<Button type="submit" _size="sm">Submit</Button>
	</div>
</form>

<PreviewDialog {content} open={openDialog} on:click={() => (openDialog = false)} />
