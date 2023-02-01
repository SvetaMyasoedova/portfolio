import { FC } from "react";
import { Link } from "react-router-dom";
import headerStyles from "./header.module.css";

const Header: FC = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <p>SvetaMyasoedova</p>
        <nav className={headerStyles.nav}>
          <Link to="/about" className={headerStyles.content}>
            <p>About</p>
          </Link>

          <p className={headerStyles.content}>Projects</p>
          <p className={headerStyles.content}>Contact</p>
        </nav>
      </header>
    </div>
  );
};

export default Header;
