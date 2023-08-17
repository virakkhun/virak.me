import { supabaseClient } from '$lib';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const fd = await request.formData();
		const title = fd.get('title');
		const author = fd.get('author');
		const tags = fd.get('tags');
		const desc = fd.get('desc');
		const content = fd.get('content');

		const {
			error: e,
			statusText,
			status
		} = await supabaseClient.from('blogs').insert({ title, author, tags, desc, content });

		if (e) throw error(status, { message: `${statusText} ${e.details} ${e.message}` });
	}
} satisfies Actions;
