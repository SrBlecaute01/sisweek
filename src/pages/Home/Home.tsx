import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner'
import About from '../../components/About/About';
import Guests from '../../components/Guests/Guests';
import styles from './Home.module.css'
import schedulesData from './../../data/schedule.json'
import locationsData from './../../data/locations.json'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import EventCard from "../../components/EventCard";
import {type RawDaySchedule, useSchedules} from "../../hooks";
import {useEffect, useState} from "react";
import EventMap from "../../components/EventMap";
import type {LocationsData} from "../../types";

function Home() {
  const schedules = useSchedules(schedulesData);
  const [selectedSchedule, setSelectedSchedule] = useState<RawDaySchedule | null>(null);
  const typedLocationsData: LocationsData = locationsData as LocationsData;

  useEffect(() => {
    if (Object.keys(schedules).length <= 0) return;

    const today = new Date().toLocaleDateString("pt-BR", {day: "2-digit", month: "2-digit"});
    const found = Object.values(schedules).find(schedule => {
      const [, date] = schedule.day.split(" ");
      return date === today;
    });

    setSelectedSchedule(found || Object.values(schedules)[0]);
  }, [schedules]);

  return (
      <main className={styles.main}>
        <Navbar/>
        <Banner/>
        <About/>
        <Guests/>
        <section id="schedule" className={styles.scheduleSection}>
          <section className={styles.scheduleContent}>
            <section className={styles.scheduleDatesSection}>
              <h1>PROGRAMAÇÃO</h1>
              <Swiper
                  modules={[Navigation]}
                  navigation={true}
                  pagination={{clickable: true}}
                  className={styles.scheduleDatesSwiper}
                  breakpoints={{
                    320: {slidesPerView: 1},
                    640: {slidesPerView: 3,},
                    1024: {slidesPerView: 5}
                  }}
              >
                {Object.values(schedules).map((item) => {
                  const selectedClassName = selectedSchedule?.day === item.day ? styles.scheduleSelected : styles.scheduleNonSelected;
                  return (
                      <SwiperSlide className={`${styles.scheduleDatesSwiperItem} ${selectedClassName}`}>
                        <p onClick={() => {setSelectedSchedule(item)}}>
                          {item.day}
                        </p>
                      </SwiperSlide>
                  );
                })}
              </Swiper>
            </section>
            <section className={styles.scheduleCardsSection}>
              {selectedSchedule && selectedSchedule.schedules.map((event, index) => (
                  <div className={styles.scheduleCardContainer}>
                    <EventCard
                        key={index}
                        title={event.title}
                        speakers={event.speakers}
                        time={event.time}
                        duration={event.duration}
                        location={event.location}
                        image={event.image}
                    />
                  </div>
              ))}
            </section>
          </section>
          <section className={styles.scheduleMapsSection}>
            <h1>MAPA DO EVENTO</h1>
            <EventMap
                center={typedLocationsData.center}
                zoom={typedLocationsData.zoom}
                markers={typedLocationsData.markers}
                className={styles.scheduleMaps}
            />
          </section>
        </section>
      </main>
  )
}

export default Home;