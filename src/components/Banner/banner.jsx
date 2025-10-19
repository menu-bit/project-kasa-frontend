import styles from './banner.module.css'

export function Banner({ imageSrc, text, variant }) {
  const bannerClassName =
    variant === 'bannerHome' ? styles.bannerHome : styles.bannerAbout

  return (
    <section className={bannerClassName}>
      <img src={imageSrc} alt="banner" />
      {/* <img src={imageSrc || '/assets/placeholder.png'} alt="banner" />
       */}
      <div className={styles.overlayText}>{text}</div>
    </section>
  )
}
