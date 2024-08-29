<script lang="ts">
	import { type KeyPressEvent } from '../shared/constants/key-press-event-map';

	export let keymaps: KeyPressEvent;
	export let key: 'local' | 'global' = 'global';

	function stringifier(value: KeyPressEvent) {
		return JSON.stringify(value);
	}
</script>

<div class="hidden" datatype="keymap-store" data-key={key}>{stringifier(keymaps)}</div>
