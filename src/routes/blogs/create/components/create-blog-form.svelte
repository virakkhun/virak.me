<script lang="ts">
	import { enhance } from '$app/forms';
	import Markdown from '../../../../components/markdown.component.svelte';

	let content = '';
</script>

<div class="grid grid-cols-2 gap-2 mt-4">
	<form method="POST" use:enhance>
		<div class="border border-white/20 flex flex-col gap-2 p-4">
			<input
				type="text"
				name="title"
				placeholder="Title"
				required
				class="text-white border border-white/20 px-3 py-2 w-full"
			/>
			<input
				type="text"
				name="desc"
				placeholder="Description"
				required
				class="text-white border border-white/20 px-3 py-2 w-full"
			/>
			<div class="flex items-center gap-2">
				<input
					type="text"
					name="author"
					placeholder="Author"
					required
					class="text-white border border-white/20 px-3 py-2 w-full"
				/>
				<input
					type="text"
					name="tags"
					placeholder="Tags"
					required
					class="text-white border border-white/20 px-3 py-2 w-full"
				/>
			</div>
			<textarea
				name="content"
				required
				class="text-white border border-white/20 px-3 py-2 w-full"
				placeholder="Content"
				bind:value={content}
			/>
		</div>
	</form>

	<div class="border border-white/20">
		<p class="p-4 border-b border-b-white/20">Instantly Review</p>
		<div class="p-4">
			<Markdown {content} />
		</div>
	</div>
</div>
