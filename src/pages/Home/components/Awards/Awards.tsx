import styles from './Awards.module.css'
import award from '../../../../assets/awards/camisa.png';

function Awards() {
  return (
      <div className={styles.awards}>
        <div className={styles.awardsTitle}>
          <h2>CONCORRA A DIVERSOS PRÊMIOS</h2>
        </div>

        <div className={styles.awardsCards}>
          <div className={styles.card}>
            <img src={award} alt="Camisa branca do evento"/>
          </div>
          <div className={styles.card}>
            <img src={award} alt="Camisa azul do evento"/>
          </div>
          <div className={styles.card}>
            <img src={award} alt="Camisa preta do evento"/>
          </div>
        </div>
      </div>
  )
}

export default Awards