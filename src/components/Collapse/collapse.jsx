import { useState, useId } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import PropTypes from 'prop-types'
import styles from './collapse.module.css'

export default function Collapse({ title, content, className = '' }) {
  const [open, setOpen] = useState(false)
  const classes = [styles.collapseContainer, className]
  const classNameCollapse = classes.join(' ')
  const id = useId()
  const contentId = `collapse-content-${id}`

  const toggle = () => setOpen((prev) => !prev)

  return (
    <div className={classNameCollapse}>
      <button
        type="button"
        className={styles.collapseHeader}
        onClick={toggle}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <FaChevronUp
          className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
        />
      </button>

      <div
        id={contentId}
        className={`${styles.collapseContent} ${open ? styles.open : ''}`}
      >
        {/** boucle for sur content https://fr.react.dev/learn#rendering-lists */}
        <div className={styles.innerContent}>{content}</div>
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
}
