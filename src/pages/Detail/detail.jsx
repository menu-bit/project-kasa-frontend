import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Collapse from '../../components/Collapse/collapse'
import styles from './detail.module.css'

export default function Detail() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [accommodation, setAccommodation] = useState({
    pictures: [],
    title: '',
    location: '',
    description: '',
    equipments: [],
    tags: [],
    rating: 0,
    host: { name: '', picture: '' },
  }) //initialize accommodation with a default structure,Prevents runtime errors from accessing properties of null

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')

  useEffect(() => {
    if (!id) {
      console.log('Missing id')
      return
    }

    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => setAccommodation(data))
      .catch((error) => console.error(error))
  }, [id])

  const prevImage = () => {
    if (accommodation.pictures.length <= 1) return
    setCurrentIndex((i) =>
      i === 0 ? accommodation.pictures.length - 1 : i - 1
    )
  }

  const nextImage = () => {
    if (accommodation.pictures.length <= 1) return
    setCurrentIndex((i) =>
      i === accommodation.pictures.length - 1 ? 0 : i + 1
    )
  }

  return (
    <div className={styles.detail}>
      <div className={styles.detailBody}>
        <img
          src={accommodation.pictures[currentIndex]}
          alt={`${accommodation.title} slide`}
          className={styles.detailImage}
        />

        {accommodation.pictures.length > 1 && (
          <>
            <FaChevronLeft onClick={prevImage} className={styles.arrowLeft} />
            <FaChevronRight onClick={nextImage} className={styles.arrowRight} />
          </>
        )}

        <div className={styles.pictureCounter}>
          {currentIndex + 1} / {accommodation.pictures.length}
        </div>

        <div className={styles.title}>{accommodation.title}</div>
        <div className={styles.subTitle}>{accommodation.location}</div>
        <div className={styles.hostName}>{accommodation.name}</div>
        <div className={styles.hostPhoto}>{accommodation.picture}</div>
        <div className={styles.tags}>{accommodation.tags}</div>
        <div className={styles.ratings}>{accommodation.rating}</div>

        <div className={styles.collapseRow}>
          <Collapse
            title="Description"
            content={accommodation.description}
            variant="detail"
          />
          <Collapse
            title="Équipement"
            content={accommodation.equipments}
            variant="detail"
          />
        </div>
      </div>
    </div>
  )
}
