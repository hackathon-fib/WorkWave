import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";

export type ScheduleIntervalUpdateInput = {
  category?: string | null;
  daySchedule?: DayScheduleWhereUniqueInput | null;
  label?: string | null;
};
