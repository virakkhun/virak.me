import { supabaseClient } from "../../../../shared/services/supabase-client.services";

export async function TotalBlogCountService() {
  const { data } = await supabaseClient.from("blogs").select("*");
  return data;
}
