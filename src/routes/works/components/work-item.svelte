<script lang="ts">
	import type { Work } from '../models/work-item';

	export let props: Work;
</script>

<div class="flex flex-col justify-start items-start">
	<p class="text-sm text-text-secondary">{props.timePeriod}</p>
	<p class="text-2xl text-text font-semibold">{props.title}</p>
	<div class="flex items-center gap-2 my-2 lowercase">
		{#each props.skills as skill}
			<span class="text-base">{skill}</span>
		{/each}
	</div>
	<button class="text-accent text-sm">see more...</button>
</div>
