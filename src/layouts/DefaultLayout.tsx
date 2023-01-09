import { Outlet } from "react-router-dom";

import { Header } from "../components";

export function DefaultLayout() {
  return (
    <section className="h-full flex flex-col">
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>
    </section>
  );
}
