import styles from './Navbar.module.css'
import {FaInstagram} from "react-icons/fa";
import Logo from "../../assets/logo/logo.svg?react"
import {animateScroll as scroll, Link} from 'react-scroll';
import {useState} from "react";
import {FiMenu} from "react-icons/fi";
import {IoMdClose} from "react-icons/io";
import {getNavbarHeight} from "../../utils";
import {useAuth} from "../../hooks";
import {NavLink} from "react-router-dom";

const appUrl = import.meta.env.VITE_APP_URL;
const links = [
  {
    to: "about",
    text: "SOBRE",
    onlyMobile: false,
    onlyAuthenticated: false,
    hideOnAuth: false
  },
  {
    to: "schedule",
    text: "PROGRAMAÇÃO",
    onlyMobile: false,
    onlyAuthenticated: false,
    hideOnAuth: false
  },
  {
    to: "maps",
    text: "MAPA",
    onlyMobile: true,
    onlyAuthenticated: false,
    hideOnAuth: false
  },
  {
    to: "sponsors",
    text: "PATROCINADORES",
    onlyMobile: true,
    onlyAuthenticated: false,
    hideOnAuth: false
  },
  {
    to: "registration",
    text: "INSCREVA-SE",
    onlyMobile: false,
    onlyAuthenticated: false,
    hideOnAuth: true
  },
  {
    to: appUrl,
    text: "ÁREA DO PARTICIPANTE",
    onlyMobile: false,
    onlyAuthenticated: true,
    hideOnAuth: false
  }
]

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isClosing, setClosing] = useState(false);
  const {authenticated} = useAuth();

  console.log(appUrl)

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
                .filter(item => {
                  if (authenticated && item.hideOnAuth) return false;
                  if (!authenticated && item.onlyAuthenticated) return false;
                  return isOpen || !item.onlyMobile;
                })
                .map(item => item.to.startsWith("http")
                    ? (
                        <NavLink
                            to={item.to}
                            className={styles.route}
                            style={{
                              color:"inherit",
                              textDecoration: "inherit"
                        }}
                        >
                          {item.text}
                        </NavLink >
                    ) : (
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