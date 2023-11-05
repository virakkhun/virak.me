import { JSXElement } from "solid-js";

type Props = {
  children: JSXElement;
};

export function AuthWrapperComponent({ children }: Props) {
  return (
    <div class="mx-auto w-3/4 h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
