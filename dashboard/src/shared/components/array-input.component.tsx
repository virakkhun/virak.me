import { For, JSX, createSignal } from "solid-js";

type Props = JSX.InputHTMLAttributes<HTMLInputElement>;

export function ArrayInput({ ...rest }: Props) {
  const [value, setValue] = createSignal<string[]>([""]);
  let el: HTMLInputElement;

  const onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key !== "Enter") return;

    setValue((v) => [...v, el.value].filter((v) => !!v));
    el.value = "";
    ev.preventDefault();
    ev.stopPropagation();
  };

  const setArrayValueToEl = () => {
    el.value = JSON.stringify([...value().filter((v) => !!v)]);
  };

  return (
    <div class="flex flex-col gap-2">
      <input
        class="w-full bg-flash border border-default focus:ring-2 focus:ring-primary/20 focus:ring-offset-primary/40 focus:ring-offset-2 rounded-md p-2 w-ful transition outline-none"
        ref={(elRef) => (el = elRef)}
        onKeyDown={(e) => onKeyDown(e)}
        onFocusOut={setArrayValueToEl}
        {...rest}
      />
      <div class="w-fit h-full flex items-center gap-1">
        <For each={value().filter((v) => !!v)}>
          {(v) => (
            <p class="text-sm rounded-full px-2 py-1 bg-default text-flash flex items-center gap-2">
              <span>{v}</span>
              <span class="bg-flash/90 text-default px-2 py-0.5 rounded-full">
                x
              </span>
            </p>
          )}
        </For>
      </div>
    </div>
  );
}
