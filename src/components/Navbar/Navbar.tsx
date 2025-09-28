import styles from './Navbar.module.css'
import {FaInstagram} from "react-icons/fa";
import Logo from "../../assets/logo/logo.svg?react"
import {Link, animateScroll as scroll} from 'react-scroll';
import {useState} from "react";
import {FiMenu} from "react-icons/fi";
import {IoMdClose} from "react-icons/io";

const links = [
  {
    to: "about",
    text: "SOBRE",
    onlyMobile: false
  },
  {
    to: "schedule",
    text: "PROGRAMAÇÃO",
    onlyMobile: false
  },
  {
    to: "maps",
    text: "MAPA",
    onlyMobile: true
  },
  {
    to: "subscription",
    text: "INSCREVA-SE",
    onlyMobile: false
  }
]

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isClosing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => setClosing(false), 2000);
    }
    setOpen(!isOpen)
  };

  return (
      <nav className={styles.container}>
        <div className={styles.content}>
          <Logo
              className={styles.logo}
              onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          />
          <div className={`${styles.routes} ${isOpen ? styles.open : ""}`}>
            {(isOpen || isClosing) && (
                <div className={styles.close}>
                  <IoMdClose className={styles.closeIcon} onClick={toggleMenu}/>
                </div>
            )}
            {links
                .filter(item => isOpen || !item.onlyMobile)
                .map(item => (
                    <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className={styles.route}
                        offset={-98}
                        onClick={() => isOpen && toggleMenu()}
                    >
                      {item.text}
                    </Link>
                ))}
          </div>

          {!isOpen && (<FiMenu className={styles.menuIcon} onClick={toggleMenu}/>)}

          <a
              href="https://www.instagram.com/sisweek_ufal_penedo/"
              target="_blank"
              rel="noopener noreferrer">
            <FaInstagram className={styles.icon}/>
          </a>
        </div>
      </nav>
  )
}

export default Navbar;