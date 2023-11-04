import { JSX, Show } from "solid-js";

type Props = {
  children: JSX.Element;
  showAlert: boolean;
};

export function Alert({ showAlert, children }: Props) {
  return (
    <Show when={showAlert}>
      <span class="text-flash bg-erie rounded-md px-2 py-1 min-w-fit fixed bottom-4 right-4 z-50">
        {children}
      </span>
    </Show>
  );
}
