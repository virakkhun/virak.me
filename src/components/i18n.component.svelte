<script lang="ts">
	import { LOCALES, LOCALE_MAP } from '../shared/constants/locale-map';
	import { locale } from '../shared/services/i18n.service';
	import { linear } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import i18nIcon from '../assets/icons/i18n.svg';

	let showI18nSelector: boolean = false;

	function toggleShowI18nSelector() {
		showI18nSelector = !showI18nSelector;
	}
</script>

<div class="relative">
	<button on:click|stopPropagation={toggleShowI18nSelector}>
		<img src={i18nIcon} alt="i18n icon" width="24" height="24" />
	</button>

	{#if showI18nSelector}
		<div
			class="absolute z-20"
			transition:slide={{ delay: 50, duration: 150, easing: linear, axis: 'y' }}
		>
			<select bind:value={$locale} on:mouseleave={toggleShowI18nSelector}>
				{#each LOCALES as locale}
					<option value={locale}>{LOCALE_MAP[locale]}</option>
				{/each}
			</select>
		</div>

		<div
			class="fixed z-10 top-0 right-0 bg-black/50 w-full h-full"
			transition:fade={{ duration: 100, delay: 150, easing: linear }}
		/>
	{/if}
</div>
