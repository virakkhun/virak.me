import { Routes } from "@solidjs/router";
import { BlogsRoutes } from "./blogs.route";

export const BlogsModule = () => {
  return (
    <Routes>
      <BlogsRoutes />
    </Routes>
  );
};
