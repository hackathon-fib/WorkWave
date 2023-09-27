import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";

export type ScheduleIntervalCreateInput = {
  category?: string | null;
  daySchedule?: DayScheduleWhereUniqueInput | null;
  label?: string | null;
};
