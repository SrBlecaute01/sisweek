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

// fazer virar componente separado depois, passando classNames via props
const [fadeStage, setFadeStage] = React.useState(0); // should go from 0 to 2
const [shouldFade, setShouldFade] = React.useState([true, false, false]); //length always 3
const [nextIndex, setNextIndex] = React.useState(1)
  const [swapImageIndexes,setSwapImageIndexes] = React.useState([0,1,1]); //length always 3

  React.useEffect(() => {
    setTimeout(()=>{
      //console.log('Fade stage: ' + fadeStage);
      //console.log('Should fade: ' + shouldFade);
      //console.log('Swap Image Indexes: ' + swapImageIndexes);
      if(fadeStage == 0){
        setShouldFade([false, true, false]);
        setSwapImageIndexes([
          swapImageIndexes[0],
          swapImageIndexes[1],
          (nextIndex + 1) % images.length
        ]);
      }
      else if(fadeStage == 1){
        setShouldFade([false, false, true]);
        setSwapImageIndexes([
          (nextIndex + 1) % images.length,
          swapImageIndexes[1],
          swapImageIndexes[2]
        ]);
      }
      else if(fadeStage == 2){
        setShouldFade([true, false, false]);
        setSwapImageIndexes([
          swapImageIndexes[0],
          (nextIndex + 1) % images.length,
          swapImageIndexes[2]
        ]);
      }
    const nextFadeStage = (fadeStage+1) % 3;
    //console.log('nextFadeStage: ' + nextFadeStage);
    setFadeStage(nextFadeStage);
    setNextIndex((nextIndex + 1) % images.length)
    //console.log('___________________')
    },6000);
  }, [shouldFade, swapImageIndexes, fadeStage]);

  return(
    <>
      <div className={styles.about_container}>
        <div className={styles.text_container}>
          <span className={styles.about_sisweek}>Sisweek 2025</span>
          <h1 className={styles.about_h1}>SOBRE O EVENTO</h1>
          <p className={styles.about_p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className={styles.anim_container}>
          <div className={styles.img_container}>
            <img
              src={images[swapImageIndexes[0]].src}
              className={styles.image + ' ' + (shouldFade[0] ? styles.fade_in: styles.fade_out)}
              alt={images[swapImageIndexes[0]].alt}
            />
            <img
              src={images[swapImageIndexes[1]].src}
              className={styles.image + ' ' + (shouldFade[1] ? styles.fade_in: styles.fade_out)}
              alt={images[swapImageIndexes[1]].alt}
            />
            <img
              src={images[swapImageIndexes[2]].src}
              className={styles.image + ' ' + (shouldFade[2] ? styles.fade_in: styles.fade_out)}
              alt={images[swapImageIndexes[2]].alt}
            />
          </div>
        </div>
      </div>
    </>
  )
}