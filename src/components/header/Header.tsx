import { FC } from "react";
import { Link } from "react-router-dom";
import headerStyles from "./header.module.css";

const Header: FC = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <Link to="/">
          <p className={headerStyles.name}>SvetaMyasoedova</p>
        </Link>

        <nav className={headerStyles.nav}>
          <Link to="/about">
            <p className={headerStyles.content}>About</p>
          </Link>

          <Link to="/projects">
            <p className={headerStyles.content}>Projects</p>
          </Link>
          <Link to="/contact">
          <p className={headerStyles.content}>Contact</p>
          </Link>
         
        </nav>
      </header>
    </div>
  );
};

export default Header;
