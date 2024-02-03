<script lang="ts">
	import { WORK_ITEM_LIST } from '../../../shared/constants/experiences';
	import WorkItem from './work-item.svelte';
	const works = WORK_ITEM_LIST;
</script>

<div class="mt-20 flex flex-col gap-10">
	{#each works as work}
		<WorkItem props={work} />
	{/each}
</div>
