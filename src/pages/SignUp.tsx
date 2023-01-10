import { SignUpForm } from "../components";

export function SignUp() {
  return (
    <div className="w-full h-full flex">
      <div className="w-full px-4 mx-auto max-w-5xl">
        <div className="h-full flex flex-col items-center justify-center">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
