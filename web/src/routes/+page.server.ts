import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		sha: env['VERCEL_GIT_COMMIT_SHA']
	};
};
