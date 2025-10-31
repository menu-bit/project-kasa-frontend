import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import logoHeader from '../../assets/logoHeader.png'
import styles from './header.module.css'

export default function Header({ onNavigate }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={logoHeader} alt="Kasa Logo" />
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          onClick={onNavigate}
          className={({ isActive }) =>
            isActive ? `${styles.active}` : undefined
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : undefined
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onNavigate: PropTypes.func,
}
