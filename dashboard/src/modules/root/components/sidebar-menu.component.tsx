import { A, useLocation } from "@solidjs/router";
import { For, createMemo } from "solid-js";
import { MENU } from "../constants/menu";

export function SidebarMenuComponent() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  const activePathClass = (path: string) => {
    return pathname().includes(path) ? "bg-primary" : "bg-transparent";
  };

  const SIDE_MENU_ITEM = MENU.filter(({ path }) => path !== "/");
  const HOME_MENU_ITEM = MENU.find(({ path }) => path === "/")!;

  return (
    <div class="flex flex-col gap-2">
      <A
        href={HOME_MENU_ITEM.path}
        class={`flex items-center gap-2 text-default w-full py-2 px-4 rounded-md hover:bg-green-400 ${
          HOME_MENU_ITEM.path === pathname() ? "bg-primary" : "bg-transparent"
        }`}
      >
        <span
          innerHTML={HOME_MENU_ITEM.icon}
          class="flex items-center justify-center w-6 h-6"
        />
        <span class="text-md">{HOME_MENU_ITEM.title}</span>
      </A>
      <For each={SIDE_MENU_ITEM}>
        {({ path, title, icon }) => (
          <A
            href={path}
            class={`flex items-center gap-2 text-default w-full py-2 px-4 rounded-md hover:bg-green-400 ${activePathClass(
              path
            )}`}
          >
            <span
              innerHTML={icon}
              class="flex items-center justify-center w-6 h-6"
            />
            <span class="text-md">{title}</span>
          </A>
        )}
      </For>
    </div>
  );
}
