import React from 'react'
import Banner from '../Banner/bannerModal'
import styles from './modal.module.css'
import Header from '../Header/header'

export default function Modal({
  onClose,
  pictures,
  title,
  location,
  description,
}) {
  return (
    <div className={styles.modal}>
      <Header onNavigate={onClose} />
      <Banner />
      <div className={styles.modalBody}></div>

      <div className={styles.pictureBox}>{pictures}</div>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.subTitle}>{location}</h3>
      <p className={styles.description}>{description}</p>
      <h2></h2>
    </div>
  )
}
