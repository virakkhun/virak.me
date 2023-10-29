import { supabaseClient } from "../../../shared/services/supabase-client.services";

export const createBlogService = async (fd: FormData) => {
  const title = fd.get("title");
  const author = fd.get("author");
  const tags = fd.get("tags");
  const desc = fd.get("desc");
  const content = fd.get("content");

  return await supabaseClient
    .from("blogs")
    .insert({ title, author, tags, desc, content });
};
