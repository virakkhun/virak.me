<script lang="ts">
	import { enhance } from '$app/forms';
	import { t } from '../../../shared/services/i18n.service';
	import { userStore } from '../../../shared/store/user.store';
	import { Button, Input } from '../../../shared/ui';

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
	<p class="mb-2">{$t('hi.form.label')}</p>
	<div class="flex items-center gap-2">
		<Input
			name="message"
			placeholder={$t('hi.form.placeholder')}
			disabled={isUserNotExist}
			type="text"
			required
		/>
		<Input name="visitorName" class="hidden" value={$userStore?.name} type="text" />
		<Button type="submit" disabled={isUserNotExist}>{$t('hi.form.buttonText')}</Button>
	</div>
</form>
