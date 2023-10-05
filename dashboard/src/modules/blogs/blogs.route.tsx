import { Route } from "@solidjs/router";
import { lazy } from "solid-js";

export const BlogsRoutes = () => {
  return (
    <>
      <Route
        path="/blog"
        component={lazy(() => import("./pages/index.page"))}
      />
      <Route
        path="/blog/:id"
        component={lazy(() => import("./pages/detail.page"))}
      />
    </>
  );
};
