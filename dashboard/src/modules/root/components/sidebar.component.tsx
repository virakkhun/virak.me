import { MiniUserProfileComponent } from "../../../shared/components/mini-user-profile.component";
import { BrandComponent } from "./brand.component";
import { LogoutButtonComponent } from "./logout-button.component";
import { SidebarMenuComponent } from "./sidebar-menu.component";

export function SideBarComponent() {
  return (
    <>
      <div class="h-full w-full bg-secondary p-10 flex flex-col justify-between">
        <div class="flex flex-col gap-10 items-center">
          <BrandComponent />
          <SidebarMenuComponent />
        </div>
        <div class="flex flex-col gap-10 items-center">
          <MiniUserProfileComponent
            displayDirection="col"
            name="Virak"
            position="Software Engineer"
            profilePicture="https://avatars.githubusercontent.com/u/86554927?s=48&v=4"
          />
          <LogoutButtonComponent />
        </div>
      </div>
    </>
  );
}
