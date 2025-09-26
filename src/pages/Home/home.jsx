import Card from "../../components/Card/card";
import styles from "./home.module.css"
import card1 from "../../assets/card1.png"

export default function Home() {
  return (
    <main>
    <section className={styles.topSection}>
    <img src={card1} alt="card1"  className={styles.topSectionimg}/>
    <div className={styles.overlayText}>
    Chez vous, partout et ailleurs
  </div>
  </section>

  <section className={styles.cardsSection}>
         <div className={styles.cardWrapper}>
        <Card
        image="your-image-url.jpg"
        title="Card Title"
        description="Card description goes here."
      />
      </div>
    </section>
    </main>
  );
}
