import { JSX } from "solid-js";

type Props = JSX.InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: Props) {
  return (
    <input
      class="w-full bg-flash border border-default focus:ring-2 focus:ring-primary/20 focus:ring-offset-primary/40 focus:ring-offset-2 rounded-md p-2 w-ful transition outline-none"
      {...rest}
    />
  );
}
