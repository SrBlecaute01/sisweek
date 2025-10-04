import ImageTriangleSwapper from '../ImageTriangleSwapper/ImageTriangleSwapper';
import styles from './About.module.css';

export default function About(){
  const images = [
    {
      src: 'https://placehold.co/400x1000/694737/FFFFFF/?text=1',
      alt: '[PH] Text'
    },
    {
      src: 'https://placehold.co/200x400/53b5f7/FFFFFF/?text=2',
      alt: '[PH] Text'
    },
    {
      src: 'https://placehold.co/300/f6a938/FFFFFF/?text=3',
      alt: '[PH] Text'
    },
    {
      src: 'https://placehold.co/400x1000/FFFFFF/694737/?text=4',
      alt: '[PH] Text'
    },
    {
      src: 'https://placehold.co/200x400/FFFFFF/53b5f7/?text=5',
      alt: '[PH] Text'
    },
    {
      src: 'https://placehold.co/300/FFFFFF/f6a938/?text=6',
      alt: '[PH] Text'
    }
  ];

  return(
    <section id="about">
      <div className={styles.about_container}>
        <div className={styles.text_container}>
          <span className={styles.about_sisweek}>Sisweek 2025</span>
          <h1 className={styles.about_h1}>SOBRE O EVENTO</h1>
          <p className={styles.about_p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className={styles.anim_container}>
          <ImageTriangleSwapper images={images}/>
        </div>
      </div>
    </section>
  )
}