import styles from './Awards.module.css'

function Awards() {
  return (
      <div className={styles.awards}>
        <div className={styles.awardsTitle}>
          <h2>CONCORRA A DIVERSOS PRÊMIOS</h2>
        </div>

        <div className={styles.awardsCards}>
          <h3 className={styles.awardsSoon}>Em breve...</h3>
        </div>
      </div>
  )
}

export default Awards