import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="leading-none outline-none">
      <strong className="text-4xl md:text-5xl">
        Todo<span className="text-primary-400">sy</span>
      </strong>
    </Link>
  );
}
