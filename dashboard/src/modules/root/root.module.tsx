import { useNavigate } from "@solidjs/router";
import { User } from "@supabase/supabase-js";
import { JSXElement, Show, onMount } from "solid-js";
import { useLoggedInUser } from "../../shared/services/logged-in-user.service";
import { useStorageService } from "../../shared/services/storage.service";
import { SideBarComponent } from "./components/sidebar.component";

interface Props {
  children: JSXElement;
}

export function RootModule({ children }: Props) {
  const { getLoggedInUser, setLoggedInUser } = useLoggedInUser();
  const { get } = useStorageService();
  const navigate = useNavigate();

  const checkIfUserAuthenticated = () => {
    const user = get("user") as User;
    if (!!user) setLoggedInUser(user);
    else navigate("/auth/login", { replace: true });
  };

  onMount(() => checkIfUserAuthenticated());

  return (
    <Show when={!!getLoggedInUser()} fallback={<div>{children}</div>}>
      <div class="grid grid-cols-12 h-[100vh] max-h-[100vh]">
        <div class="col-start-1 col-end-3">
          <SideBarComponent />
        </div>
        <div class="col-start-3 col-end-13 p-10 overflow-y-scroll">
          {children}
        </div>
      </div>
    </Show>
  );
}
