import { useState } from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import styles from './modal.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Modal({
  onClose,
  pictures,
  title,
  location,
  description,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? pictures.length - 1 : i - 1))
  const nextImage = () =>
    setCurrentIndex((i) => (i === pictures.length - 1 ? 0 : i + 1))

  return (
    <div className={styles.modal}>
      <Header onNavigate={onClose} />
      <div className={styles.modalBody}>
        <FaChevronLeft onClick={prevImage} className={styles.arrowLeft}>
          &lt;
        </FaChevronLeft>
        <img
          src={pictures[currentIndex]}
          alt={`${title} slide`}
          className={styles.modalImage}
        />
        <FaChevronRight onClick={nextImage} className={styles.arrowRight}>
          &lt;
        </FaChevronRight>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{location}</div>
        <p className={styles.description}>{description}</p>
      </div>
      <Footer />
    </div>
  )
}
