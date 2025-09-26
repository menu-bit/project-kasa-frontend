import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : undefined
          }
        >
        Accueil</NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : undefined
          }
        >
        A Propos</NavLink>
      </nav>
    </header>
  );
}