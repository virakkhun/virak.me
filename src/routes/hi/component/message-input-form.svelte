<script lang="ts">
	import { userStore } from '../../../shared/store/user.store';

	let isUserNotExist: boolean;
	$: isUserNotExist = !$userStore;

	function onSubmit(e: Event) {
		const fd = new FormData(e.target as HTMLFormElement);
		const visitorName = fd.get('visitorName');
		const message = fd.get('message');

		console.log(fd.getAll, visitorName, message);
	}
</script>

<form method="POST" class:opacity-50={isUserNotExist} class="mt-4">
	<p class="mb-2">leave some meaningful message here folks</p>
	<div class="flex items-center gap-2">
		<input
			name="message"
			class="text-white border border-white/20 px-3 py-2 rounded-md w-full"
			placeholder="message..."
			disabled={isUserNotExist}
			type="text"
		/>
		<input name="visitorName" class="hidden" value={$userStore.name} type="text" />
		<button
			type="submit"
			class="px-3 py-2 w-fit border border-yellow-600/20 rounded-md hover:border-yellow-600/50 cursor-pointer"
			disabled={isUserNotExist}>send</button
		>
	</div>
</form>
