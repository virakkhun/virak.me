<script lang="ts">
	import ThemeSwitcher from '../components/theme-switcher.svelte';
	import CopyRight from './components/copy-right.svelte';
	import EmailMe from './components/email-me.svelte';
	import Hero from './components/hero.svelte';
	import Nav from './components/nav.svelte';
	import Social from './components/social.svelte';
</script>

<svelte:head>
	<title>Virak Khun</title>
</svelte:head>

<div class="w-full h-svh md:py-24 pt-24 pb-4 flex flex-col justify-between items-start">
	<div>
		<ThemeSwitcher />
		<Hero />
		<Social />
		<Nav />
	</div>

	<div class="flex flex-col gap-2">
		<EmailMe />
		<CopyRight />
	</div>
</div>
