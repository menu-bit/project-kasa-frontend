import { Banner } from '../../components/Banner/bannerAbout'
import bannerAboutImg from '../../assets/bannerAboutImg.png'
import styles from './about.module.css'
import React, { useState } from 'react'
//import { CCollapse } from '@coreui/react'
import { FaChevronDown } from 'react-icons/fa'

export default function About() {
  const [fiabiliteVisible, setFiabiliteVisible] = useState(false)
  const [respectVisible, setRespectVisible] = useState(false)
  const [serviceVisible, setServiceVisible] = useState(false)
  const [securiteVisible, setSecuriteVisible] = useState(false)

  return (
    <main>
      <Banner img={bannerAboutImg} title="A props" />

      <p className={styles.collapseTitle}>
        Fiabilité
        <FaChevronDown
          onClick={() => setFiabiliteVisible((v) => !v)}
          style={{
            cursor: 'pointer',
            transform: fiabiliteVisible ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        {fiabiliteVisible && (
          <p>
            Les annonces postée sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes le informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        )}
      </p>

      <p className={styles.collapseTitle}>
        Respect
        <FaChevronDown
          onClick={() => setRespectVisible((v) => !v)}
          style={{
            cursor: 'pointer',
            transform: respectVisible ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        {respectVisible && (
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du vosinage
            entrainera une exclusion de notre plateforme.
          </p>
        )}
      </p>

      <p className={styles.collapseTitle}>
        Service
        <FaChevronDown
          onClick={() => setServiceVisible((v) => !v)}
          style={{
            cursor: 'pointer',
            transform: serviceVisible ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        {serviceVisible && (
          <p>
            La qulité est au coeur de notre engagemet chez Kasq. Nous veillons à
            ce que chaque interaction, que ce soit avec nos hotes ou nos
            locataires, soit empreinte de respect et de bienveillance.
          </p>
        )}
      </p>

      <p className={styles.collapseTitle}>
        Sécurité
        <FaChevronDown
          onClick={() => setSecuriteVisible((v) => !v)}
          style={{
            cursor: 'pointer',
            transform: securiteVisible ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        {securiteVisible && (
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que
            pour les voyageurs, chaque logement correspond aux criéeres de
            sécurité établis par nos services. En laissant une aussi bien à
            l'hote qu'au locataire,cela perment à nos quipes de vrifier que les
            standards sont bien respectés. Nous organisons égalment des ateliers
            sur la sécurté domestique pour nos hotes.
          </p>
        )}
      </p>
    </main>
  )
}
