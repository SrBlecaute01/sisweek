import styles from './Navbar.module.css'
import { FaInstagram } from "react-icons/fa";
import Logo from "../../assets/logo/logo-with-ufal.svg"
('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');




function Navbar() {
  return (
      
      <nav className={styles.navbar}>
          <div className={styles.logo}>

                <img src={Logo} alt="logo"/>

          </div> 
            

          <div className={styles.link}>
                 <a href='#'>SOBRE</a>
                 <a href='#'>PROGRAMAÇÃO</a>
                 <a href='#'className={styles.linkborda}>INSCREVA-SE</a>
                 <FaInstagram className={styles.icon} size={30} />
          </div>
      </nav>
  )
}

export default Navbar;