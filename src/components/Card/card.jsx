import { useState } from 'react'
import Modal from '../Modal/modal'
import styles from './card.module.css'

export default function Card({
  id,
  title,
  cover,
  pictures,
  description,
  rating,
  location,
  equipments,
  tags,
}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className={styles.card} onClick={() => setShowModal(true)}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{tags}</p>
      </div>

      {showModal && (
        <Modal
          key={id}
          title={title}
          cover={cover}
          pictures={pictures} // pass image if needed
          description={description} // pass description
          rating={rating}
          location={location}
          equipments={equipments}
          tags={tags}
          onClose={() => setShowModal(false)} //close modal when clicked Accueil
        />
      )}
    </>
  )
}
