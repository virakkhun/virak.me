import { JSX } from "solid-js";

type Props = JSX.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ ...rest }: Props) {
  return (
    <textarea
      class="bg-flash border border-default focus:ring-2 focus:ring-primary/20 focus:ring-offset-primary/40 focus:ring-offset-2 rounded-md p-2 w-ful transition outline-none"
      {...rest}
    />
  );
}