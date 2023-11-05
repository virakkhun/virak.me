import { For } from "solid-js";

export function BlogListLoadingComponent() {
  return (
    <div class="animate-pulse flex flex-col gap-4">
      <For each={new Array(5)}>
        {() => <div class="rounded-md p-4 bg-erie/20 h-20" />}
      </For>
    </div>
  );
}
