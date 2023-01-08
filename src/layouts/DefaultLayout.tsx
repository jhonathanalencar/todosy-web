import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <section className="w-full h-full">
      <Header />
      <Outlet />
    </section>
  );
}
