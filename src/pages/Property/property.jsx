import { useEffect, useState, useRef } from 'react'
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
  })

  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')

  // double-layer refs
  const imgRefs = [useRef(null), useRef(null)]
  const [activeLayer, setActiveLayer] = useState(0) // which ref is visible (0 or 1)

  useEffect(() => {
    if (!id) {
      navigate('/error')
      return
    }

    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          console.error(`Requête vers le backend a échoué, status: ${response.status}`)
          navigate('/error')
          throw new Error(`HTTP error ${response.status}`)
        }
        return response.json()
      })
      .then((data) => setAccommodation(data))
      .catch((error) => {
        console.error('Fetch error:', error)
        try {
          navigate('/error')
        } catch {
          // ignore
        }
      })
  }, [id, navigate])

  // initialize image layers when pictures list changes
  useEffect(() => {
    const pics = accommodation.pictures || []
    if (pics.length === 0) return

    // set top layer to currentIndex (or 0)
    const idx = currentIndex >= pics.length ? 0 : currentIndex
    const other = 1 - activeLayer
    if (imgRefs[activeLayer].current) imgRefs[activeLayer].current.src = pics[idx]
    if (imgRefs[other].current) imgRefs[other].current.src = ''
  }, [accommodation.pictures])

  // Preload adjacent images (keeps caching) - keep for safety
  useEffect(() => {
    const pics = accommodation.pictures || []
    if (pics.length === 0) return

    const toPreload = []
    const cur = pics[currentIndex]
    const prev = pics[(currentIndex - 1 + pics.length) % pics.length]
    const next = pics[(currentIndex + 1) % pics.length]

    if (cur) toPreload.push(cur)
    if (prev) toPreload.push(prev)
    if (next) toPreload.push(next)

    const images = toPreload.map((src) => {
      const img = new Image()
      img.src = src
      return img
    })

    return () => images.forEach((img) => (img.src = ''))
  }, [accommodation.pictures, currentIndex])

  const switchToIndex = (newIndex) => {
    const pics = accommodation.pictures || []
    if (pics.length <= 1) return
    newIndex = (newIndex + pics.length) % pics.length

    const other = 1 - activeLayer
    const nextSrc = pics[newIndex]

    const otherImg = imgRefs[other].current
    const activeImg = imgRefs[activeLayer].current
    if (!otherImg || !activeImg) return

    // set the other image src (should be cached if preloaded)
    otherImg.src = nextSrc

    const swap = () => {
      setActiveLayer(other)
      setCurrentIndex(newIndex)
    }

    // if already loaded, swap immediately with a tiny timeout to allow CSS transition
    if (otherImg.complete) {
      // allow browser to register the src change
      requestAnimationFrame(() => {
        // trigger opacity transition by toggling activeLayer
        swap()
      })
    } else {
      // wait for onload
      const onLoad = () => {
        otherImg.removeEventListener('load', onLoad)
        requestAnimationFrame(() => swap())
      }
      otherImg.addEventListener('load', onLoad)
    }
  }

  const prevImage = () => {
    const pics = accommodation.pictures || []
    if (pics.length <= 1) return
    switchToIndex((currentIndex - 1 + pics.length) % pics.length)
  }

  const nextImage = () => {
    const pics = accommodation.pictures || []
    if (pics.length <= 1) return
    switchToIndex((currentIndex + 1) % pics.length)
  }

  return (
    <div className={styles.property}>
      <div className={styles.propertySlide}>
        {/* Property images - double layer for crossfade */}
        <div className={styles.imageStack}>
          <img ref={imgRefs[0]} className={`${styles.imgLayer} ${activeLayer === 0 ? styles.visible : ''}`} alt="" />
          <img ref={imgRefs[1]} className={`${styles.imgLayer} ${activeLayer === 1 ? styles.visible : ''}`} alt="" />
        </div>

        {accommodation.pictures.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className={styles.arrowLeft}
              aria-label="Image précédente"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className={styles.arrowRight}
              aria-label="Image suivante"
            >
              <FaChevronRight />
            </button>
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
              {accommodation.host.picture ? (
                <img src={accommodation.host.picture} alt="Owner" />
              ) : (
                <div className={styles.hostPicturePlaceholder}>No Image</div>
              )}
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
            className={styles.collapsesProperty}
          />
          <Collapse
            title="Équipement"
            content={
              <dl>
                {accommodation.equipments.map((equipment, index) => (
                  <dt key={`${equipment}-${index}`}>{equipment}</dt>
                ))}
              </dl>
            }
            className={styles.collapsesProperty}
          />
        </div>
      </div>
    </div>
  )
}
