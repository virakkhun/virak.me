<script lang="ts">
	import GithubIcon from '../../../assets/icons/github.svg';
	import { CLIENT_ID, GITHUB_OAUTH_URL } from '../../../shared/constants/github-app';

	const ghOAuthUrl = `${GITHUB_OAUTH_URL}/authorize?client_id=${CLIENT_ID}`;
</script>

<a
	class="border border-accent hover:bg-accent px-3 py-2 flex items-center gap-2 w-fit"
	href={ghOAuthUrl}
>
	<span class="text-sm">Sign In</span>
	<img src={GithubIcon} alt="github's icon" width="24" height="24" loading="lazy" />
</a>
