<script lang="ts">
	import { linear } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import CloseMenuButton from './nav/close-menu-button.component.svelte';
	import MenuMobileToggleButton from './nav/menu-mobile-toggle-button.component.svelte';
	import Menu from './nav/menu.component.svelte';
	import VirakLogo from './nav/virak-logo.component.svelte';

	let isShowMenu: boolean = false;

	function toggleMenu() {
		isShowMenu = !isShowMenu;
	}
</script>

<header class="flex justify-between items-center mt-8">
	<VirakLogo />
	<div class="hidden md:flex items-center gap-4">
		<Menu />
	</div>

	<MenuMobileToggleButton on:onClick={toggleMenu} />

	{#if isShowMenu}
		<div
			transition:slide={{ duration: 300, axis: 'y', delay: 0, easing: linear }}
			class="z-10 fixed top-0 left-0 w-full h-screen p-4 flex flex-col justify-center items-center gap-4 bg-gray-900"
		>
			<Menu on:onNavItemClick={toggleMenu} />
			<CloseMenuButton on:onClick={toggleMenu} />
		</div>
	{/if}
</header>
