import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import { NotFound } from "./components/NotFound";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 p-1">
      <strong className="text-6xl text-primary-400 md:text-7xl">Error</strong>
      <h1 className="text-3xl font-black md:text-4xl text-center">
        Something went wrong. please try Later.
      </h1>
    </section>
  );
}
