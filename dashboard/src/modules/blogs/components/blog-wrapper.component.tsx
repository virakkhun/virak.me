import { JSXElement } from "solid-js";

interface Props {
  children: JSXElement;
}

export function BlogWrapper({ children }: Props) {
  return (
    <div class="home-wrapper">
      <p class="text-3xl font-bold">Blogs</p>
      <p class="text-accent">{new Date().toLocaleDateString()}</p>
      <div class="mt-10 flex flex-col gap-4">{children}</div>
    </div>
  );
}
