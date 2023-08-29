import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { GITHUB_API } from '../../../shared/constants/github-app';

export const GET = (async ({ fetch, cookies }) => {
	const url = `${GITHUB_API}/user`;
	const accessToken = cookies.get('accessToken');

	if (!accessToken) throw error(403, 'forbidden');

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			Accept: 'application/json'
		}
	});

	if (!res.ok) throw error(res.status, res.statusText);

	const data = await res.json();

	return new Response(JSON.stringify(data));
}) satisfies RequestHandler;
