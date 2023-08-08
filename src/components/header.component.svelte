<script lang="ts">
	import { t } from '../shared/services/i18n.service';
	import I18n from './i18n.component.svelte';
</script>

<header class="flex justify-between items-center mt-8">
	<a href="/">
		<img src="/favicon.png" alt="virak's logo" width="42" height="42" />
	</a>
	<div class="flex items-center gap-4">
		<div>
			<a href="/blogs" class="font-bold lowercase">{$t('nav.blogs')}</a>
		</div>
		<div>|</div>
		<I18n />
	</div>
</header>
