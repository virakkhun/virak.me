<script lang="ts">
	import GithubIcon from '../../../assets/icons/github.svg';
	import { GITHUB_OAUTH_URL, CLIENT_ID } from '../../../shared/constants/github-app';

	const ghOAuthUrl = `${GITHUB_OAUTH_URL}/authorize?client_id=${CLIENT_ID}`;
</script>

<a
	class="border border-white/20 px-3 py-2 flex items-center gap-2 text-white w-fit"
	href={ghOAuthUrl}
>
	<span>Sign In</span>
	<img src={GithubIcon} alt="github's icon" width="24" height="24" />
</a>
