import { useNavigate } from "@solidjs/router";
import { ArrayInput } from "../../../shared/components/array-input.component";
import { Button } from "../../../shared/components/button.component";
import { Input } from "../../../shared/components/input.component";
import { TextArea } from "../../../shared/components/text-area.component";
import { createBlogService } from "../domain/create-blog.service";

export function CreateBlogForm() {
  const navigate = useNavigate();

  const onSubmit = async (event: Event) => {
    event.preventDefault();

    const fd = new FormData(event.currentTarget as HTMLFormElement);

    const data = await createBlogService(fd);

    if (data.error) throw new Error(data.error.message);

    navigate("/blog");
  };

  return (
    <form onSubmit={onSubmit} class="flex flex-col gap-4">
      <div class="grid grid-cols-2 gap-4">
        <Input type="text" placeholder="Title" name="title" />
        <Input type="text" placeholder="Author" name="author" />
      </div>
      <div class="grid grid-cols-1">
        <Input type="text" placeholder="Description" name="desc" />
      </div>
      <div class="grid grid-cols-1">
        <ArrayInput type="text" placeholder="Tag" name="tags" />
      </div>
      <div class="grid grid-cols-1">
        <TextArea rows={10} placeholder="Content" name="content" />
      </div>

      <Button type="submit" intent="primary" width="fit">
        Submit
      </Button>
    </form>
  );
}
