import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import { BlogDetailService } from "../domain/blog-detail.service";
import { BlogDetailWrapper } from "../components/blog-detail-wrapper.component";
import { BlogDetail } from "../components/blog-detail.component";

function BlogDetailPage() {
  const params = useParams<{ id: string }>();
  const [data] = createResource(() => params.id, BlogDetailService);

  return (
    <Show when={!!data()}>
      <BlogDetailWrapper>
        <BlogDetail>
          <BlogDetail.Title>{JSON.stringify(data())}</BlogDetail.Title>
        </BlogDetail>
      </BlogDetailWrapper>
    </Show>
  );
}

export default BlogDetailPage;
