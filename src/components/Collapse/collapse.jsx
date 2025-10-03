import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styles from './collapse.module.css'

export default function Collapse({ title, content }) {
  const [visible, setVisible] = useState(false) // <-- add this

  return (
    <div className={styles.collapseSection}>
      <div
        className={styles.collapseHeader}
        onClick={() => setVisible((v) => !v)}
      >
        {title}
        <FaChevronUp
          className={`${styles.icon} ${visible ? styles.iconOpen : ''}`}
        />
      </div>
      <div
        className={`${styles.collapseContent} ${visible ? styles.open : ''}`}
      >
        <div className={styles.innerContent}>{content}</div>
      </div>
    </div>
  )
}
