import { A, useLocation } from "@solidjs/router";
import { For, createMemo } from "solid-js";

const Menu = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export function SidebarMenuComponent() {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <div class="flex flex-col gap-2">
      <For each={Menu}>
        {({ path, title }) => (
          <A
            href={path}
            class={`text-center w-full py-2 px-4 rounded-md hover:bg-green-400 ${
              pathname() === path ? "bg-green-800" : "bg-transparent"
            }`}
          >
            {title}
          </A>
        )}
      </For>
    </div>
  );
}
