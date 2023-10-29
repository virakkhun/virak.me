import { CreateBlogButton } from "./create-blog-button.component";

export function BlogListAction() {
  return (
    <div class="flex justify-end items-center gap-2">
      <p>Search</p>
      <p>Filter</p>
      <CreateBlogButton />
    </div>
  );
}
