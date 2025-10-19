import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styles from './collapse.module.css'

export default function Collapse({ title, content, className = '' }) {
  const [open, setOpen] = useState(false)
  const classes = [styles.collapseContainer, className]
  const classNameCollapse = classes.join(' ')

  return (
    <div className={classNameCollapse}>
      <div className={styles.collapseHeader}>
        <span>{title}</span>
        <FaChevronUp
          className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>

      <div className={`${styles.collapseContent} ${open ? styles.open : ''}`}>
        {/** boucle for sur content https://fr.react.dev/learn#rendering-lists */}
        <div className={styles.innerContent}>{content}</div>
      </div>
    </div>
  )
}
