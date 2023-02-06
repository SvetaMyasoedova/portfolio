import { FC } from "react";
import { Link } from "react-router-dom";
import headerStyles from "./header.module.css";

const Header: FC = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <p>SvetaMyasoedova</p>
        <nav className={headerStyles.nav}>
          <Link to="/about">
            <p className={headerStyles.content}>About</p>
          </Link>

          <Link to="/projects">
            <p className={headerStyles.content}>Projects</p>
          </Link>

          <p className={headerStyles.content}>Contact</p>
        </nav>
      </header>
    </div>
  );
};

export default Header;
