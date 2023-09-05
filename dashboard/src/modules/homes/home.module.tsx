import { Routes } from "@solidjs/router";
import { HomeRoutes } from "./home.route";

export const HomeModule = () => {
  return (
    <Routes>
      <HomeRoutes />
    </Routes>
  );
};
