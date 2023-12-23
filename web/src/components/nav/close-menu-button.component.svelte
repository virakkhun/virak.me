<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import XIcon from '../../assets/icons/x-icon.svg';

	const dispatch = createEventDispatcher();

	function onDispatch() {
		dispatch('onClick');
	}
</script>

<button
	class="absolute top-4 w-10 h-10 rounded-full bg-gray-100/10 flex justify-center items-center mx-auto"
	on:click={onDispatch}
>
	<img src={XIcon} alt="x icon" width="20" height="20" />
</button>
