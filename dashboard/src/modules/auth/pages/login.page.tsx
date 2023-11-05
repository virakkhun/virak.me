import { AuthWrapperComponent } from "../components/auth-wrapper.component";
import { LoginFormComponent } from "../components/login-form.component";

function LoginPage() {
  return (
    <AuthWrapperComponent>
      <LoginFormComponent />
    </AuthWrapperComponent>
  );
}

export default LoginPage;
