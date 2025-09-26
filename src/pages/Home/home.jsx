import Card from '../../components/Card/card'
import styles from './home.module.css'
//import bannerImg from "../../assets/bannerImg.png"
import { Banner } from '../../components/Banner/banner'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [accomodations, setAccomodations] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((reponse) => reponse.json())
      .then((data) => setAccomodations(data))
  }, [])

  return (
    <main>
      <Banner />
      <section className={styles.cardsSection}>
        <div className={styles.cardsWrapper}>
          {accomodations.map((accomodation) => (
            <Card
              key={accomodation.id}
              image={accomodation.image}
              title={accomodation.title}
              description={accomodation.description}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
