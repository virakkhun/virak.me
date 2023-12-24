<script lang="ts">
	export let justifyContent: 'justify-between' | 'justify-end' | 'justify-start' = 'justify-end';
</script>

<div class={`flex items-center gap-4 p-4 ${justifyContent}`}>
	<slot />
</div>
