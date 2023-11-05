import { supabaseClient } from "../../../shared/services/supabase-client.service";

export async function loginService(fd: FormData) {
  const email = fd.get("email") as string;
  const password = fd.get("password") as string;

  return await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
}
