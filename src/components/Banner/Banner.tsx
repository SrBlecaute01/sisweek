import styles from './Banner.module.css'
import tec from "../../assets/tec.png"
('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');




function Banner() {
  return (
      
      <div className={styles.banner}>
          <div className={styles.titulobanner}>
               <p className={styles.subtitulo}>DO DIA 00 À 09 DE OUTUBRO -  SISWEEK</p>

               <h1 className={styles.titulo}>SEMANA DA INOVAÇÃO E <br></br> <span
                className={styles.destaque}>TECNOLOGIA</span>  
               </h1>

          
               
              
          </div>
           <img className={styles.tec} src={tec} alt="tec"/>
      </div>
          
            
  )
}

export default Banner;