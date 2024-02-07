<script lang="ts">
	import { datetime } from '$lib/datetime';

	export let authorName: string;
	export let publishedDate: string;
</script>

<p class="flex items-center justify-start gap-2 text-gray-600">
	<span class="font-bold">{authorName}</span>
	<span>-</span>
	<span class="">{datetime.parse(publishedDate)}</span>
</p>
