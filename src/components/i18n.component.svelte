<script lang="ts">
	import type { Locale } from '../shared/models/locale';
	import { LOCALE_MAP } from '../shared/constants/locale-map';
	import { locale } from '../shared/services/i18n.service';
	import { onMount } from 'svelte';

	function setLocale(l: Locale) {
		$locale = l;
		localStorage.setItem('locale', $locale);
	}

	onMount(() => {
		const l = localStorage.getItem('locale') as Locale;
		locale.set(l || 'en');
	});
</script>

<div class="flex items-center px-2 py-1 rounded-full bg-black/10 border border-orange-500/50">
	<button
		class:bg-orange-400={$locale === 'en'}
		class="text-sm w-full px-1.5 py-1 rounded-full"
		on:click={() => setLocale('en')}>{LOCALE_MAP['en']}</button
	>
	<button
		class:bg-orange-400={$locale === 'kh'}
		class="text-sm w-full px-1.5 py-1 rounded-full"
		on:click={() => setLocale('kh')}>{LOCALE_MAP['kh']}</button
	>
</div>
