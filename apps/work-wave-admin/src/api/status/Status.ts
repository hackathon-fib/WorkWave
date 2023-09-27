import { DaySchedule } from "../daySchedule/DaySchedule";

export type Status = {
  createdAt: Date;
  daySchedules?: Array<DaySchedule>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
