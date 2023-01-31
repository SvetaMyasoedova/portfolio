import { FC } from "react";
import headerStyles from './header.module.css'

const Header: FC = () => {

	return (
		<div >
		<header className={headerStyles.header}>
			<p>SvetaMyasoedova</p>
			<nav className={headerStyles.nav}>
				<p className={headerStyles.content}>About</p>
				<p className={headerStyles.content}>Projects</p>
				<p className={headerStyles.content}>Contact</p>
			</nav>
		</header>
		</div>
	)
 };
 
 export default Header;