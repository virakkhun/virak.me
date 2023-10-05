import { JSXElement } from "solid-js";

interface Props {
  children: JSXElement;
}

export function BlogDetailWrapper({ children }: Props) {
  return (
    <div class="home-wrapper">
      <p class="text-3xl font-bold">Blog Detail</p>
      <p class="text-accent">{new Date().toLocaleDateString()}</p>
      <div class="mt-10">{children}</div>
    </div>
  );
}
