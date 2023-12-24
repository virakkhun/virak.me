<script lang="ts">
	import type { User } from '../../../shared/models/user';

	export let authenticatedUser: Pick<User, 'avatar_url' | 'name' | 'bio'> | null;
</script>

{#if !!authenticatedUser}
	<span class="uppercase text-2xl text-yellow-500 italic">{authenticatedUser.name}</span>
	<img
		src={authenticatedUser.avatar_url}
		alt={authenticatedUser.bio}
		width="32"
		height="32"
		class="rounded-full object-cover mx-2"
		loading="lazy"
	/>
{/if}
