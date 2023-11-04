import { JSXElement } from "solid-js";
import { BlogDetailAction } from "./blog-detail-action.component";

interface Props {
  children: JSXElement;
}

export function BlogDetailWrapper({
  children,
  blogId,
}: Props & { blogId: number }) {
  return (
    <div class="home-wrapper">
      <div class="flex justify-between items-center gap-2">
        <p class="text-3xl font-bold">Blog Detail</p>
        <BlogDetailAction blogId={blogId} />
      </div>

      <p class="text-accent">{new Date().toLocaleDateString()}</p>
      <div class="mt-10">{children}</div>
    </div>
  );
}
