import styles from './Sponsors.module.css'
import logo from '../../../../assets/sponsors/sebrae.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

const sponsors = [1, 2, 3, 4, 5, 6, 7, 8, 9]

type SponsorsRowProps = {
  reverse?: boolean
  speed: number
  rowKey: string
}

function SponsorsRow({ reverse = false, speed, rowKey }: SponsorsRowProps) {
  return (
      <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false, reverseDirection: reverse }}
          speed={speed}
          className={styles.sponsorsCards}
          breakpoints={{
            1024: {slidesPerView: 3},
            0: {slidesPerView: 2}
          }}
      >
        {sponsors.map(n => (
            <SwiperSlide key={`${rowKey}-${n}`}>
              <div className={styles.sponsorsItem}>
                <img src={logo} alt={`Patrocinador ${n}`} />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

function Sponsors() {
  return (
      <section id="sponsors" className={styles.sponsorsSection}>
        <div className={styles.sponsorsContent}>
          <div className={styles.sponsorsTitle}>
            <h2>CONHEÇA NOSSOS PATROCINADORES</h2>
          </div>
          <div className={styles.sponsorsRows}>
            <h3 className={styles.sponsorsSoon}>Em breve...</h3>

      {/*      <SponsorsRow rowKey="1" speed={2000}/>
            <SponsorsRow rowKey="2" speed={2000} reverse/>*/}
          </div>
        </div>
      </section>
  )
}

export default Sponsors