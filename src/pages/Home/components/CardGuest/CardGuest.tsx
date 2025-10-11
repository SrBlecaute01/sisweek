import styles from './CardGuest.module.css';

interface CardProps {
  name: string;
  desc: string;
  image: string | undefined;
}

export default function CardGuest(props: CardProps){
  return(
    <div className={styles.guest}>
      <img className={styles.card_img} src={props.image} alt={props.name}/>
      <div className={styles.name_container}>
        {props.name}
      </div>
      <div className={styles.desc_container}>
        {props.desc}
      </div>
    </div>
  );
}