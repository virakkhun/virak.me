import { Route } from "@solidjs/router";
import { lazy } from "solid-js";

export const HomeRoutes = () => {
  return (
    <Route path="/" component={lazy(() => import("./pages/index.page"))} />
  );
};
