<script lang="ts">
	import { page } from '$app/stores';
	import { t, type MessageKeys } from '../shared/services/i18n.service';
	import I18n from './i18n.component.svelte';

	const navContent: Array<{ href: string; name: MessageKeys }> = [
		{ href: '/blogs', name: 'nav.blogs' },
		{ href: '/library', name: 'nav.library' }
	];
</script>

<header class="flex justify-between items-center mt-8 container mx-auto lg:px-64 md:px-12 px-4">
	<a href="/">
		<img src="/favicon.png" alt="virak's logo" width="42" height="42" loading="lazy" />
	</a>
	<div class="flex items-center gap-4">
		{#each navContent as nav}
			<div>
				<a
					title={$t(nav.name)}
					href={nav.href}
					class:text-violet-700={$page.url.pathname === nav.href}
					class="uppercase font-bold text-violet-300 hover:text-violet-500 text-lg underline underline-offset-2 transition-all duration-200"
					>{$t(nav.name)}</a
				>
			</div>
		{/each}
		<div>|</div>
		<I18n />
	</div>
</header>
