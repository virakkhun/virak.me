import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import { Mdx } from "../../../shared/components/markdown.component";
import { BlogDetailWrapper } from "../components/blog-detail-wrapper.component";
import { BlogDetail } from "../components/blog-detail.component";
import { BlogDetailService } from "../domain/blog-detail.service";

function BlogDetailPage() {
  const params = useParams<{ id: string }>();
  const [data] = createResource(() => params.id, BlogDetailService);

  return (
    <BlogDetailWrapper blogId={data()?.id}>
      <Show when={!!data()}>
        <BlogDetail>
          <BlogDetail.Title>{data().title}</BlogDetail.Title>
          <BlogDetail.Desc>{data().desc}</BlogDetail.Desc>
          <BlogDetail.Detail>
            <Mdx value={data().content} />
          </BlogDetail.Detail>
        </BlogDetail>
      </Show>
    </BlogDetailWrapper>
  );
}

export default BlogDetailPage;
