<script>
	import { SOCIAL_LINK_LIST } from '../shared/constants/social-link';

	let socialLinks = SOCIAL_LINK_LIST;
</script>

<div class="flex items-center gap-2">
	{#each socialLinks as link}
		<a
			href={link.link}
			target="_blank"
			class="underline text-base text-gray-50/50 rounded-md hover:text-gray-50 hover:duration-300 transition-all"
			>{link.title}
		</a>
	{/each}
</div>
