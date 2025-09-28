import { Banner } from '../../components/Banner/bannerAbout'
import bannerAboutImg from '../../assets/bannerAboutImg.png'
import styles from './about.module.css'

export default function About() {
  return (
    <main>
      <Banner img={bannerAboutImg} title="A props" />
      <h1 className={styles.h1}>About Kasa</h1>
    </main>
  )
}
