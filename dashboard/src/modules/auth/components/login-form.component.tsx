import { Button } from "../../../shared/components/button.component";
import { Input } from "../../../shared/components/input.component";
import { useLoggedInUser } from "../../../shared/services/logged-in-user.service";
import { useRequestStateService } from "../../../shared/services/request-state.service";
import { useStorageService } from "../../../shared/services/storage.service";
import { loginService } from "../services/login.service";

export function LoginFormComponent() {
  const rqs = useRequestStateService();
  const { set, asyncSet } = useStorageService();
  const { setLoggedInUser } = useLoggedInUser();

  const onSubmit = async (event: Event) => {
    event.preventDefault();
    rqs.onLoading();

    const fd = new FormData(event.currentTarget as HTMLFormElement);
    const {
      data: { session, user },
      error,
    } = await loginService(fd);

    if (!!error) {
      rqs.onError();
      throw new Error(error.message);
    }

    set("user", user);
    const { success } = await asyncSet("access_token", session?.access_token);

    if (success) {
      setLoggedInUser(user!);
      window.location.href = "/";
    } else throw new Error("failed to set token");
  };

  return (
    <form
      onSubmit={onSubmit}
      class="rounded-md bg-flash border border-erie/10 flex flex-col gap-10 p-10 w-1/2"
    >
      <h1 class="text-2xl font-bold text-erie">Welcome to Dashboard</h1>

      <div class="space-y-2">
        <div class="flex flex-col gap-1 items-start">
          <label for="email">Email</label>
          <Input type="text" id="email" name="email" />
        </div>

        <div class="flex flex-col gap-1 items-start">
          <label for="password">Password</label>
          <Input type="password" id="password" name="password" />
        </div>
      </div>

      <Button type="submit" intent="primary" width="full">
        Login
      </Button>
    </form>
  );
}
