import Card from '../../components/Card/card'
import styles from './home.module.css'
//import bannerImg from "../../assets/bannerImg.png"
import { Banner } from '../../components/Banner/banner'
import React, { useEffect, useState } from 'react'
//useState: lets you store state (data that changes) inside your component
//useEffect: lets you run side effects (like fetching data) when the component loads

export default function Home() {
  const [accomodations, setAccomodations] = useState([])
  //accomodations: holds the list of accommodations (initially an empty array)
  //setAccomodations: function to update that state

  useEffect(() => {
    //useEffect runs when the component first mounts
    fetch('http://localhost:8080/api/properties') //fetches data
      .then((reponse) => reponse.json()) //Converts the response to JSON
      .then((data) => setAccomodations(data)) //Updates state with the data → re-renders component with accommodations filled in
      .catch((error) => console.log(error))
  }, []) //([] dependency array ensures it runs only once)

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
              //description={accomodation.description}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
