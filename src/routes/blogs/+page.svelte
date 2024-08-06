<script lang="ts">
	import blogs, { FsType, FsIcons } from '$lib/blogs';
	import Breadcrumb from '../../components/breadcrumb.svelte';

	const _breadcrumbs = [
		{ link: '/', label: 'home' },
		{ link: '/blogs', label: 'blogs' }
	];
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<Breadcrumb breadcrumbs={_breadcrumbs} />
<div class="mt-24 pb-4">
	<div class="mt-4 flex flex-col gap-2 font-semibold">
		{#each blogs as b}
			{#if b.type === FsType.DIR}
				<div class="flex flex-col gap-2">
					<div class="flex gap-1 items-center">
						<img class="w-3 h-3" src={FsIcons[b.type]} alt="dir open icon" />
						<p class="font-semibold">{b.label}</p>
					</div>
					<div class="flex flex-col gap-1 ml-4">
						{#each b.files as file}
							<div class="flex gap-1.5 items-center">
								<img class="w-3 h-3" src={FsIcons[file.type]} alt="dir open icon" />
								<a href={file.link} class="font-thin hover:text-text-secondary">
									{file.label}
								</a>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
