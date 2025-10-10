import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styles from './collapse.module.css'

export default function Collapse({ title, content, variant = 'default' }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${styles.collapseSection} ${
        variant === 'modal' ? styles.modalVariant : styles.defaultVariant
      }`}
    >
      <div className={styles.collapseHeader}>
        <span>{title}</span>

        <FaChevronUp
          className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>

      <div className={`${styles.collapseContent} ${open ? styles.open : ''}`}>
        <div className={styles.innerContent}>{content}</div>
      </div>
    </div>
  )
}
