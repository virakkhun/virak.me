<script lang="ts">
	import { enhance } from '$app/forms';
	import { userStore } from '../../../shared/store/user.store';

	let isUserNotExist: boolean;
	$: isUserNotExist = !$userStore;

	function resetMessageEl() {
		const messageElRef = document.querySelector('input[name]') as HTMLInputElement;
		messageElRef.value = '';
		return setTimeout(() => {
			messageElRef.focus();
		}, 50);
	}
</script>

<form
	method="POST"
	class:opacity-50={isUserNotExist}
	class="mt-4"
	use:enhance={() => {
		return async ({ update }) => {
			update({ reset: false });
			resetMessageEl();
		};
	}}
>
	<p class="mb-2">leave some meaningful message here...</p>
	<div class="flex items-center gap-2">
		<input
			name="message"
			class="text-white border border-white/20 px-3 py-2 rounded-md w-full"
			placeholder="message..."
			disabled={isUserNotExist}
			type="text"
			required
		/>
		<input name="visitorName" class="hidden" value={$userStore?.name} type="text" />
		<button
			type="submit"
			class="px-3 py-2 w-fit border border-yellow-600/50 rounded-md hover:border-yellow-600 cursor-pointer"
			disabled={isUserNotExist}>send</button
		>
	</div>
</form>
