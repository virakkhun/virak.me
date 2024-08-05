<script lang="ts">
	const navContent: { href: string; name: string }[] = [
		{ href: '/works', name: 'works' },
		{ href: '/blogs', name: 'blogs' }
	];
</script>

<section class="mt-20 flex gap-6 items-center">
	{#each navContent as { href, name }}
		<a title={name} class="text-accent hover:text-primary duration-200 transition-colors" {href}
			>{name}</a
		>
	{/each}
</section>
