<script lang="ts">
	import { t, locale } from '../shared/services/i18n.service';
	import Powered from '../components/powered.component.svelte';
	import SocialLink from '../components/social-link.component.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex justify-center items-center mt-20 relative">
	<div
		class="flex flex-col gap-4 items-center md:w-1/2 w-full md:px-0 px-4 text-lg text-center z-50"
	>
		<p>{$t('author.greet')}</p>
		<p class="mt-10">
			{@html $t('author.name')}
			<span class="text-4xl font-bold text-emerald-500">
				{$locale === 'en' ? 'Virak Khun' : 'ឃុន វិរៈ'}
			</span>
		</p>
		<p>
			{@html $t('author.job')}
		</p>
		<SocialLink />
		<Powered sha={data.sha} />
	</div>

	<div
		class="absolute bg-gradient-to-tl from-emerald-500/10 to-orange-500/5 drop-shadow-4xl blur-3xl w-full h-full rotate-45 translate-y-1/2"
	/>
</div>
