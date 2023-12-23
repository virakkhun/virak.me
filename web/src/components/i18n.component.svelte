<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { LOCALE_MAP } from '../shared/constants/locale-map';
	import type { Locale } from '../shared/models/locale';
	import { locale } from '../shared/services/i18n.service';

	const dispatch = createEventDispatcher();

	function setLocale(l: Locale) {
		$locale = l;
		localStorage.setItem('locale', $locale);
		dispatch('onClick');
	}

	onMount(() => {
		const l = localStorage.getItem('locale') as Locale;
		locale.set(l || 'en');
	});
</script>

<button
	class="text-sm w-16 text-center px-1.5 py-1 rounded-full"
	on:click={() => setLocale($locale === 'en' ? 'kh' : 'en')}>{LOCALE_MAP[$locale]}</button
>
