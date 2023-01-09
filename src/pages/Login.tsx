import { Link } from "react-router-dom";

export function Login() {
  const inputGroupStyles = "flex flex-col gap-1 w-full";
  const labelStyles = "text-lg text-neutral-200 font-semibold";
  const inputStyles =
    "h-12 px-4 rounded bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 font-semibold text-base outline-none focus:outline-primary-400";

  return (
    <div className="w-full h-full flex">
      <div className="w-full px-4 mx-auto max-w-5xl">
        <div className="h-full flex flex-col items-center justify-center">
          <form className="flex flex-col justify-center w-full gap-4 max-w-2xl p-4 rounded drop-shadow-sm bg-neutral-600">
            <div>
              <h1 className="text-3xl font-bold text-neutral-100">Login</h1>
              <p className="text-base font-medium text-neutral-300">
                Doesn&apos;t have an account yet?{" "}
                <Link
                  to="/account/register"
                  className="underline text-primary-300 hover:text-primary-400 transition duration-300 rounded focus:text-primary-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div className={inputGroupStyles}>
              <label htmlFor="name" className={labelStyles}>
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jennie"
                autoComplete="off"
                required
                className={inputStyles}
              />
            </div>

            <div className={inputGroupStyles}>
              <label htmlFor="email" className={labelStyles}>
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jeenie@email.com"
                autoComplete="off"
                required
                className={inputStyles}
              />
            </div>

            <div className={inputGroupStyles}>
              <label htmlFor="password" className={labelStyles}>
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="******"
                required
                className={inputStyles}
              />
            </div>

            <div className={inputGroupStyles}>
              <label htmlFor="confirmPassword" className={labelStyles}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="******"
                required
                className={inputStyles}
              />
            </div>

            <button
              type="submit"
              className="h-14 mt-6 text-lg uppercase font-bold text-neutral-200 bg-secondary-500 hover:bg-secondary-600 rounded transition duration-300 outline-none focus:outline-primary-400 focus:bg-secondary-600"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
