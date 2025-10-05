import styles from './banner.module.css'

export function Banner({ imageSrc, text, variant }) {
  const bannerClassName =
    variant === 'about' ? styles.bannerAbout : styles.bannerHome

  return (
    <section className={bannerClassName}>
      <img src={imageSrc} alt="banner" />
      <div className={styles.overlayText}>{text}</div>
    </section>
  )
}
