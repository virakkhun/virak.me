import { supabaseClient } from "../../../../shared/services/supabase-client.service";

export async function TotalBlogCountService() {
  const { data } = await supabaseClient.from("blogs").select("*");
  return data;
}
