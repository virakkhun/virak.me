import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

export const HomeRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" component={lazy(() => import("./pages/index.page"))} />
      </Routes>
    </>
  );
};
