import styles from './banner.module.css'
import bannerImg from '../../assets/bannerImg.png'

export function Banner() {
  return (
    <section className={styles.banner}>
      <img src={bannerImg} alt="bannerImg" />
      <div className={styles.overlayText}>Chez vous, partout et ailleurs</div>
    </section>
  )
}
