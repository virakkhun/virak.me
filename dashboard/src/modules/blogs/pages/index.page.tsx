import { Show, createResource } from "solid-js";
import { BlogListAction } from "../components/blog-list-action.component";
import { BlogListLoadingComponent } from "../components/blog-list-loading.component";
import { BlogList } from "../components/blog-list.component";
import { BlogWrapper } from "../components/blog-wrapper.component";
import { BlogService } from "../domain/get-blogs.service";

function BlogsIndexPage() {
  const [blogList] = createResource(BlogService);

  return (
    <BlogWrapper>
      <BlogListAction />
      <Show when={!!blogList()} fallback={<BlogListLoadingComponent />}>
        <BlogList data={blogList()!} />
      </Show>
    </BlogWrapper>
  );
}

export default BlogsIndexPage;
