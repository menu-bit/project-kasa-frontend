import { useEffect, useState } from 'react'
import bannerHome from '../../assets/bannerHomeImg.png'
import { Banner } from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import styles from './home.module.css'
//useState: lets you store state (data that changes) inside your component
//useEffect: lets you run side effects (like fetching data) when the component loads

export default function Home() {
  const [accomodations, setAccomodations] = useState([])
  //accomodations: holds the list of accommodations (initially an empty array)
  //setAccomodations: function to update that state

  useEffect(() => {
    //useEffect runs when the component first mounts
    fetch('http://localhost:8080/api/properties')
      .then((reponse) => reponse.json()) //Converts the response to JSON
      .then((data) => setAccomodations(data)) //Updates state with the data → re-renders component with accommodations filled in
      .catch((error) => console.log(error))
  }, []) //([] dependency array ensures it runs only once)

  return (
    <main>
      <Banner
        imageSrc={bannerHome}
        text="Chez vous, partout et ailleurs"
        variant="home"
      />
      <section className={styles.cardsSection}>
        <div className={styles.cardsWrapper}>
          {accomodations.map((accomodation) => (
            <Card
              key={accomodation.id}
              pictures={accomodation.pictures}
              title={accomodation.title}
              location={accomodation.location}
              description={accomodation.description}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
