import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './card.module.css'
import fallbackImg from '../../assets/error.png'

export default function Card({ accommodation }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/property?id=${accommodation.id}`)
  }

  return (
    <button
      type="button"
      className={styles.card}
      onClick={handleClick}
      aria-label={accommodation?.title}
    >
      {/* background-image with fallback (CSS) */}
      <div
        className={styles.cardImage}
        aria-hidden="true"
        style={{
          backgroundImage: `url(${accommodation?.cover}), url(${fallbackImg})`,
        }}
      />

      {/* invisible <img> for accessibility / screen readers */}
      <img
        className={styles.srOnly}
        src={accommodation?.cover || fallbackImg}
        alt={accommodation?.title || 'Accommodation'}
      />

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{accommodation?.title}</h3>
      </div>
    </button>
  )
}

Card.propTypes = {
  accommodation: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    cover: PropTypes.string,
  }),
}
