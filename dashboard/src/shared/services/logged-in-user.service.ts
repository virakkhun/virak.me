import { User } from "@supabase/supabase-js";
import { createSignal } from "solid-js";

export function useLoggedInUser() {
  const [user, setUser] = createSignal<User>();

  const setLoggedInUser = (user: User) => setUser(() => user);
  const getLoggedInUser = () => user();

  return { getLoggedInUser, setLoggedInUser };
}
