<script lang="ts">
	import { enhance } from '$app/forms';
	import { VInput, VTextArea } from '@ui/virak.me';
	import Markdown from '../../../../components/markdown.component.svelte';

	let content = '';
</script>

<div class="grid grid-cols-2 gap-2 mt-4">
	<form method="POST" use:enhance>
		<div class="border border-white/20 flex flex-col gap-2 p-4">
			<VInput type="text" name="title" placeholder="Title" required />
			<VInput type="text" name="desc" placeholder="Description" required />
			<div class="flex items-center gap-2">
				<VInput type="text" name="author" placeholder="Author" required />
				<VInput type="text" name="tags" placeholder="Tags" required />
			</div>
			<VTextArea name="content" required placeholder="Content" bind:value={content} />
		</div>
	</form>

	<div class="border border-white/20">
		<p class="p-4 border-b border-b-white/20">Instantly Review</p>
		<div class="p-4">
			<Markdown {content} />
		</div>
	</div>
</div>
