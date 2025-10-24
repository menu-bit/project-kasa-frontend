import { NavLink } from 'react-router-dom'
import styles from './error.module.css'

export default function Error() {
  return (
    <section className={styles.errorSection}>
      <div className={styles.errorMessage1}> 404 </div>
      <p className={styles.errorMessage2}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className={styles.linkToHome}>
        Retourner sur la page d'accueil
      </NavLink>
    </section>
  )
}
