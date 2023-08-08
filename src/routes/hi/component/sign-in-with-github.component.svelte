<script lang="ts">
	import { GITHUB_OAUTH_URL, CLIENT_ID } from '../../../shared/constants/github-app';
	import { onMount } from 'svelte';
	import GithubIcon from '../../../assets/icons/github.svg';
	import type { User } from '../../../shared/models/user';

	let userInfo: User;
	let isUserExist: boolean;

	const ghOAuthUrl = `${GITHUB_OAUTH_URL}/authorize?client_id=${CLIENT_ID}`;

	async function getUserToken(code: string, func: Function) {
		const res = await fetch(`/api/user-token-api?code=${code}`);

		if (!res.ok) throw new Error(res.statusText);

		func();
	}

	function checkIfUserExist() {
		const user = localStorage.getItem('user');
		userInfo = JSON.parse(user!) as unknown as User;
		isUserExist = !!user;
	}

	function checkIfCodeParamsExist() {
		const url = window.location.search;
		const params = new URLSearchParams(url);
		const code = params.get('code');
		if (!code) return;

		getUserToken(code, getUserInfo);
	}

	async function getUserInfo() {
		const res = await fetch('/api/user-info-api');

		if (!res.ok) throw new Error(res.statusText);

		const data = await res.json();

		localStorage.setItem('user', JSON.stringify(data));
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
		<span class="uppercase text-2xl text-yellow-500 italic">unknown</span>
		<span>??</span>
		<a
			class="border border-white/20 px-3 py-2 flex items-center gap-2 text-white w-fit"
			href={ghOAuthUrl}
		>
			<span>Sign In</span>
			<img src={GithubIcon} alt="github's icon" width="24" height="24" />
		</a>
	{:else}
		<span class="uppercase text-2xl text-yellow-500 italic">{userInfo.name}</span>
		<img
			src={userInfo.avatar_url}
			alt={userInfo.bio}
			width="56"
			height="56"
			class="rounded-full object-cover mx-2"
		/>
	{/if}
</div>
