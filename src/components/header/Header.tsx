import { FC, useState } from "react";
import { Link } from "react-router-dom";
import headerStyles from "./header.module.css";

const Header: FC = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const handleLinkClick = () => {
    setIsBurgerMenu(false);
  };
  return (
    <div>
      <header className={headerStyles.header}>
        <Link to="/">
          <p className={headerStyles.name}>SvetaMyasoedova</p>
        </Link>

        <div
          className={
            headerStyles.burger +
            " " +
            (isBurgerMenu && headerStyles.burgerActive)
          }
          onClick={() => {
            setIsBurgerMenu(!isBurgerMenu);
          }}
        >
          <span className={headerStyles.line}></span>
          <span className={headerStyles.line}></span>
          <span className={headerStyles.line}></span>
        </div>

        <nav
          className={
            headerStyles.nav +
            " " +
            (isBurgerMenu && headerStyles.navActive)
          }
        >
          <Link onClick={handleLinkClick} to="/about">
            <p className={headerStyles.content}>About</p>
          </Link>

          <Link onClick={handleLinkClick} to="/projects">
            <p className={headerStyles.content}>Projects</p>
          </Link>
          <Link onClick={handleLinkClick} to="/contact">
            <p className={headerStyles.content}>Contact</p>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
