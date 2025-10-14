import CardGuest from '../CardGuest/CardGuest.tsx';
import styles from './Guests.module.css';
import schedulesData from "../../../../data/schedule.json";
import {useSchedules} from "../../../../hooks";

export default function Guests() {
  const schedules = useSchedules(schedulesData);
  const speakers = Object.values(schedules)
      .flatMap(day =>
          day.schedules.flatMap(event =>
              event.speakers?.filter(speaker => speaker.showCard) || [])
      );

  return (
      <section id="speakers" className={styles.guests}>
        <h1 className={styles.title}>NOSSOS PALESTRANTES</h1>
        <div className={styles.guests_container}>
          {speakers
              .sort(() => Math.random() - 0.5)
              .map(speaker => {
                return <CardGuest
                    name={speaker.name}
                    desc={speaker.role}
                    image={speaker.image}/>
              })}
        </div>
      </section>
  );
};