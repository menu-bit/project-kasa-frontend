import styles from './collapse.module.css'
import React, { useState } from 'react'
import { CCollapse } from '@coreui/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function Collapse() {
  const [fiabiliteVisible, setFiabiliteVisible] = useState(false)
  const [respectVisible, setRespectVisible] = useState(false)
  const [serviceVisible, setServiceVisible] = useState(false)
  const [securiteVisible, setSecuriteVisible] = useState(false)

  const collapsibles = [
    {
      title: 'Fiabilité',
      visible: fiabiliteVisible,
      setVisible: setFiabiliteVisible,
      content:
        'Les annonces postée sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes le informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      visible: respectVisible,
      setVisible: setRespectVisible,
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      visible: serviceVisible,
      setVisible: setServiceVisible,
      content:
        'La qualité est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
    },
    {
      title: 'Sécurité',
      visible: securiteVisible,
      setVisible: setSecuriteVisible,
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux cirières de sécurité établis par nos services. En laissant une aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  return (
    <>
      {collapsibles.map(({ title, visible, setVisible, content }) => (
        <div key={title} className={styles.collapseSection}>
          <div className={styles.collapseHeader}>
            {title}
            <FaChevronUp
              onClick={() => setVisible((v) => !v)}
              className={`${styles.icon} ${visible ? styles.iconOpen : ''}`}
            />
            <div
              className={`${styles.collapseContent} ${
                visible ? styles.open : ''
              }`}
            >
              <div className={styles.innerContent}>{content}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
