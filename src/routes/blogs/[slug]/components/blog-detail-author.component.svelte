<script lang="ts">
	import { DT } from '$lib/datetime';

	export let authorName: string;
	export let publishedDate: string;
</script>

<p class="flex items-center justify-start gap-2 text-gray-600">
	<span class="font-bold">{authorName}</span>
	<span>-</span>
	<span class="">{DT.parse(publishedDate)}</span>
</p>
