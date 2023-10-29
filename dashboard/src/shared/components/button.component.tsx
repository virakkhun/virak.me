import { JSX } from "solid-js";

type Props = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent: "primary" | "secondary";
  width: "fit" | "full";
};

export function Button({ intent, width, ...rest }: Props) {
  return (
    <button
      class={`px-6 py-2 rounded-md ${
        intent === "primary"
          ? "bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-accent/30 focus:ring-offset-accent/50"
          : "bg-secondary border border-primary focus:ring-2 focus:ring-offset-2 focus:ring-accent/30 focus:ring-offset-accent/50"
      } ${width === "fit" ? "w-fit" : "w-full"}`}
      {...rest}
    />
  );
}
