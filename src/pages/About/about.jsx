import bannerAbout from '../../assets/bannerAboutImg.png'
import { Banner } from '../../components/Banner/banner'
import Collapse from '../../components/Collapse/collapse'
import styles from './about.module.css'

export default function About() {
  const collapsibles = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postée sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes le informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        'La qualité est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux cirières de sécurité établis par nos services. En laissant une aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  return (
    <main>
      <div className={styles.about}>
        <Banner imageSrc={bannerAbout} alt="banner" variant="bannerAbout" />
        {collapsibles.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            content={item.content}
            className={styles.collapsesAbout}
          />
        ))}
      </div>
    </main>
  )
}
{
  /*
      <Collapse
        title={collapsibles[0].title}
        content={collapsibles[0].content}
      />
      <Collapse
        title={collapsibles[1].title}
        content={collapsibles[1].content}
      />
      <Collapse
        title={collapsibles[2].title}
        content={collapsibles[2].content}
      />
      <Collapse
        title={collapsibles[3].title}
        content={collapsibles[3].content}
      />
    </main>
  )
}*/
}
