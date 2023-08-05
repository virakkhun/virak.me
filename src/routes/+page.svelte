<script>
	import SocialLink from '../components/social-link.component.svelte';
	import { t } from '../shared/services/i18n.service';
</script>

<div class="w-full h-screen flex justify-center items-center relative">
	<div class="flex flex-col gap-4 items-center md:w-1/2 w-full md:px-0 px-4 text-lg text-center">
		<p>{$t('author.greet')}</p>
		<p>
			{@html $t('author.name')}
		</p>
		<p>
			{@html $t('author.job')}
		</p>
		<SocialLink />
	</div>
</div>
