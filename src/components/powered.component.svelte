<script lang="ts">
	import { t } from '../shared/services/i18n.service';
	export let sha: string | undefined;
</script>

<div
	class="fixed bottom-4 left-0 md:text-sm text-xs flex flex-col justify-center items-center w-full"
>
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
		<span class="bg-green-500 w-3 h-3 rounded-full" />
		<span>{sha}</span>
	</div>
</div>
