<script lang="ts">
	import { LOCALE_MAP } from '../shared/constants/locale-map';
	import { locale } from '../shared/services/i18n.service';
	import type { Locale } from '../shared/models/locale';

	function switchLocale(locale: Locale) {
		$locale = locale;
	}
</script>

<div class="h-10 border-gray-50/50 border">
	<div class="flex items-center font-bold text-sm">
		<button
			class="h-10 px-4 flex items-center justify-center"
			class:text-yellow-500={$locale === 'en'}
			on:click={() => switchLocale('en')}>{LOCALE_MAP.en}</button
		>
		<button
			class="h-10 px-4 flex items-center justify-center"
			class:text-blue-500={$locale === 'kh'}
			on:click={() => switchLocale('kh')}>{LOCALE_MAP.kh}</button
		>
	</div>
</div>
