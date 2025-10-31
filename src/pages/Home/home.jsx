import { useEffect, useState } from 'react'
import bannerHome from '../../assets/bannerHomeImg.png'
import { Banner } from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import styles from './home.module.css'

export default function Home() {
  const [accomodations, setAccomodations] = useState([])

  useEffect(() => {
    //useEffect runs when the component first mounts
    fetch('http://localhost:8080/api/properties')
      .then((reponse) => {
        if (!reponse.ok) throw new Error(`HTTP error ${reponse.status}`)
        return reponse.json()
      }) //Converts the response to JSON
      .then((data) => setAccomodations(data)) //Updates state with the data → re-renders component with accommodations filled in
      .catch((error) => {
        // Log a clear French message instead of redirecting to the error page
        console.error(
          "Impossible de contacter le backend à 'http://localhost:8080/api/properties'. Vérifie que le serveur backend est démarré.",
          error
        )
      })
  }, [])

  return (
    <div className={styles.home}>
      <Banner
        imageSrc={bannerHome}
        text="Chez vous, partout et ailleurs"
        alt="banner"
        variant="bannerHome"
      />
      <section className={styles.cardsSection}>
        <div className={styles.cardsWrapper}>
          {accomodations.map((accomodation) => (
            <Card
              key={accomodation.id}
              accommodation={accomodation}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
