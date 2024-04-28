<script lang="ts">
	import Breadcrumb from '../../components/breadcrumb.svelte';
	import type { PageServerData } from './$types';
	import HiTitle from './component/hi-title.component.svelte';
	import MessageInputForm from './component/message-input-form.svelte';
	import SignInWithGithub from './component/sign-in-with-github.component.svelte';
	import VisitorMessageList from './component/visitor-message-list.svelte';

	export let data: PageServerData;
  const breadcrumbs = [{link: '/', label: 'home'}, {link: '/say-hi', label: 'say-hi'}]
</script>

<svelte:head>
	<title>Hi 👏</title>
</svelte:head>

<Breadcrumb breadcrumbs={breadcrumbs} />
<HiTitle />
<SignInWithGithub />
<MessageInputForm />
<VisitorMessageList visitorMessages={data.visitorMessages} />
