<script lang="ts">
	export let breadcrumbs: { label: string; link: string }[];
</script>

<div class="flex items-center gap-1 my-4">
	{#each breadcrumbs as { label, link }, idx}
		<a
			class={`text-sm ${idx === breadcrumbs.length - 1 ? 'text-gray-500' : 'text-accent'}`}
			href={link}
		>
			<span>{label}</span>
			{#if idx !== breadcrumbs.length - 1}
				<span>></span>
			{/if}
		</a>
	{/each}
</div>
