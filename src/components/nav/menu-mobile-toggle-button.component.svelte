<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Bar4Icon from '../../assets/icons/bar-4.svg';

	const dispatch = createEventDispatcher();

	function onClick() {
		dispatch('onClick');
	}
</script>

<button on:click={onClick} class="block md:hidden">
	<img src={Bar4Icon} alt="bar 4 icon" width="20" height="20" />
</button>
