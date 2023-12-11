<script lang="ts">
	import { t } from '../shared/services/i18n.service';
</script>

<section class="flex flex-col justify-center items-center gap-4">
	<p>
		{@html $t('author.job')}
	</p>
	<a href="/abouts" class="w-fit bg-orange-500 px-4 py-1 rounded-md hover:drop-shadow-emerald"
		>{$t('aboutMe')}</a
	>
</section>
