import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import { BlogWrapper } from "../components/blog-wrapper.component";
import { EditBlogForm } from "../components/edit-blog-form.component";
import { BlogDetailService } from "../domain/blog-detail.service";

function EditBlogPage() {
  const params = useParams();
  const [data] = createResource(() => params["id"], BlogDetailService);
  return (
    <Show when={!!data()} fallback={<p>loading...</p>}>
      <BlogWrapper>
        <h1 class="text-xl font-semibold mb-4">Edit {data()!.title}</h1>
        <EditBlogForm blog={data()!} />
      </BlogWrapper>
    </Show>
  );
}

export default EditBlogPage;
