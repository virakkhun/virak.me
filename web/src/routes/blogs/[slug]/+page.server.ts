import { supabaseClient } from '$lib/supabase-client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { BlogDetail } from './models/blog-detail';

export const load = (async ({ params }) => {
	const { slug } = { ...params } as { slug: string };
	const [encodedSlug] = slug.split('~~').reverse();
	const id = atob(encodedSlug);

	const { data } = await supabaseClient.from('blogs').select<'*', BlogDetail>('*').eq('id', id);

	if (!data) throw error(500, { message: 'No blog detail found' });

	const [blogDetail] = data;

	return {
		blogDetail
	};
}) satisfies PageServerLoad;
