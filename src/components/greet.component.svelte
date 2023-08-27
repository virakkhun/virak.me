<script lang="ts">
	import { t, locale } from '../shared/services/i18n.service';
</script>

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
<a href="/abouts" class="bg-orange-500 px-4 py-1 rounded-md hover:drop-shadow-emerald"
	>{$t('aboutMe')}</a
>
