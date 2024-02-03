<script lang="ts">
	import { SOCIAL_LINK_LIST } from '../../shared/constants/social-link';
	import { SOCIAL_LINK_ICON } from '../../shared/constants/social-link-icon';

	const socialLinks = SOCIAL_LINK_LIST;
	const socialIcons = SOCIAL_LINK_ICON;
</script>

<section class="mt-6">
	<div class="flex items-center justify-start gap-3">
		{#each socialLinks as { link, title }}
			<a href={link} target="_blank">
				<img
					src={socialIcons[title]}
					alt={link}
					width="24"
					height="24"
					class="w-6 h-6 aspect-square"
				/>
			</a>
		{/each}
	</div>
</section>
