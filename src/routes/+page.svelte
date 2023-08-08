<script>
	import SocialLink from '../components/social-link.component.svelte';
	import { t, locale } from '../shared/services/i18n.service';
</script>

<div class="flex justify-center items-center mt-20">
	<div class="flex flex-col gap-4 items-center md:w-1/2 w-full md:px-0 px-4 text-lg text-center">
		<p>{$t('author.greet')}</p>
		<p>
			{@html $t('author.name')}
			<span class="text-4xl font-bold text-emerald-500">
				{$locale === 'en' ? 'Virak Khun' : 'ឃុន វិរៈ'}
			</span>
		</p>
		<p>
			{@html $t('author.job')}
		</p>
		<SocialLink />
		<a href="/hi" class="underline text-pink-500 mt-4 text-center" title="leave a word"
			>leave a word</a
		>
	</div>
</div>
