import { HouseSimple, Users, List, X } from "phosphor-react";
import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { HeaderLink } from "./HeaderLink";

import { Logo } from "./Logo";

export function Header() {
  const matches = useMediaQuery("(min-width: 45em)");
  const [isToggled, setIsToggled] = useState(false);

  return (
    <header className="relative w-full flex bg-secondary-600 shadow-md">
      <div className="w-full max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
        <Logo />
        <nav className="flex items-center justify-center">
          {matches ? (
            <ul className="flex items-center justify-center gap-4">
              <HeaderLink link="/" icon={<HouseSimple />} title="home" />
              <HeaderLink
                link="/account/login"
                icon={<Users />}
                title="authentication"
              />
            </ul>
          ) : (
            <button
              type="button"
              onClick={() => setIsToggled(true)}
              className="p-1 inline-flex items-center justify-center cursor-pointer outline-none rounded border border-transparent focus:border-primary-200 group"
            >
              <List className="w-8 h-8 text-neutral-200 hover:text-primary-400 group-focus:text-primary-400 transition duration-200" />
            </button>
          )}

          {!matches && isToggled ? (
            <div className="fixed top-0 right-0 h-screen max-w-[300px] w-full bg-primary-600 flex flex-col p-4">
              <button
                type="button"
                aria-label="close"
                onClick={() => setIsToggled(false)}
                className="self-end outline-none focus:bg-slate-500 p-2 rounded-full group"
              >
                <X
                  className="w-6 h-6 text-neutral-200 hover:text-secondary-600 transition duration-300 group-focus:text-secondary-600"
                  weight="bold"
                />
              </button>
              <ul className="flex flex-col gap-2 mt-12 ">
                <li className="py-2 pl-6 hover:bg-slate-500 focus-within:bg-slate-500">
                  <a href="/" className="flex items-center gap-4 outline-none">
                    <HouseSimple
                      className="w-6 h-6 text-neutral-200"
                      weight="fill"
                    />
                    <span className="text-neutral-200 font-semibold text-lg">
                      Home
                    </span>
                  </a>
                </li>
                <li className="py-2 pl-6 hover:bg-slate-500 focus-within:bg-slate-500">
                  <a href="/" className="flex items-center gap-4 outline-none">
                    <Users className="w-6 h-6 text-neutral-200" weight="fill" />
                    <span className="text-neutral-200 font-semibold text-lg">
                      Login
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
