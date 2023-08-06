import { supabaseClient } from '$lib/supabase-client';
import type { PageServerLoad } from '../$types';
import type { BlogDetail } from './models/blog-detail';

export const load = (async ({ params }) => {
	const id = Object.assign(params)['id'] as string;

	const { data } = await supabaseClient.from('blogs').select<'*', BlogDetail>('*').eq('id', id);

	return {
		blogDetail: data?.at(0)
	};
}) satisfies PageServerLoad;
