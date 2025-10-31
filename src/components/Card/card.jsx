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

        <div
          className={styles.meta}
          style={{ '--rating': accommodation?.rating ?? 0 }}
        >
          <span className={styles.host}>{accommodation?.host?.name}</span>
          <span
            className={styles.rating}
            aria-label={`Note ${accommodation?.rating || 0} sur 5`}
          >
            {/* CSS will render stars and fill according to --rating */}
            <span className={styles.stars}>★★★★★</span>
          </span>
        </div>
      </div>
    </button>
  )
}

Card.propTypes = {
  accommodation: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    cover: PropTypes.string,
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
}
