import { supabaseClient } from '$lib/supabase-client';
import type { PageServerLoad } from './$types';
import type { Blog } from './models/blog';

export const load = (async () => {
	const { data: blogs } = await supabaseClient
		.from('blogs')
		.select<'id,title,desc,created_at,tags,view', Blog>('id,title,desc,created_at,tags,view');

	return {
		blogs: blogs?.map(({ tags, ...rest }) => ({
			...rest,
			tags: tags.replace(/(\[|\]|"|\s+)/g, '').split(',')
		})) as Array<
			Pick<Blog, 'created_at' | 'desc' | 'title' | 'id' | 'view'> & { tags: Array<string> }
		>
	};
}) satisfies PageServerLoad;
