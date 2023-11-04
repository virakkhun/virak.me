import { Blogs } from "web/src/routes/blogs/models/blog";
import { supabaseClient } from "../../../shared/services/supabase-client.service";

export async function BlogService() {
  const { data } = await supabaseClient.from("blogs").select("*");
  return data as Blogs;
}
