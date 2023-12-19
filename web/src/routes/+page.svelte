<script lang="ts">
	import Backdrop from '../components/backdrop.component.svelte';
	import DailyTool from '../components/daily-tool.component.svelte';
	import Greet from '../components/greet.component.svelte';
	import Hero from '../components/hero.component.svelte';
	import Powered from '../components/powered.component.svelte';
	import SocialLink from '../components/social-link.component.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Virak Khun</title>
</svelte:head>

<Hero />
<Greet />
<DailyTool />
<SocialLink />

<footer>
	<Powered sha={data.sha} />
</footer>

<Backdrop />
