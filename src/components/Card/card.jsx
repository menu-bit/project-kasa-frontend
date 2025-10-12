import { useNavigate } from 'react-router-dom'
import styles from './card.module.css'

export default function Card({ id, title, tags }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/detail?id=${id}`)
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{tags}</p>
    </div>
  )
}
