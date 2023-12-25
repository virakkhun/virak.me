<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
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
	class="text-sm w-8 h-8 bg-green-500/10 border border-white/10 rounded-full flex justify-center items-center"
	on:click={() => setLocale($locale === 'en' ? 'kh' : 'en')}>{$locale}</button
>
