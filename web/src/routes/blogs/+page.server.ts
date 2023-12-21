import { supabaseClient } from '$lib/supabase-client';
import type { PageServerLoad } from '../$types';
import type { Blog } from './models/blog';
import { blogTitleIdToSlug } from './utils/blog-title-id-to-slug.util';

export const load = (async () => {
	const { data: blogs } = await supabaseClient
		.from('blogs')
		.select<'id,title,desc,created_at,tags,view', Blog>('id,title,desc,created_at,tags,view');

	return {
		blogs: blogs?.map(({ tags, ...rest }) => ({
			...rest,
			tags: typeof tags === 'string' ? tags.replace(/(\[|\]|"|\s+)/g, '').split(',') : [''],
			slug: blogTitleIdToSlug(rest.title, rest.id)
		}))
	};
}) satisfies PageServerLoad;
