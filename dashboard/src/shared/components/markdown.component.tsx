import { createEffect, createSignal } from "solid-js";
import { markdownParser } from "web/src/lib/markdown-parser";
import "../../assets/css/code-theme.css";

type Props = {
  value: string;
};

export function Mdx({ value }: Props) {
  const [text, setText] = createSignal("");

  createEffect(() => {
    markdownParser(value)
      .then((v) => {
        setText(() => String(v));
      })
      .catch((err: Error) => {
        console.error(err.message);
      });
  });

  return <div class="mdx" innerHTML={text()}></div>;
}
