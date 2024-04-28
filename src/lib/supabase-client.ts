import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export const supabaseClient = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: false
  }
});
