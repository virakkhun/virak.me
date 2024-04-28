<script>
	import Divider from './divider.svelte';
	import VirakLogo from '../../components/virak-logo.component.svelte';
</script>

<div class="px-4 py-8 flex flex-col justify-between items-center gap-4 h-screen">
	<VirakLogo />
	<Divider />
	<div class="w-full h-full flex flex-col items-start justify-start gap-4">
		<a
			href="/dashboard"
			class="w-full py-2 rounded-md text-center text-text hover:bg-accent transition-colors duration-100"
			>Home</a
		>
		<a
			href="/dasborad/blogs"
			class="w-full py-2 rounded-md text-center text-text hover:bg-accent transition-colors duration-100"
			>Blogs</a
		>
	</div>
	<Divider />
	<button type="button" class="h-fit"> log out</button>
</div>
