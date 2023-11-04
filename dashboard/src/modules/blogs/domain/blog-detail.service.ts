import { BlogDetail } from "web/src/routes/blogs/[id]/models/blog-detail";
import { supabaseClient } from "../../../shared/services/supabase-client.service";

export async function BlogDetailService(blogId: string): BlogDetail {
  const { data } = await supabaseClient
    .from("blogs")
    .select<"*", BlogDetail>("*")
    .eq("id", `${blogId}`);
  return data?.at(0);
}
