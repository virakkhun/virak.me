import { Show, createResource } from "solid-js";
import { BlogList } from "../components/blog-list.component";
import { BlogWrapper } from "../components/blog-wrapper.component";
import { BlogService } from "../domain/blogs.service";

function BlogsIndexPage() {
  const [blogList] = createResource(BlogService);

  return (
    <BlogWrapper>
      <Show when={!!blogList()}>
        <BlogList data={blogList()!} />
      </Show>
    </BlogWrapper>
  );
}

export default BlogsIndexPage;
