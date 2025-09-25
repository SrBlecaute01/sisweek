import CardGuest from '../CardGuest/CardGuest';
import styles from './Guests.module.css';

const guest_images = Object.values(import.meta.glob('../../assets/guests/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

const guest_list = [
  {
    name: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: guest_images[0]
  },
  {
    name: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: guest_images[0]
  },
  {
    name: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: guest_images[0]
  },
  {
    name: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: guest_images[0]
  },
  {
    name: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: guest_images[0]
  },
  {
    name: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: guest_images[0]
  },
  {
    name: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: guest_images[0]
  },
  {
    name: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: guest_images[0]
  }
]

export default function Guests (){

  const guest_deck=(guest_list.map(guest => (
    <CardGuest
      name={guest.name}
      desc={guest.desc}
      image={guest.image.default}
    />
  )));

  return(
    <>
      <div className={styles.guests}>
        <h1 className={styles.title}>NOSSOS PALESTRANTES</h1>
        <div className={styles.guests_container}>
          {guest_deck}
        </div>
      </div>
    </>
  );
};