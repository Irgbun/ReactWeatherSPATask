import css from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={css.header}>
      <p>
        <Link to="/">Main Page</Link>
      </p>
      <p>
        <Link to="/Weather">Weather</Link>
      </p>
    </header>
  );
}
