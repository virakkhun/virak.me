<script lang="ts">
	import { onMount } from 'svelte';
	import { THEME, Theme } from '../shared/models/theme';
	import SunIcon from '../assets/icons/sun.svg';
	import MoonIcon from '../assets/icons/moon.svg';

	let theme = Theme.LIGHT;
	const btnActionMap: Record<Theme, () => void> = {
		[Theme.LIGHT]: () => setTheme(Theme.DARK),
		[Theme.DARK]: () => setTheme(Theme.LIGHT)
	};
	const themeIconMap: Record<Theme, string> = {
		[Theme.LIGHT]: MoonIcon,
		[Theme.DARK]: SunIcon
	};

	function setTheme(t: Theme) {
		const isOldTheme = isDocContainClass(theme);
		if (isOldTheme) document.documentElement.classList.remove(theme);

		theme = t;
		document.documentElement.classList.add(t);
		localStorage.setItem(THEME, t);
	}

	function getThemeFromLocal(): Theme | null {
		const t = localStorage.getItem(THEME);
		return <Theme>t;
	}

	function isDocContainClass(c: string) {
		return document.documentElement.classList.contains(c);
	}

	onMount(() => {
		const t = getThemeFromLocal();
		if (!t) return;
		setTheme(t);
	});
</script>

<button
	type="button"
	on:click={btnActionMap[theme]}
	class="dark:bg-text w-6 h-6 rounded-full flex justify-center items-center transition-all duration-200"
>
	<img src={themeIconMap[theme]} class="w-4 h-4" alt="theme icon" width="16" height="16" />
</button>
