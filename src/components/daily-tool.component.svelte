<script lang="ts">
	import { DAILY_TOOLS_ICON_LINK } from '../shared/constants/daily-tool-icon-link';
	import { t } from '../shared/services/i18n.service';
</script>

<section class="flex flex-col items-center gap-4">
	<p class="text-center text-2xl mt-40">{$t('dailyTool')}</p>
	<div class="flex items-center gap-2">
		{#each DAILY_TOOLS_ICON_LINK as tool}
			<a
				href={tool.refLink}
				target="_blank"
				class="border border-white/5 backdrop-blur-md md:w-32 md:h-32 w-24 h-24 rounded-md flex justify-center items-center hover:drop-shadow-emerald transition-all duration-300"
			>
				<img src={tool.iconLink} alt="Virak's daily tool" width="64" height="64" loading="lazy" />
			</a>
		{/each}
	</div>
</section>
