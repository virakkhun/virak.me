import { JSXElement } from "solid-js";

interface Props {
  children: JSXElement;
}

export function CardComponent({ children }: Props) {
  return <div class="bg-secondary p-5 rounded-2xl">{children}</div>;
}

function Title({ children }: Props) {
  return <p class="font-bold text-lg">{children}</p>;
}

function Description({ children }: Props) {
  return <p class="text-base text-accent">{children}</p>;
}

function Content({ children }: Props) {
  return <div class="text-center p-10 font-bold text-2xl">{children}</div>;
}

CardComponent["Title"] = Title;
CardComponent["Description"] = Description;
CardComponent["Content"] = Content;
