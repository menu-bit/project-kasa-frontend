import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className="nav">
        <NavLink to="/">Accuiel</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}