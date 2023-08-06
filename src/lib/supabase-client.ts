import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export const supabaseClient = createClient(
	env.SUPABASE_URL as string,
	env.SUPABASE_ANON_KEY as string,
	{
		auth: {
			autoRefreshToken: true,
			persistSession: true
		}
	}
);
