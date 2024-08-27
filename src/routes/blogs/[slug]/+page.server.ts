import { parseAsync } from 'mdx-util/node';
import { error } from '@sveltejs/kit';
import { BlogDetail } from './models/blog-detail';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	const endpoint = `${url.href}.md`;
	const { pathname } = url;
	const title = pathname.split('/').at(-1);

	const res = await fetch(endpoint);
	if (!res.ok) throw error(res.status, { message: 'No blog detail found' });
	const data = await res.text();
	const content = await parseAsync(data);

	return {
		title,
		content
	} as BlogDetail;
}) satisfies PageServerLoad;
