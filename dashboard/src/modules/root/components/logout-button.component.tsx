import { Button } from "../../../shared/components/button.component";
import { useStorageService } from "../../../shared/services/storage.service";
import { supabaseClient } from "../../../shared/services/supabase-client.service";

export function LogoutButtonComponent() {
  const storage = useStorageService();
  const storageKey = ["access_token", "user"];

  const logout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (!!error) throw new Error(error.message);
    storageKey.forEach((key) => storage.remove(key));
    window.location.reload();
  };

  return (
    <Button onClick={logout} type="button" intent="secondary" width="fit">
      Log out
    </Button>
  );
}
