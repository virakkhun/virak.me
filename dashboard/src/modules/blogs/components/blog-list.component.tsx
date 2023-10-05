import { For } from "solid-js";
import { Blogs } from "web/src/routes/blogs/models/blog";
import { BlogCard } from "./blog.component";

interface Props {
  data: Blogs;
}

export function BlogList({ data }: Props) {
  return (
    <For each={data}>
      {(d) => (
        <BlogCard blogId={d.id}>
          <BlogCard.Title>{d.title}</BlogCard.Title>
          <BlogCard.View>{d.view} views</BlogCard.View>
        </BlogCard>
      )}
    </For>
  );
}
