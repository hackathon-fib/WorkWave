import { DaySchedule } from "../daySchedule/DaySchedule";

export type Status = {
  createdAt: Date;
  daySchedules?: DaySchedule | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
