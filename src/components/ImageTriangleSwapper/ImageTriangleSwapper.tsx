import styles from './ImageTriangleSwapper.module.css';
import {
  useState,
  useEffect
} from 'react';


interface FadeSwapperProps{
  //css_classes: string
  images: {
    src: string,
    alt: string
  }[]
}

export default function ImageTriangleSwapper(props: FadeSwapperProps){
  if(props.images.length<3){
    console.error('images parameter length is too short, the minimum required is 3')
    return '';
  }
  else{
    const [shouldFade, setShouldFade] = useState([styles.fade_in, styles.fade_in, styles.fade_out]) //length always 3
    const [currentIndex, setCurrentIndex] = useState(2); // should go from 0 to 2
    const [nextIndex, setNextIndex] = useState(3) // from 3 to props.images.length to 0 to 3...
    const [swapImageIndexes,setSwapImageIndexes] = useState([0,1,props.images.length-1, 2]); //length always 3
    const [swapStyles, setSwapStyles] = useState([styles.bottom_mid, styles.top_right, styles.top_left])

    useEffect(()=>{
      setTimeout(()=>{
        let aux = swapImageIndexes.slice();
        aux[currentIndex] = aux[aux.length-1];
        aux[aux.length-1] = nextIndex;
        setSwapImageIndexes(aux);
        setShouldFade([
          shouldFade[2],
          shouldFade[0],
          shouldFade[1]
        ])
        setSwapStyles([
          swapStyles[2],
          swapStyles[0],
          swapStyles[1]
        ]);
        setCurrentIndex((currentIndex + 1) % (swapImageIndexes.length - 1));
        setNextIndex((nextIndex + 1) % props.images.length);
      }, 3000);
    }, [currentIndex, shouldFade, nextIndex, swapImageIndexes, swapStyles])
    
    return(<>
      <div className={styles.img_container}>
        <img
          src={props.images[swapImageIndexes[0]].src}
          className={
            styles.image + ' ' + 
            swapStyles[0] + ' ' +
            shouldFade[0]}
          alt={props.images[swapImageIndexes[0]].alt}
        />
        <img
          src={props.images[swapImageIndexes[1]].src}
          className={
            styles.image + ' ' + 
            swapStyles[1] + ' ' +
            shouldFade[1]}
          alt={props.images[swapImageIndexes[1]].alt}
        />
        <img
          src={props.images[swapImageIndexes[2]].src}
          className={
            styles.image + ' ' + 
            swapStyles[2] + ' ' +
            shouldFade[2]}
          alt={props.images[swapImageIndexes[2]].alt}
        />
        <div
          className={
            styles.image + ' ' + 
            styles.top_left + ' ' +
            styles.fade_out}
            style={{
              backgroundImage: `url(${props.images[swapImageIndexes[3]].src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
        />
      </div>
    </>)
  }
}