<script lang="ts">
	import Backdrop from '../components/backdrop.component.svelte';
	import DailyTool from '../components/daily-tool.component.svelte';
	import Greet from '../components/greet.component.svelte';
	import Powered from '../components/powered.component.svelte';
	import SocialLink from '../components/social-link.component.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Virak Khun</title>
</svelte:head>

<div class="flex justify-center items-center mt-20 relative">
	<div
		class="flex flex-col gap-4 items-center md:w-1/2 w-full md:px-0 px-4 text-lg text-center z-50"
	>
		<Greet />
		<DailyTool />
		<SocialLink />
		<Powered sha={data.sha} />
	</div>

	<Backdrop />
</div>
