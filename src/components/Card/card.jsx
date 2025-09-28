import React from 'react'
import styles from './card.module.css'

export default function Card({ image, title, description }) {
  return (
    <article className={styles.card}>
      {/*img src={image} alt={title} className={styles.cardImage} />µ*/}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </article>
  )
}
