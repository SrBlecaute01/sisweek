import styles from "./EventSchedule.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import EventCard from "../EventCard";
import EventMap from "../EventMap";
import {type RawDaySchedule, useSchedules} from "../../../../hooks";
import schedulesData from "../../../../data/schedule.json";
import {useEffect, useState} from "react";
import type {LocationsData} from "../../../../types";
import locationsData from "../../../../data/locations.json";

function EventSchedules() {
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
      <section id="schedule" className={styles.scheduleSection}>
        <section className={styles.scheduleContent}>
          <section className={styles.scheduleDatesSection}>
            <h1>PROGRAMAÇÃO</h1>
            {selectedSchedule && (
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    pagination={{clickable: true}}
                    className={styles.scheduleDatesSwiper}
                    initialSlide={Object.values(schedules).findIndex(item => item.day === selectedSchedule.day)}
                    onSlideChange={swiper => {
                      const index = swiper.activeIndex;
                      const items = Object.values(schedules);
                      setSelectedSchedule(items[index]);
                    }}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      640: { slidesPerView: 3 },
                      1024: { slidesPerView: 5 }
                    }}
                >
                  {Object.values(schedules).map((item) => {
                    const selectedClassName = selectedSchedule.day === item.day ? styles.scheduleSelected : styles.scheduleNonSelected;
                    return (
                        <SwiperSlide className={`${styles.scheduleDatesSwiperItem} ${selectedClassName}`}>
                          <p onClick={() => {setSelectedSchedule(item)}}>
                            {item.day}
                          </p>
                        </SwiperSlide>
                    );
                  })}
                </Swiper>
            )}
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
        <section id="maps" className={styles.scheduleMapsSection}>
          <h1>MAPA DO EVENTO</h1>
          <EventMap
              center={typedLocationsData.center}
              zoom={typedLocationsData.zoom}
              markers={typedLocationsData.markers}
              className={styles.scheduleMaps}
          />
        </section>
      </section>
  )
}

export default EventSchedules;