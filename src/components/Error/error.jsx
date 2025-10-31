import styles from './error.module.css'

export default function ErrorPage() {
  return (
    <section className={styles.errorSection}>
      <div className={styles.errorMessage1}> 404 </div>
      <p className={styles.errorMessage2}>
        Oups! La page que vous demandez n'existe pas.
      </p>
    </section>
  )
}
