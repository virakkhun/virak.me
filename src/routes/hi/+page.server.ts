import { supabaseClient } from '$lib';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { VisitorMessages } from './models/visitor-message';

export const load: PageServerLoad = async () => {
	const { data } = await supabaseClient.from('visitor-messages').select<'*', VisitorMessages>('*');

	return { visitorMessages: data };
};

export const actions = {
	default: async ({ request }) => {
		const fd = await request.formData();
		const visitorName = fd.get('visitorName');
		const message = fd.get('message');

		const {
			error: _e,
			statusText,
			status
		} = await supabaseClient
			.from('visitor-messages')
			.insert({ visitor_name: visitorName, message });

		if (_e) throw error(status, { message: `${statusText} ${_e.details} ${_e.message}` });
	}
} satisfies Actions;
