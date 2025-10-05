import { useState } from 'react'
import Modal from '../Modal/modal'
import styles from './card.module.css'

export default function Card({ pictures, title, location, description }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className={styles.card} onClick={() => setShowModal(true)}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {/* <p className={styles.cardDescription}>{description}</p> */}
      </div>

      {showModal && (
        <Modal
          pictures={pictures} // pass image if needed
          title={title} // pass title
          location={location}
          description={description} // pass description
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}
