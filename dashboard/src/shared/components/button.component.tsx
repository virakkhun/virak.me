import { JSX, Show } from "solid-js";

type Props = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent: "primary" | "secondary";
  width: "fit" | "full";
  busy?: boolean;
};

export function Button({ intent, width, busy, children, ...rest }: Props) {
  return (
    <button
      class={`px-6 py-2 rounded-md relative ${
        intent === "primary"
          ? "bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-accent/30 focus:ring-offset-accent/50"
          : "bg-secondary border border-primary focus:ring-2 focus:ring-offset-2 focus:ring-accent/30 focus:ring-offset-accent/50"
      } ${width === "fit" ? "w-fit" : "w-full"}`}
      {...rest}
    >
      {children}
      <Show when={busy}>
        <p
          class={`absolute left-0 top-0 w-full h-full rounded-md text-sm ${
            intent === "primary" ? "bg-primary" : "bg-secondary"
          }`}
        >
          loading...
        </p>
      </Show>
    </button>
  );
}
