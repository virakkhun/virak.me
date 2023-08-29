import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

export const BlogsRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/blog"
          component={lazy(() => import("./pages/index.page"))}
        />
      </Routes>
    </>
  );
};
