import { useState } from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import styles from './modal.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Collapse from '../Collapse/collapse'

export default function Modal({
  onClose,
  pictures,
  title,
  location,
  description,
  equipments,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    if (pictures.length <= 1) return // prevent flash if one image
    setCurrentIndex((i) => (i === 0 ? pictures.length - 1 : i - 1))
  }
  const nextImage = () => {
    if (pictures.length <= 1) return
    setCurrentIndex((i) => (i === pictures.length - 1 ? 0 : i + 1))
  }

  return (
    <div className={styles.modal}>
      <Header onNavigate={onClose} />
      <div className={styles.modalBody}>
        <img
          src={pictures[currentIndex]}
          alt={`${title} slide`}
          className={styles.modalImage}
        />

        <div className={styles.pictureCounter}>
          {currentIndex + 1} / {pictures.length}
        </div>

        {pictures.length > 1 && (
          <>
            <FaChevronLeft onClick={prevImage} className={styles.arrowLeft} />
            <FaChevronRight onClick={nextImage} className={styles.arrowRight} />
          </>
        )}

        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{location}</div>
        <div>
          <Collapse
            title="Description"
            content={description}
            className={styles.description}
          />
          <Collapse
            title="Équipement"
            content={equipments}
            className={styles.equipments}
          />
        </div>
        {/*<p className={styles.description}>{description}</p>*/}
      </div>
      <Footer />
    </div>
  )
}
