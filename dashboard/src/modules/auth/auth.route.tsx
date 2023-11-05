import { Route } from "@solidjs/router";
import { lazy } from "solid-js";

export const AuthRoutes = () => {
  return (
    <Route
      path="/auth/login"
      component={lazy(() => import("./pages/login.page"))}
    />
  );
};
