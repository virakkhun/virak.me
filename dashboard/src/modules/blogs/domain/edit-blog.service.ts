import { supabaseClient } from "../../../shared/services/supabase-client.service";

export const editBlogService = async (fd: FormData, id: string) => {
  const title = fd.get("title");
  const author = fd.get("author");
  const tags = fd.get("tags");
  const desc = fd.get("desc");
  const content = fd.get("content");

  return await supabaseClient
    .from("blogs")
    .update({ title, author, tags, desc, content })
    .eq("id", id);
};
