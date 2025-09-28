import styles from './bannerAbout.module.css'
import bannerAboutImg from '../../assets/bannerAboutImg.png'

export function Banner() {
  return (
    <section className={styles.banner}>
      <img src={bannerAboutImg} alt="bannerAboutImg" />
    </section>
  )
}
