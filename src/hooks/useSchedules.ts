import {useEffect, useState} from 'react';
import {getImageUrl} from "../utils";

export interface RawEvent {
  title: string;
  speakers: string[];
  time: string;
  duration: string;
  location: string;
  image: string;
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
        image: getImageUrl(event.image),
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