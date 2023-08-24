<script>
	import { SOCIAL_LINK_LIST } from '../shared/constants/social-link';
	import { SOCIAL_LINK_ICON } from '../shared/constants/social-link-icon';
	import { t } from '../shared/services/i18n.service';
</script>

<p class="text-center text-2xl mt-40">{$t('letConnect')}</p>
<div class="flex items-center gap-2">
	{#each SOCIAL_LINK_LIST as link}
		<a
			href={link.link}
			target="_blank"
			class="border border-emerald-500/10 bg-emerald-900/10 backdrop-blur-md w-32 h-32 rounded-md flex justify-center items-center hover:drop-shadow-emerald transition-all duration-300"
		>
			<img src={SOCIAL_LINK_ICON[link.title]} alt={link.link} width="24" height="24" />
		</a>
	{/each}
</div>
