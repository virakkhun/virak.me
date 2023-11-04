import { useNavigate } from "@solidjs/router";
import { BlogDetail } from "web/src/routes/blogs/[id]/models/blog-detail";
import { ArrayInput } from "../../../shared/components/array-input.component";
import { Button } from "../../../shared/components/button.component";
import { Input } from "../../../shared/components/input.component";
import { TextArea } from "../../../shared/components/text-area.component";
import { editBlogService } from "../domain/edit-blog.service";

type Props = {
  blog: BlogDetail;
};

export function EditBlogForm({ blog }: Props) {
  const navigate = useNavigate();

  const onSubmit = async (event: Event) => {
    event.preventDefault();

    const fd = new FormData(event.currentTarget as HTMLFormElement);

    const data = await editBlogService(fd, `${blog.id}`);

    if (data.error) throw new Error(data.error.message);

    navigate("..", { resolve: true });
  };

  return (
    <form onSubmit={onSubmit} class="flex flex-col gap-4">
      <div class="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Title"
          name="title"
          value={blog.title}
        />
        <Input
          type="text"
          placeholder="Author"
          name="author"
          value={blog.author}
        />
      </div>
      <div class="grid grid-cols-1">
        <Input
          type="text"
          placeholder="Description"
          name="desc"
          value={blog.desc}
        />
      </div>
      <div class="grid grid-cols-1">
        <ArrayInput
          type="text"
          placeholder="Tag"
          name="tags"
          value={blog.tags}
        />
      </div>
      <div class="grid grid-cols-1">
        <TextArea
          rows={10}
          placeholder="Content"
          name="content"
          value={blog.content}
        />
      </div>

      <Button type="submit" intent="primary" width="fit">
        Submit
      </Button>
    </form>
  );
}
