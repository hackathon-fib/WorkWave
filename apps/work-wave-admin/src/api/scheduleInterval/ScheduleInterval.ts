import { DaySchedule } from "../daySchedule/DaySchedule";

export type ScheduleInterval = {
  category: string | null;
  createdAt: Date;
  daySchedule?: DaySchedule | null;
  end: Date | null;
  id: string;
  label: string | null;
  start: Date | null;
  updatedAt: Date;
};
