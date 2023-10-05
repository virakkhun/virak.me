import { Show, createResource } from "solid-js";
import { CardComponent } from "../../../shared/components/card.component";
import { HomeWrapperComponent } from "../components/home-wrapper.component";
import { TotalBlogCountService } from "../domain/services/total-blog-count.service";

function HomeIndexPage() {
  const [blogs] = createResource(TotalBlogCountService);

  return (
    <HomeWrapperComponent>
      <CardComponent>
        <CardComponent.Title>Blogs</CardComponent.Title>
        <CardComponent.Description>
          total count of blogs
        </CardComponent.Description>
        <Show when={!!blogs()}>
          <CardComponent.Content>{blogs()?.length}</CardComponent.Content>
        </Show>
      </CardComponent>
    </HomeWrapperComponent>
  );
}

export default HomeIndexPage;
