import { env } from '$env/dynamic/private';
import { supabaseClient } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Blog } from './blogs/models/blog';
import { blogTitleIdToSlug } from './blogs/utils/blog-title-id-to-slug.util';

export const load: PageServerLoad = async () => {
	const { data } = await supabaseClient
		.from('blogs')
		.select<'id,title,view', Blog>('id,title,view')
		.order('created_at', { ascending: false })
		.limit(2);

	if (!data) throw error(500, { message: 'something went wrong' });

	return {
		sha: env['VERCEL_GIT_COMMIT_SHA'],
		latestTwoBlogs: data.map((blog) => ({ ...blog, slug: blogTitleIdToSlug(blog.title, blog.id) }))
	};
};
