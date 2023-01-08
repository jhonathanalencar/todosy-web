import { cloneElement } from "react";

interface HeaderLinkProps {
  link: string;
  icon: JSX.Element;
  title: string;
}

export function HeaderLink({ link, icon, title }: HeaderLinkProps) {
  return (
    <li className="text-lg font-semibold bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition duration-300 border border-transparent focus-within:border-neutral-200 cursor-pointer">
      <a href={link} className="outline-none" aria-label={title}>
        {cloneElement(icon, {
          className: "w-6 h-6 text-neutral-200",
          weight: "fill",
        })}
      </a>
    </li>
  );
}
