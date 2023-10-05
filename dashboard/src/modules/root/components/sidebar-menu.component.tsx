import { A, useLocation } from "@solidjs/router";
import { For, createMemo } from "solid-js";
import { MENU } from "../constants/menu";

export function SidebarMenuComponent() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <div class="flex flex-col gap-2">
      <For each={MENU}>
        {({ path, title, icon }) => (
          <A
            href={path}
            class={`flex items-center gap-2 text-default w-full py-2 px-4 rounded-md hover:bg-green-400 ${
              pathname() === path ? "bg-primary" : "bg-transparent"
            }`}
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
