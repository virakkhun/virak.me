import { supabaseClient } from "../../../shared/services/supabase-client.service";

export async function DeleteBlog(blogId: string) {
  const { error } = await supabaseClient
    .from("blogs")
    .delete()
    .eq("id", blogId);

  if (!!error) {
    throw new Error(error?.message);
  }

  return Promise.resolve({ success: true });
}
