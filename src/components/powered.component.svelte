<script lang="ts">
	import { t } from '../shared/services/i18n.service';
</script>

<div class="flex justify-center items-center w-full absolute bottom-4 left-0">
	<p>
		{@html $t('frameworkRef')}
		<a
			href="https://kit.svelte.dev"
			target="_blank"
			class="text-orange-600 font-bold hover:text-orange-700 duration-200">SvelteKit</a
		>
	</p>
</div>
