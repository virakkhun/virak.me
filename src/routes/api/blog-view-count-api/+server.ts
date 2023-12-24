import { supabaseClient } from '$lib';
import type { RequestHandler } from '@sveltejs/kit';

export const PATCH: RequestHandler = async ({ request, url }) => {
	const query = new URLSearchParams(url.searchParams);
	const id = query.get('id');
	const fd = await request.formData();
	const view = fd.get('view')?.toString();

	const { statusText } = await supabaseClient
		.from('blogs')
		.update({ view: parseInt(view || '0') + 1 })
		.eq('id', id)
		.select();

	return new Response(JSON.stringify({ msg: statusText }));
};
