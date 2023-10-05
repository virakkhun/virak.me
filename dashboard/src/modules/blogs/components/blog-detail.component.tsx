import { JSXElement } from "solid-js";

interface Props {
  children: JSXElement;
}

export function BlogDetail({ children }: Props) {
  return <div>{children}</div>;
}

function Title({ children }: Props) {
  return <h1 class="text-2xl font-bold">{children}</h1>;
}

function Desc({ children }: Props) {
  return (
    <p class="text-base text-secondary truncate text-ellipsis">{children}</p>
  );
}

BlogDetail["Title"] = Title;
BlogDetail["Desc"] = Desc;
