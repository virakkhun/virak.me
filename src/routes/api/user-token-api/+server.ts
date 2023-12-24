import { env } from '$env/dynamic/private';
import { GITHUB_OAUTH_URL } from '../../../shared/constants/github-app';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch, url, cookies }) => {
	const searchParams = new URLSearchParams(url.searchParams);
	const secret = env.GITHUB_CLIENT_SECRET;
	const client = env.GITHUB_CLIENT_ID;
	const code = searchParams.get('code');

	if (!code) return new Response(null);

	const URL = `${GITHUB_OAUTH_URL}/access_token?code=${code}&client_id=${client}&client_secret=${secret}`;

	const res = await fetch(URL, {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		}
	});

	if (!res.ok) return new Response(null);
	const data = await res.json();

	cookies.set('accessToken', data['access_token'], {
		httpOnly: true,
		secure: true,
		maxAge: 7 * 24
	});
	return new Response(JSON.stringify({ message: 'get token success' }));
}) satisfies RequestHandler;
