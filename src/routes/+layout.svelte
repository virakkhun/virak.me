<script lang="ts">
	import '../app.css';
	import Header from '../components/header.component.svelte';
</script>

<svelte:head>
	<title>Virak Khun</title>
	<meta name="description" content="a Software Engineer based on Phnom Penh" />
	<meta
		name="keywords"
		content="portfolio,personal website,virakkhun,khunvirak,khun virak,virak dev,software engineer"
	/>
	<meta name="referrer" content="no-referrer" />
	<meta name="theme-color" content="#1A1A1A" />
	<meta name="color-scheme" content="dark light" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="creator" content="virakkhun" />
	<meta property="og:title" content="Virak Khun" />
	<meta property="og:description" content="a Software Engineer based on Phnom Penh" />
	<meta property="og:url" content="https://virak.me/" />
	<meta property="og:site_name" content="virak.me" />
	<meta property="og:locale" content="en-US" />
	<meta property="og:image" content="https://avatars.githubusercontent.com/u/86554927?v=4" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Virak Khun" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<body class="black text-white">
	<div class="relative container mx-auto lg:px-64 md:px-12 px-4">
		<Header />
		<slot />
	</div>
</body>
