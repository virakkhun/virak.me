import { supabaseClient } from '$lib/supabase-client';
import type { PageServerLoad } from './$types';
import type { Blog, Blogs } from './models/blog';

export const load = (async () => {
	const { data: blogs } = await supabaseClient
		.from('blogs')
		.select<'id,title,desc', Blog>('id,title,desc');

	return {
		blogs: blogs as Blogs
	};
}) satisfies PageServerLoad;
