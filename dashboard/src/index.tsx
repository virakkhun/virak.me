import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "web/src/app.css";
import { HomeRoutes } from "./modules/homes/home.route";
import { RootModule } from "./modules/root/root.module";
import { BlogsRoutes } from "./modules/blogs/blogs.route";

render(
  () => (
    <Router>
      <RootModule>
        <HomeRoutes />
        <BlogsRoutes />
      </RootModule>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
