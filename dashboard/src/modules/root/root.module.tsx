import { JSXElement } from "solid-js";
import { SideBarComponent } from "./components/sidebar.component";

interface Props {
  children: JSXElement;
}

export function RootModule({ children }: Props) {
  return (
    <div class="grid grid-cols-12 h-[100vh]">
      <div class="col-start-1 col-end-3">
        <SideBarComponent />
      </div>
      <div class="col-start-3 col-end-13 p-10">{children}</div>
    </div>
  );
}
