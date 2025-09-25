import styles from './About.module.css';
import React from 'react';

export default function About(){
  // to import a image here 
  // (Object.values(import.meta.glob('../../assets/logo/logo.svg', {eager: true})) as {default: string}[])[0].default
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
    }
  ];

// fazer virar componente separado depois, passando classNames via props

  const [fadeStage, setFadeStage] = React.useState(0); // should go from 0 to 2
  const [shouldFade, setShouldFade] = React.useState([styles.fade_in, styles.fade_out, styles.fade_out]); //length always 3
  const [swapImageIndexes,setSwapImageIndexes] = React.useState([0,1,1]); //length always 3

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(fadeStage);
      console.log(shouldFade);
      console.log(swapImageIndexes);
      switch(fadeStage){
        case 0:
          setShouldFade([styles.fade_in, styles.fade_out, styles.fade_out]);
          setSwapImageIndexes([
            swapImageIndexes[0],
            swapImageIndexes[1],
            (swapImageIndexes[2] + 1) % images.length
          ]);
          break;
        case 1:
          setShouldFade([styles.fade_out, styles.fade_in, styles.fade_out]);
          setSwapImageIndexes([
            (swapImageIndexes[0] + 1) % images.length,
            swapImageIndexes[1],
            swapImageIndexes[2]
          ]);
          break;
        case 2:
          setShouldFade([styles.fade_out, styles.fade_out, styles.fade_in]);
          setSwapImageIndexes([
            swapImageIndexes[0],
            (swapImageIndexes[1] + 1) % images.length,
            swapImageIndexes[2]
          ]);
          break;
      }
      const nextFadeStage = (fadeStage+1) % 3;
      console.log(nextFadeStage);
      setFadeStage(1);
      console.log(fadeStage);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return(
    <>
      <div className={styles.about_container}>
        <div className={styles.text_container}>
          <span>Sisweek 2025</span>
          <h1>SOBRE O EVENTO</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel metus diam. Sed eget lobortis augue. Quisque faucibus lorem nec posuere vehicula. Phasellus ut risus ut nulla mollis bibendum. Aenean consequat felis augue, non pharetra dolor blandit sit amet. Curabitur pellentesque tristique nulla, vel tincidunt risus tristique sit amet. Maecenas ipsum ante, molestie lobortis enim et, consequat pretium ligula. Pellentesque luctus tortor mi. Ut cursus sed arcu id rhoncus. Etiam diam diam, suscipit ac ligula vel, feugiat scelerisque dui. Nullam auctor, ex eget gravida efficitur, nisi nisl elementum nibh, non pharetra enim ex non nunc. Nunc feugiat lectus ut neque faucibus suscipit. Mauris quis massa pretium, luctus quam et, pulvinar lectus. Morbi sed gravida urna, ac sodales nisi. Vivamus vitae libero nec magna sagittis viverra. Proin lacinia erat et nulla imperdiet efficitur.</p>
        </div>
        <div className={styles.anim_container}>
          <div className={styles.img_container}>
            <img
              src={images[swapImageIndexes[0]].src}
              className={styles.image + ' ' + shouldFade[0]}
              alt={images[swapImageIndexes[0]].alt}
            />
            <img
              src={images[swapImageIndexes[1]].src}
              className={styles.image + ' ' + shouldFade[1]}
              alt={images[swapImageIndexes[1]].alt}
            />
            <img
              src={images[swapImageIndexes[2]].src}
              className={styles.image + ' ' + shouldFade[2]}
              alt={images[swapImageIndexes[2]].alt}
            />
          </div>
        </div>
      </div>
    </>
  )
}