import { A } from "@solidjs/router";

type Props = {
  id: string;
};

export function BlogDetailAction({ id }: Props) {
  const onDelete = (_: string) => {};

  return (
    <div class="w-fit flex items-center justify-end gap-2">
      <A href="/blog/create" class="bg-primary px-4 py-2 rounded-md text-erie">
        Create
      </A>
      <button class="text-erie hover:bg-flash/20" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
