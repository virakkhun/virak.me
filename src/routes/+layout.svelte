<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '../app.css';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>Virak Khun</title>
	<meta
		name="description"
		content="a Software Engineer based in Phnom Penh, graduated from RUPP majored in Computer Science"
	/>
	<meta
		name="keywords"
		content="portfolio,personal website,virakkhun,khunvirak,khun virak,virak dev,software engineer"
	/>
	<meta name="referrer" content="no-referrer" />
	<meta name="theme-color" content="#1A1A1A" />
	<meta name="color-scheme" content="dark" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="creator" content="virakkhun" />
	<meta property="og:title" content="Virak Khun" />
	<meta
		property="og:description"
		content="a Software Engineer based in Phnom Penh, graduated from RUPP majored in Computer Science"
	/>
	<meta property="og:url" content="https://virak.me/" />
	<meta property="og:site_name" content="VIRAK KHUN" />
	<meta property="og:locale" content="en-US" />
	<meta property="og:image" content="https://avatars.githubusercontent.com/u/86554927?v=4" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Virak Khun" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<main class="container mx-auto md:px-24 px-4 relative">
	<slot />
</main>
