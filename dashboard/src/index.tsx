import { Router } from "@solidjs/router";
import { render } from "solid-js/web";

import "web/src/app.css";
import { AuthModule } from "./modules/auth/auth.module";
import { BlogsModule } from "./modules/blogs/blogs.module";
import { HomeModule } from "./modules/homes/home.module";
import { RootModule } from "./modules/root/root.module";

render(
  () => (
    <Router>
      <RootModule>
        <HomeModule />
        <BlogsModule />
        <AuthModule />
      </RootModule>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
