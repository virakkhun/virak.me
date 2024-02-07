<script lang="ts">
	import { onMount } from 'svelte';
	import type { User } from '../../../shared/models/user';
	import { userStore } from '../../../shared/store/user.store';
	import { fetchUserToken, getUserInfo } from '../services/sign-in-with-github.service';
	import AuthenticatedUser from './authenticated-user.svelte';
	import SignInWithGithubButton from './sign-in-with-github-button.svelte';

	let isUserExist: boolean;
	$: isUserExist = !!$userStore;

	function checkIfUserExist() {
		const user = localStorage.getItem('user');
		const userInfo = JSON.parse(user!) as unknown as User;
		userStore.set(userInfo);
	}

	function checkIfCodeParamsExist() {
		const url = window.location.search;
		const params = new URLSearchParams(url);
		const code = params.get('code');

		if (!code) return;

		fetchUserToken(code).then(() => {
			getUserInfo().then((user) => setUserInfo(user));
		});
	}

	function setUserInfo(user: User) {
		localStorage.setItem('user', JSON.stringify(user));
		checkIfUserExist();
	}

	onMount(() => {
		checkIfUserExist();
		checkIfCodeParamsExist();
	});
</script>

<div class="font-bold mt-4 flex gap-2 items-center">
	<span class="font-bold">Hi</span>
	{#if !isUserExist}
		<span>unknown</span>
		<span>??</span>
		<SignInWithGithubButton />
	{:else}
		<AuthenticatedUser authenticatedUser={$userStore} />
	{/if}
</div>
