import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bannerHome from '../../assets/bannerHomeImg.png'
import { Banner } from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import styles from './home.module.css'
import Error from '../../components/Error/error'
//useState: lets you store state (data that changes) inside your component
//useEffect: lets you run side effects (like fetching data) when the component loads

export default function Home() {
  const [accomodations, setAccomodations] = useState([])
  const navigate = useNavigate() // <--- initialize navigate
  //accomodations: holds the list of accommodations (initially an empty array)
  //setAccomodations: function to update that state

  useEffect(() => {
    //useEffect runs when the component first mounts
    fetch('http://localhost:8080/api/properties')
      .then((reponse) => reponse.json()) //Converts the response to JSON
      .then((data) => setAccomodations(data)) //Updates state with the data → re-renders component with accommodations filled in
      .catch((error) => {
        console.log(error)
        navigate('/error')
      })
  }, [navigate])

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
              id={accomodation.id}
              title={accomodation.title}
              cover={accomodation.cover}
              pictures={accomodation.pictures}
              description={accomodation.description}
              location={accomodation.location}
              host={accomodation.host}
              picture={accomodation.picture}
              rating={accomodation.rating}
              equipments={accomodation.equipments}
              tags={accomodation.tags}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
