import logo1 from "../../assets/logo1.png"
import styles from "./footer.module.css";

export default function Footer() {
    return (
         <footer className={styles.footer}>
       <div className={styles.logo}>
         <img src={logo1} alt="Kasa Logo" />
       </div> 
       <div className={styles.copyright}>          
        <div>{'\u00A9'}&nbsp;&nbsp;</div>2020 Kasa. All right reserved</div>
        </footer>
    )
}