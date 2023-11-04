import { JSX, Show } from "solid-js";

type Props = {
  children: JSX.Element;
  fallback?: JSX.Element;
  showChildWhen: boolean;
};

export function Suspender({ showChildWhen, children, fallback }: Props) {
  return (
    <div class="w-full">
      <Show when={showChildWhen}>{children}</Show>
      <Show when={!showChildWhen}>{fallback}</Show>
    </div>
  );
}
