<script lang="ts">
	import SvelteLogo from '../assets/icons/svelteLogo.svg';
	import VercelLogo from '../assets/icons/vercel.svg';
	import { GITHUB_COMMIT_SHA } from '../shared/constants/github-app';
	import { t } from '../shared/services/i18n.service';
	export let sha: string | undefined;
</script>

<div class="md:text-sm text-xs flex flex-col justify-center items-center w-full my-2">
	<div class="flex justify-center items-center gap-2 w-full mt-32">
		<p class="flex items-center gap-2">
			<span>{@html $t('frameworkRef')}</span>
			<a
				href="https://kit.svelte.dev"
				target="_blank"
				class="text-orange-600 font-bold hover:text-orange-700 duration-200"
			>
				<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
					<img
						class="w-4 h-4"
						width="16"
						height="16"
						src={SvelteLogo}
						alt="svelte's logo"
						loading="lazy"
					/>
				</div>
			</a>
		</p>
		|
		<p class="flex items-center gap-2">
			<span>Powered by</span>
			<a
				href="https://vercel.com/"
				target="_blank"
				class="text-orange-600 font-bold hover:text-orange-700 duration-200"
			>
				<div class="w-8 h-8 bg-black rounded-full flex items-center justify-center">
					<img src={VercelLogo} alt="vercel's logo" class="w-4 h-4" width="16" height="16" />
				</div>
			</a>
		</p>
	</div>
	<div class="flex justify-center items-center gap-1 mt-1">
		<span class="bg-green-500/50 w-3 h-3 rounded-full flex justify-center items-center">
			<span class="bg-green-500 w-2 h-2 rounded-full" />
		</span>
		<a href={`${GITHUB_COMMIT_SHA}${sha}`}>{sha}</a>
	</div>
</div>
