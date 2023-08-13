<script lang="ts">
	export let condition: boolean;
</script>

{#if condition}
	<slot />
{/if}
