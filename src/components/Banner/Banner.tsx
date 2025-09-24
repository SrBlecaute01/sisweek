import styles from './Banner.module.css'
import Logo from "../../assets/image.png"
import date from "../../assets/date.png"
import title from "../../assets/title (1).png"
('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');




function Banner() {
  return (
      
      <div className={styles.banner}>

           <div className={styles.date}>
               <img src={date} alt="date"/>
           </div>

           <div className={styles.title}>
                <img src={title} alt="title"/>
           </div>
          
            

         
               
        
    </div>
  )
}

export default Banner;