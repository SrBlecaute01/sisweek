import {useEffect, useState} from 'react';

const images = import.meta.glob('../assets/speakers/*', { eager: true, query: '?url', import: 'default' });

export interface RawSpeaker {
  name: string;
  role: string;
  bio: string;
  showCard: boolean;
  image?: string;
}

export interface RawEvent {
  title: string;
  speakers?: RawSpeaker[];
  time: string;
  duration?: string;
  location: string;
  description: string;
}

export interface RawDaySchedule {
  day: string;
  schedules: RawEvent[];
}

export interface ScheduleData {
  [key: string]: RawDaySchedule;
}

export const useSchedules = (scheduleData: ScheduleData) => {
  const [schedules, setSchedules] = useState<ScheduleData>({});

  useEffect(() => {
    if (Object.keys(scheduleData).length <= 0) return;
    const processed: ScheduleData = {};

    Object.keys(scheduleData).forEach(dayKey => {
      const daySchedule = scheduleData[dayKey];
      const processedEvents = daySchedule.schedules.map(event => ({
        ...event,
        speakers: event.speakers?.map(speaker => ({
          ...speaker,
          image: speaker.image ? getImageUrl(speaker.image) : undefined,
        })),
      }));

      processed[dayKey] = {
        day: daySchedule.day,
        schedules: processedEvents,
      };
    });

    setSchedules(processed);
  }, [scheduleData]);

  return schedules;
};

function getImageUrl(imageName: string): string {
  return images[`../assets/speakers/${imageName}`] as string;
}