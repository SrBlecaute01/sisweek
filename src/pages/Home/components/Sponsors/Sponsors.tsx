import styles from './Sponsors.module.css'
import logo from '../../../../assets/sponsors/sebrae.png';

function Sponsors() {
  return (
      <div className={styles.sponsors}>
        <div className={styles.sponsorsTitle}>
          <h2>CONHEÇA NOSSOS PATROCINADORES</h2>
        </div>
        <div className={styles.sponsorsCards}>
          <div className={styles.sponsorsItem}>
            <img src={logo} alt="Patrocinador 1"/>
          </div>
          <div className={styles.sponsorsItem}>
            <img src={logo} alt="Patrocinador 2"/>
          </div>
          <div className={styles.sponsorsItem}>
            <img src={logo} alt="Patrocinador 3"/>
          </div>
          <div className={styles.sponsorsItem}>
            <img src={logo} alt="Patrocinador 4"/>
          </div>
          <div className={styles.sponsorsItem}>
            <img src={logo} alt="Patrocinador 5"/>
          </div>
          <div className={styles.sponsorsItem}>
            <img src={logo} alt="Patrocinador 6"/>
          </div>
        </div>
      </div>
  )
}

export default Sponsors