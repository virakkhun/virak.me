<script lang="ts">
	import { GITHUB_COMMIT_SHA } from '../shared/constants/github-app';
	import { t } from '../shared/services/i18n.service';
	export let sha: string | undefined;
</script>

<div class="md:text-sm text-xs flex flex-col justify-center items-center w-full my-2">
	<div class="flex justify-center items-center gap-2 w-full mt-32">
		<p>
			{@html $t('frameworkRef')}
			<a
				href="https://kit.svelte.dev"
				target="_blank"
				class="text-orange-600 font-bold hover:text-orange-700 duration-200">SvelteKit</a
			>
		</p>
		|
		<p>
			<span>Deploy on</span>
			<a
				href="https://vercel.com/"
				target="_blank"
				class="text-orange-600 font-bold hover:text-orange-700 duration-200">Vercel</a
			>
		</p>
	</div>
	<div class="flex justify-center items-center gap-1 mt-1">
		<span class="bg-green-500/50 w-3 h-3 rounded-full flex justify-center items-center">
			<span class="bg-green-500 w-2 h-2 rounded-full" />
		</span>
		<a href={`${GITHUB_COMMIT_SHA}${sha}`}>{sha}</a>
	</div>
</div>
