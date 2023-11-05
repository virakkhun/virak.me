import { For } from "solid-js";

export function BlogDetailLoadingComponent() {
  return (
    <div class="animate-pulse space-y-10">
      <div class="flex justify-between items-start">
        <div class="space-y-2">
          <div class="w-20 h-8 rounded-md bg-erie/20" />
          <div class="w-14 h-4 rounded-md bg-erie/20" />
        </div>

        <div class="flex gap-2 items-center">
          <div class="w-20 h-8 rounded-md bg-erie/10" />
          <div class="w-20 h-8 rounded-md bg-erie/10" />
        </div>
      </div>

      <div class="space-y-2">
        <div class="w-56 h-8 rounded-md bg-erie/20" />
        <div class="w-full h-4 rounded-md bg-erie/20" />
      </div>

      <For each={new Array(6)}>
        {() => (
          <div class="space-y-2">
            <div class="w-full h-8 rounded-md bg-erie/20" />
            <div class="w-full h-4 rounded-md bg-erie/20" />
          </div>
        )}
      </For>
    </div>
  );
}
