<script lang="ts">
	import { EXPERIENCES } from '../../shared/constants/experiences';

	const experiences = EXPERIENCES;
</script>

{#each experiences as { company, projectLinks, skills, timePeriod: [from, to], title, workDetail, isCurrent }}
	<div class="relative px-8 flex items-start gap-2 justify-center flex-col">
		<p class="text-base text-gray-100 -translate-y-[12px]">
			<span class="font-bold underline">{title}</span>
			<span>at</span>
			<a href={company.link} target="_blank" class="text-blue-500">{company.title}</a>
		</p>
		<p class="text-base text-gray-300">
			<span>{from}</span>
			<span>-</span>
			<span>{to}</span>
		</p>
		<div class="flex items-center gap-2">
			{#each skills as skill, index}
				<span class="text-gray-400 text-sm">{skill}</span>
				{#if index !== skills.length - 1}
					<span>&bull;</span>
				{/if}
			{/each}
		</div>

		<span
			class:bg-green-400={isCurrent}
			class:bg-violet-400={!isCurrent}
			class="w-3 h-3 rounded-full flex justify-center items-center absolute -top-1.5 -left-1.5"
		>
			<span
				class:animate-ping={isCurrent}
				class:bg-green-500={isCurrent}
				class:bg-violet-500={!isCurrent}
				class="aspect-square w-4 h-4 rounded-full opacity-50"
			/>
		</span>
	</div>
{/each}
