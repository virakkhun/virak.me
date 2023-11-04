import { A, useNavigate } from "@solidjs/router";
import { Button } from "../../../shared/components/button.component";
import {
  RequestState,
  useRequestStateService,
} from "../../../shared/services/request-state.service";
import { DeleteBlog } from "../domain/delete-blog.service";

type Props = {
  blogId: number;
};

export function BlogDetailAction({ blogId }: Props) {
  const navigate = useNavigate();
  const { onLoading, onSuccess, onError, state } = useRequestStateService();

  const onDelete = async (id: number) => {
    onLoading();

    const { success } = await DeleteBlog(`${id}`);

    if (success) {
      onSuccess();
      navigate("..", { scroll: true });
    } else {
      onError();
    }
  };

  return (
    <div class="w-fit flex items-center justify-end gap-2">
      <A
        href={`/blog/${blogId}/edit`}
        class="bg-primary px-4 py-2 rounded-md text-erie"
      >
        Edit
      </A>
      <Button
        busy={state() === RequestState.LOADING}
        width="fit"
        intent="secondary"
        onClick={() => onDelete(blogId)}
        disabled={state() === RequestState.LOADING}
      >
        Delete
      </Button>
    </div>
  );
}
