import React from 'react'
import styles from './card.module.css'
function Card({ image, title, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
