<script lang="ts">
	import { page } from '$app/stores';
	import { t, type MessageKeys } from '../shared/services/i18n.service';
	import I18n from './i18n.component.svelte';

	const navContent: Array<{ href: string; name: MessageKeys }> = [
		{ href: '/blogs', name: 'nav.blogs' },
		{ href: '/guests', name: 'nav.guest' },
		{ href: '/abouts', name: 'aboutMe' }
	];
</script>

<header class="flex justify-between items-center mt-8">
	<a href="/">
		<img src="/favicon.png" alt="virak's logo" width="42" height="42" loading="lazy" />
	</a>
	<div class="flex items-center gap-4">
		{#each navContent as nav}
			<a
				title={$t(nav.name)}
				href={nav.href}
				class:text-green-100={$page.url.pathname === nav.href}
				class="lowercase font-bold text-green-200 hover:text-green-300 text-lg underline underline-offset-2 transition-all duration-200"
				>{$t(nav.name)}</a
			>
		{/each}
		<I18n />
	</div>
</header>
