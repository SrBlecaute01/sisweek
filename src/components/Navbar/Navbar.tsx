import styles from './Navbar.module.css'
import {FaInstagram} from "react-icons/fa";
import Logo from "../../assets/logo/logo.svg?react"

function Navbar() {
  return (
      <nav className={styles.container}>
        <div className={styles.content}>
          <Logo className={styles.logo}/>
          <div className={styles.link}>
            <a href='#'>SOBRE</a>
            <a href='#'>PROGRAMAÇÃO</a>
            <a href='#' className={styles.linkborda}>INSCREVA-SE</a>
            <FaInstagram className={styles.icon} size={30}/>
          </div>

        </div>
      </nav>
  )
}

export default Navbar;