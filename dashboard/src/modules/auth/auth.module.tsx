import { Routes } from "@solidjs/router";
import { AuthRoutes } from "./auth.route";

export const AuthModule = () => {
  return (
    <Routes>
      <AuthRoutes />
    </Routes>
  );
};
