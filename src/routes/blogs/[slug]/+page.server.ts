import { parseAsync } from 'mdx-util/node';
import { error } from '@sveltejs/kit';
import { buildGithubEndpoint } from '$lib/endpoints';
import { BlogDetail } from './models/blog-detail';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch, url }) => {
	const { slug } = <{ slug: string }>{ ...params };
	const endpoint = buildGithubEndpoint(`${slug}.md`);
	const { pathname } = new URL(url);
	const [_, __, title] = pathname.split('/');

	const res = await fetch(endpoint);
	if (!res.ok) throw error(res.status, { message: 'No blog detail found' });
	const data = await res.text();
	const content = await parseAsync(data);

	return {
		title,
		content
	} as BlogDetail;
}) satisfies PageServerLoad;
