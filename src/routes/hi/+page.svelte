<script lang="ts">
	import HiTitle from './component/hi-title.component.svelte';
	import MessageInputForm from './component/message-input-form.svelte';
	import SignInWithGithub from './component/sign-in-with-github.component.svelte';
	import type { PageServerData } from './$types';
	import VisitorMessageList from './component/visitor-message-list.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Hi 👏</title>
</svelte:head>

<HiTitle />
<SignInWithGithub />
<MessageInputForm />
<VisitorMessageList visitorMessages={data.visitorMessages} />
