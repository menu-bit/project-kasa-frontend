import { useEffect, useState, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
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
  })

  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')

  // double-layer refs (deux refs stables, évite de recréer un tableau à chaque rendu)
  const imgRefA = useRef(null)
  const imgRefB = useRef(null)
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

    const idx = currentIndex >= pics.length ? 0 : currentIndex
    // active ref reçoit l'image, l'autre est vidé
    if (activeLayer === 0) {
      if (imgRefA.current) imgRefA.current.src = pics[idx]
      if (imgRefB.current) imgRefB.current.src = ''
    } else {
      if (imgRefB.current) imgRefB.current.src = pics[idx]
      if (imgRefA.current) imgRefA.current.src = ''
    }
  }, [accommodation.pictures, activeLayer, currentIndex])

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

    return () => {
      for (const img of images) {
        img.src = ''
      }
    }
  }, [accommodation.pictures, currentIndex])

  const switchToIndex = (newIndex) => {
    const pics = accommodation.pictures || []
    if (pics.length <= 1) return
    newIndex = (newIndex + pics.length) % pics.length

    const other = 1 - activeLayer
    const nextSrc = pics[newIndex]

    const otherImg = other === 0 ? imgRefA.current : imgRefB.current
    const activeImg = activeLayer === 0 ? imgRefA.current : imgRefB.current
    if (!otherImg || !activeImg) return

    // set the other image src (should be cached if preloaded)
    otherImg.src = nextSrc

    const swap = () => {
      setActiveLayer(other)
      setCurrentIndex(newIndex)
    }

    // if already loaded, swap immediately with a tiny timeout to allow CSS transition
    if (otherImg.complete) {
      requestAnimationFrame(() => swap())
    } else {
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
        <div className={styles.imageStack}>
          <img ref={imgRefA} src={accommodation.pictures[0] || ''} className={`${styles.imgLayer} ${activeLayer === 0 ? styles.visible : ''}`} alt="" />
          <img ref={imgRefB} src={accommodation.pictures[1] || ''} className={`${styles.imgLayer} ${activeLayer === 1 ? styles.visible : ''}`} alt="" />
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
        </div>
      </div>
      <div className={styles.propertyDetail}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              {accommodation.title}
              <div className={styles.location}>{accommodation.location}</div>
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
