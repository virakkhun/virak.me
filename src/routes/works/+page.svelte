<script>
	import Breadcrumb from '../../components/breadcrumb.svelte';
	import Title from './components/title.svelte';
	import WorkList from './components/work-list.svelte';


  const breadcrumbs = [{link: '/', label: 'home'}, {link: '/works', label: 'works'}]
</script>

<svelte:head>
	<title>Work | Virak Khun</title>
</svelte:head>

<Breadcrumb breadcrumbs={breadcrumbs} />
<Title />
<WorkList />
