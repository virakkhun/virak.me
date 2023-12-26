<script lang="ts">
	import Backdrop from '../components/backdrop.component.svelte';
	import DailyTool from '../components/daily-tool.component.svelte';
	import ExperienceItem from '../components/experience/experience-item.component.svelte';
	import ExperienceTimeline from '../components/experience/experience-timeline.component.svelte';
	import Hero from '../components/hero.component.svelte';
	import LatestBlogs from '../components/latest-blogs.component.svelte';
	import Powered from '../components/powered.component.svelte';
	import SocialLink from '../components/social-link.component.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Virak Khun</title>
</svelte:head>

<Hero />
<ExperienceTimeline>
	<ExperienceItem />
</ExperienceTimeline>
<LatestBlogs lastTwoBlogPosts={data.latestTwoBlogs} />
<DailyTool />
<SocialLink />
<Powered sha={data.sha} />
<Backdrop />
