<script>
	import { base } from '$app/paths';
	import Breadcrumb from '../../components/breadcrumb.svelte';
	import { keyPressEventMap } from '../../shared/constants/key-press-event-map';
	import Title from './components/title.svelte';
	import WorkList from './components/work-list.svelte';

	const breadcrumbs = [
		{ link: '/', label: 'home' },
		{ link: `${base}/works`, label: 'works' }
	];
</script>

<svelte:head>
	<title>Work | Virak Khun</title>
</svelte:head>

<svelte:document on:keypress={(e) => keyPressEventMap[e.key] && keyPressEventMap[e.key]} />
<Breadcrumb {breadcrumbs} />
<Title />
<WorkList />
