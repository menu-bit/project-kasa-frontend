import styles from './bannerModal.module.css'
import slide1 from '../../assets/slide1.png'

export default function bannerModal() {
  return (
    <section className={styles.banner}>
      <img src={slide1} alt="slide1" className={styles.modalImg} />
    </section>
  )
}
