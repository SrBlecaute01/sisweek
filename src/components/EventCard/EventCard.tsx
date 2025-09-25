import * as React from "react";
import styles from './EventCard.module.css';
import TimeIcon from './../../assets/icons/time.svg?react';
import ScheduleIcon from './../../assets/icons/schedule.svg?react';
import ArrowRight from './../../assets/icons/keyboard_arrow_up.svg?react';

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  speakers: string[];
  time: string;
  duration: string;
  location: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({title, speakers, time, duration, location, image, className,}) => {
  const cardClasses = `${styles.eventCardContainer} ${className || ''}`.trim();
  return (
      <div className={cardClasses}>
        <div className={styles.eventInfo}>
          <div className={styles.eventImageWrapper}>
            <img src={image} alt="speaker" className={styles.eventImage}/>
          </div>
          <div className={styles.eventDetails}>
            <h3 className={styles.eventTitle}>{title}</h3>
            <div className={styles.eventSpeakers}>
              {speakers.map((speaker, index) => (
                  <span key={index} className={styles.speakerName}>
                {speaker}
              </span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.eventMeta}>
          <div className={styles.eventMetaItem}>
            <div className={styles.eventTimeItem}>
              <TimeIcon className={styles.icon}/>
              <span>{time}</span>
            </div>
            <div className={styles.eventTimeItem}>
              <ScheduleIcon className={styles.icon}/>
              <span>{duration}</span>
            </div>
          </div>
          <ArrowRight className={styles.arrowIcon}/>
          <span className={styles.eventLocation}>{location.toUpperCase()}</span>
        </div>
      </div>
  );
};

export default EventCard;