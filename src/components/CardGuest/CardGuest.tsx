import styles from './CardGuest.module.css';

interface CardProps{
  name: string;
  desc: string;
  image: string;
  // desnecesário, só colocar "Foto de {name}"
  // alt_text: string;
}

export default function CardGuest(props: CardProps){
  return(
    <>
      <div className={styles.guest}>
        <div className={styles.image_container}>
          <img className={styles.card_img} src={props.image} alt={"Foto de " + props.name}/>
        </div>
        <div className={styles.name_container}>
          {props.name}
        </div>
        <div className={styles.desc_container}>
          {props.desc}
        </div>
      </div>
    </>
  );
}