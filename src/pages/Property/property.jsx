import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import Collapse from '../../components/Collapse/collapse'
import styles from './property.module.css'

export default function Property() {
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
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')

  useEffect(() => {
    if (!id) {
      navigate('/error')
      return
    }

    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => setAccommodation(data))
      .catch((error) => console.error(error))
  }, [id, navigate])

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
    <div className={styles.property}>
      <div className={styles.propertySlide}>
        <img
          src={accommodation.pictures[currentIndex]}
          alt={`${accommodation.title} slide`}
          className={styles.propertyImage}
        />
        {accommodation.pictures.length > 1 && (
          <>
            <FaChevronLeft onClick={prevImage} className={styles.arrowLeft} />
            <FaChevronRight onClick={nextImage} className={styles.arrowRight} />
          </>
        )}
        <div className={styles.pictureCounter}>
          {currentIndex + 1} / {accommodation.pictures.length}
        </div>{' '}
      </div>
      <div className={styles.propertyDetail}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              {accommodation.title}
              <div className={styles.location}>{accommodation.location}</div>
            </div>
          </div>
          <div className={styles.hostContainer}>
            <div className={styles.hostName}>{accommodation.host.name}</div>
            <div className={styles.hostPicture}>
              <img src={accommodation.host.picture} alt="Owner" />
            </div>
          </div>
        </div>
        <div className={styles.RateTagContainer}>
          <div className={styles.tagsContainer}>
            <div className={styles.tags}>
              {accommodation.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.ratingContainer}>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= accommodation.rating ? styles.filled : styles.empty
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.collapseRow}>
          <Collapse
            title="Description"
            content={accommodation.description}
            variant="description"
          />
          <Collapse
            title="Équipement"
            content={accommodation.equipments.join(', ')}
            variant="equipment"
            className={styles.collapseEquipemnt}
          ></Collapse>
        </div>
      </div>
    </div>
  )
}
