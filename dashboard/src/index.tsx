import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "web/src/app.css";
import { HomeRoutes } from "./modules/homes/home.route";

render(
  () => (
    <Router>
      <HomeRoutes />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
