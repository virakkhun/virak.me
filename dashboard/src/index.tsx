import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "web/src/app.css";
import { RootModule } from "./modules/root/root.module";
import { HomeModule } from "./modules/homes/home.module";
import { BlogsModule } from "./modules/blogs/blogs.module";

render(
  () => (
    <Router>
      <RootModule>
        <HomeModule />
        <BlogsModule />
      </RootModule>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
