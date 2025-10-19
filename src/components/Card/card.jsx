import { useNavigate } from 'react-router-dom'
import styles from './card.module.css'

export default function Card({ id, title }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/property?id=${id}`)
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  )
}
