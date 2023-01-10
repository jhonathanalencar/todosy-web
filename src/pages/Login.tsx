import { LoginForm } from "../components/LoginForm";

export function Login() {
  return (
    <div className="h-full w-full flex">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="h-full flex flex-col items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
