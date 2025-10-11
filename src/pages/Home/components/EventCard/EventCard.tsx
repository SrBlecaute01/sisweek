import * as React from "react";
import styles from './EventCard.module.css';
import TimeIcon from '../../../../assets/icons/time.svg?react';
import ScheduleIcon from '../../../../assets/icons/schedule.svg?react';
import ArrowRight from '../../../../assets/icons/keyboard_arrow_up.svg?react';
import {useState} from "react";

interface Speaker {
  name: string;
  bio: string;
  image: string;
}

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  speakers: Speaker[];
  time: string;
  duration?: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({title, description, speakers, time, duration, location, className,}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const cardClasses = `${styles.eventCardContent} ${className || ''}`.trim();

  return (
      <div className={styles.eventCardContainer}>
        <div className={cardClasses}>
          <div className={styles.eventInfo}>
            <div className={styles.eventDetails}>
              <div>
                <h3 className={styles.eventTitle}>{title}</h3>
              </div>
              {speakers.length > 0 && (
                  <div className={styles.eventSpeakers}>
                    {speakers.map((speaker, index) => (
                        <span key={index} className={styles.speakerName}>{speaker.name}</span>
                    ))}
                  </div>
              )}
            </div>
          </div>
          <div className={styles.eventMeta}>
            <div className={styles.eventMetaItem}>
              <div className={styles.eventTimeItem}>
                <TimeIcon className={styles.icon}/>
                <span>{time}</span>
              </div>
              {duration && (
                  <div className={styles.eventTimeItem}>
                    <ScheduleIcon className={styles.icon}/>
                    <span>{duration}</span>
                  </div>
              )}
            </div>
            <ArrowRight
                className={`${styles.arrowIcon} ${expanded ? styles.expanded : ''}`}
                onClick={description.trim() ? () => setExpanded((prev) => !prev) : undefined}
                style={{
                  cursor: description.trim() ? 'pointer' : 'not-allowed',
                  opacity: description.trim() ? 1 : 0.2,
                }}
            />
            <span className={styles.eventLocation}>{location.toUpperCase()}</span>
          </div>
        </div>
        {expanded && (
            <div className={styles.expandedEventContent}>
              <div className={styles.eventDescription}>{description}</div>
              <div className={styles.expandedSpeakersContent}>
                {speakers.map((speaker, idx) => (
                    <div key={idx} className={styles.expandedSpeaker}>
                      <div className={styles.expandedSpeakerName}>
                        <b>{speaker.name}</b>
                        <img alt={speaker.name} src={speaker.image}/>
                      </div>
                      <div>{speaker.bio}</div>
                    </div>
                ))}
              </div>
            </div>
        )}
      </div>
  );
};

export default EventCard;