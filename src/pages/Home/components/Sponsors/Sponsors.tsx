import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './Sponsors.module.css'
import {Autoplay} from 'swiper/modules'

const allSponsors = Object.values(import.meta.glob('../../../../assets/sponsors/*.{png,jpg,jpeg,svg}', {eager: true})) as Sponsor[]

type Sponsor = {
  default: string
}

type SponsorsRowProps = {
  reverse?: boolean
  speed: number
  rowKey: string
  sponsors: Sponsor[]
}

function SponsorsRow({reverse = false, speed, rowKey, sponsors}: SponsorsRowProps) {
  return (
      <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{delay: 5000, disableOnInteraction: false, reverseDirection: reverse}}
          speed={speed}
          className={styles.sponsorsCards}
          breakpoints={{
            1024: {slidesPerView: 3},
            0: {slidesPerView: 2}
          }}
      >
        {sponsors.map((n, key) => (
            <SwiperSlide key={`${rowKey}-${key}`}>
              <div className={styles.sponsorsItem}>
                <img src={n.default} alt={`Patrocinador ${n.default}`}/>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

function Sponsors() {
  const shuffledSponsors = [...allSponsors].sort(() => Math.random() - 0.5);
  const middleIndex = Math.ceil(shuffledSponsors.length / 2);

  const sponsorsRow1 = shuffledSponsors.slice(0, middleIndex);
  const sponsorsRow2 = shuffledSponsors.slice(middleIndex - 1);

  return (
      <section id="sponsors" className={styles.sponsorsSection}>
        <div className={styles.sponsorsContent}>
          <div className={styles.sponsorsTitle}>
            <h2>CONHEÇA NOSSOS PATROCINADORES</h2>
          </div>
          <div className={styles.sponsorsRows}>
            <SponsorsRow rowKey="1" speed={2000} sponsors={sponsorsRow1}/>
            <SponsorsRow rowKey="2" speed={2000} reverse sponsors={sponsorsRow2}/>
          </div>
        </div>
      </section>
  )
}

export default Sponsors