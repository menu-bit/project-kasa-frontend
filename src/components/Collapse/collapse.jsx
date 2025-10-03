import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import styles from './collapse.module.css'

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.collapseSection}>
      <div
        className={styles.collapseHeader}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <FaChevronUp
          className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
        />
      </div>

      <div className={`${styles.collapseContent} ${open ? styles.open : ''}`}>
        <div className={styles.innerContent}>{content}</div>
      </div>
    </div>
  )
}
