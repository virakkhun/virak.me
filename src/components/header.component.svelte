<script lang="ts">
	import { t } from '../shared/services/i18n.service';
	import I18n from './i18n.component.svelte';
</script>

<header class="flex justify-between items-center mt-2">
	<a href="/">
		<img src="/favicon.png" alt="virak's logo" width="64" height="64" />
	</a>
	<div class="flex items-center gap-4">
		<a href="/blogs" class="font-bold uppercase">{$t('nav.blogs')}</a>
		<I18n />
	</div>
</header>
