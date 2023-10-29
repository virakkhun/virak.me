import { A } from "@solidjs/router";

export function CreateBlogButton() {
  return (
    <A
      href="/blog/create"
      class="text-erie bg-primary font-bold rounded-md px-6 py-1.5 w-fit"
    >
      Create
    </A>
  );
}
