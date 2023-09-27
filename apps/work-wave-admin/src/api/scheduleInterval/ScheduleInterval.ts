import { DaySchedule } from "../daySchedule/DaySchedule";

export type ScheduleInterval = {
  category: string | null;
  createdAt: Date;
  daySchedule?: DaySchedule | null;
  id: string;
  label: string | null;
  updatedAt: Date;
};
