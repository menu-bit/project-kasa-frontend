import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styles from './collapse.module.css'

export default function Collapse({ title, content, variant }) {
  const [open, setOpen] = useState(false)
  const collapseClassName = (() => {
    switch (variant) {
      case 'about':
        return styles.aboutVariant
      case 'description':
        return styles.descriptionVariant
      case 'equipment':
        return styles.equipmentVariant
      default:
        return ''
    }
  })()

  return (
    <div className={collapseClassName}>
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
