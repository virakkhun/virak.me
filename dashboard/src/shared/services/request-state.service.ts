import { createSignal } from "solid-js";

export type State = "idle" | "loading" | "success" | "error";

export enum RequestState {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type RequestStateType = typeof useRequestStateService;

export const useRequestStateService = () => {
  const [state, setRequestState] = createSignal<State>("idle");

  const onLoading = () => setRequestState(() => "loading");
  const onSuccess = () => setRequestState(() => "success");
  const onError = () => setRequestState(() => "error");

  return { state, onLoading, onSuccess, onError };
};
