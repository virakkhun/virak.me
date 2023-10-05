import { A } from "@solidjs/router";
import { JSXElement } from "solid-js";

interface Props {
  blogId?: number;
  children: JSXElement;
}

export function BlogCard({ children, blogId }: Props) {
  return (
    <A href={`/blog/${blogId}`}>
      <div class="rounded-md p-4 bg-secondary cursor-pointer hover:shadow-md hover:shadow-default/5 transition-all duration-300">
        {children}
      </div>
    </A>
  );
}

function Title({ children }: Props) {
  return <p class="text-lg font-bold">{children}</p>;
}

function View({ children }: Props) {
  return <p class="text-base text-accent">{children}</p>;
}

BlogCard["Title"] = Title;
BlogCard["View"] = View;
