import { Link } from "react-router-dom";
import { SmileySad } from "phosphor-react";

export function NotFound() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-4 md:gap-6">
      <strong className="text-6xl text-primary-400 md:text-7xl">404</strong>
      <h1 className="text-3xl font-black md:text-4xl">Page Not Found</h1>
      <SmileySad
        className="h-16 w-16 text-primary-400 md:h-20 md:w-20"
        weight="fill"
      />
      <Link
        to="/"
        className="bg-secondary-400 py-4 px-6 rounded shadow font-semibold mt-12 hover:bg-secondary-500 transition duration-300"
      >
        Go back home
      </Link>
    </section>
  );
}
