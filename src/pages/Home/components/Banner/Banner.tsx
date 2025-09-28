import styles from './Banner.module.css'
import Chip from '../../../../assets/icons/chip.svg?react'

function Banner() {
  return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.date}>
            <p>DO DIA 29 À 31 DE OUTUBRO</p>
            <hr/>
            <p>SISWEEK</p>
          </div>
          <div className={styles.title}>
            <div>
              <p className={styles.text}>SEMANA DA INOVAÇÃO E</p>
              <p className={styles.highlight}>TECNOLOGIA</p>
            </div>
            <Chip className={styles.icon}/>
          </div>
        </div>
      </div>
  )
}

export default Banner;