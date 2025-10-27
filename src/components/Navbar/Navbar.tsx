import styles from './Navbar.module.css'
import {FaInstagram} from "react-icons/fa";
import Logo from "../../assets/logo/logo.svg?react"
import {animateScroll as scroll, Link} from 'react-scroll';
import {useState} from "react";
import {FiMenu} from "react-icons/fi";
import {IoMdClose} from "react-icons/io";
import {getNavbarHeight} from "../../utils";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../hooks";

const links = [
  {
    to: "about",
    text: "SOBRE",
    onlyMobile: false,
    hideOnAuth: false
  },
  {
    to: "schedule",
    text: "PROGRAMAÇÃO",
    onlyMobile: false,
    hideOnAuth: false
  },
  {
    to: "maps",
    text: "MAPA",
    onlyMobile: true,
    hideOnAuth: false
  },
  {
    to: "sponsors",
    text: "PATROCINADORES",
    onlyMobile: true,
    hideOnAuth: false
  },
  {
    to: "registration",
    text: "INSCREVA-SE",
    onlyMobile: false,
    hideOnAuth: true
  }
]

function Navbar() {
  const {authenticated} = useAuth();
  const isUserAuthed = authenticated;

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
              onClick={() => scroll.scrollToTop({duration: 500, smooth: true})}
          />
          <div className={`${styles.routes} ${isOpen ? styles.open : ""}`}>
            {(isOpen || isClosing) && (
                <div className={styles.close}>
                  <IoMdClose className={styles.closeIcon} onClick={toggleMenu}/>
                </div>
            )}
            {links
                .filter(item => isOpen || !item.onlyMobile && !(item.hideOnAuth && isUserAuthed))
                .map(item => (
                    <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className={styles.route}
                        offset={-getNavbarHeight()}
                    >
                      {item.text}
                    </Link>
                ))}
            <NavLink
              to={'http://app.sisweek.com.br'}
              className={styles.route}
              style={() => ({
                color:"inherit",
                textDecoration: "inherit"
              })}
            >
              PARTICIPAR
            </NavLink>
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